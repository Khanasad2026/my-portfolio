import React from 'react';
import './Hero.css';

const Hero = ({ personalInfo }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">{personalInfo.name}</span></h1>
          <h2>Final Year B.Tech Student | MERN Stack Developer</h2>
<p>Electrical Engineering @ MNNIT Allahabad | 900+ DSA Problems Solved</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          
          <div className="coding-profiles">
            <h4>Coding Profiles:</h4>
            <div className="profile-links">
  <a href={personalInfo.socialLinks.leetcode} target="_blank" rel="noopener noreferrer">
    LeetCode Knight (1863)
  </a>
  <a href={personalInfo.socialLinks.codeforces} target="_blank" rel="noopener noreferrer">
    Codeforces Specialist (1474)
  </a>
  <a href={personalInfo.socialLinks.codechef} target="_blank" rel="noopener noreferrer">
    CodeChef 3★ (1701)
  </a>
  <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
    GitHub
  </a>
  <a href="/resume.pdf" download="resume.pdf">
      📄 Download Resume
    </a>
</div>
          </div>
        </div>
        
       <div className="hero-image">
  <div className="profile-image-container">
    <img 
  src="/profile.jpg" 
  alt="Asadulla Khan"
  className="profile-photo"
/>
    <div className="profile-image-placeholder" style={{display: 'none'}}>
      <div className="image-content">
        <span>Photo Loading</span>
        <p>Check file path</p>
      </div>
    </div>
    <div className="profile-image-glow"></div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;