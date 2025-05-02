import React from 'react';
import '../styles/terms.css';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <h1>Terms & Conditions</h1>
      
      <section className="terms-section">
        <h2>Membership Policy</h2>
        <p>All memberships are non-transferable and non-refundable.</p>
      </section>

      <section className="terms-section">
        <h2>Cancellation Policy</h2>
        <p>24-hour notice required for class cancellations.</p>
      </section>

      <section className="terms-section">
        <h2>Code of Conduct</h2>
        <p>All students must adhere to our studio etiquette rules.</p>
      </section>
    </div>
  );
};

export default TermsPage;