import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "HTS Company",
    duration: "Feb 2026 - Present",
    desc: "Designed and developed full-stack web applications using modern backend technologies, and integrated AI-powered chatbots through APIs to enhance user interaction."
  },
  {
    id: 2,
    role: "Co-Founder",
    company: "vexamo",
    duration: "Jan 2026 - Present",
    desc: "From websites and web applications to branding and UI/UX — we help businesses build products that look premium, work flawlessly, and scale with confidence."
  },
  {
    id: 3,
    role: "Backend Development Team Lead",
    company: "Kalam Foundation",
    duration: "Jan 2026 - Mar 2026",
    desc: "Backend Development Lead at Kalam Foundation, responsible for guiding the backend development team, designing scalable server-side solutions, and technical execution."
  },
  {
    id: 4,
    role: "Web Developer Intern",
    company: "Kalam Foundation",
    duration: "Dec 2025 - Jan 2026",
    desc: "Working as a Web Developer Intern at Kalam Foundation and actively Involving in Development and Maintenance of Kalam Foundation Web-Site."
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="experience-header">
          <h4 className="section-subtitle">My Journey</h4>
          <h2 className="section-title">WORK EXPERIENCE</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              initial={{ 
                opacity: 0, 
                x: idx % 2 === 0 ? -80 : 80,
                y: 20
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                y: 0
              }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for a smooth 'coming' feel
                delay: idx * 0.1 
              }}
            >
              <div className="timeline-content">
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <div className="timeline-duration">{exp.duration}</div>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
