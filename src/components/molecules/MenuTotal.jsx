import React from 'react';
import ButtonAdmi from '../atoms/ButtonAdmi';

const MenuTotal = ({ onAdd, onDelete, onEdit }) => {
  return (
    <div className="flex justify-center my-4">
      <ButtonAdmi text="Agregar" onClick={onAdd} />
      <ButtonAdmi text="Eliminar" onClick={onDelete} />
      <ButtonAdmi text="Editar" onClick={onEdit} />
    </div>
  );
};

export default MenuTotal;