import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.email) {
      alert("Message Sent! (Demo)");
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-content-wrapper">
            <div className="contact-info">
              <h2 className="contact-title">LET'S BUILD SOMETHING GREAT</h2>
              <p className="contact-desc">
                Have a project in mind, need data analyzed, or looking to deploy an ML model? I am open to freelance opportunities and collaborations. Drop me a message!
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="detail-icon">📧</span>
                  <span>charan.bheesetty@example.com</span>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-icon">📍</span>
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="YOUR NAME" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="YOUR EMAIL" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <textarea 
                  name="message"
                  placeholder="YOUR MESSAGE" 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary contact-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
