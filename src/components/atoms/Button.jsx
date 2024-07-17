import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <button 
            className="bg-transparent text-white border-2 border-white p-2 rounded-md w-full mt-4 hover:bg-white hover:bg-opacity-10"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;

