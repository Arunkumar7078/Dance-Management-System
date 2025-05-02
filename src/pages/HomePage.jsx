import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Highlights from '../components/Highlights';
import '../styles/home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <Highlights />
    </div>
  );
};

export default HomePage;