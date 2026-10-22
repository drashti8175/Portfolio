import 'dotenv/config'; // MUST be first: reads .env before any module reads process.env
import express from 'express';
import cors from 'cors';

import { connectDB } from './config/db.js';
import './config/listeners.js'; // side-effect import: registers the notification listeners
import { cacheStats, cacheEnabled } from './config/cache.js';
import { notFound, errorHandler } from './middleware/error.js';
import { sanitizeBody } from './middleware/validate.js';
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// ── Global middleware ──
app.use(cors()); // the Vite dev server runs on a different origin
app.use(express.json({ limit: '100kb' })); // body parser cap: oversized payloads get rejected early
app.use(sanitizeBody); // strips whitespace/null bytes before any route sees the body

// ── Routes ──
app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'Task Manager API is running',
    endpoints: ['/auth/register', '/auth/login', '/auth/me', '/tasks', '/debug/cache'],
  });
});

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

/** GET /debug/cache — supplementary task: hit/miss counters to prove caching works. */
app.get('/debug/cache', (_req, res) => {
  res.json({ success: true, enabled: cacheEnabled.on, ...cacheStats() });
});

// ── Error handling: must be registered LAST ──
app.use(notFound);
app.use(errorHandler);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`[Server] Listening on http://localhost:${PORT}`);
    console.log(`[Server] Cache ${cacheEnabled.on ? 'enabled' : 'DISABLED (CACHE_ENABLED=false)'}`);
  });
});

export default app;