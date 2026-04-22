import ProductCard from '@/components/ProductCard';
import React from 'react';


const getProducts = async () => {
  const res = await fetch('http://localhost:5000/products', {next: {revalidate: 20}});
  return res.json();
}
const PorductsPage = async() => {
  const products = await getProducts()
  return (
    <div>
      <h2>Products: {products.length} </h2>
      <div className='grid grid-cols-3 gap-10 mx-10'>
        {
          products.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)
        }
      </div>
    </div>
  );
};

export default PorductsPage;