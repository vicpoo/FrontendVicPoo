import React from 'react';
import CoffeeForm from '../components/organisms/CoffeeForm';
import MenuContainer from '../components/molecules/MenuContainer';

function FormularioInventary () {
  const [showSection, setShowSection] = useState(false)
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
              <CoffeeForm/>
            </div>
          )}
        </div>
    </div>
  );
};

export default FormularioInventary;