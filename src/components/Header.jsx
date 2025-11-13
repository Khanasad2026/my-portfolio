import React, { useState } from 'react';
import './Header.css';

const Header = ({ personalInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h2>{personalInfo.name}</h2>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>

        <div 
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;