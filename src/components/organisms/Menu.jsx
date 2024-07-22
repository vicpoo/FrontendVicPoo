import React from 'react';
import Navbar from '../molecules/Navbar';
import ContentSection from './ContentSection';
import Footer from '../molecules/Footer';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(public/Imagenes/heroicSection.jpg)' }}>
        <Navbar />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <Text className="text-4xl font-bold text-white mb-8">
            Comienza bien el día tomando el mejor café orgánico.
          </Text>
          <Text className="text-xl text-white">
            Encuentra nuestros productos y todo sobre ellos.
          </Text>
          <Link to="/Catalogo">
            <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded">Tienda</button>
          </Link>
        </div>
      </div>

      <ContentSection id="descripcion" title="Sobre Nosotros" style={{ backgroundColor: '#fcd5ce', padding: '4rem 2rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-left mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Quiénes Somos ...</h3>
            <Text className="text-lg text-gray-800">
              Microempresa creada hace 7 años, en el municipio de Motozintla, Chiapas; nacida de la necesidad de apoyar a productores de café de la dependencia Sagarpa conocido como FAPPA (fondo para el apoyo a proyectos productivos en núcleos agrarios); para elaborar café con productos artesanales y naturales que tiene un manejo agroecológico que promueve la protección del medio ambiente y ofrece un mercado sano sin uso de agroquímicos, LO QUE NOS CONVIERTE EN UN PRODUCTO COMPLETAMENTE ORGÁNICO.
            </Text>
          </div>
          <img src="public/Imagenes/sobreNosotros.jpg" alt="Sobre Nosotros" className="w-50 h-60 rounded-full object-cover shadow-lg" />
        </div>
      </ContentSection>

      <ContentSection id="productos" title="Café de Excelencia" style={{ padding: '4rem 2rem' }}>
        <Text className="text-xl font-semibold text-gray-700 mt-4">
          Descubre más de nosotros
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="flex flex-col items-center">
            <Image src="public/Imagenes/recoleccionCAfe.jpg" alt="cosecha de Café" className="w-49 h-50 rounded-full object-cover shadow-lg" />
            <h3 className="text-xl font-semibold text-gray-700 mt-4">Cosecha de Café</h3>
            <Text className="text-center text-lg text-gray-800 mt-2">
              Nos encargamos que nuestras cosechas sean las mejores para mejor experiencia y degustación al cliente.
            </Text>
          </div>

          <div className="flex flex-col items-center">
            <Image src="public/Imagenes/Tostado.jpg" alt="Secado de los granos del café" className="w-49 h-50 rounded-full object-cover shadow-lg" />
            <h3 className="text-xl font-semibold text-gray-700 mt-4">Secado de los granos del café</h3>
            <Text className="text-center text-lg text-gray-800 mt-2">
              Nuestra especialidad sobre el uso a las camas africanas dentro de los secadores ecológicos; extendemos con una palita de madera para no contaminar los granos con la grasa de las manos.
            </Text>
          </div>

          <div className="flex flex-col items-center">
            <Image src="public/Imagenes/FertilizanteC.jpg" alt="Fertilizantes y más" className="w-49 h-50 rounded-full object-cover shadow-lg" />
            <h3 className="text-xl font-semibold text-gray-700 mt-4">Fertilizantes y más...</h3>
            <Text className="text-center text-lg text-gray-800 mt-2">
              Café de especialidad que ya venden los productores y los envases de refresco contienen lixiviados (abonos orgánicos líquidos) que usan los productores para no aplicar productos químicos y producir de manera agroecológica.
            </Text>
          </div>

          <div className="flex flex-col items-center">
            <Image src="public/Imagenes/cafe00111.jpg" alt="Exhibición de Café" className="w-49 h-50 rounded-full object-cover shadow-lg" />
            <h3 className="text-xl font-semibold text-gray-700 mt-4">Exhibición de Café</h3>
            <Text className="text-center text-lg text-gray-800 mt-2">
              Nuestros productos se exhibieron y vendieron en Oaxaca del 11 al 13 de junio del presente año en la feria internacional de agroecología.
            </Text>
          </div>
        </div>
      </ContentSection>

      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(public/Imagenes/presentation.jpg)' }}>
        <div className="absolute inset-0 flex flex-row">
          <div className="w-1/2 "></div> {/* Parte sin opacidad */}
          <div className="w-1/2 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <div className="max-w-md text-center">
              <Text className="text-4xl font-bold text-white mb-8 shadow-lg">
                Descubre ahora nuestros productos para darle Sabor a tu vida.
              </Text>
              <Text className="text-xl text-white shadow-lg">
                Llámanos – 961 314 7534
              </Text>
              <Link to="/Catalogo">
                <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded">TIENDA</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer id="footer" />
    </div>
  );
};

export default Menu;
