import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const { footer } = portfolioData;

  return (
    <footer className="footer">
      <div className="footer-content">
        <p
          style={{
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            marginTop: '15px',
            fontSize: '0.95rem'
          }}
          dangerouslySetInnerHTML={{ __html: footer.quote }}
        />
        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
          {footer.credits}
        </p>
        <div className="social-links">
          <a href="https://github.com/wangtonyz" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:wongsix777@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};