import React from 'react';
import './lifeLine.css';
import Card from '../card/Card';
const LifeLine = ({ current, total }) => {
  const progressWidth = (current / total) * 100;

  const getImageSrc = () => {
    switch (current) {
      case 1:
        return '/character/character_1.svg';
      case 2:
        return '/character/character_2.svg';
      case 3:
        return '/character/character_3.svg';
      case 4:
        return '/character/character_4.svg';
      default:
        return '/default.svg';
    }
  };

  return (
    <div className="life-line">
  <Card className="life-line-card">
        <div className="character-image">
          <img src={getImageSrc()} alt="Character" />
        </div>
      </Card>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressWidth}%` }}></div>
        <div className="progress-text">
          <span className="progress-start">{current}</span>
          <span className="progress-end">{total}</span>
        </div>
      </div>
    </div>
  );
};

export default LifeLine;
