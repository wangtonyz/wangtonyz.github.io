import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';

const SUBTITLES = [
  'Cloud Native • Microservices • Distributed Systems',
  'Kubernetes • Docker • Cloud Engineering',
  'Open Source Contributor • Tech Enthusiast',
  'Problem Solver • Continuous Learner'
];

export const HeroSection: React.FC = () => {
  const { hero } = portfolioData;
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const typeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const pauseRef = useRef(false);

  useEffect(() => {
    const type = () => {
      const currentText = SUBTITLES[currentIndex];

      // Pause after completing typing or deleting
      if (pauseRef.current) {
        pauseRef.current = false;
        isDeletingRef.current = !isDeletingRef.current;
        if (!isDeletingRef.current) {
          setCurrentIndex((prev) => (prev + 1) % SUBTITLES.length);
          charIndexRef.current = 0;
        }
        typeTimeoutRef.current = setTimeout(type, 500);
        return;
      }

      if (!isDeletingRef.current) {
        // Typing
        if (charIndexRef.current < currentText.length) {
          setCurrentSubtitle(currentText.substring(0, charIndexRef.current + 1));
          charIndexRef.current++;
          // Random typing speed for more natural feel
          const randomSpeed = Math.random() * 50 + 50;
          typeTimeoutRef.current = setTimeout(type, randomSpeed);
        } else {
          // Finished typing, pause before deleting
          pauseRef.current = true;
          typeTimeoutRef.current = setTimeout(type, 2000);
        }
      } else {
        // Deleting
        if (charIndexRef.current > 0) {
          setCurrentSubtitle(currentText.substring(0, charIndexRef.current - 1));
          charIndexRef.current--;
          // Faster deleting speed
          const randomSpeed = Math.random() * 20 + 20;
          typeTimeoutRef.current = setTimeout(type, randomSpeed);
        } else {
          // Finished deleting, pause before typing next
          pauseRef.current = true;
          typeTimeoutRef.current = setTimeout(type, 300);
        }
      }
    };

    // Clear any existing timeout
    if (typeTimeoutRef.current) {
      clearTimeout(typeTimeoutRef.current);
    }

    // Start typing after initial delay
    typeTimeoutRef.current = setTimeout(type, 1000);

    return () => {
      if (typeTimeoutRef.current) {
        clearTimeout(typeTimeoutRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section id="hero" className="hero-section fade-in">
      <div className="hero-content">
        <h1 className="hero-name">{hero.name}</h1>
        <h2 className="hero-title">{hero.title}</h2>
        <p className="hero-subtitle">
          {currentSubtitle}
          <span className="typing-cursor"></span>
        </p>

        <div className="hero-contact">
          {hero.contact.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target={contact.target || undefined}
              rel={contact.target ? "noopener noreferrer" : undefined}
              className="contact-link"
            >
              <i className={contact.icon}></i> {contact.text}
            </a>
          ))}
        </div>

        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};