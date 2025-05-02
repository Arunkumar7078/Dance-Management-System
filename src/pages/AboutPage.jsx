// src/pages/AboutPage.jsx
import React from 'react';
import '../styles/about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Our Dance Studio</h1>
        <p>
          At our studio, dance is more than just movement — it's a passion, a lifestyle, and a celebration of expression.
          We are committed to nurturing talent and spreading joy through the art of dance.
        </p>
      </div>
      
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make dance accessible and enjoyable for everyone. Whether you're a beginner or aspiring professional,
          we offer a space where you can grow, shine, and connect with the rhythm of life.
        </p>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <ul className="about-highlights">
          <li>Experienced and passionate instructors</li>
          <li>A wide range of dance styles and levels</li>
          <li>Fun, safe, and inclusive environment</li>
          <li>Performance and competition opportunities</li>
          <li>Flexible class timings and custom packages</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Meet Our Instructors</h2>
        <p>
          Our instructors come from diverse backgrounds in dance and performance, and they bring unmatched energy and professionalism to every class.
        </p>
        <ul className="instructor-list">
          <li><strong>Aarav Sharma</strong> – Hip-Hop & Bollywood Expert</li>
          <li><strong>Diya Mehta</strong> – Classical & Contemporary Specialist</li>
          <li><strong>Karan Raj</strong> – Street Dance & Freestyle Pro</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
