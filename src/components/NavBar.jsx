import { NavLink, useNavigate } from 'react-router-dom';

export default function NavBar({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="sidebar-nav">
      <div className="nav-logo">DP.</div>
      <ul className="nav-links">
        {[
          ['/', 'Home'],
          ['/projects', 'Projects'],
          ['/contact', 'Contact'],
          ['/tasks', 'Tasks'],
        ].map(([to, label]) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* User section at bottom */}
      {user && (
        <div className="nav-user-section">
          <div className="nav-user-info">
            <div className="nav-user-avatar">
              {user.name?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <span className="nav-user-name">{user.name}</span>
          </div>
          <button className="nav-logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
