import React from 'react';
import ProductDetails from '../molecules/ProductDetails';

const ProductDetail = ({ product }) => {
  return (
    <div className="p-4">
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetail;
