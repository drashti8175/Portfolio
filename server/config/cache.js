import NodeCache from 'node-cache';

/**
 * Practical 9 — in-memory caching with node-cache.
 *
 * IMPORTANT: this cache lives in the Node process's memory. It is NOT shared
 * between server instances. If this app were scaled to run on 3 machines,
 * each would hold a different cache and invalidation on one would leave the
 * other two serving stale data. For multi-instance deployments you need a
 * shared cache such as Redis. Fine for this lab, wrong for production scale.
 */
const cache = new NodeCache({
  stdTTL: Number(process.env.CACHE_TTL_SECONDS) || 60, // entries expire after 60s
  checkperiod: 120, // sweep expired keys every 120s
  useClones: true, // store a copy so callers cannot mutate the cached array
});

// ── Hit / miss counters, exposed via GET /debug/cache (supplementary task) ──
const stats = { hits: 0, misses: 0, invalidations: 0 };

/** Stable cache keys — a key that changes per request would guarantee a miss. */
export const KEYS = {
  allTasks: (userId) => `all_tasks:${userId}`,
  singleTask: (userId, taskId) => `task:${userId}:${taskId}`,
};

export function getCached(key) {
  const value = cache.get(key);
  if (value === undefined) {
    stats.misses += 1;
    return undefined;
  }
  stats.hits += 1;
  return value;
}

export function setCached(key, value) {
  cache.set(key, value);
  return value;
}

/**
 * Drops every cached task list for a user. Called after any successful write
 * (POST / PUT / DELETE) so a stale list is never served inside the TTL window.
 */
export function invalidateUserTasks(userId) {
  const keys = cache.keys();
  const doomed = keys.filter(
    (k) => k.startsWith(`all_tasks:${userId}`) || k.startsWith(`task:${userId}:`)
  );
  if (doomed.length) cache.del(doomed);
  stats.invalidations += doomed.length;
}

export function cacheStats() {
  return { ...stats, keys: cache.keys().length, ttl: cache.options.stdTTL };
}

/** Lets you switch caching off to collect "uncached" baseline timings. */
export const cacheEnabled = { on: process.env.CACHE_ENABLED !== 'false' };

export default cache;