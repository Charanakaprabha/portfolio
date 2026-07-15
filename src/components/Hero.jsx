import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [phoneOffset, setPhoneOffset] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = Math.max(0, 80 - scrollY * 0.22);
      setPhoneOffset(offset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-between overflow-hidden bg-[#F7F4EB] pt-16 px-6">
      
      {/* Background Floating Sparklines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute top-[20%] left-[10%] w-[180px] h-[80px] opacity-40" viewBox="0 0 100 50">
          <path
            d="M0 40 Q25 10 50 35 T100 15"
            fill="none"
            stroke="#CBEA7B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="100" cy="15" r="4" fill="#CBEA7B" className="animate-pulse" />
        </svg>

        <svg className="absolute top-[60%] right-[12%] w-[220px] h-[100px] opacity-35" viewBox="0 0 100 50">
          <path
            d="M0 10 Q30 45 60 20 T100 35"
            fill="none"
            stroke="#1E2222"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="100" cy="35" r="3.5" fill="#1E2222" />
        </svg>
      </div>

      {/* Floating Stack Cards */}
      {/* 1. React Card */}
      <div
        className="absolute left-[5%] sm:left-[10%] top-[15%] z-10 animate-float-ambient-1 will-change-transform-opacity hidden md:block"
        style={{ animationDelay: '0.1s' }}
      >
        <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-white/60 p-4 shadow-[0_12px_24px_rgba(0,0,0,0.04)] w-[160px] transition-premium hover:scale-105">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-500 animate-spin" style={{ animationDuration: '8s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(30 12 12)" />
                <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(90 12 12)" />
                <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(150 12 12)" />
                <circle r="1.5" cx="12" cy="12" fill="currentColor" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal">React UI</p>
              <p className="text-[9px] text-[#22C55E] font-medium">9ms Latency</p>
            </div>
          </div>
          <div className="h-6 flex items-end">
            <svg className="w-full h-full" viewBox="0 0 100 30" fill="none">
              <path d="M0 25 L20 15 L40 22 L60 8 L80 18 L100 5" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Python AI Card */}
      <div
        className="absolute left-[2%] sm:left-[8%] top-[55%] z-10 animate-float-ambient-3 will-change-transform-opacity hidden lg:block"
        style={{ animationDelay: '1.2s' }}
      >
        <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-white/60 p-3 shadow-[0_12px_24px_rgba(0,0,0,0.04)] w-[145px] transition-premium hover:scale-105">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-2.7 0-4.9 2-4.9 4.7v1.4h4.9v.7H5.9C3.7 8.8 2 10.5 2 12.7v2.8c0 2.2 1.7 3.9 3.9 3.9h1.4v-2.1c0-1.5 1.2-2.8 2.8-2.8h4.9c1.5 0 2.8-1.2 2.8-2.8V6.7C17.8 4 15.6 2 12 2zm-2.1 2.1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" opacity="0.85" />
                <path d="M12 22c2.7 0 4.9-2 4.9-4.7v-1.4h-4.9v-.7h6.1c2.2 0 3.9-1.7 3.9-3.9v-2.8c0-2.2-1.7-3.9-3.9-3.9h-1.4v2.1c0 1.5-1.2 2.8-2.8 2.8h-4.9c-1.5 0-2.8 1.2-2.8 2.8v4.9C6.2 20 8.4 22 12 22zm2.1-2.1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal">Python ML</p>
              <p className="text-[9px] text-charcoal/50">98.2% Acc</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Node.js Card */}
      <div
        className="absolute right-[5%] sm:right-[10%] top-[18%] z-10 animate-float-ambient-2 will-change-transform-opacity hidden md:block"
        style={{ animationDelay: '0.6s' }}
      >
        <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-white/60 p-4 shadow-[0_12px_24px_rgba(0,0,0,0.04)] w-[150px] transition-premium hover:scale-105">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" />
                <polyline points="12,2 12,22" />
                <polyline points="12,12 22,16" />
                <polyline points="12,12 2,16" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal">Node API</p>
              <p className="text-[10px] text-charcoal/50">V8 Runtime</p>
            </div>
          </div>
          <div className="h-6 flex items-end">
            <svg className="w-full h-full" viewBox="0 0 100 30" fill="none">
              <path d="M0 10 L25 18 L50 5 L75 22 L100 12" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* 4. Git Card */}
      <div
        className="absolute right-[3%] sm:right-[8%] top-[45%] z-10 animate-float-ambient-1 will-change-transform-opacity hidden lg:block"
        style={{ animationDelay: '1.8s' }}
      >
        <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-white/60 p-3.5 shadow-[0_12px_24px_rgba(0,0,0,0.04)] w-[140px] transition-premium hover:scale-105">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M6 9v6M9 9l9 6" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal">Git Push</p>
              <p className="text-[10px] text-[#22C55E] font-medium">+450 commits</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Docker Card */}
      <div
        className="absolute right-[12%] top-[70%] z-10 animate-float-ambient-3 will-change-transform-opacity hidden md:block"
        style={{ animationDelay: '0.9s' }}
      >
        <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-white/60 p-3 shadow-[0_12px_24px_rgba(0,0,0,0.04)] w-[145px] transition-premium hover:scale-105">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center">
              <svg className="w-4 h-4 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="14" width="4" height="4" rx="1" />
                <rect x="8" y="14" width="4" height="4" rx="1" />
                <rect x="13" y="14" width="4" height="4" rx="1" />
                <rect x="17" y="14" width="4" height="4" rx="1" />
                <rect x="8" y="9" width="4" height="4" rx="1" />
                <rect x="13" y="9" width="4" height="4" rx="1" />
                <path d="M3 18c0 3 3 4 9 4s9-1 9-4" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal">Containers</p>
              <p className="text-[10px] text-charcoal/50">2.1s Deploy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Center Typography Content */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center mt-12 md:mt-18 px-4">
        
        {/* Small Upper Subtitle */}
        <span className="font-jakarta text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-charcoal/60 bg-charcoal/5 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up will-change-transform-opacity">
          CS Engineer &amp; Full Stack Developer
        </span>

        {/* H1 Main Heading */}
        <h1
          className="font-jakarta text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight text-charcoal max-w-3xl mb-8 opacity-0 animate-fade-in-up will-change-transform-opacity"
          style={{ animationDelay: '0.15s' }}
        >
          Building Clean Code &amp; Smart Algorithms
        </h1>

        {/* CTA Button */}
        <a
          href="#projects"
          className="group inline-flex items-center justify-center rounded-full bg-charcoal text-white px-8 py-3.5 font-jakarta text-sm font-bold shadow-lg transition-premium hover:scale-105 active:scale-95 opacity-0 animate-fade-in-up will-change-transform-opacity"
          style={{ animationDelay: '0.3s' }}
        >
          View Projects
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Bottom Anchor: Personal Coding Stats iPhone */}
      <div
        className="relative z-20 w-full flex justify-center mt-16 md:mt-24 will-change-transform-opacity"
        style={{
          transform: `translateY(${phoneOffset}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        <div className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[130px] border-t-8 border-x-8 border-charcoal bg-[#F7F4EB] rounded-t-[40px] overflow-hidden shadow-[0_-20px_50px_rgba(30,34,34,0.15)] flex flex-col justify-start">
          
          {/* Dynamic Island Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-charcoal rounded-full flex items-center justify-between px-3">
            <span className="w-1.5 h-1.5 bg-[#CBEA7B] rounded-full animate-pulse"></span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span>
              <span className="w-2.5 h-1 bg-white/20 rounded-full"></span>
            </div>
          </div>

          {/* Peeking App UI Dashboard preview */}
          <div className="w-full mt-10 px-4">
            <div className="bg-white rounded-2xl border border-charcoal/5 p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[10px] text-charcoal/50 font-bold uppercase tracking-wider">GitHub Activity</p>
                  <p className="text-sm font-extrabold text-charcoal">2,480 Commits</p>
                </div>
                <span className="text-[10px] font-bold bg-[#CBEA7B] px-2 py-1 rounded-full text-charcoal">
                  15 Projects
                </span>
              </div>
              <div className="w-full bg-charcoal/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#CBEA7B] h-full w-[85%]" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
