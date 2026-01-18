import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>
          <i className="fas fa-code"></i> {skills.title}
        </h2>
      </div>
      <div className="skills-container">
        {skills.categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category-large">
            <h3>
              <i className={category.icon}></i>
              {category.title}
            </h3>
            <div className="skill-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="skill-item">
                  <img
                    src={item.iconUrl}
                    alt={item.name}
                    width="16"
                    height="16"
                    className="tech-icon"
                  />
                  <span className="skill-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};