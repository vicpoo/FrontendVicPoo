import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoffeeForm = ({ coffee, onSuccess, onError, isEditing }) => {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [height, setHeight] = useState('');
  const [qualification, setQualification] = useState('');
  const [price, setPrice] = useState('');
  const [inventoryQuantity, setInventoryQuantity] = useState('');

  // Populate form fields with existing coffee data when editing
  useEffect(() => {
    if (isEditing && coffee) {
      setName(coffee.name);
      setOrigin(coffee.origin);
      setHeight(coffee.height);
      setQualification(coffee.qualification);
      setPrice(coffee.price);
      setInventoryQuantity(coffee.inventory_quantity);
    }
  }, [coffee, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const coffeeData = {
      name,
      origin,
      height,
      qualification,
      price,
      inventory_quantity: inventoryQuantity,
      updated_at: new Date().toISOString(),
      updated_by: 'system', // Actualiza esto según el usuario
    };

    try {
      if (isEditing && coffee) {
        // Actualizar café existente
        await axios.put(`http://100.27.97.251/api/coffee/${coffee.coffee_id}`, coffeeData);
        alert('Café actualizado con éxito'); // Alerta de éxito
      } else {
        // Agregar nuevo café
        await axios.post('http://100.27.97.251/api/coffee', { ...coffeeData, created_at: new Date().toISOString(), created_by: 'system', deleted: 0 });
        alert('Café agregado con éxito'); // Alerta de éxito
      }
      onSuccess(); // Callback para manejar el éxito
    } catch (error) {
      console.error('Error submitting coffee:', error);
      onError && onError(error); // Callback para manejar el error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">{isEditing ? 'Actualizar Café' : 'Agregar Café'}</h2>
      <label className="block mb-2">
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2 w-full rounded"/>
      </label>
      <label className="block mb-2">
        Origin:
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} required className="border p-2 w-full rounded"/>
      </label>
      <label className="block mb-2">
        Height:
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required className="border p-2 w-full rounded"/>
      </label>
      <label className="block mb-2">
        Qualification:
        <input type="number" value={qualification} onChange={(e) => setQualification(e.target.value)} required className="border p-2 w-full rounded"/>
      </label>
      <label className="block mb-2">
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required className="border p-2 w-full rounded"/>
      </label>
      <label className="block mb-4">
        Inventory Quantity:
        <input type="number" value={inventoryQuantity} onChange={(e) => setInventoryQuantity(e.target.value)} required className="border p-2 w-full rounded"/>
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {isEditing ? 'Actualizar Café' : 'Agregar Café'}
      </button>
    </form>
  );
};

export default CoffeeForm;
