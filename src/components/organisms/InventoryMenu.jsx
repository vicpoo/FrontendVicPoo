import React from 'react';
import Heading from '../atoms/Heading';
import ButtonGroup from '../molecules/ButtonGroup.jsx';

const InventoryMenu = () => {
  const buttons = ['Inventario', 'Cliente', 'Pedido', 'Reporte','Usuario'];

  return (
    <div className="text-center">
      <Heading text="Administrador" />
      <ButtonGroup buttons={buttons} />
    </div>
  );
};

export default InventoryMenu;
