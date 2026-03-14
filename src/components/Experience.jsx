import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "2023 - Present",
    desc: "Led the development of a cloud-based SaaS platform using React and Node.js. Improved system efficiency and reduced server costs by 20% through code optimization."
  },
  {
    id: 2,
    role: "Data Analyst Intern",
    company: "DataWorks Analytics",
    duration: "2022 - 2023",
    desc: "Analyzed large datasets to uncover actionable business metrics. Created automated ETL pipelines substituting manual Excel work, saving 15 hours weekly."
  },
  {
    id: 3,
    role: "AI/ML Researcher",
    company: "University Lab",
    duration: "2021 - 2022",
    desc: "Researched and implemented deep learning models for image recognition. Published an internal paper on neural network efficiency improvements."
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
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
