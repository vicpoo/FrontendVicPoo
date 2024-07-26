import React from 'react';
import { FaUser, FaFileAlt, FaUsers, FaWarehouse, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Administrador</h3>
        <Link to="/clients" className="flex items-center mb-2">
          <FaUser className="mr-2" /> Cliente
        </Link>
        <div className="ml-6">
          <Link to="/clients/add" className="block mb-1">Agregar</Link>
          <Link to="/clients/delete" className="block mb-1">Eliminar</Link>
          <Link to="/clients/edit" className="block">Editar</Link>
        </div>
      </div>
      <Link to="/reports" className="flex items-center mb-4">
        <FaFileAlt className="mr-2" /> Reporte
      </Link>
      <Link to="/users" className="flex items-center mb-4">
        <FaUsers className="mr-2" /> Usuario
      </Link>
      <Link to="/inventory" className="flex items-center mb-4">
        <FaWarehouse className="mr-2" /> Inventario
      </Link>
      <Link to="/orders" className="flex items-center mb-4">
        <FaShoppingCart className="mr-2" /> Orden
      </Link>
      <Link to="/logout" className="flex items-center">
        <FaSignOutAlt className="mr-2" /> Logout
      </Link>
    </div>
  );
};

export default SidebarMenu;
