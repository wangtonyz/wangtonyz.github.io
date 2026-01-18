import React, { useState } from 'react';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { HeroSection } from './components/Sections/HeroSection';
import { AboutSection } from './components/Sections/AboutSection';
import { SkillsSection } from './components/Sections/SkillsSection';
import { ExperienceSection } from './components/Sections/ExperienceSection';
import { SummarySection } from './components/Sections/SummarySection';
import { Footer } from './components/Layout/Footer';
import { ParticleBackground } from './components/Particles/ParticleBackground';
import { ScrollIndicator } from './components/Layout/ScrollIndicator';

function App() {
  const [currentLang, setCurrentLang] = useState('en');

  // Initialize scroll animations and keyboard navigation
  useKeyboardNavigation();
  useScrollAnimation();

  return (
    <div className="app">
      <ParticleBackground />
      <main className="container">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection currentLang={currentLang} setCurrentLang={setCurrentLang} />
        <SummarySection />
        <ScrollIndicator />
      </main>
      <Footer />
    </div>
  );
}

export default App;