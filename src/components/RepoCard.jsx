function RepoCard({ repo }) {
  return (
    <div className="project-card">
      <h3>{repo.name}</h3>

      {repo.description && (
        <p>{repo.description}</p>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: "auto", justifyContent: "center" }}>
        <span style={{ color: "#fafafa", fontWeight: "600", fontSize: "0.85rem", opacity: 0.8 }}>
          ⭐ {repo.stargazers_count}
        </span>
        {repo.language && (
          <span className="tag" style={{
            fontSize: "0.75rem",
            background: "#262626",
            padding: "4px 10px",
            borderRadius: "6px",
            color: "#ff6b3b"
          }}>
            {repo.language}
          </span>
        )}
      </div>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="btn"
        style={{
          background: "#262626",
          color: "#fff",
          padding: "8px 16px",
          fontSize: "0.80rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
          transition: "all 0.2s",
          marginTop: "12px",
          width: "100%",
          textAlign: "center"
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "#333";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "#262626";
        }}
      >
        View Code
      </a>
    </div>
  );
}

export default RepoCard;
