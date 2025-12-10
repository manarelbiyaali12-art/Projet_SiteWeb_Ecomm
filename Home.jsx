import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../data/products';
import './Home.css';

function Home({ language }) {
  const t = translations[language];

  return (
    <div className="home-page page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">MARSHIKA</h1>
          <p className="hero-subtitle">
            {language === 'fr' ? 'L\'Excellence Parisienne' : 'Parisian Excellence'}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="brand-story">
          <h2 className="story-title">
            {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
          </h2>
          <p className="story-text">
            {t.brandStory}
          </p>
        </div>

        <div className="categories-showcase">
          <Link to="/femmes" className="category-card">
            <div className="category-image" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800)'
            }}></div>
            <h3 className="category-name">{t.women}</h3>
          </Link>

          <Link to="/hommes" className="category-card">
            <div className="category-image" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800)'
            }}></div>
            <h3 className="category-name">{t.men}</h3>
          </Link>

          <Link to="/enfants" className="category-card">
            <div className="category-image" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800)'
            }}></div>
            <h3 className="category-name">{t.kids}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;