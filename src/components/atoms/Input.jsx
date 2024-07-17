import React from 'react';

const Input = ({ type, placeholder }) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className="border rounded-md p-2 w-full"
        />
    );
};

export default Input;
