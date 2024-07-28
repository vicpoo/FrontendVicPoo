import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Button from '../atoms/Button';

const OrderForm = ({ orderId, onSave }) => {
  const [orderData, setOrderData] = useState({
    date_orders: '',
    client_id_fk: '',
    created_by: 'admin',
    updated_by: 'admin',
    deleted: false,
  });

  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://100.27.97.251/api/client');
        setClients(response.data);
      } catch (error) {
        toast.error('Error al obtener los clientes');
      }
    };
    fetchClients();

    if (orderId) {
      const fetchOrder = async () => {
        try {
          const response = await axios.get(`http://100.27.97.251/api/order/${orderId}`);
          setOrderData(response.data);
        } catch (error) {
          toast.error('Error al obtener la orden');
        }
      };
      fetchOrder();
    }
  }, [orderId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (orderId) {
        await axios.put(`http://100.27.97.251/api/order/${orderId}`, orderData);
        toast.success('Orden actualizada correctamente');
      } else {
        await axios.post('http://100.27.97.251/api/order', orderData);
        toast.success('Orden creada correctamente');
      }
      onSave();
    } catch (error) {
      toast.error('Error al guardar la orden');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full max-w-sm">
      <label className="block mb-2">
        Fecha:
        <input
          type="date"
          name="date_orders"
          value={orderData.date_orders}
          onChange={handleChange}
          className="w-full mt-1 border-gray-300 rounded"
          required
        />
      </label>
      <label className="block mb-2">
        Cliente:
        <select
          name="client_id_fk"
          value={orderData.client_id_fk}
          onChange={handleChange}
          className="w-full mt-1 border-gray-300 rounded"
          required
        >
          <option value="">Selecciona un cliente</option>
          {clients.map((client) => (
            <option key={client.client_id} value={client.client_id}>
              {client.firstname} {client.lastname}
            </option>
          ))}
        </select>
      </label>
      <Button text={orderId ? "Actualizar" : "Crear"} onClick={handleSubmit} />
    </div>
  );
};

export default OrderForm;
