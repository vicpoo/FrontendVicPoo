import React from 'react';

const Input = ({ type, name, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border p-2 rounded-md ${className}`}
    />
  );
};

export default Input;
