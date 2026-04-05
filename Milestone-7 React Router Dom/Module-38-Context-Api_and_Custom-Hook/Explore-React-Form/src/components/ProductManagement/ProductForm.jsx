import React, { useState } from 'react';

const ProductForm = ({ handleAddProducts }) => {
  const [error, setError] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    console.log(name, price, quantity);
    const ProductData = {
      name,
      price,
      quantity,
    };
    // console.log(ProductData);

    // handle Error
    if (name.length === 0) {
      setError('Please Provide a Product name')
      return;
    } else if (price.length === 0) {
      setError('Please Provide a price')
      return;
    } else if (price <= 0) {
      setError('Price can not be negative or zero')
      return;
    } else if (quantity <= 0) {
      setError('Please select Quantity')
      return;
    } else {
      setError('')
    }

    handleAddProducts(ProductData)
  };
  return (
    <div>
      <h2>Product Table</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product Price" />
        <br />
        <input type="text" name="quantity" placeholder="Product Quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color: 'red'}}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;