import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';

interface ExperienceSectionProps {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  currentLang,
  setCurrentLang
}) => {
  const { experience } = portfolioData;
  const [expandedJobIndex, setExpandedJobIndex] = useState<number | null>(null);

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'en' ? 'zh' : 'en');
  };

  const toggleJobExpansion = (index: number) => {
    setExpandedJobIndex(expandedJobIndex === index ? null : index);
  };

  // Helper function to safely get translation
  const getTranslation = (obj: { [key: string]: string }, lang: string) => {
    return obj[lang as keyof typeof obj] || obj['en'];
  };

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2>
          <i className="fas fa-briefcase"></i> {experience.title}
        </h2>
        <div className="language-toggle">
          <button
            id="lang-toggle"
            className="lang-btn"
            onClick={toggleLanguage}
            data-lang={currentLang}
          >
            {currentLang.toUpperCase()}
          </button>
        </div>
      </div>

      <div className="timeline">
        {experience.jobs.map((job, index) => (
          <div
            key={index}
            className={`timeline-item ${expandedJobIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleJobExpansion(index)}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="job-header">
                <h3 className="exp-title">
                  {getTranslation(job.company, currentLang)}
                </h3>
                <div className="job-meta">
                  <span className="company exp-company">
                    {getTranslation(job.title, currentLang)}
                  </span>
                  <span className="date">{job.date}</span>
                </div>
              </div>
              <h4 className="exp-position">
                {getTranslation(job.position, currentLang)}
              </h4>
              <ul className="job-responsibilities">
                {job.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="exp-desc">
                    {getTranslation(resp, currentLang)}
                  </li>
                ))}
              </ul>
              <div className="tech-stack">
                {job.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};