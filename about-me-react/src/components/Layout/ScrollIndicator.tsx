import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    smoothScroll: (target: HTMLElement) => void;
  }
}

export const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="scroll-indicator mouse-indicator"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.3s',
        position: 'absolute',
        left: '50%',
        bottom: '40px',
        transform: 'translateX(-50%)',
        zIndex: 1000
      }}
      onClick={scrollToNextSection}
    >
      <div className="mouse">
        <div className="wheel"></div>
      </div>
    </div>
  );
};
