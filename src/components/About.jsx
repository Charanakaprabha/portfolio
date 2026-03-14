import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="section-subtitle">Discover</h4>
            <h2 className="section-title">ABOUT ME</h2>
            <p className="about-desc">
              I am a passionate and versatile tech professional with a strong foundation in Full Stack Development, Data Analysis, and Artificial Intelligence/Machine Learning. My journey in technology is driven by an insatiable curiosity to understand how things work and to build solutions that simplify complex problems.
            </p>
            <p className="about-desc">
              Whether it's designing highly scalable web applications, extracting meaningful insights from massive datasets, or training intelligent models that predict future trends, I thrive at the intersection of diverse disciplines. I believe that integrating these domains allows me to craft holistic, impactful, and forward-looking software.
            </p>
          </motion.div>

          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-placeholder">
              <span>Your Photo Here</span>
            </div>
            <div className="about-bg-shape"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
