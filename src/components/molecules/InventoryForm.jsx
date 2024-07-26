import React, { useState, useEffect } from 'react';

const InventoryForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [origin, setOrigin] = useState('');
  const [height, setHeight] = useState('');
  const [qualification, setQualification] = useState('');
  const [inventory_quantity, setInventory_quantity] = useState('');

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name || '');
      setPrice(initialValues.price || '');
      setOrigin(initialValues.origin || '');
      setHeight(initialValues.height || '');
      setQualification(initialValues.qualification || '');
      setInventory_quantity(initialValues.inventory_quantity || '');
    }
  }, [initialValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const coffee = {
      name,
      price: parseFloat(price),
      origin,
      height,
      qualification: parseFloat(qualification),
      inventory_quantity: parseInt(inventory_quantity, 10)
    };
    onSubmit(coffee);
    setName('');
    setPrice('');
    setOrigin('');
    setHeight('');
    setQualification('');
    setInventory_quantity('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{initialValues ? 'Actualizar Café' : 'Agregar Café'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Origen</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Altura</label>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Calificación</label>
        <input
          type="number"
          step="0.1"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Cantidad en Inventario</label>
        <input
          type="number"
          value={inventory_quantity}
          onChange={(e) => setInventory_quantity(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {initialValues ? 'Actualizar Café' : 'Agregar Café'}
      </button>
    </form>
  );
};

export default InventoryForm;
