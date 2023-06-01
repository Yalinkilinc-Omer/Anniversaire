import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import BirthdayDisplay from './components/birthdayDisplay/BirthdayDisplay';
import RotatingLogo from './components/rotatingLogo/RotatingLogo';
import BirthdayCard from './components/birthdayCard/BirthdayCard';
import './App.css';

const App = () => {
  const birthdays = [
    { name: 'Spa possible' },
    { name: 'JeanClaude Vandal' },
    { name: 'Laz hair' },
    { name: 'Manu cure' },
  ];

  const [currentBirthdayIndex, setCurrentBirthdayIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBirthdayIndex((currentBirthdayIndex + 1) % birthdays.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentBirthdayIndex, birthdays.length]);

  return (
    <div className="app">
      <Header />
      <div className="content">
        <div className="left-section">
          <RotatingLogo alt="Logo" />
          <BirthdayCard name={birthdays[currentBirthdayIndex].name} />
        </div>
        <div className="right-section">
          <BirthdayDisplay currentBirthdayIndex={currentBirthdayIndex} totalBirthdays={birthdays.length} />
        </div>
      </div>
    </div>
  );
};

export default App;
