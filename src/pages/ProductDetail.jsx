import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

function ProductDetail({ addToCart, language }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = Object.values(products)
    .flat()
    .find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="page-content container">Produit non trouvé</div>;
  }

  return (
    <div className="page-content">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Retour
        </button>
        
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name[language]} />
          </div>
          
          <div className="product-detail-info">
            <h1>{product.name[language]}</h1>
            <p className="product-detail-price">{product.price} MAD</p>
            <p className="product-description">{product.description?.[language] || 'Description du produit'}</p>
            
            <button 
              className="btn-primary add-to-cart-btn"
              onClick={() => {
                addToCart(product);
                alert('Produit ajouté au panier!');
              }}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;