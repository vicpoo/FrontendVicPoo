import React from 'react';
import { FaUser, FaFileAlt, FaUsers, FaWarehouse, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';

const Menu = ({ showSubMenu, handleMenuClick, handleButtonClick, handleLogout }) => {
  return (
    <div className="bg-gray-800 text-white w-full md:w-64 p-4 md:p-6">
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl">Menu</h1>
        <h2 className='text-xl md:text-2xl'>Administrador</h2>
      </div>
      <button 
        onClick={() => handleMenuClick('client')} 
        className="w-full text-left flex items-center py-3 text-lg md:text-xl"
      >
        <FaUser className="mr-2" /> Cliente
      </button>
      {showSubMenu['client'] && (
        <div className="pl-1">
          <button onClick={() => handleButtonClick('add')} className="w-full text-left py-2 text-lg">Agregar</button>
          <button onClick={() => handleButtonClick('delete')} className="w-full text-left py-2 text-lg">Eliminar</button>
          <button onClick={() => handleButtonClick('edit')} className="w-full text-left py-2 text-lg">Editar</button>
        </div>
      )}
      <button 
        onClick={() => handleMenuClick('report')} 
        className="w-full text-left flex items-center mt-2 py-3 text-lg md:text-xl"
      >
        <FaFileAlt className="mr-2" /> Reporte
      </button>
      {showSubMenu['report'] && (
        <div className="pl-4">
          {/* Agrega submenús para reporte si los tienes */}
        </div>
      )}
      <button 
        onClick={() => handleMenuClick('user')} 
        className="w-full text-left flex items-center mt-2 py-3 text-lg md:text-xl"
      >
        <FaUsers className="mr-2" /> Usuario
      </button>
      {showSubMenu['user'] && (
        <div className="pl-4">
          {/* Agrega submenús para usuario si los tienes */}
        </div>
      )}
      <button 
        onClick={() => handleMenuClick('inventory')} 
        className="w-full text-left flex items-center mt-2 py-3 text-lg md:text-xl"
      >
        <FaWarehouse className="mr-2" /> Inventario
      </button>
      {showSubMenu['inventory'] && (
        <div className="pl-4">
          {/* Agrega submenús para inventario si los tienes */}
        </div>
      )}
      <button 
        onClick={() => handleMenuClick('order')} 
        className="w-full text-left flex items-center mt-2 py-3 text-lg md:text-xl"
      >
        <FaShoppingCart className="mr-2" /> Orden
      </button>
      {showSubMenu['order'] && (
        <div className="pl-4">
          {/* Agrega submenús para orden si los tienes */}
        </div>
      )}
      <button 
        onClick={handleLogout} 
        className="w-full text-left flex items-center mt-4 py-3 text-lg md:text-xl"
      >
        <FaSignOutAlt className="mr-2" /> Logout
      </button>
    </div>
  );
};

export default Menu;
