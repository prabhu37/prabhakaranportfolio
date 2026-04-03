import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ChevronRight, 
  Cpu, 
  Layers, 
  Code2, 
  Smartphone, 
  Database, 
  BrainCircuit, 
  Layout, 
  ExternalLink 
} from 'lucide-react';

const Github = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { resumeData } from './data/resumeData';
import './App.css';
import heroIllustration from './assets/hero-illustration.png';

const Section = ({ title, id, children }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="section"
  >
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="section-line"></div>
      </div>
      {children}
    </div>
  </motion.section>
);

const App = () => {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar glass">
        <div className="container nav-content">
          <div className="logo">
            <span className="logo-text">Building the future of </span>
            <span className="logo-dot">Android</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact" className="nav-cta">Contact Me</a>
            <a href="/resume.pdf" download="Prabhakaran_Panjalingam_Resume.pdf" target="_blank" rel="noopener noreferrer" className="download-btn glass">
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="hero-title">
                Prabhakaran Panjalingam <br /> <span className="highlight">Senior Android Engineer</span>
              </h1>
              <p className="hero-subtitle">{resumeData.summary}</p>
              <div className="hero-actions">
                <a href="#experience" className="btn btn-primary">
                  View Work <ChevronRight size={20} />
                </a>
                <a href="/resume.pdf" download="Prabhakaran_Panjalingam_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn glass">
                  <Download size={18} /> Resume
                </a>
                <div className="social-links">
                  <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="social-icon glass"><Github size={20} /></a>
                  <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="social-icon glass"><Linkedin size={20} /></a>
                  <a href={`mailto:${resumeData.contact.email}`} className="social-icon glass"><Mail size={20} /></a>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-image-blob">
              <img src={heroIllustration} alt="Tech Illustration" className="hero-illustration float-animation" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <Section title="About Me" id="about">
        <div className="about-content glass">
          <p className="about-text">
            {resumeData.summary}
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section title="Work Experience" id="experience">
        <div className="timeline">
          {resumeData.workHistory.map((work, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot glass"></div>
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <div>
                    <h3>{work.role}</h3>
                    <h4 className="company">{work.company}</h4>
                  </div>
                  <span className="period">{work.period}</span>
                </div>
                <p className="location"><MapPin size={14} /> {work.location}</p>
                <ul className="highlights">
                  {work.highlights.map((h, i) => (
                    <li key={i}><ChevronRight size={14} className="accent" /> {h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Technical Skills" id="skills">
        <div className="skills-grid">
          <SkillCard 
            icon={<Smartphone size={32} />} 
            title="Mobile & SDK" 
            skills={resumeData.skills.mobile} 
          />
          <SkillCard 
            icon={<Cpu size={32} />} 
            title="Framework & AOSP" 
            skills={resumeData.skills.framework} 
          />
          <SkillCard 
            icon={<Code2 size={32} />} 
            title="Languages" 
            skills={resumeData.skills.languages} 
          />
          <SkillCard 
            icon={<BrainCircuit size={32} />} 
            title="AI & ML" 
            skills={resumeData.skills.ai_ml} 
          />
          <SkillCard 
            icon={<Layers size={32} />} 
            title="Architecture" 
            skills={resumeData.skills.architecture} 
          />
          <SkillCard 
            icon={<Database size={32} />} 
            title="Systems & Tools" 
            skills={resumeData.skills.tools} 
          />
        </div>
      </Section>

      {/* Education Section */}
      <Section title="Education" id="education">
        <div className="edu-grid">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="edu-card glass">
              <h3>{edu.degree}</h3>
              <p className="college">{edu.college}</p>
              <div className="edu-meta">
                <span>{edu.period}</span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <footer className="footer" id="contact">
        <div className="container footer-content">
          <div className="footer-info">
            <h2>Let's Connect</h2>
            <div className="contact-details">
              <div className="contact-item"><Mail size={20} /> <span>{resumeData.contact.email}</span></div>
              <div className="contact-item"><Phone size={20} /> <span>{resumeData.contact.phone}</span></div>
              <div className="contact-item"><MapPin size={20} /> <span>{resumeData.contact.address}</span></div>
            </div>
          </div>
          <div className="footer-links">
            <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="btn glass">
              <Github size={20} /> GitHub
            </a>
            <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="btn glass">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 {resumeData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const SkillCard = ({ icon, title, skills }) => (
  <motion.div 
    className="skill-card glass"
    whileHover={{ y: -5, borderColor: 'var(--primary-color)' }}
  >
    <div className="skill-icon">{icon}</div>
    <h3>{title}</h3>
    <div className="skill-tags">
      {skills.map((skill, index) => (
        <span key={index} className="skill-tag">{skill}</span>
      ))}
    </div>
  </motion.div>
);

export default App;
