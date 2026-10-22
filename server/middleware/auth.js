import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/**
 * Protects routes by verifying the JWT sent in the Authorization header.
 *
 * Client sends:  Authorization: Bearer <token>
 *
 * What it verifies:
 *   1. A header is present and uses the "Bearer <token>" shape.
 *   2. The signature matches our JWT_SECRET (so the token was not tampered with).
 *   3. The token has not expired (jwt.verify throws TokenExpiredError if it has).
 *
 * On success it attaches the decoded payload to req.user so downstream
 * handlers/controllers never touch the token again.
 *
 * NOTE: jwt.verify() THROWS on an invalid/expired token. That throw must be
 * caught here — letting it escape would crash the server on a bad request.
 */
export async function protect(req, res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized, no token provided',
    });
  }

  const token = header.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized, token missing after Bearer',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Confirm the user in the token still exists (a deleted user must not
    // keep access just because their token has not expired yet).
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'The user belonging to this token no longer exists',
      });
    }

    req.user = decoded;
    req.currentUser = user;
    next();
  } catch (err) {
    // TokenExpiredError vs JsonWebTokenError (bad signature / malformed)
    const message =
      err.name === 'TokenExpiredError'
        ? 'Token expired, please login again'
        : 'Not authorized, token is invalid';

    return res.status(401).json({ success: false, message });
  }
}

/** Signs a JWT carrying the user's id. Expiry comes from JWT_EXPIRES_IN in .env. */
export function signToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  });
}