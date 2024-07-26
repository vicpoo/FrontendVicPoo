import React, { useState, useEffect } from 'react';
import CoffeeForm from '../components/molecules/CoffeeForm';
import InventoryTable from '../components/organisms/InventoryTable';
import axios from 'axios';
import { FaCoffee, FaSignOutAlt, FaWarehouse } from 'react-icons/fa';

const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);
  const [currentAction, setCurrentAction] = useState('inventory');
  const [currentCoffee, setCurrentCoffee] = useState(null);

  // Fetch inventory data
  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://100.27.97.251/api/coffee');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  // Handle deleting a coffee
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://100.27.97.251/api/coffee/${id}`);
      alert('Café eliminado con éxito'); // Alerta de éxito
      fetchInventory(); // Refresh inventory list
    } catch (error) {
      console.error('Error deleting coffee:', error);
      alert('Error al eliminar el café');
    }
  };

  // Handle editing a coffee
  const handleEdit = (coffee) => {
    setCurrentCoffee(coffee);
    setCurrentAction('edit');
  };

  // Handle adding stock to a coffee
  const handleAddStock = async (id) => {
    const incrementQuantity = prompt('Ingrese la cantidad a incrementar:');
    if (incrementQuantity && !isNaN(incrementQuantity)) {
      try {
        await axios.put(`http://100.27.97.251/api/coffee/${id}/stock`, { increment_quantity: parseInt(incrementQuantity, 10) });
        alert('Stock actualizado con éxito'); // Alerta de éxito
        fetchInventory(); // Refresh inventory list
      } catch (error) {
        console.error('Error adding stock:', error);
        alert('Error al actualizar el stock');
      }
    } else {
      alert('Por favor, ingrese un número válido.');
    }
  };

  // Fetch inventory on component mount
  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-800 p-4 min-h-screen">
        <div className="flex items-center mb-6">
          <FaCoffee className="text-yellow-500 text-2xl mr-3" />
          <h2 className="text-white text-lg font-bold">Inventario de Café</h2>
        </div>
        <ul>
          <li>
            <button onClick={() => setCurrentAction('add')} className="text-white text-sm flex items-center my-3">
              <FaWarehouse className="text-white text-xl mr-2" /> <span>Agregar Café</span>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentAction('inventory')} className="text-white text-sm flex items-center my-3">
              <FaWarehouse className="text-white text-xl mr-2" /> <span>Ver Inventario</span>
            </button>
          </li>
          <li>
            <button className="text-white text-sm flex items-center my-3">
              <FaSignOutAlt className="text-white text-xl mr-2" /> <span>Salir</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-6">
        {currentAction === 'add' && <CoffeeForm onSuccess={fetchInventory} />}
        {currentAction === 'inventory' && <InventoryTable inventory={inventory} onDelete={handleDelete} onEdit={handleEdit} onAddStock={handleAddStock} />}
        {currentAction === 'edit' && currentCoffee && <CoffeeForm onSuccess={fetchInventory} coffee={currentCoffee} isEditing />}
      </div>
    </div>
  );
};

export default InventoryPage;
