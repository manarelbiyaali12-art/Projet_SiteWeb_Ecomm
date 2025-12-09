import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, translations } from '../data/products';

function Women({ addToCart, language }) {
  const { category } = useParams();
  const t = translations[language];

  const renderProducts = (categoryKey, title) => {
    const items = products.femmes[categoryKey];
    return (
      <div className="category-section">
        <h2 className="category-title">{title}</h2>
        <div className="products-grid">
          {items.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              language={language}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">{t.women}</h1>
        
        {!category || category === 'robes' ? renderProducts('robes', t.dresses) : null}
        {!category || category === 'manteaux' ? renderProducts('manteaux', t.coats) : null}
        {!category || category === 'pantalons' ? renderProducts('pantalons', t.pants) : null}
      </div>
    </div>
  );
}

export default Women;