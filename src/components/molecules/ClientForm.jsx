import React, { useState, useEffect } from 'react';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';

const ClientForm = ({ onSubmit, initialValues }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (initialValues) {
      setFirstname(initialValues.firstname || '');
      setLastname(initialValues.lastname || '');
      setEmail(initialValues.email || '');
      setPhone(initialValues.phone || '');
      setAddress(initialValues.address || '');
    }
  }, [initialValues]);

  const handleSubmit = () => {
    const newClient = {
      firstname,
      lastname,
      email,
      phone,
      address,
      created_by: 'admin',
      updated_by: 'admin',
      deleted: '0',
    };
    onSubmit(newClient);
    // Clear fields
    setFirstname('');
    setLastname('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full max-w-sm">
      <TextInput label="Nombre" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      <TextInput label="Apellido" value={lastname} onChange={(e) => setLastname(e.target.value)} />
      <TextInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextInput label="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <TextInput label="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} />
      <Button text={initialValues ? "Actualizar" : "Agregar"} onClick={handleSubmit} />
    </div>
  );
};

export default ClientForm;
