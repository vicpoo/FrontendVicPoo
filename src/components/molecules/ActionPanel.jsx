import React from 'react';
import ButtonAdmin from '../atoms/ButtonAdmin';

const ActionPanel = ({ onAdd, onEdit, onDelete }) => (
  <div className="bg-gray-800 text-white p-6 rounded shadow-md mb-4">
    <h2 className="text-xl mb-4">Acciones</h2>
    <div className="flex flex-col space-y-2">
      <ButtonAdmin text="Agregar" onClick={onAdd} />
      <ButtonAdmin text="Eliminar" onClick={onDelete} />
      <ButtonAdmin text="Editar" onClick={onEdit} />
    </div>
  </div>
);

export default ActionPanel;