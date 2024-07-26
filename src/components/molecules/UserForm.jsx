import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, initialValues }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rolId, setRolId] = useState('');

  useEffect(() => {
    if (initialValues) {
      setFirstname(initialValues.firstname);
      setLastname(initialValues.lastname);
      setUsername(initialValues.username);
      setEmail(initialValues.email);
      setPassword(initialValues.password);
      setRolId(initialValues.rol_id_fk);
    }
  }, [initialValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      firstname,
      lastname,
      username,
      email,
      password,
      rol_id_fk: rolId,
      created_at: new Date().toISOString(),
      created_by: 'admin', // Ajustar según el contexto
      updated_at: new Date().toISOString(),
      updated_by: 'admin', // Ajustar según el contexto
      deleted: false
    };
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{initialValues ? 'Actualizar Usuario' : 'Agregar Usuario'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Apellido</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Rol ID</label>
        <input
          type="number"
          value={rolId}
          onChange={(e) => setRolId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {initialValues ? 'Actualizar Usuario' : 'Agregar Usuario'}
      </button>
    </form>
  );
};

export default UserForm;
