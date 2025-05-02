// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Update the CSS import to:
import '../styles/main.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/competitions">Competitions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Payment Options</h3>
          <ul>
            <li>Credit/Debit Cards</li>
            <li>UPI Payments</li>
            <li>Net Banking</li>
            <li>EMI Options</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@rhythmdance.com</p>
          <p>Phone: +91 9876543210</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rhythm Dance Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;