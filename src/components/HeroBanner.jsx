// src/components/Home/HeroBanner.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-banner">
      {/* ... other content */}
      <div className="cta-buttons">
        <button 
          className="cta-button join" 
          onClick={() => navigate('/courses')}
        >
          Join Now
        </button>
        <button 
          className="cta-button courses"
          onClick={() => navigate('/courses')}
          >
          View Courses
        </button>
        <button 
          className="cta-button trial"
          onClick={() => navigate('/contact')}
        >
          Book a Trial Class
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;