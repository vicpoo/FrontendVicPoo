import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaPlusSquare } from 'react-icons/fa';

const InventoryTable = ({ inventory, onDelete, onEdit, onAddStock }) => {
  const [stockInputs, setStockInputs] = useState({});

  const handleStockChange = (coffee_id, value) => {
    setStockInputs(prev => ({
      ...prev,
      [coffee_id]: value
    }));
  };

  const handleAddStock = async (coffee_id) => {
    const newStock = stockInputs[coffee_id] || 0;
    try {
      await onAddStock(coffee_id, newStock); // Asegúrate de que onAddStock maneje la solicitud PUT
      setStockInputs(prev => ({ ...prev, [coffee_id]: '' })); // Limpiar el campo después de la actualización
      alert('Stock updated successfully');
    } catch (error) {
      console.error('Error adding stock:', error);
      alert('Failed to update stock');
    }
  };

  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 border-b">ID</th>
          <th className="py-2 border-b">Nombre</th>
          <th className="py-2 border-b">Origen</th>
          <th className="py-2 border-b">Altura</th>
          <th className="py-2 border-b">Calificación</th>
          <th className="py-2 border-b">Precio</th>
          <th className="py-2 border-b">Cantidad</th>
          <th className="py-2 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map(coffee => (
          <tr key={coffee.coffee_id}>
            <td className="border px-4 py-2">{coffee.coffee_id}</td>
            <td className="border px-4 py-2">{coffee.name}</td>
            <td className="border px-4 py-2">{coffee.origin}</td>
            <td className="border px-4 py-2">{coffee.height}</td>
            <td className="border px-4 py-2">{coffee.qualification}</td>
            <td className="border px-4 py-2">{coffee.price}</td>
            <td className="border px-4 py-2">{coffee.inventory_quantity}</td>
            <td className="border px-4 py-2 flex items-center space-x-2">
              <button onClick={() => onEdit(coffee)} className="text-yellow-500 hover:text-yellow-700">
                <FaEdit />
              </button>
              <button onClick={() => onDelete(coffee.coffee_id)} className="text-red-500 hover:text-red-700">
                <FaTrashAlt />
              </button>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={stockInputs[coffee.coffee_id] || ''}
                  onChange={(e) => handleStockChange(coffee.coffee_id, e.target.value)}
                  className="border px-2 py-1 rounded"
                  placeholder="Add stock"
                />
                <button
                  onClick={() => handleAddStock(coffee.coffee_id)}
                  className="text-green-500 hover:text-green-700"
                >
                  <FaPlusSquare />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
