import React, { useState, useEffect, useRef } from 'react';

const Gateway = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gateway"
      className="w-full bg-[#CBEA7B] py-24 px-6 md:px-12 xl:px-24 flex items-center justify-center relative overflow-hidden"
    >
      
      {/* Background visual accents */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-white/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-black/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Bold Typography Block */}
        <div
          className={`lg:col-span-6 flex flex-col gap-6 max-w-xl text-left will-change-transform-opacity transition-premium ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <span className="font-jakarta text-xs font-extrabold uppercase tracking-widest text-charcoal/70 bg-white/35 px-4 py-1.5 rounded-full w-fit">
            My Focus Areas
          </span>
          <h2 className="font-jakarta text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-charcoal leading-[1.1]">
            Your Gateway To Modern Software Engineering
          </h2>
          <p className="font-jakarta text-base sm:text-lg text-charcoal/80 leading-relaxed font-medium">
            As a computer science student, I design elegant frontends, architect clean backend databases, and explore cutting-edge fields like intelligent emergency routing and machine learning.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2 bg-charcoal/10 px-4 py-2.5 rounded-full border border-charcoal/5">
              <span className="w-2.5 h-2.5 rounded-full bg-charcoal" />
              <span className="text-xs font-bold text-charcoal">Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-2 bg-charcoal/10 px-4 py-2.5 rounded-full border border-charcoal/5">
              <span className="w-2.5 h-2.5 rounded-full bg-charcoal" />
              <span className="text-xs font-bold text-charcoal">API &amp; System Integration</span>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Picture blended directly on green background */}
        <div className="lg:col-span-6 flex justify-center relative">
          

          {/* Profile image container (full image with aspect ratio 5:4, bottom-fade mask, blending with green background) */}
          <div
            className={`relative w-full max-w-[480px] aspect-[1024/820] overflow-hidden will-change-transform-opacity transition-premium ${
              inView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-12'
            }`}
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 93%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 93%, transparent 100%)',
            }}
          >
            <img
              src="/charan_profile_transparent.png"
              alt="Charan Bheesetty profile"
              className="w-full h-full object-cover object-center mix-blend-multiply transition-premium hover:scale-105 select-none pointer-events-none"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Gateway;
