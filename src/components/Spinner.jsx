function Spinner() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <div className="spinner" style={{
        display: "inline-block",
        width: "50px",
        height: "50px",
        border: "5px solid #262626",
        borderRadius: "50%",
        borderTopColor: "#ff3b71",
        animation: "spin 1s ease-in-out infinite",
        marginBottom: "15px"
      }}></div>
      <h2 style={{ color: "#ff3b71", fontWeight: "500" }}>Loading...</h2>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Spinner;
