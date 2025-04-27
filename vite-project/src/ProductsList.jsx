import React from "react";

const ProductsList = ({ products }) => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Published Products</h2>
      <div className="row">
        {products.length === 0 ? (
          <p>No products available yet.</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="col-md-4 mb-4">
              <div className="card h-100">
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text fw-bold">${product.price}</p>
                  <p className="card-text">
                    <small className="text-muted">{product.category}</small>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsList;
