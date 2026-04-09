import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play, Pause } from 'lucide-react';
import './Projects.css';

const projectsList = [
  {
    id: 1,
    title: "Cargomate",
    shortDesc: "Package Delivery Platform",
    desc: "Designed and implemented a logistics management platform connecting truck owners and delivery service providers.",
    image: "/assets/projects/cargomate.png",
    link: "https://charanakaprabha.github.io/Cargomate",
    deployed: true
  },
  {
    id: 2,
    title: "Sai Kulwanth Degree College",
    shortDesc: "College Web Page",
    desc: "Deployed the Degree College website using full-stack technologies, responsive design dynamic content management, and improved user accessibility.",
    image: "/assets/projects/saikulwanth.png",
    link: "https://srisaikulwanth.vercel.app",
    deployed: true
  },
  {
    id: 3,
    title: "CA Ramesh Y Portfolio",
    shortDesc: "Professional Portfolio",
    desc: "Professional portfolio site developed for CA Ramesh Y for showcasing his services.",
    image: "/assets/projects/carameshy.png",
    link: "https://www.carameshy.com/",
    deployed: true
  },
  {
    id: 4,
    title: "HTS Software Company",
    shortDesc: "Company Website",
    desc: "Official website for HTS Software Company with full-stack technologies.",
    image: "/assets/projects/halftone.png",
    link: "https://www.halftonesystems.com/",
    deployed: true
  },
  {
    id: 5,
    title: "Unipick",
    shortDesc: "University Admission Platform",
    desc: "Deployed a university Admission portal that streamlines student Admissions through a scalable full-stack web application.",
    image: "/assets/projects/unipick.png",
    link: "https://www.unipick.org/",
    deployed: true
  },
  {
    id: 6,
    title: "Vexamo",
    shortDesc: "Company Site & Co-founder",
    desc: "My Company Site showcasing our branding, UI/UX, and web development services.",
    image: "/assets/projects/vexamo.png",
    link: "https://www.vexamo.in/",
    deployed: true
  },
  {
    id: 7,
    title: "Emerlance",
    shortDesc: "Ambulance Traffic Control",
    desc: "A system for ambulance traffic control and routing.",
    image: "/assets/projects/emerlance.png",
    link: "https://github.com/Charanakaprabha/ambulancetraffic",
    deployed: false
  },
  {
    id: 8,
    title: "Kalam Intern Project",
    shortDesc: "Backend Development",
    desc: "Intern project at Kalam Foundation.",
    image: "/assets/projects/kalam.png",
    link: "https://github.com/Charanakaprabha/kalamintern",
    deployed: false
  }
];

const Projects = () => {
  const [items, setItems] = useState(() => projectsList.map(p => ({ ...p, instanceId: Math.random() })));
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    let interval;
    if (isAuto) {
      interval = setInterval(() => {
        handleNext();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAuto]);

  const handleNext = () => {
    setItems((prev) => {
      const arr = [...prev];
      const first = arr.shift();
      // Generate a new reference ID so it triggers unmount/remount in AnimatePresence
      first.instanceId = Math.random();
      arr.push(first);
      return arr;
    });
  };

  const handlePrev = () => {
    setIsAuto(false);
    setItems((prev) => {
      const arr = [...prev];
      const last = arr.pop();
      last.instanceId = Math.random();
      arr.unshift(last);
      return arr;
    });
  };

  const handleManualNext = () => {
    setIsAuto(false);
    handleNext();
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <div className="projects-header">
          <h4 className="section-subtitle">Selected Work</h4>
          <h2 className="section-title">MY PROJECTS</h2>

          <div className="mode-toggle-container">
            <button
              className={`mode-btn ${isAuto ? 'active' : ''}`}
              onClick={() => setIsAuto(true)}
            >
              <Play size={16} /> Auto
            </button>
            <button
              className={`mode-btn ${!isAuto ? 'active' : ''}`}
              onClick={() => setIsAuto(false)}
            >
              <Pause size={16} /> Manual
            </button>
          </div>
        </div>

        <div className="projects-carousel-wrapper">
          <button className="carousel-btn left" onClick={handlePrev} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          <div className="projects-carousel seamless-loop">
            <AnimatePresence mode="popLayout" initial={false}>
              {items.map((project, idx) => {
                const isActive = idx === 0;

                return (
                  <motion.div
                    layout
                    key={`${project.id}-${project.instanceId}`} // New key forces exit/enter
                    className={`project-card ${isActive ? 'active' : ''}`}
                    initial={{ opacity: 0, scale: 0.8, x: window.innerWidth < 768 ? 50 : 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: window.innerWidth < 768 ? -50 : -100 }}
                    transition={{ layout: { type: 'spring', stiffness: 200, damping: 25 }, opacity: { duration: 0.2 } }}

                    onClick={() => {
                      if (isActive) return;
                      setIsAuto(false);
                      setItems(prev => {
                        const arr = [...prev];
                        const clickedIndex = arr.findIndex(p => p.id === project.id);
                        // rotate array so clicked is first
                        const movingPart = arr.splice(0, clickedIndex);
                        movingPart.forEach(p => p.instanceId = Math.random());
                        return [...arr, ...movingPart];
                      });
                    }}
                  >
                    <div className="project-inner">
                      <div className="project-img-wrapper">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-img"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/600x400/2a2a35/ffffff?text=" + project.title.replace(/ /g, '+');
                          }}
                        />
                        {project.deployed ? (
                          <div className="deployed-badge">
                            <span>Deployed</span>
                          </div>
                        ) : (
                          <div className="not-deployed-badge">
                            <span>Still in Development</span>
                          </div>
                        )}
                        <div className="project-overlay">
                          {isActive && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-view-project">
                              {project.deployed ? <><ExternalLink size={18} /> Visit Site</> : <><Github size={18} /> View Code</>}
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="project-content">
                        <span className="project-tag">{project.shortDesc}</span>
                        <h3 className="project-name">{project.title}</h3>
                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              className="project-desc"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {project.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <button className="carousel-btn right" onClick={handleManualNext} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
