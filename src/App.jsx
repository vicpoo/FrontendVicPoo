import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Administrador from './pages/Administrador';
import FormularioInventary from './pages/FormularioInventary';
import Seller from './pages/Seller';
import Catalogo from './pages/Catalogo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Administrador' element={<Administrador/>} />
          <Route path='/Seller' element={<Seller />} />
          <Route path='/Formulario' element={<FormularioInventary/>} />
          <Route path='/Catalogo' element={<Catalogo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
