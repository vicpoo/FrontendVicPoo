import React from 'react';
import Swal from 'sweetalert2';

const Navbar = () => {
  const handleContactClick = () => {
    Swal.fire({
      title: "Contactanos ",
      html: `
      <p>Teléfono:9613147534</p>
      <p>romeo5919@hotmail.com</p>
       `,
      imageUrl: "public/Imagenes/Logo.jpeg",
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: "Logo"
    });
  };

  return (
    <nav className="flex justify-between bg-[#CFB494] p-6 sticky top-0 z-50">
      <div className="flex space-x-4">
        <a href="#descripcion" className="text-2xl text-white hover:text-gray-700">Descripción</a>
        <a href="#productos" className="text-2xl text-white hover:text-gray-700">Productos</a>
        <a href="#precios" className="text-2xl text-white hover:text-gray-700">Precios</a>
        <a href="#footer" onClick={handleContactClick} className="text-2xl text-white hover:text-gray-700">Contactanos</a>
      </div>
      <div className="flex items-center space-x-2">
        <i className="fa fa-shopping-cart text-2xl text-white hover:text-gray-700"></i>
        <i className="fa fa-user text-2xl text-white hover:text-gray-700"></i>
      </div>
    </nav>
  );
};

export default Navbar;
