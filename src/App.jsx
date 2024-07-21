import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Administrador from './pages/Administrador';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularyInventary from './pages/FormularioInventary';
import Seller from './pages/Seller';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/FormularyInventary' element={<FormularyInventary />} />
          <Route path='/Administrador' element={<Administrador />} />
          <Route path='/Seller' element={<Seller/>} />
          <Route path='/Menu' element={<Menu/>} />
          

        </Routes>
      </main>
    </Router>
  );
}

export default App;