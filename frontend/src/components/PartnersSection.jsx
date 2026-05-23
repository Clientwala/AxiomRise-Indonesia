import React from 'react';
import './PartnersSection.css';
import cyverionLogo from '../assets/Partner logo/cyverion.png';
import starshieldLogo from '../assets/Partner logo/starshield.png';
import incallLogo from '../assets/Partner logo/axiomrise.png';

const PartnersSection = () => {
  return (
    <section className="section partners-section container">
      <div className="partners-header">
        <h2 className="glow-text">The Trust Anchor: <span className="text-muted">Our Partner Ecosystem</span></h2>
        <p className="partners-subtitle">Integrated with industry-leading technology and service partners.</p>
      </div>

      <div className="partners-grid">
        
        <div className="partner-pedestal">
          <div className="pedestal-top"></div>
          <div className="partner-logo-container glass-panel">
            <img src={cyverionLogo} alt="Cyverion - Secure Today. Safer Tomorrow." className="partner-logo-img" />
          </div>
          <div className="pedestal-bottom"></div>
        </div>

        <div className="partner-pedestal">
          <div className="pedestal-top"></div>
          <div className="partner-logo-container glass-panel">
            <img src={starshieldLogo} alt="Star Shield" className="partner-logo-img starshield-img" />
          </div>
          <div className="pedestal-bottom"></div>
        </div>

        <div className="partner-pedestal">
          <div className="pedestal-top"></div>
          <div className="partner-logo-container glass-panel">
            <img src={incallLogo} alt="inCall Systems" className="partner-logo-img incall-img" />
          </div>
          <div className="pedestal-bottom"></div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
