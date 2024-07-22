import React from 'react';
import ProductTitle from '../atoms/ProductTitle';
import ProductPrice from '../atoms/ProductPrice';
import ProductDescription from '../atoms/ProductDescription';
import Image from '../atoms/Image';

const ProductDetails = ({ product }) => {
  return (
    <div className="p-4">
      <Image src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <ProductTitle title={product.title} />
      <ProductPrice price={product.price} />
      <ProductDescription description={product.description} />
    </div>
  );
};

export default ProductDetails;
