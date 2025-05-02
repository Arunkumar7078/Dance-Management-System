import React from 'react';
import '../styles/competitions.css';

const CompetitionsPage = () => {
  return (
    <div className="competitions-page">
      
      <h1>
        
        Dance Competitions</h1>
      
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="competition-card">
          <h3>Annual Dance Championship</h3>
          <p>Date: December 15, 2023</p>
          <p>Location: City Arts Theater</p>
          <button className="register-btn">Register Now</button>
        </div>
      </section>

      <section className="past-winners">
        <h2>Past Winners</h2>
        <ul className="winner-list">
          <li><strong>Aarav Kapoor</strong> – Winner of Solo Ballet Performance</li>
          <li><strong>Meera Iyer</strong> – Winner of Hip-Hop Freestyle Championship</li>
          <li><strong>Zayan Khan</strong> – Winner of Salsa Duo Performance (Lead)</li>
        </ul>
      </section>
    </div>
  );
};

export default CompetitionsPage;
