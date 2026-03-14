import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(1); // 1 = rotating logo, 2 = sliding logo + name

  useEffect(() => {
    // Phase 1: Rotate central logo for 2 seconds
    const timer1 = setTimeout(() => {
      setPhase(2);
    }, 2000);

    // Phase 2: Slide animation for 2 seconds, then complete
    const timer2 = setTimeout(() => {
      onComplete();
    }, 4500); // 2s phase 1 + 2.5s phase 2 and transition

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="loading-container">
          
          {/* Logo Element */}
          <motion.div 
            className="loading-logo-wrapper"
            animate={
              phase === 1 
                ? { rotate: 360, x: 0 } 
                : { rotate: 360, x: -120 } // Stop rotating and move left
            }
            transition={
              phase === 1 
                ? { repeat: Infinity, duration: 1, ease: "linear" } 
                : { duration: 0.8, ease: "easeOut" }
            }
          >
            <svg className="loading-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 10 A 40 40 0 1 0 90 50 L 65 50 A 15 15 0 1 1 50 35 Z" fill="var(--primary-blue)" />
            </svg>
          </motion.div>

          {/* Text Element (Slides out from the logo) */}
          <AnimatePresence>
            {phase === 2 && (
              <motion.div 
                className="loading-text-wrapper"
                initial={{ opacity: 0, x: -100, clipPath: 'inset(0 100% 0 0)' }}
                animate={{ opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                <div className="loading-text">
                  <span className="loading-text-top">CHARAN</span>
                  <span className="loading-text-bottom">BHEESETTY</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
