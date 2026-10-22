import { EventEmitter } from 'node:events';

/**
 * Practical 10 — event-driven background processing with Node's built-in
 * EventEmitter (no external message queue).
 *
 * The emitter is a process-wide singleton: routes emit events, listeners
 * registered in listeners.js react to them. Nothing in the request path waits
 * for a listener to finish.
 *
 * We deliberately do NOT use the reserved event name 'error' for our own
 * events. EventEmitter throws when an 'error' event has no listener attached,
 * which would take the server down. See listeners.js for the error handler.
 */
class TaskEvents extends EventEmitter {
  constructor() {
    super();
    // A single slow listener must never block a later listener from running.
    this.setMaxListeners(50);
  }
}

const taskEvents = new TaskEvents();

export default taskEvents;