import React from 'react';

const TextInput = ({ label, value, onChange }) => (
  <div className="mb-2">
    <label className="block text-black mb-1">{label}</label>
    <input 
      className="border-2 border-gray-300 p-2 rounded w-full" 
      type="text" 
      value={value} 
      onChange={onChange} 
    />
  </div>
);

export default TextInput;