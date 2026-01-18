import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>
          <i className="fas fa-user-graduate"></i> {about.title}
        </h2>
      </div>
      <div className="education-card">
        {about.education.map((edu, index) => (
          <div key={index}>
            <div className="education-date">{edu.date}</div>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p dangerouslySetInnerHTML={{ __html: edu.note }} />
          </div>
        ))}
      </div>
    </section>
  );
};