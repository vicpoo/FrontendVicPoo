import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const OrderTable = ({ orders, onDelete, onEdit }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 border-b">ID</th>
          <th className="py-2 border-b">Cliente</th>
          <th className="py-2 border-b">Productos</th>
          <th className="py-2 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.order_id}>
            <td className="border px-4 py-2">{order.order_id}</td>
            <td className="border px-4 py-2">{order.client_id}</td>
            <td className="border px-4 py-2">
              {order.products.map((product, index) => (
                <div key={index}>
                  Café ID: {product.coffee_id}, Cantidad: {product.quantity}
                </div>
              ))}
            </td>
            <td className="border px-4 py-2 flex items-center space-x-2">
              <button onClick={() => onEdit(order)} className="text-yellow-500 hover:text-yellow-700">
                <FaEdit />
              </button>
              <button onClick={() => onDelete(order.order_id)} className="text-red-500 hover:text-red-700">
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
