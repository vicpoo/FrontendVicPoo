import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientForm from '../molecules/ClientForm';

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedAction, setSelectedAction] = useState('');
  const [clients, setClients] = useState([]);
  const [showSubMenu, setShowSubMenu] = useState({});
  const navigate = useNavigate();

  const handleButtonClick = (action) => setSelectedAction(action);

  const handleMenuClick = (option) => {
    setSelectedOption(option);
    setSelectedAction('');
    setShowSubMenu((prevShowSubMenu) => ({
      ...prevShowSubMenu,
      [option]: !prevShowSubMenu[option],
    }));
  };

  const handleClientSubmit = (client) => {
    setClients([...clients, client]);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Menu
        showSubMenu={showSubMenu}
        handleMenuClick={handleMenuClick}
        handleButtonClick={handleButtonClick}
        handleLogout={handleLogout}
      />
      <div className="flex-1 p-4 flex flex-col md:flex-row">
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
