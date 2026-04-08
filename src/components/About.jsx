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
              Full-stack web developer and freelancer with hands-on experience in building scalable, user-focused web applications and intelligent digital solutions. Proficient in modern technologies including React, JavaScript, Node.js, Java and Python, with practical expertise demonstrated through projects like CargoMate, SaiKulwanth Degree College, and Unipick.
            </p>
            <p className="about-desc">
              Skilled in data analysis and visualization using Power BI, along with developing AI-powered chatbots through API integrations. Passionate about delivering high-quality solutions, enhancing user experience, and solving real-world problems through innovative and efficient software development.
            </p>
          </motion.div>

          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-wrapper">
              <img src="/assets/Profile.jpeg" alt="Charan Saiprabha" className="about-profile-img" />
            </div>
            <div className="about-bg-shape"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
