import React from 'react';
import Swal from 'sweetalert2';
import Image from '../atoms/Image';

const Navbar = () => {
  const handleContactClick = () => {
    Swal.fire({
      title: "Contáctanos",
      html: `<p>Teléfono: 9613147534</p><p>Email: romeo5919@hotmail.com</p>`,
      imageUrl: "public/Imagenes/Logo.jpeg",
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: "Logo"
    });
  };

  return (
    <nav className="flex justify-between items-center p-6 sticky top-0 z-50 bg-opacity-0 bg-white">
      <div className="flex items-center space-x-4">
        <Image src="public/Imagenes/Logo.jpeg" alt="Logo" className="w-16 h-16" />
        <a href="#descripcion" className="text-xl text-white hover:text-gray-700 hidden md:inline">INICIO</a>
        <a href="#productos" className="text-xl text-white hover:text-gray-700 hidden md:inline">PRODUCTOS</a>
        <a href="#precios" className="text-xl text-white hover:text-gray-700 hidden md:inline">MI CUENTA</a>
        <button onClick={handleContactClick} className="text-xl text-white hover:text-gray-700 hidden md:inline">CONTÁCTANOS</button>
      </div>
      <div>
        <a href="#tienda" className="bg-pink-500 text-white text-xl px-4 py-2 rounded">TIENDA</a>
      </div>
    </nav>
  );
};

export default Navbar;
