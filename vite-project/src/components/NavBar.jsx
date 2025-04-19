import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className="bg-dark text-white shadow-lg">
      <nav className="navbar navbar-expand-lg navbar-dark container py-3">
        <Link className="navbar-brand fs-3 fw-bold" to="/">
          <i className="bi bi-stars me-2"></i> Ultimate shop
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-between ${
            isCollapsed ? "" : "show"
          }`}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <Link className="nav-link active" to="/">
                <i className="bi bi-house-door me-1"></i>Home
              </Link>
            </li>

            <li className="nav-item px-2 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="exploreDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-compass me-1"></i>Explore
              </a>
              <ul className="dropdown-menu" aria-labelledby="exploreDropdown">
                <li>
                  <Link className="dropdown-item" to="/blog">
                    <i className="bi bi-journal-text me-1"></i> Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/events">
                    <i className="bi bi-calendar-event me-1"></i> Events
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services">
                    <i className="bi bi-briefcase me-1"></i> Services
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="d-flex">
            <Link className="btn btn-outline-light me-2" to="/login">
              <i className="bi bi-box-arrow-in-right me-1"></i>Login
            </Link>
            <Link className="btn btn-warning text-dark" to="/signup">
              <i className="bi bi-person-plus me-1"></i>Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
