import React from 'react';

const Input = ({ type, placeholder, className, value, onChange }) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className={`border rounded-md p-2 w-full ${className}`}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
