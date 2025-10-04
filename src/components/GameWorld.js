import React from 'react';
import PortfolioModal from './PortfolioModal';
import { Map, Navigation } from './GameWorld/index';
import { useGameNavigation } from '../hooks/useGameNavigation';

const GameWorld = ({ visible, onModeChange }) => {
  const {
    activeModal,
    gameWorldRef,
    cardsRef,
    handleCardClick,
    handleCloseModal
  } = useGameNavigation(visible);

  const handleBackToTerminal = () => {
    onModeChange('terminal');
  };

  if (!visible) return null;

  return (
    <div ref={gameWorldRef} className="game-world">
      <Navigation onBackToTerminal={handleBackToTerminal} />
      <Map cardsRef={cardsRef} onCardClick={handleCardClick} />
      {activeModal && (
        <PortfolioModal
          sectionId={activeModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default GameWorld;
