import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register, setToken, setUser } from '../api';

export default function Login({ onLogin }) {
    const [isRegister, setIsRegister] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            if (isRegister) {
                // Register flow
                const data = await register(form);
                setSuccess('Registration successful! Please login.');
                setIsRegister(false);
                setForm({ name: '', email: form.email, password: '' });
            } else {
                // Login flow
                const data = await login({ email: form.email, password: form.password });
                setToken(data.token);
                setUser(data.user);
                onLogin(data.user);
                navigate('/tasks');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const toggleMode = () => {
        setIsRegister(!isRegister);
        setError('');
        setSuccess('');
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                {/* Decorative glow */}
                <div className="auth-glow" />

                <div className="auth-card">
                    <div className="auth-header">
                        <div className="auth-icon">
                            {isRegister ? '🚀' : '🔐'}
                        </div>
                        <h2 className="auth-title">
                            {isRegister ? 'Create Account' : 'Welcome Back'}
                        </h2>
                        <p className="auth-subtitle">
                            {isRegister
                                ? 'Sign up to start managing your tasks'
                                : 'Login to access your task dashboard'}
                        </p>
                    </div>

                    {error && (
                        <div className="auth-alert auth-alert-error">
                            <span className="auth-alert-icon">⚠️</span>
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="auth-alert auth-alert-success">
                            <span className="auth-alert-icon">✅</span>
                            {success}
                        </div>
                    )}

                    <form className="auth-form" onSubmit={handleSubmit}>
                        {isRegister && (
                            <div className="auth-field">
                                <label htmlFor="auth-name">Full Name</label>
                                <div className="auth-input-wrap">
                                    <span className="auth-input-icon">👤</span>
                                    <input
                                        id="auth-name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        required
                                        minLength={2}
                                        autoComplete="name"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="auth-field">
                            <label htmlFor="auth-email">Email Address</label>
                            <div className="auth-input-wrap">
                                <span className="auth-input-icon">✉️</span>
                                <input
                                    id="auth-email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        <div className="auth-field">
                            <label htmlFor="auth-password">Password</label>
                            <div className="auth-input-wrap">
                                <span className="auth-input-icon">🔑</span>
                                <input
                                    id="auth-password"
                                    type="password"
                                    placeholder={isRegister ? 'Min 6 characters' : '••••••••'}
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    required
                                    minLength={6}
                                    autoComplete={isRegister ? 'new-password' : 'current-password'}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="auth-submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="auth-spinner" />
                            ) : isRegister ? (
                                'Create Account'
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <span className="auth-footer-text">
                            {isRegister ? 'Already have an account?' : "Don't have an account?"}
                        </span>
                        <button
                            type="button"
                            className="auth-toggle"
                            onClick={toggleMode}
                        >
                            {isRegister ? 'Sign In' : 'Sign Up'}
                        </button>
                    </div>
                </div>

                {/* JWT info badge */}
                <div className="auth-badge">
                    <span className="auth-badge-dot" />
                    JWT Authentication · Practical 7
                </div>
            </div>
        </div>
    );
}
