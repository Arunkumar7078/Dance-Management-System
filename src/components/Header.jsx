import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import '../styles/header.css';
import '../styles/auth.css';

const Header = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Rhythm Dance Studio</Link>
      </div>
      
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/competitions">Competitions</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/payments" className="nav-link">
    <i className="fas fa-credit-card"></i> Payments
  </Link>
      </nav>
      
      <div className="auth-buttons">
        <button 
          className="login-btn"
          onClick={() => { setShowAuthModal(true); setIsLogin(true); }}
        >
          Login
        </button>
        <button 
          className="register-btn"
          onClick={() => { setShowAuthModal(true); setIsLogin(false); }}
        >
          Register
        </button>
      </div>

      {showAuthModal && (
        <div className="modal-overlay">
          <div className="auth-modal">
            <button 
              className="close-button" 
              onClick={() => setShowAuthModal(false)}
            >
              ×
            </button>
            {isLogin ? (
              <Login 
                onClose={() => setShowAuthModal(false)} 
                onSwitch={handleAuthSwitch}
              />
            ) : (
              <Register 
                onClose={() => setShowAuthModal(false)} 
                onSwitch={handleAuthSwitch}
              />
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;