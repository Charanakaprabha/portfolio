import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-main">
        <div className="container footer-content-grid">
          
          <div className="footer-brand">
            <a href="/" className="footer-brand-link">
              <svg className="footer-logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M 50 10 A 40 40 0 1 0 90 50 L 65 50 A 15 15 0 1 1 50 35 Z" fill="#fff" />
              </svg>
              <div className="footer-brand-text">
                <span className="footer-logo-text-top">CHARAN</span>
                <span className="footer-logo-text-bottom">BHEESETTY</span>
              </div>
            </a>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading"><span className="pink-square"></span> MENU</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading"><span className="pink-square"></span> FOLLOW ME</h4>
            <a href="https://www.linkedin.com/in/charanbheesetty" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Charanakaprabha" target="_blank" rel="noreferrer">GitHub</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading"><span className="pink-square"></span> CONTACT</h4>
            <p>Visakhapatnam,</p>
            <p>Andhra Pradesh, India</p>
            <p>+91 80740 84493</p>
            <p>charansaiprabhakumarbheesetty@gmail.com</p>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 by Charan Bheesetty. Built with React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
