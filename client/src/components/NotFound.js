import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <Link to={'/'}>
        <i className="fa fa-home fa-3x home-main" aria-hidden="true"></i>
      </Link>
    </div>
  );
}
