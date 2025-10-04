import React from 'react';
import { portfolioSections } from '../../data/portfolioData';
import Card from './Card';

const Map = ({ cardsRef, onCardClick }) => {
  return (
    <div className="game-map">
      {portfolioSections.map((section, index) => (
        <Card
          key={section.id}
          ref={el => cardsRef.current[index] = el}
          section={section}
          onClick={() => onCardClick(section.id)}
        />
      ))}
    </div>
  );
};

export default Map;
