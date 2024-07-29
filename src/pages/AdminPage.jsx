import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryForm from '../components/molecules/InventoryForm';
import InventoryTable from '../components/organisms/InventoryTable';
import ClientForm from '../components/molecules/ClientForm';
import ClientTable from '../components/organisms/ClientTable';
import UserForm from '../components/molecules/UserForm';
import UserTable from '../components/organisms/UserTable';
import OrderForm from '../components/molecules/OrderForm';
import OrderTable from '../components/organisms/OrderTable';
import ReportTable from '../components/organisms/ReportTable';
import axios from 'axios';
import { FaBoxes, FaUsers, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const AdminPage = () => {
  const [currentAction, setCurrentAction] = useState('clients'); // Default view
  const [clients, setClients] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reportData, setReportData] = useState([]);
  const [currentClient, setCurrentClient] = useState(null);
  const [currentInventory, setCurrentInventory] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
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

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://100.27.97.251/api/order');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert('Error al obtener las órdenes');
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

  // Handle add/update order
  const handleAddOrUpdateOrder = async (order) => {
    try {
      if (currentOrder) {
        await axios.put(`http://100.27.97.251/api/order/${currentOrder.order_id}`, order);
        alert('Orden actualizada con éxito');
      } else {
        await axios.post('http://100.27.97.251/api/order', order);
        alert('Orden agregada con éxito');
      }
      fetchOrders();
      setCurrentAction('orders');
      setCurrentOrder(null);
    } catch (error) {
      console.error('Error adding/updating order:', error);
      alert('Error al agregar/actualizar la orden');
    }
  };

  // Handle delete order
  const handleDeleteOrder = async (id) => {
    try {
      await axios.delete(`http://100.27.97.251/api/order/${id}`);
      alert('Orden eliminada con éxito');
      fetchOrders();
    } catch (error) {
      console.error('Error deleting order:', error);
      alert('Error al eliminar la orden');
    }
  };

  // Handle edit order
  const handleEditOrder = (order) => {
    setCurrentOrder(order);
    setCurrentAction('edit-order');
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
    fetchOrders();
  }, []);

  // Generate report
  const generateReport = async () => {
    try {
      const clientResponse = await axios.get('http://100.27.97.251/api/client');
      const clients = clientResponse.data;

      const coffeeResponse = await axios.get('http://100.27.97.251/api/coffee');
      const coffees = coffeeResponse.data;

      const orderResponse = await axios.get('http://100.27.97.251/api/order');
      const orders = orderResponse.data;

      const coffeeSales = {};
      const clientOrders = {};

      orders.forEach(order => {
        if (!clientOrders[order.client_id]) {
          clientOrders[order.client_id] = 0;
        }
        clientOrders[order.client_id] += 1;

        order.coffees.forEach(coffee => {
          if (!coffeeSales[coffee.coffee_id]) {
            coffeeSales[coffee.coffee_id] = 0;
          }
          coffeeSales[coffee.coffee_id] += coffee.quantity;
        });
      });

      const mostSoldCoffee = coffees.reduce((max, coffee) => coffeeSales[coffee.coffee_id] > coffeeSales[max.coffee_id] ? coffee : max, coffees[0]);
      const leastSoldCoffee = coffees.reduce((min, coffee) => coffeeSales[coffee.coffee_id] < coffeeSales[min.coffee_id] ? coffee : min, coffees[0]);
      const mostFrequentClient = clients.reduce((max, client) => clientOrders[client.client_id] > clientOrders[max.client_id] ? client : max, clients[0]);
      const leastFrequentClient = clients.reduce((min, client) => clientOrders[client.client_id] < clientOrders[min.client_id] ? client : min, clients[0]);

      const doc = new jsPDF();
      doc.text('Reporte de Ventas', 20, 20);
      doc.autoTable({
        head: [['Cliente Más Frecuente', 'Cliente Menos Frecuente', 'Café Más Vendido', 'Café Menos Vendido']],
        body: [[
          mostFrequentClient.firstname,
          leastFrequentClient.firstname,
          mostSoldCoffee.name,
          leastSoldCoffee.name
        ]]
      });
      doc.save('reporte_ventas.pdf');
      alert('Reporte generado con éxito');
    } catch (error) {
      console.error('Error generating report:', error);
      alert('Error al generar el reporte');
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-800 min-h-screen p-6">
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
              <FaBoxes className="text-white text-xl mr-2" /> <span>Agregar Inventario</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('inventory')} className="text-white text-sm flex items-center my-3">
              <FaBoxes className="text-white text-xl mr-2" /> <span>Ver Inventario</span>
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
            <button onClick={() => setCurrentAction('add-order')} className="text-white text-sm flex items-center my-3">
              <FaClipboardList className="text-white text-xl mr-2" /> <span>Agregar Orden</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('orders')} className="text-white text-sm flex items-center my-3">
              <FaClipboardList className="text-white text-xl mr-2" /> <span>Ver Órdenes</span>
            </button>
          </li>
          <li>
  <button onClick={() => setCurrentAction('report')} className="text-white text-sm flex items-center my-3">
    <FaClipboardList className="text-white text-xl mr-2" /> <span>Ver Reporte</span>
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
  {currentAction === 'clients' && <ClientTable clients={clients} onDelete={handleDeleteClient} onEdit={handleEditClient} />}
  {currentAction === 'add-client' && <ClientForm onSubmit={handleAddOrUpdateClient} />}
  {currentAction === 'edit-client' && <ClientForm onSubmit={handleAddOrUpdateClient} initialData={currentClient} />}
  {currentAction === 'inventory' && <InventoryTable inventory={inventory} onDelete={handleDeleteInventory} onEdit={handleEditInventory} />}
  {currentAction === 'add-inventory' && <InventoryForm onSubmit={handleAddOrUpdateCoffee} />}
  {currentAction === 'edit-inventory' && <InventoryForm onSubmit={handleAddOrUpdateCoffee} initialData={currentInventory} />}
  {currentAction === 'users' && <UserTable users={users} onDelete={handleDeleteUser} onEdit={handleEditUser} />}
  {currentAction === 'add-user' && <UserForm onSubmit={handleAddOrUpdateUser} />}
  {currentAction === 'edit-user' && <UserForm onSubmit={handleAddOrUpdateUser} initialData={currentUser} />}
  {currentAction === 'orders' && <OrderTable orders={orders} onDelete={handleDeleteOrder} onEdit={handleEditOrder} />}
  {currentAction === 'add-order' && <OrderForm onSubmit={handleAddOrUpdateOrder} />}
  {currentAction === 'edit-order' && <OrderForm onSubmit={handleAddOrUpdateOrder} initialData={currentOrder} />}
  {currentAction === 'report' && <ReportTable />}
</div>
    
    </div>
  );
};

export default AdminPage;
