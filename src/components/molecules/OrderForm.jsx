import React, { useState, useEffect } from 'react';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';

const OrderForm = ({ onSubmit, initialValues }) => {
  const [client_id, setClientId] = useState('');
  const [products, setProducts] = useState([{ coffee_id: '', quantity: '' }]);

  useEffect(() => {
    if (initialValues) {
      setClientId(initialValues.client_id || '');
      setProducts(initialValues.products || [{ coffee_id: '', quantity: '' }]);
    }
  }, [initialValues]);

  const handleSubmit = () => {
    const newOrder = {
      client_id: parseInt(client_id),
      products: products.map(product => ({
        coffee_id: parseInt(product.coffee_id),
        quantity: parseInt(product.quantity)
      })),
      created_by: 'admin',
      updated_by: 'admin',
      deleted: 0
    };
    onSubmit(newOrder);
    setClientId('');
    setProducts([{ coffee_id: '', quantity: '' }]);
  };

  const handleProductChange = (index, key, value) => {
    const newProducts = [...products];
    newProducts[index][key] = value;
    setProducts(newProducts);
  };

  const addProductField = () => {
    setProducts([...products, { coffee_id: '', quantity: '' }]);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full max-w-sm">
      <TextInput label="ID del Cliente" value={client_id} onChange={(e) => setClientId(e.target.value)} />
      {products.map((product, index) => (
        <div key={index}>
          <TextInput label="ID del Café" value={product.coffee_id} onChange={(e) => handleProductChange(index, 'coffee_id', e.target.value)} />
          <TextInput label="Cantidad" value={product.quantity} onChange={(e) => handleProductChange(index, 'quantity', e.target.value)} />
        </div>
      ))}
      <Button text="Agregar Producto" onClick={addProductField} />
      <Button text={initialValues ? "Actualizar Orden" : "Agregar Orden"} onClick={handleSubmit} />
    </div>
  );
};

export default OrderForm;
