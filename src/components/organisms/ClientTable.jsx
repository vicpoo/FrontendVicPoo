import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ClientTable = ({ clients, onDelete, onEdit }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 border-b">ID</th>
          <th className="py-2 border-b">Nombre</th>
          <th className="py-2 border-b">Email</th>
          <th className="py-2 border-b">Teléfono</th>
          <th className="py-2 border-b">Dirección</th>
          <th className="py-2 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.client_id}>
            <td className="border px-4 py-2">{client.client_id}</td>
            <td className="border px-4 py-2">{client.firstname} {client.lastname}</td>
            <td className="border px-4 py-2">{client.email}</td>
            <td className="border px-4 py-2">{client.phone}</td>
            <td className="border px-4 py-2">{client.address}</td>
            <td className="border px-4 py-2 flex items-center space-x-2">
              <button onClick={() => onEdit(client)} className="text-yellow-500 hover:text-yellow-700">
                <FaEdit />
              </button>
              <button onClick={() => onDelete(client.client_id)} className="text-red-500 hover:text-red-700">
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
