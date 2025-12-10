import React from 'react';
import { translations } from '../data/products';

function ProductCard({ product, onAddToCart, language }) {
  const t = translations[language];

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price} MAD</p>
        <button 
          className="btn-primary"
          onClick={() => onAddToCart(product)}
        >
          {t.addToCart}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
