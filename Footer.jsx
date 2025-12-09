import React from 'react';
import './Footer.css';

function Footer({ language }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">MARSHIKA</div>
        <p className="footer-text">
          {language === 'fr' 
            ? '© 2025 Marshika. Mode de luxe parisienne.'
            : '© 2025 Marshika. Parisian luxury fashion.'}
        </p>
      </div>
    </footer>
  );
}
export default Footer;