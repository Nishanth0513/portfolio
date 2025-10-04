import { gsap } from 'gsap';

// Animation utility functions for consistent animations across components
export const useAnimations = () => {
  const fadeInUp = (element, delay = 0, duration = 0.8) => {
    return gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
    );
  };

  const scaleIn = (element, delay = 0, duration = 0.6) => {
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration, delay, ease: "back.out(1.7)" }
    );
  };

  const staggerIn = (elements, delay = 0, stagger = 0.2) => {
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
  };

  const typewriter = (element, text, speed = 50) => {
    return gsap.to(element, {
      duration: text.length * speed / 1000,
      ease: "none",
      onUpdate: function() {
        const progress = this.progress();
        const currentLength = Math.floor(progress * text.length);
        element.textContent = text.substring(0, currentLength);
      }
    });
  };

  const pulse = (element, scale = 1.1, duration = 0.5) => {
    return gsap.to(element, {
      scale,
      duration,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    });
  };

  const glow = (element, color = "#00ff00", intensity = 0.5) => {
    return gsap.to(element, {
      boxShadow: `0 0 20px ${color}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}`,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    });
  };

  return {
    fadeInUp,
    scaleIn,
    staggerIn,
    typewriter,
    pulse,
    glow
  };
};
