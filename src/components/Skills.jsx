import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    category: "Full Stack Development",
    skills: ["React.js", "Node.js", "Express", "MongoDB", "SQL", "JavaScript/TypeScript", "HTML/CSS"]
  },
  {
    category: "Data Analysis",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib/Seaborn", "Tableau/PowerBI", "Data Wrangling", "Statistical Analysis"]
  },
  {
    category: "AI/ML Engineering",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Computer Vision", "NLP", "Deep Learning", "Model Deployment"]
  }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-header">
          <h4 className="section-subtitle">My Expertise</h4>
          <h2 className="section-title">TECHNICAL SKILLS</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((group, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="skill-category-title">{group.category}</h3>
              <ul className="skill-list">
                {group.skills.map((skill, idx) => (
                  <motion.li 
                    key={idx} 
                    className="skill-item"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(56, 114, 255, 0.1)' }}
                  >
                    <span className="skill-dot"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
