import { gsap } from 'gsap';

// Animation utility functions for consistent animations across components
export const animations = {
  // Fade in with slide up effect
  fadeInUp: (element, delay = 0, duration = 0.8) => {
    return gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
    );
  },

  // Scale in with bounce effect
  scaleIn: (element, delay = 0, duration = 0.6) => {
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration, delay, ease: "back.out(1.7)" }
    );
  },

  // Stagger animation for multiple elements
  staggerIn: (elements, delay = 0, stagger = 0.2) => {
    return gsap.fromTo(elements,
      { opacity: 0, y: 50, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger,
        delay,
        ease: "back.out(1.7)"
      }
    );
  },

  // Typewriter effect for text
  typewriter: (element, text, speed = 50) => {
    return gsap.to(element, {
      duration: text.length * speed / 1000,
      ease: "none",
      onUpdate: function() {
        const progress = this.progress();
        const currentLength = Math.floor(progress * text.length);
        element.textContent = text.substring(0, currentLength);
      }
    });
  },

  // Pulse effect for interactive elements
  pulse: (element, scale = 1.1, duration = 0.5) => {
    return gsap.to(element, {
      scale,
      duration,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    });
  },

  // Glow effect for futuristic elements
  glow: (element, color = "#00ff00", intensity = 0.5) => {
    return gsap.to(element, {
      boxShadow: `0 0 20px ${color}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}`,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    });
  }
};

// Predefined animation presets
export const presets = {
  terminalEnter: (element) => animations.fadeInUp(element, 0, 0.8),
  gameWorldEnter: (element) => animations.scaleIn(element, 0, 1),
  cardHover: (element) => gsap.to(element, {
    y: -10,
    scale: 1.05,
    duration: 0.3,
    ease: "power2.out"
  }),
  modalEnter: (element) => animations.scaleIn(element, 0, 0.4)
};
