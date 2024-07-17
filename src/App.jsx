import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inventory from './pages/Inventory';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Inventory' element={<Inventory />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;