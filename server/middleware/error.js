/**
 * Central error handler. Every error leaves the API in the same JSON shape:
 *   { success: false, message: "...", errors?: [...] }
 *
 * Stack traces are logged server-side only and NEVER sent to the client —
 * they expose file paths and internals.
 */
export function notFound(req, res, next) {
  res.status(404);
  next(new Error(`Route not found: ${req.method} ${req.originalUrl}`));
}

// eslint-disable-next-line no-unused-vars -- Express identifies handlers by arity (4 args).
export function errorHandler(err, req, res, next) {
  let statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  let message = err.message || 'Server Error';
  let errors;

  // Duplicate key (unique index) — e.g. registering an email that already exists.
  if (err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyValue || {})[0] || 'field';
    message = `An account with that ${field} already exists`;
  }

  // Mongoose schema validation (belt-and-braces alongside middleware rules).
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation failed';
    errors = Object.values(err.errors).map((e) => e.message);
  }

  // Malformed ObjectId in the URL -> treated as a 404, not a crash.
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404;
    message = 'Resource not found';
  }

  if (statusCode >= 500) {
    console.error('[ERROR]', err); // full detail stays on the server
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(errors ? { errors } : {}),
  });
}