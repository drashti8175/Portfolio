import mongoose from 'mongoose';

/**
 * Connects to MongoDB using the URI from .env.
 * dotenv.config() must run in server.js BEFORE this module is imported,
 * otherwise process.env.MONGO_URI will be undefined.
 */
export async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error('[DB] MONGO_URI is undefined — check your .env file and variable name.');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`[DB] Connected to MongoDB: ${conn.connection.host}`);
  } catch (err) {
    console.error('[DB] Connection failed:', err.message);
    process.exit(1);
  }
}