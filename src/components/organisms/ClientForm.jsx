import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientForm = ({ client, onSuccess, onError, isEditing }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // Populate form fields with existing client data when editing
  useEffect(() => {
    if (isEditing && client) {
      setName(client.name);
      setEmail(client.email);
      setPhone(client.phone);
      setAddress(client.address);
    }
  }, [client, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientData = {
      name,
      email,
      phone,
      address,
      updated_at: new Date().toISOString(),
      updated_by: 'system', // Actualiza esto según el usuario
    };

    try {
      if (isEditing && client) {
        // Actualizar cliente existente
        await axios.put(`http://100.27.97.251/api/client/${client.id}`, clientData);
        alert('Cliente actualizado con éxito'); // Alerta de éxito
      } else {
        // Agregar nuevo cliente
        await axios.post('http://100.27.97.251/api/client', { ...clientData, created_at: new Date().toISOString(), created_by: 'system' });
        alert('Cliente agregado con éxito'); // Alerta de éxito
      }
      onSuccess(); // Callback para manejar el éxito
    } catch (error) {
      console.error('Error submitting client:', error);
      onError && onError(error); // Callback para manejar el error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">{isEditing ? 'Actualizar Cliente' : 'Agregar Cliente'}</h2>
      <label className="block mb-2">
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2 w-full rounded"/>
      </label>
      <label className="block mb-2">
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-2 w-full rounded"/>
      </label>
      <label className="block mb-2">
        Teléfono:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required className="border p-2 w-full rounded"/>
      </label>
      <label className="block mb-4">
        Dirección:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className="border p-2 w-full rounded"/>
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {isEditing ? 'Actualizar Cliente' : 'Agregar Cliente'}
      </button>
    </form>
  );
};

export default ClientForm;
