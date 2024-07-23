import React from 'react';

const ButtonAdmi = ({ text }) => {
    return (
        <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {text}
        </button>
    );
};

export default ButtonAdmi;