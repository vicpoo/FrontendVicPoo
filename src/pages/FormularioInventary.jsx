import React from 'react';
import CoffeeForm from '../components/organisms/CoffeeForm';

const FormularyInventary = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('public/Imagenes/cafe09.jpg')" }}>

      <CoffeeForm />
    </div>
  );
};

export default FormularyInventary;