import React, { forwardRef } from 'react';

const Card = forwardRef(({ section, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className="portfolio-card"
      onClick={onClick}
      style={{ '--card-color': section.color }}
    >
      <div className="card-icon" style={{ color: section.color }}>
        {section.icon}
      </div>
      <div className="card-title">{section.title}</div>
      <div className="card-description">{section.description}</div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
