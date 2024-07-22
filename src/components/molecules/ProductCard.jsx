import React from 'react';
import Image from '../atoms/Image';
import ProductTitle from '../atoms/ProductTitle';
import ProductPrice from '../atoms/ProductPrice';
import Button from '../atoms/Button';

const ProductCard = ({ product, onButtonClick }) => {
  return (
    <div className="border rounded p-4">
      <Image src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <ProductTitle title={product.title} />
      <ProductPrice price={product.price} />
      <Button text="View Details" onClick={() => onButtonClick(product.id)} />
    </div>
  );
};

export default ProductCard;
