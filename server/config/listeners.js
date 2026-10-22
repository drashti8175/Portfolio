import taskEvents from './events.js';

/**
 * Notification listeners — deliberately kept OUT of the route handlers.
 *
 * The whole point of Practical 10 is that this work sits off the critical
 * request path: POST /tasks responds 201 immediately, and everything below
 * happens afterwards on the event loop.
 */

// Artificial delay so the async ordering is actually visible in the console.
// Set NOTIFICATION_DELAY_MS=0 for realistic (instant) behaviour.
const DELAY = Number(process.env.NOTIFICATION_DELAY_MS ?? 2000);

const stamp = () => new Date().toISOString();

taskEvents.on('task-created', (task) => {
  console.log(
    `[Notification] Task "${task.title}" created at ${stamp()} ` +
    `for user ${task.user?.name || task.user} (id: ${task.user?._id || task.user})`
  );
  console.log(`[Notification] Handler started at ${stamp()} — simulating ${DELAY}ms of work...`);

  // The delay is what proves the API was not waiting on us.
  setTimeout(() => {
    console.log(
      `[Notification] Notification for "${task.title}" delivered at ${stamp()} ` +
      `— API response was sent long before this line.`
    );
  }, DELAY);
});

taskEvents.on('task-deleted', (task) => {
  console.log(
    `[Notification] Task "${task.title}" deleted at ${stamp()} ` +
    `by user ${task.user?.name || task.user}`
  );
});

taskEvents.on('task-updated', (task) => {
  console.log(`[Notification] Task "${task.title}" updated at ${stamp()}`);
});

/**
 * Catches anything thrown synchronously inside the listeners above. Without
 * this, a throw would become an uncaught exception and kill the process.
 */
taskEvents.on('notification-error', (err, context) => {
  console.error(`[Notification] ERROR while handling ${context}:`, err.message);
});

export default taskEvents;