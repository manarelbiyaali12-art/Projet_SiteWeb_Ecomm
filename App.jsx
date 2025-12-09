import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
    const [cart, setCart] = useState([]);
    const [language, setLanguage] = useState('fr');

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    return (
        <Router>
            <div className="App">
                <Header cart={cart} setCart={setCart} language={language} setLanguage={setLanguage} />
                <Routes>
                    <Route path="/" element={<Home language={language} />} />
                    <Route path="/femmes/:category?" element={<Women addToCart={addToCart} language={language} />} />
                    <Route path="/hommes/:category?" element={<Men addToCart={addToCart} language={language} />} />
                    <Route path="/enfants" element={<Kids addToCart={addToCart} language={language} />} />
                    <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} language={language} />} />
                </Routes>
                <Footer language={language} />
            </div>
        </Router>
    );
}

export default App;