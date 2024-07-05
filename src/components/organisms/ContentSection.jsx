import React from 'react';
import Image from '../atoms/Image';

const ContentSection = ({ id, title, children, topImage }) => (
  <section id={id} className="p-8 text-center bg-white shadow-md mb-8 rounded-md">
    {topImage && (
      <Image src={topImage} alt={`${title} Image`} className="mb-4 rounded-lg shadow-lg w-1/2 mx-auto" />
    )}
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>  
);

export default ContentSection;
