import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-light px-3">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Oops! Page not found</h2>
      <p className="mb-4 text-muted">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary px-4 py-2">
        ⬅️ Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
