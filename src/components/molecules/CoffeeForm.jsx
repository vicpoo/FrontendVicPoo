import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoffeeForm = ({ coffee, onSuccess, onError, isEditing }) => {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [height, setHeight] = useState('');
  const [qualification, setQualification] = useState('');
  const [price, setPrice] = useState('');
  const [inventoryQuantity, setInventoryQuantity] = useState('');

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
      updated_by: 'system',
    };

    try {
      if (isEditing && coffee) {
        await axios.put(`http://100.27.97.251/api/coffee/${coffee.coffee_id}`, coffeeData);
        alert('Café actualizado con éxito');
      } else {
        await axios.post('http://100.27.97.251/api/coffee', { ...coffeeData, created_at: new Date().toISOString(), created_by: 'system', deleted: 0 });
        alert('Café agregado con éxito');
      }
      onSuccess();
    } catch (error) {
      console.error('Error submitting coffee:', error);
      onError && onError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border px-4 py-2 rounded w-full" />
      </div>
      <div>
        <label className="block text-gray-700">Origen:</label>
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} required className="border px-4 py-2 rounded w-full" />
      </div>
      <div>
        <label className="block text-gray-700">Altura:</label>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} required className="border px-4 py-2 rounded w-full" />
      </div>
      <div>
        <label className="block text-gray-700">Calificación:</label>
        <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} required className="border px-4 py-2 rounded w-full" />
      </div>
      <div>
        <label className="block text-gray-700">Precio:</label>
        <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required className="border px-4 py-2 rounded w-full" />
      </div>
      <div>
        <label className="block text-gray-700">Cantidad en Inventario:</label>
        <input type="number" value={inventoryQuantity} onChange={(e) => setInventoryQuantity(e.target.value)} required className="border px-4 py-2 rounded w-full" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {isEditing ? 'Actualizar Café' : 'Agregar Café'}
      </button>
    </form>
  );
};

export default CoffeeForm;
