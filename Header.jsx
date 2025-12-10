import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import LanguageSelector from './LanguageSelector';
import { translations } from '../data/products';
import './Header.css';

function Header({ cart, setCart, language, setLanguage }) {
  const [showWomenMenu, setShowWomenMenu] = useState(false);
  const [showMenMenu, setShowMenMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  
  const t = translations[language];

  const handleCategoryClick = (gender, category) => {
    navigate(`/${gender}/${category}`);
    setShowWomenMenu(false);
    setShowMenMenu(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">MARSHIKA</Link>
        
        <nav className="main-nav">
          <div 
            className="nav-item"
            onMouseEnter={() => setShowWomenMenu(true)}
            onMouseLeave={() => setShowWomenMenu(false)}
          >
            <Link to="/femmes">{t.women}</Link>
            {showWomenMenu && (
              <div className="dropdown-menu">
                <button onClick={() => handleCategoryClick('femmes', 'robes')}>{t.dresses}</button>
                <button onClick={() => handleCategoryClick('femmes', 'manteaux')}>{t.coats}</button>
                <button onClick={() => handleCategoryClick('femmes', 'pantalons')}>{t.pants}</button>
              </div>
            )}
          </div>

          <div 
            className="nav-item"
            onMouseEnter={() => setShowMenMenu(true)}
            onMouseLeave={() => setShowMenMenu(false)}
          >
            <Link to="/hommes">{t.men}</Link>
            {showMenMenu && (
              <div className="dropdown-menu">
                <button onClick={() => handleCategoryClick('hommes', 'pantalons')}>{t.pants}</button>
                <button onClick={() => handleCategoryClick('hommes', 'chemises')}>{t.shirts}</button>
                <button onClick={() => handleCategoryClick('hommes', 'vestes')}>{t.jackets}</button>
              </div>
            )}
          </div>

          <div className="nav-item">
                     <Link to="/enfants">{t.kids}</Link>
            </div>
        </nav>
        <div className="header-actions">
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <button 
            className="cart-icon"
            onClick={() => setShowCart(!showCart)}
          >
            {t.cart}
            {cart.length > 0 && (
              <span className="cart-count">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>

      {showCart && (
        <Cart 
          cart={cart} 
          setCart={setCart} 
          onClose={() => setShowCart(false)}
          language={language}
        />
      )}
    </header>
  );
}
export default Header;
