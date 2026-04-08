import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    // REPLACE THESE WITH YOUR ACTUAL TEMPLATE ID AND PUBLIC KEY
    const SERVICE_ID = 'service_7agdqrc';
    const TEMPLATE_ID = 'template_g99kyn4';
    const PUBLIC_KEY = 'OUS1k-uigst_H_hTk';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      })
      .finally(() => {
        setIsSending(false);
        // Clear status after 5 seconds
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      });
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

              <div className="contact-info-details">
                <h3 className="contact-subtitle">Contact Info</h3>
                <div className="contact-divider"></div>
                
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <span className="detail-icon">📧</span>
                    <span>charansaiprabhakumarbheesetty@gmail.com</span>
                  </div>
                  <div className="contact-detail-item">
                    <span className="detail-icon">📞</span>
                    <span>+91 80740 84493</span>
                  </div>
                  <div className="contact-detail-item">
                    <span className="detail-icon">📍</span>
                    <span>Visakhapatnam, Andhra Pradesh, India</span>
                  </div>
                </div>
              </div>
            </div>

            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label>NAME:</label>
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
                <label>EMAIL:</label>
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
                <label>MESSAGE:</label>
                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn btn-primary contact-btn" disabled={isSending}>
                {isSending ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
