import React, { useState } from 'react';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';

const ClientForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, lastName, address, phone });
    setName('');
    setLastName('');
    setAddress('');
    setPhone('');
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full max-w-sm">
      <TextInput label="Nombre del cliente" value={name} onChange={(e) => setName(e.target.value)} />
      <TextInput label="Apellido del cliente" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <TextInput label="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} />
      <TextInput label="Número telefónico" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <Button text="Agregar" onClick={handleSubmit} />
    </div>
  );
};

export default ClientForm;
