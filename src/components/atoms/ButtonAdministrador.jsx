import React from 'react';

const ButtonAdministrador = ({ text, className, type = 'submit' }) => {
    return (
        <button type={type} className={`btn ${className} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
            {text}
        </button>
    );
};

export default ButtonAdministrador;
