import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RepoCard from "../components/RepoCard";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchRepos = () => {
    setLoading(true);
    setError(null);

    fetch("https://api.github.com/users/drashti8175/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="projects-container">
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        GitHub <span>Projects</span>
      </h2>
      <p style={{ textAlign: "center", color: "#7fa8a4", marginBottom: "30px" }}>
        Dynamically fetched from GitHub API for drashti8175
      </p>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="🔍 Search Repository..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            background: "#111",
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "12px 16px",
            color: "#fafafa",
            fontSize: "0.95rem",
            outline: "none",
            width: "100%",
            maxWidth: "400px",
            transition: "border-color 0.2s"
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#ff6b3b";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#333";
          }}
        />
      </div>

      {loading && <Spinner />}

      {error && (
        <ErrorMessage
          message={error}
          onRetry={fetchRepos}
        />
      )}

      {!loading && !error && (
        <>
          {filteredRepos.length === 0 ? (
            <p style={{ textAlign: "center", color: "#7fa8a4", marginTop: "20px" }}>
              No repositories found matching "{search}"
            </p>
          ) : (
            <div className="projects-grid">
              {filteredRepos.map((repo) => (
                <RepoCard
                  key={repo.id}
                  repo={repo}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Projects;
