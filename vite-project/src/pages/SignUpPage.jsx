import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: null,
    avatarPreview: null,
    newsletter: false,
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      const file = files[0];
      if (file) {
        const preview = URL.createObjectURL(file);
        setFormData({ ...formData, avatar: file, avatarPreview: preview });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Form submitted!");
    console.log(formData);
  };

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 d-none d-lg-block">
          <img
            src="https://th.bing.com/th/id/OIP.FbYAVf8itPUbKdAqloZKCQHaEK?rs=1&pid=ImgDetMain"
            alt="Sign up illustration"
            className="img-fluid"
          />
          <h2 className="mt-4">Join Our Ultimate Family!</h2>
          <p className="text-muted">
            Sign up to unlock exclusive deals, personalized recommendations, and
            fast checkout experiences.
          </p>
        </div>
   
        <div className="col-lg-6">
          <h2 className="mb-4">Create Your Account</h2>
          <form onSubmit={handleSubmit} className="row g-3">
           
            <div className="col-12 text-center">
              {formData.avatarPreview ? (
                <img
                  src={formData.avatarPreview}
                  alt="Preview"
                  className="rounded-circle mb-3 shadow"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div className="text-muted mb-2">Upload a profile photo</div>
              )}
              <input
                type="file"
                className="form-control"
                name="avatar"
                accept="image/*"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Subscribe to our newsletter
                </label>
              </div>

              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">
                  I agree to the{" "}
                  <a href="#" className="text-decoration-underline">
                    terms & conditions
                  </a>
                </label>
              </div>
            </div>

            <div className="col-12 text-center">
              <p className="mt-4">Or sign up using</p>
              <button type="button" className="btn btn-outline-dark me-2">
                <i className="bi bi-google me-1"></i> Google
              </button>
              <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-facebook me-1"></i> Facebook
              </button>
            </div>

          
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success px-5 py-2 mt-3">
                Sign Up
              </button>
              <p className="mt-3">
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
