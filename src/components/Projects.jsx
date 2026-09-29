import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

const FALLBACK = [
  { id: 1, name: 'VisionFlow-AI', description: 'AI video understanding platform with multimodal pipelines.', stargazers_count: 0, language: 'Python', html_url: 'https://github.com/drashti8175' },
  { id: 2, name: 'PhishGuard-AI', description: 'ML-based phishing detection with FastAPI + React.', stargazers_count: 0, language: 'Python', html_url: 'https://github.com/drashti8175' },
  { id: 3, name: 'AI-Travel-Planner', description: 'LangGraph agentic travel planner with WebSocket streaming.', stargazers_count: 0, language: 'Python', html_url: 'https://github.com/drashti8175' },
  { id: 4, name: 'MediCore', description: 'Full-stack clinic management with Socket.IO and JWT auth.', stargazers_count: 0, language: 'JavaScript', html_url: 'https://github.com/drashti8175' },
  { id: 5, name: 'LogicLab', description: 'Converts natural language to Boolean logic and truth tables.', stargazers_count: 0, language: 'TypeScript', html_url: 'https://github.com/drashti8175' },
  { id: 6, name: 'ShopStack', description: 'Retail inventory system with MySQL triggers and stored procedures.', stargazers_count: 0, language: 'JavaScript', html_url: 'https://github.com/drashti8175' },
];

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://api.github.com/users/drashti8175/repos?sort=updated&per_page=20')
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setRepos(data);
        else setRepos(FALLBACK);
      })
      .catch(() => {
        setRepos(FALLBACK);
        setError(null); // show fallback silently
      })
      .finally(() => setLoading(false));
  }, [retry]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} onRetry={() => setRetry(r => r + 1)} />;

  const filtered = repos.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h2>My <span>Repositories</span></h2>
      <input
        className="search-input"
        type="text"
        placeholder="Search repositories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="projects-grid">
        {filtered.map((repo) => (
          <div className="project-card" key={repo.id}>
            <h3>{repo.name}</h3>
            {repo.description && <p>{repo.description}</p>}
            <div className="repo-meta">
              <span>⭐ {repo.stargazers_count}</span>
              {repo.language && <span className="tag">{repo.language}</span>}
            </div>
            <a href={repo.html_url} target="_blank" rel="noreferrer" className="btn">
              View on GitHub →
            </a>
          </div>
        ))}
        {filtered.length === 0 && <p style={{ color: 'var(--muted)' }}>No repositories match.</p>}
      </div>
    </div>
  );
}
