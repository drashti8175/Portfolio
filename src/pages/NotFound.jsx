import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page not-found">
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}
