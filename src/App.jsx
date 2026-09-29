import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Tasks from './components/Tasks';
import Login from './components/Login';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import { getToken, getUser, clearToken } from './api';

function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isLogin = pathname === '/login';
  const [user, setUser] = useState(getUser());
  const isLoggedIn = !!getToken();

  // Listen for auth:expired events (401 from API)
  useEffect(() => {
    const handleExpired = () => {
      setUser(null);
    };
    window.addEventListener('auth:expired', handleExpired);
    return () => window.removeEventListener('auth:expired', handleExpired);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    clearToken();
    setUser(null);
  };

  // Auth-protected route wrapper
  const Protected = ({ children }) => {
    if (!getToken()) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <div className={isHome || isLogin ? '' : 'shell'}>
      {!isHome && !isLogin && <NavBar user={user} onLogout={handleLogout} />}
      <main className={isHome || isLogin ? '' : 'shell-main'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={
            isLoggedIn ? <Navigate to="/tasks" replace /> : <Login onLogin={handleLogin} />
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tasks" element={
            <Protected>
              <Tasks user={user} onLogout={handleLogout} />
            </Protected>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return <Layout />;
}
