const BASE_URL = 'http://localhost:5000';

// ── Token Management ──
export const getToken = () => localStorage.getItem('token');
export const setToken = (t) => localStorage.setItem('token', t);
export const clearToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getUser = () => {
  const u = localStorage.getItem('user');
  return u ? JSON.parse(u) : null;
};
export const setUser = (u) => localStorage.setItem('user', JSON.stringify(u));

// ── Helpers ──
const authHeaders = () => {
  const token = getToken();
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
};

const handle = async (res) => {
  const data = await res.json().catch(() => null);

  if (res.status === 401) {
    clearToken();
    window.dispatchEvent(new CustomEvent('auth:expired'));
    throw new Error(data?.message || 'Session expired. Please login again.');
  }

  if (!res.ok) {
    const msg = data?.message || data?.errors?.join(', ') || `Server error: ${res.status}`;
    throw new Error(msg);
  }

  return data;
};

// ── Auth Endpoints (public) ──
export const register = (data) =>
  fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handle);

export const login = (data) =>
  fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handle);

export const getMe = () =>
  fetch(`${BASE_URL}/auth/me`, {
    headers: authHeaders(),
  }).then(handle);

// ── Protected Task Endpoints ──
export const getTasks = () =>
  fetch(`${BASE_URL}/tasks`, { headers: authHeaders() }).then(handle);

export const createTask = (data) =>
  fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data),
  }).then(handle);

export const updateTask = (id, data) =>
  fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(data),
  }).then(handle);

export const deleteTask = (id) =>
  fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  }).then(handle);
