import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

      <div className={`navbar-center ${isOpen ? 'mobile-open' : ''}`}>
        <button className="mobile-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Menu">
          <X size={30} />
        </button>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
        <div className="mobile-only-contact">
          <a href="#contact" className="btn btn-primary get-in-touch-btn" onClick={() => setIsOpen(false)}>
            <span className="btn-square"></span>
            Get In Touch
          </a>
        </div>
      </div>

      <div className="navbar-right">
        <a href="#contact" className="btn btn-primary get-in-touch-btn desktop-only" style={{ textDecoration: 'none' }}>
          <span className="btn-square"></span>
          Get In Touch
        </a>
        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
