// Admin.jsx
import React from 'react';
import AdminDashboard from '../components/organisms/AdminDashboard';

const Admin = () => {
  return (
    <div className="flex h-screen bg-cover bg-center" style={{ backgroundImage: "url('public/Imagenes/cafe09.jpg')" }}>
      <AdminDashboard/>
    </div>
  );
};

export default Admin;
