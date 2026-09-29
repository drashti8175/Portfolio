export default function Header({ name, themeColor }) {
  return (
    <header style={{ borderBottom: `3px solid ${themeColor}`, padding: '20px 24px' }}>
      <h1 style={{ color: themeColor, margin: 0 }}>{name}</h1>
      <p style={{ color: '#7fa8a4', margin: '4px 0 0' }}>Student Portfolio</p>
    </header>
  );
}
