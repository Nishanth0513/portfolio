import React from 'react';
import { config } from '../../data/portfolioData';

const Navigation = ({ onBackToTerminal }) => {
  return (
    <div className="game-header">
      <div className="header-left">
        <div className="header-photo">
          <img 
            src="/images/nishanth-reddy.jpg" 
            alt="Nishanth Reddy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="header-photo-placeholder" style={{display: 'none'}}>
            👨‍💻
          </div>
        </div>
        <div className="header-text">
          <div className="game-title">{config.gameWorld.title}</div>
          <div className="game-subtitle">{config.gameWorld.subtitle}</div>
        </div>
      </div>
      <button 
        className="terminal-toggle"
        onClick={onBackToTerminal}
      >
        ← Back to Terminal
      </button>
    </div>
  );
};

export default Navigation;
