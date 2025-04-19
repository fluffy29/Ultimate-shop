import React, { useState } from 'react';

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 50,
    category: '',
    stock: 0,
    tags: '',
    isFeatured: false,
    isOnSale: false,
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setProduct({ ...product, [name]: checked });
    } else if (type === 'file') {
      const file = files[0];
      if (file) {
        const preview = URL.createObjectURL(file);
        setProduct({ ...product, image: file, imagePreview: preview });
      }
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    alert("Product submitted!");
  };

  const resetForm = () => {
    setProduct({
      name: '',
      description: '',
      price: 50,
      category: '',
      stock: 0,
      tags: '',
      isFeatured: false,
      isOnSale: false,
      image: null,
      imagePreview: null,
    });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Create New Product</h2>
      <form onSubmit={handleSubmit} className="row g-4">
        <div className="col-md-6">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="tech">Tech</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Price (${product.price})</label>
          <input
            type="range"
            className="form-range"
            name="price"
            min="0"
            max="1000"
            step="10"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Stock Quantity</label>
          <input
            type="number"
            className="form-control"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Tags (comma separated)</label>
          <input
            type="text"
            className="form-control"
            name="tags"
            value={product.tags}
            onChange={handleChange}
            placeholder="e.g. new, trending, sale"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Product Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="5"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-md-6 d-flex align-items-center">
          <div className="form-check form-switch me-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="isFeatured"
              checked={product.isFeatured}
              onChange={handleChange}
            />
            <label className="form-check-label">Featured</label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name="isOnSale"
              checked={product.isOnSale}
              onChange={handleChange}
            />
            <label className="form-check-label">On Sale</label>
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label">Upload Product Image</label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
          />
        </div>

        {product.imagePreview && (
          <div className="col-12 text-center">
            <img
              src={product.imagePreview}
              alt="Preview"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: '300px' }}
            />
          </div>
        )}

        <div className="col-12 d-flex justify-content-between">
          <button type="submit" className="btn btn-success px-4">
            <i className="bi bi-check-circle me-1"></i>Submit
          </button>
          <button type="button" className="btn btn-outline-danger px-4" onClick={resetForm}>
            <i className="bi bi-x-circle me-1"></i>Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
