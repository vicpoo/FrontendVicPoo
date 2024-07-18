
import React from 'react';
import Button from '../atoms/ButtonAdmi';

const ButtonGroup = ({ buttons }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {buttons.map((text, index) => (
        <Button key={index} text={text} />
      ))}
    </div>
  );
};

export default ButtonGroup;
