import React, { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const dateObj = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setDate(dateObj.toLocaleDateString('fr-FR', options));
  }, []);

  return (
    <header className="header">
      <div className="header-section">
        <h1 className="header-title">Citation & Anniversaire</h1>
        <div className="quote-card">
        
        </div>
      </div>
      <div className="header-section">
        <h1 className="header-date">{date}</h1>
      </div>
    </header>
  );
};

export default Header;
