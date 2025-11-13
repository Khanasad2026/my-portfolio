import React from 'react';
import Hero from '../components/Hero';
import './Home.css';

const Home = ({ portfolioData }) => {
  return (
    <div className="home">
      <Hero personalInfo={portfolioData.personalInfo} />
      
      {/* About Section */}
      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm {portfolioData.personalInfo.name}</h3>
            <p>{portfolioData.personalInfo.about}</p>
            
            <div className="education">
              <h4>Education</h4>
              {portfolioData.personalInfo.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h5>{edu.institution}</h5>
                  <p>{edu.degree}</p>
                  {edu.period && <span className="period">{edu.period}</span>}
                </div>
              ))}
            </div>

            <div className="achievements">
              <h4>Achievements</h4>
              <ul>
                {portfolioData.personalInfo.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skills-list">
              {portfolioData.skills.technical.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Frameworks & Technologies</h3>
            <div className="tech-tags">
              {portfolioData.skills.frameworks.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <h4>Databases</h4>
            <div className="tech-tags">
              {portfolioData.skills.databases.map((db, index) => (
                <span key={index} className="tech-tag">{db}</span>
              ))}
            </div>

            <h4>Tools</h4>
            <div className="tech-tags">
              {portfolioData.skills.tools.map((tool, index) => (
                <span key={index} className="tech-tag">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {portfolioData.projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>I'm always open to discussing new opportunities and interesting projects.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <span>{portfolioData.personalInfo.email}</span>
              </div>
               <div className="contact-item">
    <strong>Phone:</strong>
    <span>{portfolioData.personalInfo.phone}</span>
  </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>{portfolioData.personalInfo.location}</span>
              </div>
            </div>

            <div className="social-links">
              <h4>Find me on:</h4>
              <div className="social-icons">
                {Object.entries(portfolioData.personalInfo.socialLinks).map(([platform, url]) => (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="social-link">
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;