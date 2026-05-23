import React from 'react';
import './HeroSection.css';
import { Shield, Target, Zap, Award } from 'lucide-react';
import axiomriseLogo from '../assets/image.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-logo-container glass-panel">
          <img src={axiomriseLogo} alt="AxiomRise - IT Consulting and Services" className="hero-logo-img" />
        </div>
        
        <div className="hero-main-text">
          <h2 className="glow-text main-heading">PT AxiomRise Teknologi Indonesia</h2>
          <p className="sub-heading">Architecting Enterprise Transformation in the ASEAN Market.</p>
        </div>
      </div>
      
      <div className="hero-traits glass-panel">
        <div className="trait">
          <Award className="trait-icon" />
          <span>Professional</span>
        </div>
        <div className="trait-divider"></div>
        <div className="trait">
          <Shield className="trait-icon" />
          <span>Trusted</span>
        </div>
        <div className="trait-divider"></div>
        <div className="trait">
          <Zap className="trait-icon" />
          <span>Innovative</span>
        </div>
        <div className="trait-divider"></div>
        <div className="trait">
          <Target className="trait-icon" />
          <span>Experienced</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
