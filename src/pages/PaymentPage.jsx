import React, { useState } from 'react';
import '../styles/payments.css';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: '',
    bank: ''
  });
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setPaymentStatus(null);
        setFormData({
          cardNumber: '',
          expiry: '',
          cvv: '',
          upiId: '',
          bank: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="payment-page">
      <h1>Payment Options</h1>
      
      {paymentStatus === 'success' && (
        <div className="payment-success">
          <i className="fas fa-check-circle"></i>
          <p>Payment Successful!</p>
        </div>
      )}

      <div className="payment-methods">
        <button 
          className={selectedMethod === 'card' ? 'active' : ''}
          onClick={() => setSelectedMethod('card')}
        >
          <i className="far fa-credit-card"></i> Card
        </button>
        <button 
          className={selectedMethod === 'upi' ? 'active' : ''}
          onClick={() => setSelectedMethod('upi')}
        >
          <i className="fas fa-mobile-alt"></i> UPI
        </button>
        <button 
          className={selectedMethod === 'netbanking' ? 'active' : ''}
          onClick={() => setSelectedMethod('netbanking')}
        >
          <i className="fas fa-university"></i> Net Banking
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {selectedMethod === 'card' && (
          <div className="payment-form">
            <input 
              type="text" 
              name="cardNumber"
              placeholder="Card Number" 
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
              pattern="[0-9]{16}"
              title="16-digit card number"
            />
            <div className="form-row">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleInputChange}
                required
                pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
                title="MM/YY format"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
                required
                pattern="[0-9]{3,4}"
                title="3 or 4-digit CVV"
              />
            </div>
          </div>
        )}

        {selectedMethod === 'upi' && (
          <div className="payment-form">
            <input 
              type="text" 
              name="upiId"
              placeholder="yourname@upi" 
              value={formData.upiId}
              onChange={handleInputChange}
              required
              pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9]+"
              title="Enter a valid UPI ID (e.g. name@upi)"
              className="upi-input"
            />
          </div>
        )}

        {selectedMethod === 'netbanking' && (
          <div className="payment-form">
            <select
              name="bank"
              value={formData.bank}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Bank</option>
              <option value="SBI">State Bank of India</option>
              <option value="HDFC">HDFC Bank</option>
              <option value="ICICI">ICICI Bank</option>
            </select>
          </div>
        )}

        <button 
          type="submit" 
          className="pay-button"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Processing...
            </>
          ) : (
            'Pay Now'
          )}
        </button>
      </form>

      <div className="payment-offers">
        <h3><i className="fas fa-gift"></i> Special Offers</h3>
        <p><i className="fas fa-percentage"></i> 10% discount for early payments</p>
        <p><i className="fas fa-rupee-sign"></i> ₹500 cashback on referrals</p>
      </div>
    </div>
  );
};

export default PaymentPage;