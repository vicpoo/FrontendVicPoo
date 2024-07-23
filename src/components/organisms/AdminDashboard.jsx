import React, { useState } from 'react';
import ActionPanel from '../molecules/ActionPanel';
import ClientForm from '../molecules/ClientForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faUsers, faBoxes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedAction, setSelectedAction] = useState('');
  const [clients, setClients] = useState([]);
  const [showActionPanel, setShowActionPanel] = useState(false);

  const handleAdd = () => setSelectedAction('add');
  const handleEdit = () => setSelectedAction('edit');
  const handleDelete = () => setSelectedAction('delete');

  const handleMenuClick = (option) => {
    setSelectedOption(option);
    setSelectedAction('');
    setShowActionPanel((prevShowActionPanel) => (option === selectedOption ? !prevShowActionPanel : true));
  };

  const handleClientSubmit = (client) => {
    setClients([...clients, client]);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white p-4 w-64 flex-shrink-0">
        <h2 className="text-2xl mb-4">Menu</h2>
        <ul className="space-y-2">
          <li
            onClick={() => handleMenuClick('client')}
            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <span>Cliente</span>
          </li>
          <li
            onClick={() => handleMenuClick('report')}
            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
            <span>Reporte</span>
          </li>
          <li
            onClick={() => handleMenuClick('user')}
            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            <span>Usuario</span>
          </li>
          <li
            onClick={() => handleMenuClick('inventory')}
            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={faBoxes} className="mr-2" />
            <span>Inventario</span>
          </li>
          <li
            onClick={() => handleMenuClick('order')}
            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            <span>Orden</span>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4 flex">
        {showActionPanel && (
          <div className="mr-4">
            <ActionPanel onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        )}
        {selectedOption === 'client' && (
          <div className="flex-1">
            {selectedAction === 'add' && (
              <ClientForm onSubmit={handleClientSubmit} />
            )}
            {selectedAction === 'delete' && (
              <div className="w-full max-w-sm">
                <h2 className="text-xl mb-4">Eliminar Cliente</h2>
                <ul>
                  {clients.map((client, index) => (
                    <li key={index} className="mb-2">
                      {client.name} {client.lastName} - {client.phone}
                      {/* Botón para eliminar (lógica pendiente) */}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedAction === 'edit' && (
              <div className="w-full max-w-sm">
                <h2 className="text-xl mb-4">Editar Cliente</h2>
                <ul>
                  {clients.map((client, index) => (
                    <li key={index} className="mb-2">
                      {client.name} {client.lastName} - {client.phone}
                      {/* Botón para editar (lógica pendiente) */}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;