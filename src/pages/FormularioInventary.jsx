import React, { useState } from 'react';
import CoffeeForm from '../components/organisms/CoffeeForm';
import MenuContainer from '../components/molecules/MenuContainer';

function FormularioInventary() {
  const [showSection, setShowSection] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const menuItems = ['Agregar', 'Editar', 'Borrar'];

  const handleMenuClick = (item) => {
    setShowSection(false);
    setShowEdit(false);
    setShowDelete(false);

    if (item === 'Agregar') {
      setShowSection(true);
    } else if (item === 'Editar') {
      setShowEdit(true);
    } else if (item === 'Borrar') {
      setShowDelete(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('public/Imagenes/cafe09.jpg')" }}>
      <div className="w-auto md:col-span-1">
        <MenuContainer items={menuItems} onMenuClick={handleMenuClick} />
        {showSection && (
          <div>
            <CoffeeForm />
          </div>
        )}
        {showEdit && (
          <div>
            {/* Componente o formulario de edición */}
            <p>Editar sección aquí</p>
          </div>
        )}
        {showDelete && (
          <div>
            {/* Componente o formulario de borrado */}
            <p>Borrar sección aquí</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormularioInventary;