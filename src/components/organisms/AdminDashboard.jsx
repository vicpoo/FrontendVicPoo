import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientForm from '../molecules/ClientForm';
import Menu from '../molecules/MenuAdmin';

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedAction, setSelectedAction] = useState('');
  const [clients, setClients] = useState([]);
  const [showSubMenu, setShowSubMenu] = useState({});
  const [clientToEdit, setClientToEdit] = useState(null);
  const [showSection, setShowSection] = useState(''); // Estado para controlar la visibilidad de las secciones
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await fetch('http://100.27.97.251/api/client');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleButtonClick = (action) => {
    setSelectedAction(action);
    setShowSection(action); // Actualiza el estado para mostrar la sección seleccionada
    setMessage(''); // Clear message when changing action
  };

  const handleMenuClick = (option) => {
    setSelectedOption(option);
    setSelectedAction('');
    setShowSubMenu((prevShowSubMenu) => ({
      ...prevShowSubMenu,
      [option]: !prevShowSubMenu[option],
    }));
    setShowSection(''); // Oculta todas las secciones al cambiar de opción de menú
    setMessage(''); // Clear message when changing menu option
  };

  const handleClientSubmit = async (client) => {
    try {
      const response = await fetch('http://100.27.97.251/api/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(client),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      fetchClients();
      setMessage('Cliente agregado correctamente.');
    } catch (error) {
      console.error('Error adding client:', error);
      setMessage('Error al agregar el cliente. Verifica los campos.');
    }
  };

  const handleDeleteClient = async (clientId) => {
    try {
      const response = await fetch(`http://100.27.97.251/api/client/${clientId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Network response was not ok');

      console.log(`Client ${clientId} deleted successfully`);

      fetchClients();
      setMessage(`Cliente ${clientId} eliminado correctamente.`);
    } catch (error) {
      console.error('Error deleting client:', error);
      setMessage('Error al eliminar el cliente.');
    }
  };

  const handleEditClient = async (clientId, updatedClient) => {
    try {
      const response = await fetch(`http://100.27.97.251/api/client/${clientId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedClient),
      });
      if (!response.ok) throw new Error('Network response was not ok');

      console.log(`Client ${clientId} updated successfully`);

      fetchClients();
      setClientToEdit(null); // Limpiar el cliente editado
      setMessage(`Cliente ${clientId} actualizado correctamente.`);
    } catch (error) {
      console.error('Error updating client:', error);
      setMessage('Error al actualizar el cliente.');
    }
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
        {message && (
          <div className="mb-4 p-2 bg-green-200 text-green-800">
            {message}
          </div>
        )}
        {selectedOption === 'client' && (
          <div className="flex-1">
            {showSection === 'add' && (
              <ClientForm onSubmit={handleClientSubmit} />
            )}
            {showSection === 'delete' && (
              <div className="w-full max-w-full overflow-x-auto">
                <h2 className="text-xl mb-4">Eliminar Cliente</h2>
                <table className="w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="p-2 border-b">ID</th>
                      <th className="p-2 border-b">Nombre</th>
                      <th className="p-2 border-b">Apellido</th>
                      <th className="p-2 border-b">Teléfono</th>
                      <th className="p-2 border-b">Dirección</th>
                      <th className="p-2 border-b">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client) => (
                      <tr key={client.client_id}>
                        <td className="p-2 border-b">{client.client_id}</td>
                        <td className="p-2 border-b">{client.firstname}</td>
                        <td className="p-2 border-b">{client.lastname}</td>
                        <td className="p-2 border-b">{client.phone}</td>
                        <td className="p-2 border-b">{client.address}</td>
                        <td className="p-2 border-b">
                          <button
                            onClick={() => handleDeleteClient(client.client_id)}
                            className="text-red-600"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {showSection === 'edit' && (
              <div className="w-full max-w-full overflow-x-auto">
                <h2 className="text-xl mb-4">Editar Cliente</h2>
                <table className="w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="p-2 border-b">ID</th>
                      <th className="p-2 border-b">Nombre</th>
                      <th className="p-2 border-b">Apellido</th>
                      <th className="p-2 border-b">Teléfono</th>
                      <th className="p-2 border-b">Dirección</th>
                      <th className="p-2 border-b">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client) => (
                      <tr key={client.client_id}>
                        <td className="p-2 border-b">{client.client_id}</td>
                        <td className="p-2 border-b">{client.firstname}</td>
                        <td className="p-2 border-b">{client.lastname}</td>
                        <td className="p-2 border-b">{client.phone}</td>
                        <td className="p-2 border-b">{client.address}</td>
                        <td className="p-2 border-b">
                          <button
                            onClick={() => {
                              setClientToEdit(client);
                              handleButtonClick('edit');
                            }}
                            className="text-blue-600"
                          >
                            Editar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {clientToEdit && (
                  <ClientForm
                    initialValues={clientToEdit}
                    onSubmit={(updatedClient) => {
                      handleEditClient(clientToEdit.client_id, updatedClient);
                    }}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
