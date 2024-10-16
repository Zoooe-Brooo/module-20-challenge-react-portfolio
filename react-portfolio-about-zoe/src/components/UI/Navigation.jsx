import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}