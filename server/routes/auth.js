import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import Task from '../models/Task.js';
import { protect, signToken } from '../middleware/auth.js';
import { validateRegister, validateLogin } from '../middleware/validate.js';

const router = express.Router();

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;

/** Strips the password hash before a user object ever reaches the client. */
const publicUser = (user) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  createdAt: user.createdAt,
});

/**
 * POST /auth/register
 * Hash the password with bcrypt, THEN save. bcrypt is intentionally slow and
 * salts every hash automatically, which is exactly why it is used instead of a
 * plain SHA digest. Storing plain text (even in a demo) would mean a leaked
 * database hands over every account instantly.
 */
router.post('/register', validateRegister, async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'An account with that email already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
      name,
      email,
      password: hashedPassword, // only ever the hash
    });

    return res.status(201).json({
      success: true,
      message: 'Registration successful. Please login.',
      user: publicUser(user),
    });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /auth/login
 * Compare the submitted password against the stored hash using
 * bcrypt.compare() — never `===`. A hash is one-way, so string comparison
 * against it can never succeed and would make login always fail.
 */
router.post('/login', validateLogin, async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // .select('+password') is needed because password is select:false.
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');

    // One generic message for both "no such user" and "wrong password" so the
    // endpoint cannot be used to enumerate which emails are registered.
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = signToken(user._id);

    return res.json({
      success: true,
      token,
      user: publicUser(user),
    });
  } catch (err) {
    next(err);
  }
});

/** GET /auth/me — supplementary task: current user from the decoded JWT. */
router.get('/me', protect, (req, res) => {
  res.json({ success: true, user: publicUser(req.currentUser) });
});

export default router;