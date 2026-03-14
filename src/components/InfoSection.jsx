import React from 'react';
import { motion } from 'framer-motion';
import './InfoSection.css';

const services = [
  {
    title: "Backend Development",
    desc: "Robust, scalable, and secure server-side architectures engineered for performance."
  },
  {
    title: "Cloud Infrastructure",
    desc: "Seamless cloud deployment, orchestration, and scaling using AWS, GCP, and Azure."
  },
  {
    title: "Data Engineering",
    desc: "Building complex data pipelines, ETL processes, and resilient databases."
  }
];

const InfoSection = () => {
  return (
    <section className="info-section" id="services">
      <div className="container">
        
        <div className="info-header">
          <h4 className="info-subtitle">What We Do</h4>
          <h2 className="info-title">OUR SERVICES</h2>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img src="/assets/icons.png" alt="Icon" className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InfoSection;
