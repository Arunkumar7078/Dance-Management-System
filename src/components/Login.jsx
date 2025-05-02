import React, { useState } from 'react';
import '../styles/auth.css';

const Login = ({ onClose, onSwitch }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Replace with actual API call
      const response = await fakeAuthAPI(formData);
      
      setMessage({ text: 'Login successful!', type: 'success' });
      setTimeout(() => {
        onClose();
        // Redirect or update global auth state here
      }, 1500);
    } catch (error) {
      setMessage({ 
        text: error.message || 'Invalid credentials', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      
      {message.text && (
        <div className={`auth-message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          required
        />
        
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="auth-link" onClick={() => onSwitch()}>
        Don't have an account? Register here
      </p>
    </div>
  );
};

// Mock API function
const fakeAuthAPI = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email && data.password.length >= 6) {
        resolve({ status: 200 });
      } else {
        reject(new Error('Please check your credentials'));
      }
    }, 1000);
  });
};

export default Login;