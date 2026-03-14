import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // Hide navbar when scrolling down past 100px
    if (latest > previous && latest > 150) {
      setHidden(true);
    }
    // Show navbar when scrolling up
    else if (latest < previous) {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className="navbar"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="navbar-logo">
        <a href="/">
          <svg className="custom-logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 10 A 40 40 0 1 0 90 50 L 65 50 A 15 15 0 1 1 50 35 Z" fill="var(--primary-blue)" />
          </svg>
          <div className="logo-text-group">
            <span className="logo-text-top">CHARAN</span>
            <span className="logo-text-bottom">BHEESETTY</span>
          </div>
        </a>
      </div>

      <div className="navbar-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </div>

      <div className="navbar-right">
        <a href="#contact" className="btn btn-primary get-in-touch-btn" style={{ textDecoration: 'none' }}>
          <span className="btn-square"></span>
          Get In Touch
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
