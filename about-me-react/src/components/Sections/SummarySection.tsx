import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const SummarySection: React.FC = () => {
  const { summary } = portfolioData;

  return (
    <section id="summary" className="summary-section">
      <div className="section-header">
        <h2>
          <i className="fas fa-star"></i> {summary.title}
        </h2>
      </div>
      <div className="summary-content">
        {summary.items.map((item, index) => (
          <div key={index} className="summary-item">
            <i className={item.icon}></i>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};