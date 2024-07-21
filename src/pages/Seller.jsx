import React from 'react';
import SellerDashboard from '../components/organisms/SellerDashboard';

const Seller = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('public/Imagenes/cafe09.jpg')" }}>

      <SellerDashboard />
    </div>
  );
};

export default Seller;
