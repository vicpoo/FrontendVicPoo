import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import CoffeeForm from '../components/molecules/CoffeeForm';
import InventoryTable from '../components/organisms/InventoryTable';
import axios from 'axios';
import { FaCoffee, FaSignOutAlt, FaWarehouse } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'; // Importar SweetAlert2

const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);
  const [currentAction, setCurrentAction] = useState('inventory');
  const [currentCoffee, setCurrentCoffee] = useState(null);
  const navigate = useNavigate(); 

  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://100.27.97.251/api/coffee');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const handleDelete = async (id) => {
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
        await axios.delete(`http://100.27.97.251/api/coffee/${id}`);
        toast.success('Café eliminado con éxito');
        fetchInventory();
        setCurrentAction('inventory');
      } catch (error) {
        console.error('Error deleting coffee:', error);
        toast.error('Error al eliminar el café');
      }
    }
  };

  const handleEdit = (coffee) => {
    setCurrentCoffee(coffee);
    setCurrentAction('edit');
  };

  const handleAddStock = async (id, incrementQuantity) => {
    if (incrementQuantity && !isNaN(incrementQuantity)) {
      try {
        await axios.put(`http://100.27.97.251/api/coffee/${id}/stock`, { increment_quantity: parseInt(incrementQuantity, 10) });
        toast.success('Stock actualizado con éxito');
        fetchInventory();
      } catch (error) {
        console.error('Error adding stock:', error);
        toast.error('Error al actualizar el stock');
      }
    } else {
      toast.error('Por favor, ingrese un número válido.');
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleSuccess = (message) => {
    toast.success(message);
    fetchInventory();
    setCurrentAction('inventory');
  };

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
            <button onClick={handleLogout} className="text-white text-sm flex items-center my-3">
              <FaSignOutAlt className="text-white text-xl mr-2" /> <span>Salir</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-6">
        {currentAction === 'add' && <CoffeeForm onSuccess={() => handleSuccess('Café agregado con éxito')} />}
        {currentAction === 'inventory' && <InventoryTable inventory={inventory} onDelete={handleDelete} onEdit={handleEdit} onAddStock={handleAddStock} />}
        {currentAction === 'edit' && currentCoffee && <CoffeeForm onSuccess={() => handleSuccess('Café actualizado con éxito')} coffee={currentCoffee} isEditing />}
      </div>
    </div>
  );
};

export default InventoryPage;
