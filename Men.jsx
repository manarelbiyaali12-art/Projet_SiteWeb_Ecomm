import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, translations } from '../data/products';

function Men({ addToCart, language }) {
  const { category } = useParams();
  const t = translations[language];

  const renderProducts = (categoryKey, title) => {
    const items = products.hommes[categoryKey];
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
        <h1 className="page-title">{t.men}</h1>
        
        {!category || category === 'pantalons' ? renderProducts('pantalons', t.pants) : null}
        {!category || category === 'chemises' ? renderProducts('chemises', t.shirts) : null}
        {!category || category === 'vestes' ? renderProducts('vestes', t.jackets) : null}
      </div>
    </div>
  );
}

export default Men;