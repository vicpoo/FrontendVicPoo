import React from 'react';
import Button from '../atoms/Button';

const MenuTotal = ({ onAdd, onDelete, onEdit }) => {
  return (
    <div className="flex justify-center my-4">
      <Button text="Agregar" onClick={onAdd} />
      <Button text="Eliminar" onClick={onDelete} />
      <Button text="Editar" onClick={onEdit} />
    </div>
  );
};

export default MenuTotal;