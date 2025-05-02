// src/components/Home/Highlights.jsx
import React from 'react';
// Update the CSS import to:
import '../styles/home.css';

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="highlight-card">
        <h3>Certified Trainers</h3>
        <p>Learn from industry professionals with years of experience</p>
      </div>
      <div className="highlight-card">
        <h3>Age Groups</h3>
        <p>Programs tailored for Kids, Teens, and Adults</p>
      </div>
      <div className="highlight-card">
        <h3>Dance Styles</h3>
        <p>Hip-hop, Bharatanatyam, Salsa, Ballet, Contemporary, and more</p>
      </div>
      <div className="highlight-card">
        <h3>Flexible Packages</h3>
        <p>Choose from 6-month or 12-month programs</p>
      </div>
    </section>
  );
};

export default Highlights;