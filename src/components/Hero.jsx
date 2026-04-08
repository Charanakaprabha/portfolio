import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <motion.div
          className="hero-title-group"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="hero-title">CHARAN</h1>
          <h1 className="hero-title title-primary">BHEESETTY</h1>
          <h1 className="hero-title">PORTFOLIO</h1>

          <p className="hero-subtitle">
            Full Stack Developer | Data Analyst | AI/ML Engineer
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-secondary hero-btn">Explore Projects</a>
            <a href="/assets/Resume.pdf" className="btn btn-primary hero-btn" target="_blank" rel="noopener noreferrer">My Resume</a>
          </div>
        </motion.div>
      </div>

      <div className="floating-objects">
        {/* The Monitor Character */}
        <motion.img
          src="/assets/monitor.png"
          alt="Monitor"
          className="obj-monitor"
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        {/* Colored Balls */}
        <motion.img
          src="/assets/pink-ball.png"
          alt="Pink Ball"
          className="obj-ball-pink"
          animate={{ y: [0, 40, 0], x: [0, 20, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />

        <motion.img
          src="/assets/green-ball.png"
          alt="Green Ball"
          className="obj-ball-green"
          animate={{ y: [0, -40, 0], x: [0, -20, 0], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        />

        <motion.img
          src="/assets/yellow-ball.png"
          alt="Yellow Ball"
          className="obj-ball-yellow"
          animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
        />
      </div>
    </section>
  );
};

export default Hero;
