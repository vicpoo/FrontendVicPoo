import React from 'react';
import Home from '../src/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/Home' element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;