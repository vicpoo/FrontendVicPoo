import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientForm from '../components/molecules/ClientForm';
import ClientTable from '../components/organisms/ClientTable';
import OrderForm from '../components/molecules/OrderForm';
import OrderTable from '../components/organisms/OrderTable';
import axios from 'axios';
import { FaUsers, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'; // Importar SweetAlert2

const VendorPage = () => {
  const [clients, setClients] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currentAction, setCurrentAction] = useState('clients');
  const [currentClient, setCurrentClient] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
  const navigate = useNavigate();

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://100.27.97.251/api/client');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
      toast.error('Error al obtener los clientes');
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://100.27.97.251/api/order');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Error al obtener las órdenes');
    }
  };

  const handleAddOrUpdateClient = async (client) => {
    try {
      if (currentClient) {
        await axios.put(`http://100.27.97.251/api/client/${currentClient.client_id}`, client);
        toast.success('Cliente actualizado con éxito');
      } else {
        await axios.post('http://100.27.97.251/api/client', client);
        toast.success('Cliente agregado con éxito');
      }
      fetchClients();
      setCurrentAction('clients');
      setCurrentClient(null);
    } catch (error) {
      console.error('Error adding/updating client:', error);
      toast.error('Error al agregar/actualizar el cliente');
    }
  };

  const handleAddOrUpdateOrder = async (order) => {
    try {
      if (currentOrder) {
        await axios.put(`http://100.27.97.251/api/order/${currentOrder.order_id}`, order);
        toast.success('Orden actualizada con éxito');
      } else {
        await axios.post('http://100.27.97.251/api/order/with-coffees', order);
        toast.success('Orden agregada con éxito');
      }
      fetchOrders();
      setCurrentAction('orders');
      setCurrentOrder(null);
    } catch (error) {
      console.error('Error adding/updating order:', error);
      toast.error('Error al agregar/actualizar la orden');
    }
  };

  const handleDeleteClient = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://100.27.97.251/api/client/${id}`);
        toast.success('Cliente eliminado con éxito');
        fetchClients();
      } catch (error) {
        console.error('Error deleting client:', error);
        toast.error('Error al eliminar el cliente');
      }
    }
  };

  const handleDeleteOrder = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://100.27.97.251/api/order/${id}`);
        toast.success('Orden eliminada con éxito');
        fetchOrders();
      } catch (error) {
        console.error('Error deleting order:', error);
        toast.error('Error al eliminar la orden');
      }
    }
  };

  const handleEditClient = (client) => {
    setCurrentClient(client);
    setCurrentAction('editClient');
  };

  const handleEditOrder = (order) => {
    setCurrentOrder(order);
    setCurrentAction('editOrder');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  useEffect(() => {
    fetchClients();
    fetchOrders();
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
            <button onClick={() => setCurrentAction('addClient')} className="text-white text-sm flex items-center my-3">
              <FaUsers className="text-white text-xl mr-2" /> <span>Agregar Cliente</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('clients')} className="text-white text-sm flex items-center my-3">
              <FaUsers className="text-white text-xl mr-2" /> <span>Ver Clientes</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('addOrder')} className="text-white text-sm flex items-center my-3">
              <FaShoppingCart className="text-white text-xl mr-2" /> <span>Agregar Orden</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('orders')} className="text-white text-sm flex items-center my-3">
              <FaShoppingCart className="text-white text-xl mr-2" /> <span>Ver Órdenes</span>
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
        {currentAction === 'addClient' && <ClientForm onSubmit={handleAddOrUpdateClient} />}
        {currentAction === 'clients' && <ClientTable clients={clients} onDelete={handleDeleteClient} onEdit={handleEditClient} />}
        {currentAction === 'editClient' && currentClient && <ClientForm onSubmit={handleAddOrUpdateClient} initialValues={currentClient} />}
        {currentAction === 'addOrder' && <OrderForm onSubmit={handleAddOrUpdateOrder} />}
        {currentAction === 'orders' && <OrderTable orders={orders} onDelete={handleDeleteOrder} onEdit={handleEditOrder} />}
        {currentAction === 'editOrder' && currentOrder && <OrderForm onSubmit={handleAddOrUpdateOrder} initialValues={currentOrder} />}
      </div>
    </div>
  );
};

export default VendorPage;
