import React from 'react';

function ButtonSeller({ onClick, text, className }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`bg-[#CFB494] p-8 rounded shadow-lg ${className}`}
    >
      {text}
    </button>
  );
}

export default ButtonSeller;
