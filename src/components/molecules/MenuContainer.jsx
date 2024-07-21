import React from 'react';
import ButtonSeller from '../atoms/ButtonSeller';

function MenuContainer({ items, onMenuClick }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item, index) => (
        <li key={index}>
          <ButtonSeller text={item} className="w-full" onClick={() => onMenuClick(item)} />
        </li>
      ))}
    </ul>
  );
}

export default MenuContainer;
