import React from 'react';

const Image = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`w-full ${className}`} />
);

export default Image;
