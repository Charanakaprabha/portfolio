import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectsList = [
  {
    title: "AI Predictive Model for E-commerce",
    shortDesc: "Machine Learning / Data Analysis",
    desc: "Built a predictive model using Python and scikit-learn to forecast customer purchasing behavior, increasing marketing ROI by 15%.",
    image: "https://via.placeholder.com/600x400/1e1e2f/ffffff?text=AI+Model",
    link: "#"
  },
  {
    title: "Real-time Analytics Dashboard",
    shortDesc: "Full Stack Development",
    desc: "Developed a scalable dashboard using React, Node.js, and WebSockets to visualize live streaming data with sub-second latency.",
    image: "https://via.placeholder.com/600x400/2a2a35/ffffff?text=Dashboard",
    link: "#"
  },
  {
    title: "Financial Data ETL Pipeline",
    shortDesc: "Data Engineering",
    desc: "Architected a robust ETL pipeline utilizing Apache Airflow and Pandas to process and clean 5TB+ of financial records daily.",
    image: "https://via.placeholder.com/600x400/3a2a35/ffffff?text=ETL+Pipeline",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        
        <div className="projects-header">
          <h4 className="section-subtitle">Selected Work</h4>
          <h2 className="section-title">FEATURED PROJECTS</h2>
        </div>

        <div className="projects-grid">
          {projectsList.map((project, idx) => (
            <motion.div 
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <a href={project.link} className="btn-view-project">View Details</a>
                </div>
              </div>
              <div className="project-content">
                <span className="project-tag">{project.shortDesc}</span>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="projects-footer">
          <button className="btn btn-secondary load-more-btn">View All Projects</button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
