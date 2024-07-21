import React from 'react';
import MenuContainer from '../molecules/MenuContainer';


const SellerDashboard = () => {
  const menuItems = ['Pedido', 'Cliente'];

  const handleMenuClick = (item) => {
    alert(`Clicked on ${item}`);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
     
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-8">Vendedor</h1>
        <MenuContainer items={menuItems} onMenuClick={handleMenuClick} />
      </div>
    </div>
  );
};

export default SellerDashboard;
