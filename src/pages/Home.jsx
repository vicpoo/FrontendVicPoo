import React from 'react';
import Menu from '../components/organisms/Menu';
import Footer from "../components/molecules/Footer";

const Home = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
