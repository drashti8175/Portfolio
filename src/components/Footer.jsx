export default function Footer({ name }) {
  return (
    <footer className="footer">
      <p className="footer-name">{name}</p>
      <p className="footer-tagline">CE Student · CHARUSAT · Navsari</p>
      <ul className="footer-links">
        <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="mailto:24CE079@charusat.edu.in">Email</a></li>
      </ul>
      <p className="footer-copy">© {new Date().getFullYear()} {name}. Built with React + Vite.</p>
    </footer>
  );
}
