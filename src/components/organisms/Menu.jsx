import React from 'react';
import Navbar from '../molecules/Navbar';
import ContentSection from './ContentSection';
import Footer from '../molecules/Footer'
import Image from '../atoms/Image';
import Text from '../atoms/Text';

const Menu = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <ContentSection id="topImage" topImage="public/Imagenes/Romeo.jpeg">
      <ContentSection id="descripcion" title="Descripción">
      <Text className="text-3xl mb-8" > Microempresa creada aproximadamente hace 7 años, en el municipio
de Motozintla, Chiapas; nacida de la necesidad de apoyar a productores de la dependencia Sagarpa conocido como FAPPA (fondo para el apoyo
  a proyectos productivos en núcleos agrarios), elaborando nuestro café con productos artesanales y naturales que tiene un manejo agroecológico que promueve la protección del medio ambiente y ofrece un
mercado sano sin uso de agroquímicos. </Text>
        <Text className="text-3xl mb-4">Derivado de la busqueda por ampliar la comercialización del producto, se trasladó a la ciudad de Tuxtla Gutiérrez, Chiapas (por ser un mercado más grande).</Text>
        <Text className="text-3xl font-bold mb-3">Café Orgánico</Text>
        <Text className="text-2xl text-green-700 mb-4">100%</Text>
        <Text className="mb-4">
        Productores de Motozintla de Mendoza Chiapas, PRODUCTORES DE LA MICI OCOSINGO,
        CHIAPAS.
        </Text>
      </ContentSection>
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

      <Footer></Footer>
 
    </div>
  );
};

export default Menu;
