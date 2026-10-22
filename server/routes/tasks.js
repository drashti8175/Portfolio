import express from 'express';
import mongoose from 'mongoose';
import Task from '../models/Task.js';

import taskEvents from '../config/events.js';
import {
  KEYS,
  getCached,
  setCached,
  invalidateUserTasks,
  cacheEnabled,
} from '../config/cache.js';
import { protect } from '../middleware/auth.js';
import { validateTaskCreate, validateTaskUpdate } from '../middleware/validate.js';

const router = express.Router();

// ── Every task route requires a valid JWT. No token -> 401, no DB access. ──
router.use(protect);

const stamp = () => new Date().toISOString();

/** Looks up a task and returns 404 if it does not exist or belongs to someone else. */
async function findOwnedTask(req, res) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    res.status(404).json({ success: false, message: 'Task not found' });
    return null;
  }
  const task = await Task.findOne({ _id: id, user: req.user.id });
  if (!task) {
    res.status(404).json({ success: false, message: 'Task not found' });
    return null;
  }
  return task;
}



/**
 * GET /tasks  (Practical 9: served from cache when warm)
 *
 * MISS -> query MongoDB, store in cache, respond.
 * HIT  -> respond immediately, no database round trip at all.
 */
router.get('/', async (req, res, next) => {
  try {
    const key = KEYS.allTasks(req.user.id);

    if (cacheEnabled.on) {
      const cached = getCached(key);
      if (cached !== undefined) {
        console.log(`[Cache] HIT  ${key} at ${stamp()}`);
        return res.json({ success: true, source: 'cache', count: cached.length, tasks: cached });
      }
      console.log(`[Cache] MISS ${key} at ${stamp()}`);
    }

    const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });

    if (cacheEnabled.on) setCached(key, tasks);

    return res.json({
      success: true,
      source: cacheEnabled.on ? 'db' : 'db (cache disabled)',
      count: tasks.length,
      tasks,
    });
  } catch (err) {
    next(err);
  }
});

/** GET /tasks/:id — supplementary task: cached under its own key. */
router.get('/:id', async (req, res, next) => {
  try {
    const key = KEYS.singleTask(req.user.id, req.params.id);

    if (cacheEnabled.on) {
      const cached = getCached(key);
      if (cached !== undefined) {
        console.log(`[Cache] HIT  ${key} at ${stamp()}`);
        return res.json({ success: true, source: 'cache', task: cached });
      }
      console.log(`[Cache] MISS ${key} at ${stamp()}`);
    }

    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    if (cacheEnabled.on) setCached(key, task);

    return res.json({ success: true, source: 'db', task });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /tasks  (Practical 10: respond first, notify afterwards)
 *
 * The ordering below is the entire lesson: res.status(201).json() goes out
 * BEFORE emit(), and emit() itself does not wait for listeners to finish.
 */
router.post('/', validateTaskCreate, async (req, res, next) => {
  try {
    const { title, description, priority, completed } = req.body;

    const task = await Task.create({
      title,
      description: description || '',
      priority: priority || 'medium',
      completed: completed ?? false,
      user: req.user.id, // owner comes from the verified token, never the body
    });

    // Any write invalidates the cached reads for this user.
    invalidateUserTasks(req.user.id);

    console.log(`[API] POST /tasks response sent at ${stamp()}`);

    // Outgoing to the client now; listeners run on the event loop afterwards.
    const populated = await task.populate('user', 'name email');
    res.status(201).json({ success: true, task });

    // Fire-and-forget background processing.
    taskEvents.emit('task-created', populated);
  } catch (err) {
    next(err);
  }
});

/** PUT /tasks/:id */
router.put('/:id', validateTaskUpdate, async (req, res, next) => {
  try {
    const task = await findOwnedTask(req, res);
    if (!task) return;

    Object.assign(task, req.body);
    await task.save();

    invalidateUserTasks(req.user.id);

    const populated = await task.populate('user', 'name email');
    res.json({ success: true, task });
    taskEvents.emit('task-updated', populated);
  } catch (err) {
    next(err);
  }
});

/** DELETE /tasks/:id */
router.delete('/:id', async (req, res, next) => {
  try {
    const task = await findOwnedTask(req, res);
    if (!task) return;

    await Task.deleteOne({ _id: task._id });

    invalidateUserTasks(req.user.id);

    // Keep the title/owner for the log line before the document is gone.
    await task.populate('user', 'name email');
    res.json({ success: true, message: 'Task deleted', id: task._id });

    console.log(`[API] DELETE /tasks/${task._id} response sent at ${stamp()}`);
    taskEvents.emit('task-deleted', task);
  } catch (err) {
    next(err);
  }
});

export default router;