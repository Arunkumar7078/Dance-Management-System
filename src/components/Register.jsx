import React, { useState } from 'react';
import '../styles/auth.css';

const Register = ({ onClose, onSwitch }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: 'Passwords do not match', type: 'error' });
      return;
    }

    setLoading(true);
    
    try {
      // Replace with actual API call
      const response = await fakeRegisterAPI(formData);
      
      setMessage({ text: 'Registration successful!', type: 'success' });
      setTimeout(() => {
        onClose();
        onSwitch(); // Switch to login form
      }, 1500);
    } catch (error) {
      setMessage({ 
        text: error.message || 'Registration failed', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      
      {message.text && (
        <div className={`auth-message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          minLength="6"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          required
        />
        
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      <p className="auth-link" onClick={() => onSwitch()}>
        Already have an account? Login here
      </p>
    </div>
  );
};

// Mock API function
const fakeRegisterAPI = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email && data.password.length >= 6) {
        resolve({ status: 201 });
      } else {
        reject(new Error('Registration failed'));
      }
    }, 1000);
  });
};

export default Register;