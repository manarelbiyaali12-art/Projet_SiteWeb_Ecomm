import React, { useState } from 'react';
import './LanguageSelector.css';

function LanguageSelector({ language, setLanguage }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div 
      className="language-selector"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <button className="lang-btn">
        {language === 'fr' ? 'FR' : 'EN'}
      </button>
      {showMenu && (
        <div className="lang-menu">
          <button 
            onClick={() => setLanguage('fr')}
            className={language === 'fr' ? 'active' : ''}
          >
            Français
          </button>
          <button 
            onClick={() => setLanguage('en')}
            className={language === 'en' ? 'active' : ''}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;