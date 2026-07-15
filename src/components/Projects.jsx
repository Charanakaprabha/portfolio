import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, BookOpen } from 'lucide-react';

const Projects = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [progress, setProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Project data containing all 8 projects with descriptions and custom visual assets
  const projects = [
    {
      title: 'EquipShare',
      description: 'A decentralized marketplace enabling MSMEs and manufacturers to rent, lease, or share industrial machinery. Provides secure blockchain bookings, equipment management, and utilization analytics.',
      image: '/equipshare_preview.png',
      tags: ['Solidity', 'Ethereum', 'React', 'Node.js', 'Web3'],
      github: 'https://github.com/charan-bheesetty',
      link: 'https://github.com/charan-bheesetty',
      caseStudy: 'https://github.com/charan-bheesetty',
    },
    {
      title: 'CargoMate',
      description: 'A full-stack MERN logistics platform connecting truck owners with businesses. Features shipment booking, user authentication, live vehicle tracking, and an interactive routing dashboard.',
      image: '/cargomate_preview.png',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'REST APIs'],
      github: 'https://github.com/charan-bheesetty',
      link: 'https://github.com/charan-bheesetty',
      caseStudy: 'https://github.com/charan-bheesetty',
    },
    {
      title: 'UniPick',
      description: 'A comprehensive university discovery and admission portal helping students explore colleges, compare degree courses, verify eligibility, and view application timelines via an intuitive UI.',
      image: '/unipick_preview.png',
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'API Engine'],
      github: 'https://github.com/charan-bheesetty',
      link: 'https://github.com/charan-bheesetty',
      caseStudy: 'https://github.com/charan-bheesetty',
    },
    {
      title: 'Carameshy',
      description: 'A modern, high-performance business platform built with clean responsive layouts, optimized asset delivery, and customized UI/UX workflows to enhance client conversions.',
      image: '/carameshy_preview.png',
      tags: ['HTML5', 'Vanilla CSS', 'JavaScript', 'Performance Tuning'],
      github: 'https://github.com/charan-bheesetty',
      link: 'https://github.com/charan-bheesetty',
      caseStudy: 'https://github.com/charan-bheesetty',
    },
    {
      title: 'Sai Kulwanth Portal',
      description: 'An educational degree college website built to improve digital accessibility, present academic curricula, organize schedules, and streamline administrative notifications.',
      image: '/saikulwanth_preview.png',
      tags: ['React', 'Node.js', 'Express', 'Tailwind UI'],
      github: 'https://github.com/charan-bheesetty',
      link: 'https://github.com/charan-bheesetty',
      caseStudy: 'https://github.com/charan-bheesetty',
    },
    {
      title: 'Halftone AI Assistant',
      description: 'An AI-powered chatbot assistant embedded in the Halftone Systems website utilizing Llama 3 models and the Groq API. Offers real-time product queries and instant client support.',
      image: '/halftone_preview.png',
      tags: ['Llama 3', 'Groq API', 'React', 'Node.js', 'Websockets'],
      github: 'https://github.com/charan-bheesetty',
      link: 'https://github.com/charan-bheesetty',
      caseStudy: 'https://github.com/charan-bheesetty',
    },
    {
      title: 'Emerlance',
      description: 'A hackathon-winning smart emergency response system reducing travel times by optimizing routes and preemptively controlling traffic signals to green for approaching ambulances.',
      image: '/emerlance_preview.png',
      tags: ['React', 'Google Maps API', 'Node.js', 'Preemption Engine'],
      github: 'https://github.com/charan-bheesetty',
      link: 'https://github.com/charan-bheesetty',
      caseStudy: 'https://github.com/charan-bheesetty',
    },
    {
      title: 'Navintra',
      description: 'An indoor navigation application enabling seamless pathfinding inside universities, train stations, and malls using specialized local coordinates instead of traditional GPS.',
      image: '/navintra_preview.png',
      tags: ['React Native', 'Leaflet.js', 'GeoJSON', 'Indoor Mapping'],
      github: 'https://github.com/charan-bheesetty',
      link: 'https://github.com/charan-bheesetty',
      caseStudy: 'https://github.com/charan-bheesetty',
    }
  ];

  // Set up native mouse wheel scroll listener to translate vertical scroll to horizontal scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheelNative = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY * 1.1;
      }
    };

    slider.addEventListener('wheel', handleWheelNative, { passive: false });
    return () => {
      slider.removeEventListener('wheel', handleWheelNative);
    };
  }, []);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const scrollPercent = scrollWidth - clientWidth > 0
        ? (scrollLeft / (scrollWidth - clientWidth)) * 100
        : 0;
      setProgress(scrollPercent);
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  // Click & Drag-to-Scroll support
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scrollLeftClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRightClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      className="w-full bg-[#CBEA7B] text-charcoal py-12 lg:py-0 lg:h-screen lg:max-h-screen relative overflow-hidden flex flex-col justify-center"
    >
      {/* Immersive background glow elements */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-white/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-black/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12 xl:px-24 relative z-10">

        {/* Header Block with navigation controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="text-left max-w-2xl">
            <span className="font-jakarta text-[10px] font-extrabold uppercase tracking-widest text-charcoal/70 bg-white/35 px-3 py-1 rounded-full border border-charcoal/5">
              Portfolio
            </span>
            <h2 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-charcoal mt-3 tracking-tight">
              Selected Deployments
            </h2>
            <p className="font-jakarta text-xs sm:text-sm text-charcoal/80 mt-2 font-medium">
              Explore a horizontal catalog of web platforms, Web3 ecosystems, and AI integrations.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 mt-4 md:mt-0 select-none">
            <button
              onClick={scrollLeftClick}
              disabled={!canScrollLeft}
              className={`p-2.5 rounded-full border flex items-center justify-center transition-premium active:scale-95 ${canScrollLeft
                  ? 'bg-white/35 hover:bg-white/50 text-charcoal border-charcoal/10 cursor-pointer'
                  : 'bg-transparent text-charcoal/20 border-charcoal/5 cursor-not-allowed'
                }`}
              title="Scroll Left"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </button>
            <button
              onClick={scrollRightClick}
              disabled={!canScrollRight}
              className={`p-2.5 rounded-full border flex items-center justify-center transition-premium active:scale-95 ${canScrollRight
                  ? 'bg-white/35 hover:bg-white/50 text-charcoal border-charcoal/10 cursor-pointer'
                  : 'bg-transparent text-charcoal/20 border-charcoal/5 cursor-not-allowed'
                }`}
              title="Scroll Right"
            >
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none select-none py-3 px-1 cursor-grab active:cursor-grabbing pb-6 ${isDragging ? 'cursor-grabbing' : ''
            }`}
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="snap-center shrink-0 w-[260px] sm:w-[310px] md:w-[340px] bg-white border border-charcoal/5 rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-300 relative group/card"
              whileHover={{
                scale: 1.04,
                y: -6,
                borderColor: 'rgba(30, 34, 34, 0.25)',
                boxShadow: '0 12px 24px rgba(30, 34, 34, 0.08)',
              }}
              viewport={{ once: true }}
            >
              {/* Aspect Ratio 16:9 Project Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-black/5 border-b border-charcoal/5 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.08] select-none pointer-events-none"
                />

                {/* Dark overlay & buttons fading in on hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2.5 z-20 px-4 text-center">
                  <span className="text-[9px] font-extrabold text-[#CBEA7B] uppercase tracking-widest mb-0.5 translate-y-1 group-hover/card:translate-y-0 transition-transform duration-300">
                    Explore Codebase
                  </span>
                  <div className="flex flex-col gap-2 w-full max-w-[170px] translate-y-3 group-hover/card:translate-y-0 transition-transform duration-300 delay-75">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-[#CBEA7B] text-charcoal py-1.5 text-[11px] font-bold hover:bg-white active:scale-95 transition-all shadow-sm"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 py-1.5 text-[11px] font-bold active:scale-95 transition-all"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 border border-white/5 py-1.5 text-[11px] font-bold active:scale-95 transition-all"
                    >
                      <BookOpen className="h-3 w-3" />
                      <span>Case Study</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Metadata Content */}
              <div className="p-4.5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-jakarta text-lg font-bold text-charcoal tracking-tight group-hover/card:text-charcoal/80 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-jakarta text-[11px] sm:text-xs text-charcoal/70 leading-relaxed font-medium line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="mt-4 pt-3 border-t border-charcoal/5 flex flex-wrap gap-1">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-jakarta text-[8px] font-bold text-charcoal bg-charcoal/5 border border-charcoal/5 px-2 py-0.5 rounded-full group-hover/card:border-charcoal group-hover/card:bg-charcoal group-hover/card:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress Indicator & Center CTA */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Progress Bar Container */}
          <div className="flex-1 max-w-[280px] w-full flex items-center gap-3 select-none">
            <span className="text-[9px] font-extrabold text-charcoal/60 font-jakarta">01</span>
            <div className="flex-1 bg-charcoal/10 h-0.5 rounded-full overflow-hidden relative">
              <div
                className="bg-charcoal h-full absolute left-0 top-0 transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[9px] font-extrabold text-charcoal/60 font-jakarta">08</span>
          </div>

          {/* GitHub redirect */}
          <a
            href="https://github.com/charan-bheesetty"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 bg-charcoal text-white rounded-full px-5 py-2.5 text-[11px] font-bold tracking-wider uppercase shadow-md transition-premium hover:scale-105 active:scale-95"
          >
            <span>Browse GitHub Archive</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
