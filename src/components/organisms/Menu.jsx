import React from 'react';
import Navbar from '../molecules/Navbar';
import ContentSection from './ContentSection';
import Image from '../atoms/Image';
import Text from '../atoms/Text';

const Menu = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <ContentSection id="descripcion" title="Descripción" topImage="public/Imagenes/Romeo.jpeg">
        <Text className="text-3xl font-bold mb-2">Café Orgánico</Text>
        <Text className="text-2xl text-green-700 mb-4">100%</Text>
        <Text className="mb-4">
        Productores de Motozintla de Mendoza chiapas , PRODUCTORES DE LA MICI OCOSINGO
        CHIAPAS .
        </Text>
        <div className="flex justify-center space-x-4">
  <Image src="public/Imagenes/Cafe02.jpeg" alt="Image 1" className="w-1/2 h-48 rounded-lg shadow-lg" />
  <Image src="public/Imagenes/Cafe04.jpeg" alt="Image 2" className="w-1/2 h-48 rounded-lg shadow-lg" />
  <Image src="public/Imagenes/Cafe03.jpeg" alt="Image 3" className="w-1/2 h-48 rounded-lg shadow-lg" />
</div>

      </ContentSection>
      <ContentSection id="productos" title="Productos">
  <div className="grid grid-cols-3 gap-4">
    <Image src="public/Imagenes/Cafe02.jpeg" alt="Product Image 1" className="w-full h-auto rounded-lg shadow-lg" />
    <Image src="public/Imagenes/Cafe03.jpeg" alt="Product Image 2" className="w-full h-auto rounded-lg shadow-lg" />
    <Image src="public/Imagenes/Cafe04.jpeg" alt="Product Image 3" className="w-full h-auto rounded-lg shadow-lg" />
    <Image src="public/Imagenes/Cafe8.jpeg" alt="Product Image 4" className="w-full h-auto rounded-lg shadow-lg" />
    <Image src="public/Imagenes/Cafe06.jpeg" alt="Product Image 5" className="w-full h-auto rounded-lg shadow-lg" />
    <Image src="public/Imagenes/Cafe05.jpeg" alt="Product Image 6" className="w-full h-auto rounded-lg shadow-lg" />
  </div>
</ContentSection>

      <ContentSection id="precios" title="Lista de precios">
        <ul className="list-none text-left mx-auto max-w-xs">
          <li className="flex justify-between mb-2">café gourmet 1kg. <span className="font-bold">3.00</span></li>
          <li className="flex justify-between mb-2">café gourmet 500gr. <span className="font-bold">3.00</span></li>
          <li className="flex justify-between mb-2">café gourmet 250gr. <span className="font-bold">3.50</span></li>
          <li className="flex justify-between mb-2">café tradicional 1kg. <span className="font-bold">4.20</span></li>
          <li className="flex justify-between mb-2">café tradicional 500gr. <span className="font-bold">4.50</span></li>
          <li className="flex justify-between mb-2">café tradicional 250gr. <span className="font-bold">5.25</span></li>
          <li className="flex justify-between mb-2">chocolate artesanal 1kg. <span className="font-bold">4.50</span></li>
          <li className="flex justify-between mb-2">chocolate amargo 1kg. <span className="font-bold">5.00</span></li>
          <li className="mb-2">chocolate con cacahuate.</li>
          <li className="mb-2">chocolate con cacao fermentado.</li>
          <li className="mb-2">café en grano</li>
          <li className="mb-2">chocolate en polvo</li>
        </ul>
      </ContentSection>
    </div>
  );
};

export default Menu;
