import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { getToken, getUser, clearToken } from './api';
import Spinner from './components/Spinner';

// ── Practical 8: Lazy-loaded route components ──
const Projects = lazy(() => import('./pages/Projects'));
const Contact  = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Tasks    = lazy(() => import('./components/Tasks'));
const Login    = lazy(() => import('./components/Login'));

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
        {/* Practical 8: Suspense wraps all lazy routes */}
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </main>
    </div>
  );
}

export default function App() {
  return <Layout />;
}
