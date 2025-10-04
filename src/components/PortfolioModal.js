import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { portfolioContent } from '../data/portfolioData';

const PortfolioModal = ({ sectionId, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      gsap.fromTo(modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  const currentData = portfolioContent[sectionId];

  if (!currentData) return null;

  return (
    <div 
      ref={modalRef}
      className="modal-overlay visible" 
      onClick={handleOverlayClick}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{currentData.title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div ref={contentRef} className="modal-body">
          {currentData.content}
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
