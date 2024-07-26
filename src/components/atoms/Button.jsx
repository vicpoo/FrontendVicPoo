import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
