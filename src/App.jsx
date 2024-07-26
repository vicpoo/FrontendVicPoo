import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Administrador from './pages/AdminPage';
import FormularioInventary from './pages/FormularioInventary';
import Catalogo from './pages/Catalogo';
import InventoryPage from './pages/InventoryPage';
import VendorPage from './pages/VendorPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Administrador' element={<Administrador/>} />
          <Route path="/vendedor" element={<VendorPage />} />
          <Route path='/Formulario' element={<FormularioInventary/>} />
          <Route path='/Catalogo' element={<Catalogo />} />
          <Route path="/inventario" element={<InventoryPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
