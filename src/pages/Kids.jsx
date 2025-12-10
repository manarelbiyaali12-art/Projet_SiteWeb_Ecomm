import React from 'react';
import { translations } from '../data/products';
import ProductCard from '../components/ProductCard';
function Kids({ addToCart,language }) {
  const t = translations[language];

  // Mock products for kids - you can expand this later
  const kidsProducts = [
    { id: 61, name: "Ensemble enfant casual", price: 599, image: "https://i.pinimg.com/736x/c8/73/c0/c873c0872f376e2bbe9db0e4659c9182.jpg" },
    { id: 62, name: "Robe enfant festive", price: 699, image: "https://i.pinimg.com/736x/1d/91/eb/1d91eb085be2115655d88e98fae6c37a.jpg" },
    { id: 63, name: "Pantalon enfant confort", price: 449, image: "https://i.pinimg.com/736x/36/73/e2/3673e2280d22ac7645988538d2b5fd67.jpg" },
    { id: 65, name: "Ensemble Garçons", price: 399, image: "https://i.pinimg.com/736x/c6/e9/9a/c6e99abe895ea2935cbe28afcb26bdad.jpg" },
    { id: 66, name: "Chemise décontractée à manches longues", price: 579, image: "https://i.pinimg.com/1200x/c3/c7/ab/c3c7abf69c8275ab17580e1281fbbde6.jpg" },
    { id: 67, name: "LOLANTA Chemise à Manches Longues", price: 489, image: "https://m.media-amazon.com/images/I/71D23IJmobL._AC_SX679_.jpg" },
    { id: 68, name: "Ensemble de 2 pièces", price: 669, image: "https://i.pinimg.com/1200x/6b/75/b8/6b75b8c263db1c8695352af13cd04d54.jpg" },
    { id: 69, name: "Robe noir chic ", price: 689, image: "https://i.pinimg.com/1200x/4b/3b/cd/4b3bcdf1b004c5c06c86123231d1b62c.jpg" },
    { id: 70, name: "2 pièces Ensemble veste zippée et short ", price: 389, image: "https://i.pinimg.com/736x/8e/e1/07/8ee10799eaf732b33354725a312cafb1.jpg" }
  ];

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">{t.kids}</h1>
        
        <div className="products-grid">
          {kidsProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price} MAD</p>
                <button className="btn-primary"
                 onClick={() => {
                addToCart(product);
                 }}>
                  {t.addToCart}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kids;