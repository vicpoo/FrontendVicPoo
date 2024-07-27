import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryForm from '../components/molecules/InventoryForm';
import InventoryTable from '../components/organisms/InventoryTable';
import ClientForm from '../components/molecules/ClientForm';
import ClientTable from '../components/organisms/ClientTable';
import UserForm from '../components/molecules/UserForm';
import UserTable from '../components/organisms/UserTable';
import axios from 'axios';
import { FaBoxes, FaUsers, FaSignOutAlt } from 'react-icons/fa';

const AdminPage = () => {
  const [currentAction, setCurrentAction] = useState('clients'); // Default view
  const [clients, setClients] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentClient, setCurrentClient] = useState(null);
  const [currentInventory, setCurrentInventory] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Fetch clients
  const fetchClients = async () => {
    try {
      const response = await axios.get('http://100.27.97.251/api/client');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
      alert('Error al obtener los clientes');
    }
  };

  // Fetch inventory
  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://100.27.97.251/api/coffee');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
      alert('Error al obtener el inventario');
    }
  };

  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://100.27.97.251/api/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Error al obtener los usuarios');
    }
  };

  // Handle add/update client
  const handleAddOrUpdateClient = async (client) => {
    try {
      if (currentClient) {
        await axios.put(`http://100.27.97.251/api/client/${currentClient.client_id}`, client);
        alert('Cliente actualizado con éxito');
      } else {
        await axios.post('http://100.27.97.251/api/client', client);
        alert('Cliente agregado con éxito');
      }
      fetchClients();
      setCurrentAction('clients');
      setCurrentClient(null);
    } catch (error) {
      console.error('Error adding/updating client:', error);
      alert('Error al agregar/actualizar el cliente');
    }
  };

  // Handle delete client
  const handleDeleteClient = async (id) => {
    try {
      await axios.delete(`http://100.27.97.251/api/client/${id}`);
      alert('Cliente eliminado con éxito');
      fetchClients();
    } catch (error) {
      console.error('Error deleting client:', error);
      alert('Error al eliminar el cliente');
    }
  };

  // Handle edit client
  const handleEditClient = (client) => {
    setCurrentClient(client);
    setCurrentAction('edit-client');
  };
  // Handle add/update coffee
  const handleAddOrUpdateCoffee = async (coffeeData, isEditing) => {
    try {
      const coffeePayload = {
        ...coffeeData,
        updated_at: new Date().toISOString(),
        updated_by: 'system',
      };

      if (isEditing && currentInventory) {
        await axios.put(`http://100.27.97.251/api/coffee/${currentInventory.coffee_id}`, coffeePayload);
        alert('Café actualizado con éxito');
      } else {
        await axios.post('http://100.27.97.251/api/coffee', { ...coffeePayload, created_at: new Date().toISOString(), created_by: 'system', deleted: 0 });
        alert('Café agregado con éxito');
      }
      fetchInventory();
      setCurrentInventory(null);
    } catch (error) {
      console.error('Error adding/updating coffee:', error);
      alert('Error al agregar o actualizar café');
    }
  };

  // Handle delete inventory
  const handleDeleteInventory = async (id) => {
    try {
      await axios.delete(`http://100.27.97.251/api/coffee/${id}`);
      alert('Inventario eliminado con éxito');
      fetchInventory();
    } catch (error) {
      console.error('Error deleting inventory:', error);
      alert('Error al eliminar el inventario');
    }
  };

  // Handle edit inventory
  const handleEditInventory = (inventoryItem) => {
    setCurrentInventory(inventoryItem);
    setCurrentAction('edit-inventory');
  };

  // Handle add/update user
  const handleAddOrUpdateUser = async (user) => {
    try {
      if (currentUser) {
        await axios.put(`http://100.27.97.251/api/user/${currentUser.user_id}`, user);
        alert('Usuario actualizado con éxito');
      } else {
        await axios.post('http://100.27.97.251/api/user', user);
        alert('Usuario agregado con éxito');
      }
      fetchUsers();
      setCurrentAction('users');
      setCurrentUser(null);
    } catch (error) {
      console.error('Error adding/updating user:', error);
      alert('Error al agregar/actualizar el usuario');
    }
  };

  // Handle delete user
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://100.27.97.251/api/user/${id}`);
      alert('Usuario eliminado con éxito');
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error al eliminar el usuario');
    }
  };

  // Handle edit user
  const handleEditUser = (user) => {
    setCurrentUser(user);
    setCurrentAction('edit-user');
  };

  // Handle logout
  const handleLogout = () => {
    navigate('/login');
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchClients();
    fetchInventory();
    fetchUsers();
  }, []);

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-800 p-4 min-h-screen">
        <div className="flex items-center mb-6">
          <FaBoxes className="text-blue-500 text-2xl mr-3" />
          <h2 className="text-white text-lg font-bold">Administración</h2>
        </div>
        <ul>
          <li>
            <button onClick={() => setCurrentAction('add-client')} className="text-white text-sm flex items-center my-3">
              <FaUsers className="text-white text-xl mr-2" /> <span>Agregar Cliente</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('clients')} className="text-white text-sm flex items-center my-3">
              <FaUsers className="text-white text-xl mr-2" /> <span>Ver Clientes</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('add-inventory')} className="text-white text-sm flex items-center my-3">
              <FaBoxes className="text-white text-xl mr-2" /> <span>Agregar Café</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('inventory')} className="text-white text-sm flex items-center my-3">
              <FaBoxes className="text-white text-xl mr-2" /> <span>Ver Café</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('add-user')} className="text-white text-sm flex items-center my-3">
              <FaUsers className="text-white text-xl mr-2" /> <span>Agregar Usuario</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('users')} className="text-white text-sm flex items-center my-3">
              <FaUsers className="text-white text-xl mr-2" /> <span>Ver Usuarios</span>
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
        {currentAction === 'add-client' && <ClientForm onSubmit={handleAddOrUpdateClient} />}
        {currentAction === 'edit-client' && currentClient && <ClientForm onSubmit={handleAddOrUpdateClient} initialValues={currentClient} />}
        {currentAction === 'clients' && <ClientTable clients={clients} onDelete={handleDeleteClient} onEdit={handleEditClient} />}
        {currentAction === 'add-inventory' && <InventoryForm onSubmit={handleAddOrUpdateCoffee} />}
        {currentAction === 'edit-inventory' && currentInventory && <InventoryForm onSubmit={handleAddOrUpdateCoffee} initialValues={currentInventory} />}
        {currentAction === 'inventory' && <InventoryTable inventory={inventory} onDelete={handleDeleteInventory} onEdit={handleEditInventory} />}
        {currentAction === 'add-user' && <UserForm onSubmit={handleAddOrUpdateUser} />}
        {currentAction === 'edit-user' && currentUser && <UserForm onSubmit={handleAddOrUpdateUser} initialValues={currentUser} />}
        {currentAction === 'users' && <UserTable users={users} onDelete={handleDeleteUser} onEdit={handleEditUser} />}
      </div>
    </div>
  );
};

export default AdminPage;
