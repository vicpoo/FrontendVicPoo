import React from 'react';

const ContentSection = ({ id, title, children, style }) => (
  <section id={id} className="p-8 text-center bg-white shadow-md mb-8 rounded-md" style={style}>
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

export default ContentSection;