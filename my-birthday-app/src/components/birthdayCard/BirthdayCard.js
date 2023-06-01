import React from 'react';
import './birthdayCard.css';

const BirthdayCard = ({ name }) => {
  return (
    <div className="birthday-card">
      <h1>{name}</h1>
    </div>
  );
};

export default BirthdayCard;
