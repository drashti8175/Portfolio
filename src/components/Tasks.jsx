import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTasks, createTask, updateTask, deleteTask, getMe } from '../api';

const EMPTY_FORM = { title: '', description: '', priority: 'medium' };

export default function Tasks({ user, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editId, setEditId] = useState(null);
  const [toast, setToast] = useState('');
  const [currentUser, setCurrentUser] = useState(user);
  const navigate = useNavigate();

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  };

  const handleAuthError = () => {
    onLogout();
    navigate('/login');
  };

  const load = () => {
    setLoading(true);
    setError(null);
    getTasks()
      .then(setTasks)
      .catch((err) => {
        if (err.message.includes('Session expired') || err.message.includes('login')) {
          handleAuthError();
          return;
        }
        setError('Backend offline. Start the Express server on port 5000.');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
    // Fetch current user details from /me endpoint
    getMe()
      .then((data) => setCurrentUser(data.user))
      .catch(() => { }); // ignore if /me fails
  }, []);

  // Listen for 401 events
  useEffect(() => {
    const onExpired = () => handleAuthError();
    window.addEventListener('auth:expired', onExpired);
    return () => window.removeEventListener('auth:expired', onExpired);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    try {
      if (editId) {
        const updated = await updateTask(editId, form);
        setTasks((prev) => prev.map((t) => (t._id === editId ? updated : t)));
        showToast('Task updated ✓');
        setEditId(null);
      } else {
        const created = await createTask(form);
        setTasks((prev) => [...prev, created]);
        showToast('Task created ✓');
      }
      setForm(EMPTY_FORM);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (task) => {
    setEditId(task._id);
    setForm({
      title: task.title,
      description: task.description || '',
      priority: task.priority || 'medium',
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this task?')) return;
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
      showToast('Task deleted ✓');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleToggle = async (task) => {
    try {
      const updated = await updateTask(task._id, { completed: !task.completed });
      setTasks((prev) => prev.map((t) => (t._id === task._id ? updated : t)));
    } catch (err) {
      setError(err.message);
    }
  };

  const displayUser = currentUser || user;

  return (
    <div className="page">
      <h2>
        Task <span>Manager</span>
      </h2>

      {/* User info bar */}
      {displayUser && (
        <div className="user-bar">
          <div className="user-bar-info">
            <div className="user-avatar">
              {displayUser.name?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <div className="user-details">
              <span className="user-name">{displayUser.name}</span>
              <span className="user-email">{displayUser.email}</span>
            </div>
          </div>
          <div className="tag">🔒 JWT Protected</div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}

      {error && (
        <div
          className="task-error"
          style={{
            marginBottom: 20,
            padding: '12px 16px',
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: 10,
          }}
        >
          ⚠️ {error}
          <button className="btn" style={{ marginLeft: 14 }} onClick={load}>
            Retry
          </button>
        </div>
      )}

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          placeholder="Task title *"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          placeholder="Description (optional)"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <select
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="btn-primary">
          {editId ? 'Update' : 'Add Task'}
        </button>
        {editId && (
          <button
            type="button"
            className="btn"
            onClick={() => {
              setEditId(null);
              setForm(EMPTY_FORM);
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {loading ? (
        <p style={{ color: 'var(--muted)' }}>Loading tasks...</p>
      ) : (
        <ul className="task-list">
          {tasks.length === 0 && !error && (
            <p style={{ color: 'var(--muted)' }}>No tasks yet. Add one above!</p>
          )}
          {tasks.map((task) => (
            <li
              key={task._id}
              className={`task-item${task.completed ? ' task-done' : ''}`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task)}
              />
              <div className="task-body">
                <span className="task-title">{task.title}</span>
                {task.description && (
                  <span className="task-desc">{task.description}</span>
                )}
                <span className={`priority-badge priority-${task.priority}`}>
                  {task.priority}
                </span>
              </div>
              <div className="task-actions">
                <button className="btn" onClick={() => handleEdit(task)}>
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
