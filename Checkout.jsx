import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../data/products';
import './checkout.css';

function Checkout({ cart, setCart, language }) {
  const navigate = useNavigate();
  const t = translations[language];
  
  const [form, setForm] = useState({
    phone: '',
    email: '',
    card: ''
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handlePay = () => {
    if (!form.phone || !form.email || !form.card) {
      setError(t.fillFields);
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      setCart([]);
      navigate('/');
    }, 2500);
  };

  if (cart.length === 0 && !success) {
    return (
      <div className="page-content">
        <div className="container">
          <div className="empty-checkout">
            <h2>{t.emptyCart}</h2>
            <p>{t.browseText}</p>
            <button className="btn-primary" onClick={() => navigate('/')}>
              {language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="page-content">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>{t.paymentSuccess}</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="container">
        <div className="checkout-container">
          <div className="checkout-form">
            <h2 className="checkout-title">
              {language === 'fr' ? 'Informations de paiement' : 'Payment Information'}
            </h2>
            
            <div className="form-group">
              <label>{t.phone}</label>
              <input
                type="tel"
                name="phone"
                placeholder="+212 6XX XXX XXX"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>{t.email}</label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>{t.cardNumber}</label>
              <input
                type="text"
                name="card"
                placeholder="XXXX XXXX XXXX XXXX"
                value={form.card}
                onChange={handleChange}
                maxLength="19"
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="checkout-total">
              <span>{t.total}:</span>
              <span className="total-amount">{total} MAD</span>
            </div>

            <button className="btn-primary checkout-btn" onClick={handlePay}>
              {t.confirm}
            </button>
          </div>

          <div className="order-summary">
            <h3 className="summary-title">
              {language === 'fr' ? 'Résumé de la commande' : 'Order Summary'}
            </h3>
            {cart.map(item => (
              <div key={item.id} className="summary-item">
                <img src={item.image} alt={item.name} />
                <div className="summary-info">
                  <p className="summary-name">{item.name}</p>
                  <p className="summary-details">
                    {item.quantity} x {item.price} MAD
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;