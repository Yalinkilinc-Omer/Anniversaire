import React, { useState, useEffect } from 'react';
import LifeLine from '../lifeLine/LifeLine';
import './birthdayDisplay.css';
import Card from  '../card/Card';

const BirthdayDisplay = ({ currentBirthdayIndex, totalBirthdays }) => {
  const [randomQuote, setRandomQuote] = useState('');

  const quotes = [
    'La vie est ce que nous en faisons. Toujours a été, toujours sera.',
    'Vous ne vivrez jamais si vous cherchez à éviter la souffrance et le chagrin.',
    'La vie est comme une bicyclette, pour garder l’équilibre il faut avancer.',
    'Dans la vie on ne fait pas ce que l’on veut mais on est responsable de ce que l’on est.',
    // Ajoutez autant de citations que vous le souhaitez ici
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, [currentBirthdayIndex]);

  return (
    <div className="birthday-display">
      <div className="right-side">
        <Card>
          <div className="quote-card">
            <p>{randomQuote}</p>
          </div>
        </Card>
        <LifeLine current={currentBirthdayIndex + 1} total={totalBirthdays} />
      </div>
    </div>
  );
};

export default BirthdayDisplay;
