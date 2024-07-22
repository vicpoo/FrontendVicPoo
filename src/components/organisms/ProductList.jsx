import React from 'react';
import ProductCard from '../molecules/ProductCard';

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onButtonClick={onProductClick} />
      ))}
    </div>
  );
};

export default ProductList;
