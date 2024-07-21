import React from 'react';
import MenuTotal from '../components/molecules/MenuTotal';

const Menu = () => {
  const handleAdd = () => {
    console.log('Agregar');
  };

  const handleDelete = () => {
    console.log('Eliminar');
  };

  const handleEdit = () => {
    console.log('Editar');
  };

  return (
    <div className="container mx-auto p-4">
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('public/Imagenes/cafe09.jpg')" }}></div>
      <div className="bg-gray-200 p-6 rounded-md">
        <h1 className="text-2xl font-bold text-center mb-4">Inventario</h1>
        <Menu onAdd={handleAdd} onDelete={handleDelete} onEdit={handleEdit} />
        < MenuTotal/>
      </div>
    </div>
  );
};

export default Menu;