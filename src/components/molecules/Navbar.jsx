import React from 'react';
import Image from '../atoms/Image';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleContactClick = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center p-6 sticky top-0 z-50 bg-opacity-0 bg-white">
      <div className="flex items-center space-x-4">
        <Image src="public/Imagenes/Logo.jpeg" alt="Logo" className="w-16 h-16" />
        <Link to="/" className="text-xl text-white hover:text-gray-700 hidden md:inline">INICIO</Link>
        <a href="#descripcion" className="text-xl text-white hover:text-gray-700 hidden md:inline">SOBRE NOSOTROS</a>
        <button onClick={handleContactClick} className="text-xl text-white hover:text-gray-700 hidden md:inline">CONTÁCTANOS</button>
      </div>
      <div>
        <button className="bg-pink-500 text-white text-xl px-4 py-2 rounded">LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;
