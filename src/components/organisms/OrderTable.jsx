import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [clients, setClients] = useState([]);
  const [orderCoffees, setOrderCoffees] = useState([]);
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://100.27.97.251/api/order');
        setOrders(response.data);
      } catch (error) {
        toast.error('Error al cargar las órdenes');
      }
    };

    const fetchClients = async () => {
      try {
        const response = await axios.get('http://100.27.97.251/api/client');
        setClients(response.data);
      } catch (error) {
        toast.error('Error al cargar los clientes');
      }
    };

    const fetchOrderCoffees = async () => {
      try {
        const response = await axios.get('http://100.27.97.251/api/order_coffee');
        setOrderCoffees(response.data);
      } catch (error) {
        toast.error('Error al cargar los productos de las órdenes');
      }
    };

    const fetchCoffees = async () => {
      try {
        const response = await axios.get('http://100.27.97.251/api/coffee');
        setCoffees(response.data);
      } catch (error) {
        toast.error('Error al cargar los cafés');
      }
    };

    fetchOrders();
    fetchClients();
    fetchOrderCoffees();
    fetchCoffees();
  }, []);

  const getClientName = (clientId) => {
    const client = clients.find(client => client.client_id === clientId);
    return client ? `${client.firstname} ${client.lastname}` : 'Cliente desconocido';
  };

  const getCoffeeName = (coffeeId) => {
    const coffee = coffees.find(coffee => coffee.coffee_id === coffeeId);
    return coffee ? coffee.name : 'Café desconocido';
  };

  const handleDelete = async (orderId) => {
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
        await axios.delete(`http://100.27.97.251/api/order/${orderId}`);
        setOrders(orders.filter((order) => order.order_id !== orderId));
        toast.success('Orden eliminada correctamente');
      } catch (error) {
        toast.error('Error al eliminar la orden');
      }
    }
  };

  const formatOrderItems = (orderId) => {
    const items = orderCoffees.filter(item => item.order_id === orderId);
    return items.length > 0 ? (
      items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="mr-2">{getCoffeeName(item.coffee_id)} (ID: {item.coffee_id})</span>
          <span className="text-gray-600 mr-2">x{item.quantity}</span>
          <span className="text-gray-600 mr-2">${item.price}</span>
        </div>
      ))
    ) : (
      <span>No hay productos</span>
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h1 className="text-lg font-semibold mb-4">Lista de Órdenes</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 border-b">ID Orden</th>
            <th className="py-2 border-b">Nombre del Cliente</th>
            <th className="py-2 border-b">Fecha</th>
            <th className="py-2 border-b">Productos</th>
            <th className="py-2 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id}>
              <td className="border px-4 py-2">{order.order_id}</td>
              <td className="border px-4 py-2">{getClientName(order.client_id_fk)}</td>
              <td className="border px-4 py-2">{order.date_orders}</td>
              <td className="border px-4 py-2">
                {formatOrderItems(order.order_id)}
              </td>
              <td className="border px-4 py-2 flex items-center space-x-2">
                <button onClick={() => handleDelete(order.order_id)} className="text-red-500 hover:text-red-700">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
