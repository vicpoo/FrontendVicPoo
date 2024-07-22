import React, { useState, useEffect } from 'react';
import Navbar from '../components/molecules/Navbar';
import ProductList from '../components/organisms/ProductList';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer una llamada a la API para obtener los productos
    const fetchProducts = async () => {
      // Simulación de llamada a API
      const productsData = [
        { id: 1, title: 'Product 1', price: '$10', description: 'Description 1', image: 'url1' },
        { id: 2, title: 'Product 2', price: '$20', description: 'Description 2', image: 'url2' },
        { id: 3, title: 'Product 3', price: '$30', description: 'Description 2', image: 'url3' },
        // ... más productos
      ];
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    console.log(`Product with id ${id} clicked`);
    // Aquí puedes manejar la lógica para mostrar los detalles del producto
  };

  return (
    <div className="bg-pastelPink min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <ProductList products={products} onProductClick={handleProductClick} />
      </div>
    </div>
  );
};

export default CatalogPage;
