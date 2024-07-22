import React, { useState } from 'react';
import Image from '../atoms/Image';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

const NavbarExit = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const toggleSocialLinks = () => {
    setShowSocialLinks(!showSocialLinks);
  };

  return (
    <nav className="flex justify-between items-center p-6 sticky top-0 z-50 bg-opacity-0 bg-white">
      <div className="flex items-center space-x-4">
        <Image src="public/Imagenes/Logo.jpeg" alt="Logo" className="w-16 h-16" />
        <Link to="/" className="text-xl text-white hover:text-gray-700 hidden md:inline">INICIO</Link>
        <Link to="/Catalogo" className="text-xl text-white hover:text-gray-700 hidden md:inline">Tienda</Link>
        <button onClick={toggleSocialLinks} className="text-xl text-white hover:text-gray-700 hidden md:inline">
          REDES SOCIALES
        </button>
        {showSocialLinks && (
          <div className="absolute top-3 right-4 mt-2 bg-white shadow-lg rounded-md py-2 flex flex-col items-center">
            <a href="https://www.facebook.com/profile.php?id=61562810108403&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 hover:bg-gray-100 rounded-md">
              <FaFacebook size={30} />
            </a>
            <a href="https://x.com/las_cafe03?s=21 " target="_blank" rel="noopener noreferrer" className="p-2 text-blue-400 hover:bg-gray-100 rounded-md">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com/las03_negritas?igsh=MTl3czdwNnpudTZyMw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-2 text-pink-500 hover:bg-gray-100 rounded-md">
              <FaInstagram size={30} />
            </a>
          </div>
        )}
      </div>
      <div className="flex-grow flex items-center justify-start">
        <Link to="/Login">
        <button className="bg-pink-500 text-white text-xl px-4 py-2 rounded ml-4">
          LOGIN
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarExit;
