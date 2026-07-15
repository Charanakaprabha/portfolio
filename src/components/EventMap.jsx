import React, { useState, useEffect, useRef } from 'react';

const EventMap = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [isSectionActive, setIsSectionActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionActive(true);
        }
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const leftEvents = [
    { id: 'freelance', title: 'Freelance Full-Stack Developer', date: 'Aug 2025', city: 'Remote', anchorY: 150, lineDelay: '100ms', badgeDelay: '800ms' },
    { id: 'internship', title: 'HTS Development Intern', date: 'Feb 2026', city: 'Visakhapatnam', anchorY: 260, lineDelay: '300ms', badgeDelay: '1000ms' },
    { id: 'edu_android', title: 'EduSkills Android Dev Certified', date: 'Jun 2026', city: 'Online', anchorY: 370, lineDelay: '500ms', badgeDelay: '1200ms' },
  ];

  const rightEvents = [
    { id: 'cisco_py', title: 'Cisco Python Certified', date: 'Oct 2025', city: 'Online', anchorY: 170, lineDelay: '200ms', badgeDelay: '900ms' },
    { id: 'build_bharat', title: 'Build Bharat AI Hackathon Winner', date: 'Mar 2026', city: 'India', anchorY: 280, lineDelay: '400ms', badgeDelay: '1100ms' },
    { id: 'gdg_hack', title: 'GDG Hackathon Top Rank', date: 'Dec 2026', city: 'India', anchorY: 390, lineDelay: '600ms', badgeDelay: '1300ms' },
  ];

  return (
    <section
      ref={containerRef}
      id="milestones"
      className="w-full bg-[#1E2222] py-24 px-6 md:px-12 xl:px-24 flex flex-col items-center justify-center relative overflow-hidden"
    >
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <span className="font-jakarta text-xs font-extrabold uppercase tracking-widest text-[#CBEA7B] bg-white/5 px-4 py-1.5 rounded-full">
          My Journey
        </span>
        <h2 className="font-jakarta text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Hackathons &amp; Milestones
        </h2>
      </div>

      {/* Node Link Map Container */}
      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 min-h-[500px]">
        
        {/* Left Event Badges */}
        <div className="lg:col-span-4 flex flex-col justify-around h-full gap-6 md:gap-8 z-20">
          {leftEvents.map((evt) => (
            <div
              key={evt.id}
              className={`bg-charcoal/80 border rounded-2xl p-4 shadow-lg flex items-center justify-between cursor-pointer will-change-transform-opacity transition-premium ${
                activeNode === evt.id
                  ? 'border-[#CBEA7B] shadow-[0_0_15px_rgba(203,234,123,0.15)] scale-[1.05]'
                  : 'border-white/10 hover:border-white/30 hover:scale-[1.02]'
              } ${
                isSectionActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{
                transitionDelay: isSectionActive ? evt.badgeDelay : '0ms',
              }}
              onMouseEnter={() => setActiveNode(evt.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-[#CBEA7B] uppercase tracking-wider mb-0.5">{evt.date}</span>
                <h4 className="text-sm font-extrabold text-white">{evt.title}</h4>
              </div>
              <span className="text-[9px] font-bold bg-white/10 text-white/70 px-2.5 py-1 rounded-full uppercase">
                {evt.city}
              </span>
            </div>
          ))}
        </div>

        {/* Center Smartphone Anchor with connecting SVG overlay lines */}
        <div className="lg:col-span-4 flex justify-center relative z-10 py-6">
          
          {/* Connector Lines overlay (Desktop Only) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 400 500">
            {/* Left Lines: Draw from Phone (X=170) to Badge (X=50) */}
            {leftEvents.map((evt) => (
              <g key={`line-left-${evt.id}`}>
                <path
                  d={`M 170 ${evt.anchorY} Q 140 ${evt.anchorY - 20} 50 ${evt.anchorY - 20}`}
                  fill="none"
                  stroke={activeNode === evt.id ? '#CBEA7B' : 'rgba(255, 255, 255, 0.15)'}
                  strokeWidth={activeNode === evt.id ? '2' : '1'}
                  strokeDasharray="180"
                  strokeDashoffset={isSectionActive ? 0 : 180}
                  className="will-change-transform-opacity"
                  style={{
                    transition: 'stroke-dashoffset 0.7s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.3s ease, stroke-width 0.3s ease',
                    transitionDelay: isSectionActive ? evt.lineDelay : '0ms',
                  }}
                />
                <circle
                  cx="170"
                  cy={evt.anchorY}
                  r={activeNode === evt.id ? '6' : '3.5'}
                  fill={activeNode === evt.id ? '#CBEA7B' : 'rgba(255, 255, 255, 0.3)'}
                  className="transition-all duration-300 animate-pulse-micro"
                />
              </g>
            ))}

            {/* Right Lines: Draw from Phone (X=230) to Badge (X=350) */}
            {rightEvents.map((evt) => (
              <g key={`line-right-${evt.id}`}>
                <path
                  d={`M 230 ${evt.anchorY} Q 260 ${evt.anchorY - 20} 350 ${evt.anchorY - 20}`}
                  fill="none"
                  stroke={activeNode === evt.id ? '#CBEA7B' : 'rgba(255, 255, 255, 0.15)'}
                  strokeWidth={activeNode === evt.id ? '2' : '1'}
                  strokeDasharray="180"
                  strokeDashoffset={isSectionActive ? 0 : 180}
                  className="will-change-transform-opacity"
                  style={{
                    transition: 'stroke-dashoffset 0.7s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.3s ease, stroke-width 0.3s ease',
                    transitionDelay: isSectionActive ? evt.lineDelay : '0ms',
                  }}
                />
                <circle
                  cx="230"
                  cy={evt.anchorY}
                  r={activeNode === evt.id ? '6' : '3.5'}
                  fill={activeNode === evt.id ? '#CBEA7B' : 'rgba(255, 255, 255, 0.3)'}
                  className="transition-all duration-300 animate-pulse-micro"
                />
              </g>
            ))}
          </svg>

          {/* Smartphone Mockup */}
          <div
            className={`relative w-[280px] h-[480px] border-8 border-charcoal rounded-[44px] bg-[#1E2222] overflow-hidden shadow-2xl flex flex-col justify-between transition-premium will-change-transform-opacity ${
              isSectionActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-y-8'
            }`}
          >
            
            {/* Top Speaker & Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-charcoal rounded-full z-30 flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-[#CBEA7B] rounded-full animate-pulse"></span>
            </div>

            {/* Phone Screen: stark yellow UI */}
            <div className="flex-1 bg-[#F5D061] pt-8 px-4 pb-4 flex flex-col justify-between text-charcoal">
              
              <div className="text-center mt-2">
                <span className="text-[8px] font-extrabold uppercase tracking-widest text-charcoal/60 bg-charcoal/10 px-2 py-0.5 rounded-full">
                  Connect Card
                </span>
                <h3 className="text-sm font-extrabold tracking-tight mt-1">Scan for GitHub profile</h3>
              </div>

              {/* Stark Black-and-White QR Code Frame */}
              <div className="bg-white p-4 rounded-3xl border-2 border-charcoal flex flex-col items-center justify-center gap-2 shadow-md my-auto">
                <div className="w-36 h-36 bg-white p-1">
                  <svg className="w-full h-full text-charcoal" viewBox="0 0 29 29" fill="currentColor">
                    {/* Top-Left Finder */}
                    <path d="M0 0h7v7H0zm1 1v5h5V1zm1 1h3v3H2z" />
                    {/* Top-Right Finder */}
                    <path d="M22 0h7v7h-7zm1 1v5h5V1zm1 1h3v3H24z" />
                    {/* Bottom-Left Finder */}
                    <path d="M0 22h7v7H0zm1 1v5h5v-5zm1 1h3v3H2z" />
                    {/* Simulated code modules */}
                    <rect x="9" y="0" width="2" height="2" />
                    <rect x="13" y="1" width="1" height="3" />
                    <rect x="16" y="0" width="3" height="1" />
                    <rect x="15" y="2" width="2" height="2" />
                    <rect x="9" y="4" width="3" height="1" />
                    <rect x="19" y="4" width="2" height="3" />
                    <rect x="13" y="5" width="2" height="1" />
                    <rect x="0" y="9" width="2" height="2" />
                    <rect x="3" y="10" width="3" height="1" />
                    <rect x="8" y="8" width="1" height="5" />
                    <rect x="10" y="10" width="4" height="2" />
                    <rect x="15" y="8" width="1" height="1" />
                    <rect x="20" y="9" width="2" height="3" />
                    <rect x="24" y="8" width="4" height="1" />
                    <rect x="27" y="10" width="2" height="2" />
                    <rect x="2" y="13" width="4" height="2" />
                    <rect x="9" y="14" width="2" height="1" />
                    <rect x="13" y="13" width="1" height="3" />
                    <rect x="16" y="14" width="3" height="2" />
                    <rect x="21" y="13" width="2" height="1" />
                    <rect x="25" y="14" width="2" height="3" />
                    <rect x="0" y="17" width="3" height="1" />
                    <rect x="4" y="16" width="2" height="2" />
                    <rect x="8" y="18" width="4" height="1" />
                    <rect x="14" y="17" width="1" height="2" />
                    <rect x="18" y="18" width="3" height="1" />
                    <rect x="22" y="16" width="1" height="3" />
                    <rect x="9" y="20" width="2" height="2" />
                    <rect x="13" y="21" width="3" height="1" />
                    <rect x="18" y="20" width="1" height="3" />
                    <rect x="21" y="21" width="4" height="1" />
                    <rect x="27" y="20" width="2" height="2" />
                    <rect x="9" y="24" width="4" height="1" />
                    <rect x="15" y="25" width="2" height="2" />
                    <rect x="19" y="24" width="2" height="1" />
                    <rect x="23" y="25" width="4" height="2" />
                  </svg>
                </div>
                <p className="text-[9px] font-extrabold uppercase tracking-wider text-charcoal/50">
                  charan-bheesetty
                </p>
              </div>

              {/* Status Message */}
              <div className="bg-[#1E2222] text-white p-3 rounded-2xl flex items-center justify-between text-[10px] font-bold shadow-xs">
                <span>Direct Connection</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

            </div>

            {/* Bottom Screen Bar */}
            <div className="w-full h-3 bg-[#F5D061] flex items-center justify-center pb-1">
              <span className="w-20 h-1 bg-charcoal/20 rounded-full" />
            </div>

          </div>

        </div>

        {/* Right Event Badges */}
        <div className="lg:col-span-4 flex flex-col justify-around h-full gap-6 md:gap-8 z-20">
          {rightEvents.map((evt) => (
            <div
              key={evt.id}
              className={`bg-charcoal/80 border rounded-2xl p-4 shadow-lg flex items-center justify-between cursor-pointer will-change-transform-opacity transition-premium ${
                activeNode === evt.id
                  ? 'border-[#CBEA7B] shadow-[0_0_15px_rgba(203,234,123,0.15)] scale-[1.05]'
                  : 'border-white/10 hover:border-white/30 hover:scale-[1.02]'
              } ${
                isSectionActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{
                transitionDelay: isSectionActive ? evt.badgeDelay : '0ms',
              }}
              onMouseEnter={() => setActiveNode(evt.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-[#CBEA7B] uppercase tracking-wider mb-0.5">{evt.date}</span>
                <h4 className="text-sm font-extrabold text-white">{evt.title}</h4>
              </div>
              <span className="text-[9px] font-bold bg-white/10 text-white/70 px-2.5 py-1 rounded-full uppercase">
                {evt.city}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Mobile-only Event List */}
      <div className="w-full max-w-sm flex flex-col gap-3 mt-8 lg:hidden">
        {[...leftEvents, ...rightEvents].map((evt) => (
          <div key={`mob-${evt.id}`} className="bg-charcoal border border-white/5 rounded-xl p-3.5 flex items-center justify-between text-left">
            <div>
              <span className="text-[9px] text-[#CBEA7B] font-extrabold block mb-0.5">{evt.date}</span>
              <span className="text-xs font-bold text-white">{evt.title}</span>
            </div>
            <span className="text-[9px] font-bold bg-white/10 text-white/60 px-2 py-0.5 rounded-full">{evt.city}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default EventMap;
