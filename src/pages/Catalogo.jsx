import React, { useState, useEffect } from 'react';
import ProductList from '../components/organisms/ProductList';
import NavbarExit from '../components/molecules/NavbarExit';
import axios from 'axios';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://100.27.97.251/api/coffee');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch products when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle product clicks (e.g., for viewing details)
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Close the product details view
  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-pastelPink min-h-screen">
      <NavbarExit />
      <div className="container mx-auto p-4">
        <ProductList 
          products={products.map(({ coffee_id, name, price, image }) => ({
            id: coffee_id,
            title: name,
            price,
            image
          }))} 
          onProductClick={handleProductClick} 
        />

        {selectedProduct && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-3/4 md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
              {selectedProduct.image && (
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="mb-4 rounded w-full h-auto"
                />
              )}
              <p><strong>Price:</strong> {selectedProduct.price}</p>
              <p><strong>Origin:</strong> {selectedProduct.origin || 'N/A'}</p>
              <p><strong>Height:</strong> {selectedProduct.height || 'N/A'}</p>
              <p><strong>Qualification:</strong> {selectedProduct.qualification || 'N/A'}</p>
              <p><strong>Inventory Quantity:</strong> {selectedProduct.inventory_quantity || 'N/A'}</p>
              <button 
                onClick={handleCloseDetails}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
