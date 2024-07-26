import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientForm from '../components/molecules/ClientForm';
import ClientTable from '../components/organisms/ClientTable';
import axios from 'axios';
import { FaUsers, FaSignOutAlt } from 'react-icons/fa';

const VendorPage = () => {
  const [clients, setClients] = useState([]);
  const [currentAction, setCurrentAction] = useState('clients');
  const [currentClient, setCurrentClient] = useState(null);
  const navigate = useNavigate();

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://100.27.97.251/api/client');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
      alert('Error al obtener los clientes');
    }
  };

  const handleAddOrUpdateClient = async (client) => {
    try {
      if (currentClient) {
        await axios.put(`http://100.27.97.251/api/client/${currentClient.client_id}`, client); // Corrección aquí
        alert('Cliente actualizado con éxito');
      } else {
        await axios.post('http://100.27.97.251/api/client', client);
        alert('Cliente agregado con éxito');
      }
      fetchClients(); // Refresh clients list
      setCurrentAction('clients');
      setCurrentClient(null);
    } catch (error) {
      console.error('Error adding/updating client:', error);
      alert('Error al agregar/actualizar el cliente');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://100.27.97.251/api/client/${id}`);
      alert('Cliente eliminado con éxito');
      fetchClients(); // Refresh clients list
    } catch (error) {
      console.error('Error deleting client:', error);
      alert('Error al eliminar el cliente');
    }
  };

  const handleEdit = (client) => {
    setCurrentClient(client);
    setCurrentAction('edit');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-800 p-4 min-h-screen">
        <div className="flex items-center mb-6">
          <FaUsers className="text-blue-500 text-2xl mr-3" />
          <h2 className="text-white text-lg font-bold">Gestión de Clientes</h2>
        </div>
        <ul>
          <li>
            <button onClick={() => setCurrentAction('add')} className="text-white text-sm flex items-center my-3">
              <FaUsers className="text-white text-xl mr-2" /> <span>Agregar Cliente</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('clients')} className="text-white text-sm flex items-center my-3">
              <FaUsers className="text-white text-xl mr-2" /> <span>Ver Clientes</span>
            </button>
          </li>
          <li>
            <button onClick={handleLogout} className="text-white text-sm flex items-center my-3">
              <FaSignOutAlt className="text-white text-xl mr-2" /> <span>Salir</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-6">
        {currentAction === 'add' && <ClientForm onSubmit={handleAddOrUpdateClient} />}
        {currentAction === 'clients' && <ClientTable clients={clients} onDelete={handleDelete} onEdit={handleEdit} />}
        {currentAction === 'edit' && currentClient && <ClientForm onSubmit={handleAddOrUpdateClient} initialValues={currentClient} />}
      </div>
    </div>
  );
};

export default VendorPage;
