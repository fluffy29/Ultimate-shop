import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
    remember: false,
  });

  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    alert("Logged in!");
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
      
        <div className="col-lg-6 d-none d-lg-block">
          <img
            src="https://cache.desktopnexus.com/thumbseg/2476/2476435-bigthumbnail.jpg"
            alt="Login illustration"
            className="img-fluid rounded"
          />

          <h2 className="mt-4">Welcome Back!</h2>
          <p className="text-muted">
            Login to manage your account, check orders, and access special
            deals.
          </p>
        </div>

        <div className="col-lg-6">
          <h2 className="mb-4">Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-12">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 position-relative">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={formData.showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`bi ${
                      formData.showPassword ? "bi-eye-slash" : "bi-eye"
                    }`}
                  ></i>
                </button>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <label className="form-check-label">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-decoration-none">
                Forgot password?
              </Link>
            </div>

         
            <div className="col-12 text-center">
              <p className="mt-3 mb-1">Or login with</p>
              <button type="button" className="btn btn-outline-dark me-2">
                <i className="bi bi-google me-1"></i> Google
              </button>
              <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-facebook me-1"></i> Facebook
              </button>
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success px-5 py-2 mt-3">
                Login
              </button>
              <p className="mt-3 mb-0">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-primary">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
