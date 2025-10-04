import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGameNavigation = (visible) => {
  const [activeModal, setActiveModal] = useState(null);
  const gameWorldRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(gameWorldRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );

      // Animate cards with stagger
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "back.out(1.7)",
          delay: 0.5
        }
      );
    }
  }, [visible]);

  const handleCardClick = (sectionId) => {
    setActiveModal(sectionId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return {
    activeModal,
    gameWorldRef,
    cardsRef,
    handleCardClick,
    handleCloseModal
  };
};
