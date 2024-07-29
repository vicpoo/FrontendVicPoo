import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const OrderCoffeeManager = ({ orderId }) => {
  const [selectedCoffeeId, setSelectedCoffeeId] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [pricePerUnit, setPricePerUnit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [coffees, setCoffees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://100.27.97.251/api/coffee')
      .then(response => {
        if (Array.isArray(response.data)) {
          setCoffees(response.data);
        } else {
          setError('Unexpected response format');
        }
      })
      .catch(error => setError(`Error fetching coffees: ${error.message}`));
  }, []);

  const handleAddCoffee = () => {
    if (!orderId || !selectedCoffeeId || quantity <= 0 || totalPrice <= 0) {
      toast.error('Please fill in all fields correctly.');
      return;
    }

    const now = new Date().toISOString(); // Obtén la fecha actual en formato ISO

    const orderCoffeeData = {
      order_id: orderId,
      coffee_id: parseInt(selectedCoffeeId, 10),
      quantity: quantity,
      price: totalPrice, // Guarda el precio total (precio por unidad * cantidad)
      created_at: now,
      created_by: 'admin',
      updated_at: now,
      updated_by: 'admin',
      deleted: false // Usa 'false' para representar el valor 0
    };

    axios.post('http://100.27.97.251/api/order_coffee', orderCoffeeData)
      .then(response => {
        toast.success('Coffee added to order successfully');
        setSelectedCoffeeId('');
        setQuantity(0);
        setPricePerUnit(0);
        setTotalPrice(0);
      })
      .catch(error => {
        console.error('Error adding coffee to order:', error.response?.data || error.message);
        toast.error('Error adding coffee to order');
      });
  };

  const handleCoffeeChange = (e) => {
    const coffeeId = e.target.value;
    setSelectedCoffeeId(coffeeId);
    
    const selectedCoffee = coffees.find(coffee => coffee.coffee_id === parseInt(coffeeId, 10));
    if (selectedCoffee) {
      setPricePerUnit(selectedCoffee.price); // Precio por unidad
      setTotalPrice(selectedCoffee.price * quantity); // Calcula el precio total
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10) || 0;
    setQuantity(newQuantity);

    const selectedCoffee = coffees.find(coffee => coffee.coffee_id === parseInt(selectedCoffeeId, 10));
    if (selectedCoffee) {
      setTotalPrice(selectedCoffee.price * newQuantity); // Recalcula el precio total cuando cambie la cantidad
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Coffee to Order</h2>
      
      <div className="mb-4">
        <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">Order ID:</label>
        <input
          type="text"
          id="orderId"
          value={orderId}
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="coffeeId" className="block text-sm font-medium text-gray-700">Coffee:</label>
        <select
          id="coffeeId"
          value={selectedCoffeeId}
          onChange={handleCoffeeChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Select Coffee</option>
          {coffees.length > 0 ? (
            coffees.map(coffee => (
              <option key={coffee.coffee_id} value={coffee.coffee_id}>
                {coffee.name} (ID: {coffee.coffee_id})
              </option>
            ))
          ) : (
            <option value="">No coffees available</option>
          )}
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="pricePerUnit" className="block text-sm font-medium text-gray-700">Price per Unit:</label>
        <input
          type="number"
          id="pricePerUnit"
          value={pricePerUnit}
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="totalPrice" className="block text-sm font-medium text-gray-700">Total Price:</label>
        <input
          type="number"
          id="totalPrice"
          value={totalPrice}
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <button
        onClick={handleAddCoffee}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add Coffee
      </button>
      
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default OrderCoffeeManager;
