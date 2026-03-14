import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Subscribe.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email) {
      alert("Subscribed!");
      setEmail('');
    }
  };

  return (
    <section className="subscribe-section" id="contact">
      <div className="container">
        <motion.div 
          className="subscribe-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="subscribe-title">READY TO UPGRADE YOUR ENGINEERING?</h2>
          
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary subscribe-btn">
              GET IN TOUCH
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscribe;
