import React from 'react';

const Button = ({ text, onClick, className = '', type = 'button' }) => {
    return (
        <button 
            type={type}
            className={`p-2 rounded-md ${className}`}
            onClick={onClick} >
            {text}
        </button>
    );
};

export default Button;
