import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Shop!</h1>
          <p className="lead mb-4">
            Discover top products, exclusive deals, and more!
          </p>
          <Link to="/create-product" className="btn btn-warning btn-lg">
            Explore Now
          </Link>
        </div>
      </section>

      
      <section className="container py-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <i className="bi bi-lightning-charge fs-1 text-warning"></i>
            <h5 className="mt-3">Fast Delivery</h5>
            <p>Get your orders in record time with our optimized logistics.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-shield-lock fs-1 text-primary"></i>
            <h5 className="mt-3">Secure Payments</h5>
            <p>Your transactions are protected with end-to-end encryption.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-stars fs-1 text-success"></i>
            <h5 className="mt-3">Top Quality</h5>
            <p>Only the best-reviewed and top-rated products curated for you.</p>
          </div>
        </div>
      </section>

       
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row g-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-md-4">
                <div className="card shadow-sm h-100">
                  <img
                    src={`https://picsum.photos/400/300?random=${i}`}
                    className="card-img-top"
                    alt="product"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Product {i}</h5>
                    <p className="card-text">
                      Amazing product description that makes it irresistible.
                    </p>
                    <Link to="/product/123" className="btn btn-outline-primary">
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">What Our Users Say</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"Incredible service and great quality!"</p>
                <footer className="blockquote-footer">Sara K.</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"I use Ultimate shop for all my shopping!"</p>
                <footer className="blockquote-footer">Jad M.</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"Fast, secure, and always reliable."</p>
                <footer className="blockquote-footer">Lina R.</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {[
              {
                q: "How do I place an order?",
                a: "Browse our products, add to cart, and proceed to checkout securely.",
              },
              {
                q: "Can I return a product?",
                a: "Yes, we offer hassle-free returns within 14 days of delivery.",
              },
              {
                q: "Is my payment secure?",
                a: "Absolutely. We use industry-standard encryption and security.",
              },
            ].map((faq, i) => (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
                  >
                    {faq.q}
                  </button>
                </h2>
                <div
                  id={`collapse${i}`}
                  className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="mb-4">Stay in the Loop!</h2>
          <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="row justify-content-center">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
              />
              <button className="btn btn-warning w-100">Subscribe</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} Ultimate Shop. All rights reserved.</p>
          <div>
            <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-light"><i className="bi bi-twitter"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
