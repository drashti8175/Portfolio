function ErrorMessage({ message, onRetry }) {
  return (
    <div style={{
      textAlign: "center",
      color: "#ef4444",
      padding: "40px 20px",
      background: "#111",
      border: "1px solid #333",
      borderRadius: "14px",
      maxWidth: "500px",
      margin: "40px auto"
    }}>
      <h2 style={{ marginBottom: "15px", fontSize: "1.8rem" }}>⚠️ Error</h2>
      <p style={{ color: "#a8a8a8", marginBottom: "20px", fontSize: "1rem" }}>{message}</p>
      <button
        onClick={onRetry}
        className="btn btn-primary"
        style={{
          background: "linear-gradient(135deg, #ef4444, #f87171)",
          boxShadow: "0 4px 18px rgba(239, 68, 68, 0.3)",
          padding: "10px 24px",
          fontSize: "0.95rem",
          fontWeight: "600",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          color: "#fff",
          transition: "all 0.2s"
        }}
      >
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;
