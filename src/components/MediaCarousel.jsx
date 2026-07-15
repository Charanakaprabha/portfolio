import React, { useState, useEffect } from 'react';

const MediaCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: 'Design Clean Architecture',
      description: 'Structuring modular directory files, separating state managers, and optimizing API layers for maintainable, scalable web applications.',
      illustration: (
        <div className="w-full h-full bg-[#1E2222] p-8 flex flex-col justify-between relative overflow-hidden rounded-[24px]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          
          {/* Code folder tree view illustration */}
          <div className="mt-4 flex flex-col gap-2.5 text-left font-mono text-[11px] text-white/80 bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="text-emerald-400">📂 src/</div>
            <div className="pl-4 text-amber-400">📂 components/</div>
            <div className="pl-8 text-white/60">📄 Navbar.jsx</div>
            <div className="pl-8 text-white/60">📄 Hero.jsx</div>
            <div className="pl-4 text-amber-400">📂 hooks/</div>
            <div className="pl-8 text-white/60">📄 useScroll.js</div>
            <div className="pl-4 text-emerald-400">📄 App.jsx</div>
            <div className="pl-4 text-emerald-400">📄 index.css</div>
          </div>

          <div className="mt-auto bg-[#CBEA7B] rounded-2xl p-4 text-charcoal flex items-center justify-between relative z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-wide text-charcoal/60">Pattern</span>
            <span className="text-xs font-extrabold">Component Separation</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Write Efficient Algorithms',
      description: 'Implementing optimal runtime solutions, debugging latency bottlenecks, and choosing standard paradigms for data operations.',
      illustration: (
        <div className="w-full h-full bg-[#1E2222] p-8 flex flex-col justify-between relative overflow-hidden rounded-[24px]">
          <div className="absolute inset-0 bg-radial-gradient from-purple-500/10 to-transparent pointer-events-none" />
          
          {/* Sorting visualizer bars */}
          <div className="flex items-end justify-center gap-2.5 h-[120px] w-full mt-6">
            <span className="w-3.5 h-16 bg-white/20 rounded-t" />
            <span className="w-3.5 h-24 bg-[#CBEA7B] rounded-t animate-pulse" />
            <span className="w-3.5 h-32 bg-white/40 rounded-t" />
            <span className="w-3.5 h-12 bg-[#CBEA7B] rounded-t animate-pulse" />
            <span className="w-3.5 h-28 bg-white/60 rounded-t" />
          </div>

          <div className="mt-auto bg-white/5 border border-white/10 rounded-2xl p-3.5 flex items-center justify-between relative z-10">
            <div className="text-left font-mono">
              <h4 className="text-xs font-bold text-white">MergeSort()</h4>
              <p className="text-[10px] text-white/50">Time Complexity: O(N log N)</p>
            </div>
            <span className="text-[9px] font-bold bg-[#CBEA7B] text-charcoal px-2 py-0.5 rounded uppercase">
              Optimal
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Collaborate on Open Source',
      description: 'Publishing repos, branching features, helping review pull requests, and participating in global student hackathon sprints.',
      illustration: (
        <div className="w-full h-full bg-[#1E2222] p-8 flex flex-col justify-between relative overflow-hidden rounded-[24px]">
          {/* Git branch graph representation */}
          <div className="mt-6 flex flex-col items-center justify-center relative">
            <svg className="w-full h-24 text-white/60" viewBox="0 0 300 80">
              {/* Main Line */}
              <line x1="10" y1="40" x2="290" y2="40" stroke="currentColor" strokeWidth="4" strokeDasharray="4 4" />
              <circle cx="50" cy="40" r="6" fill="#CBEA7B" />
              <circle cx="150" cy="40" r="6" fill="#CBEA7B" />
              <circle cx="250" cy="40" r="6" fill="#CBEA7B" />
              
              {/* Branch 1 */}
              <path d="M 50 40 Q 90 10 130 10 Q 170 10 210 40" fill="none" stroke="#38bdf8" strokeWidth="4" />
              <circle cx="130" cy="10" r="6" fill="#38bdf8" />
              
              {/* Branch 2 */}
              <path d="M 150 40 Q 190 70 230 70 Q 250 70 270 40" fill="none" stroke="#f43f5e" strokeWidth="3" />
              <circle cx="210" cy="70" r="5" fill="#f43f5e" />
            </svg>
          </div>

          <div className="mt-auto bg-white/10 border border-white/10 rounded-2xl p-4 text-white flex items-center justify-between relative z-10">
            <div className="text-left">
              <p className="text-[10px] font-extrabold uppercase text-white/50">Version Control</p>
              <h4 className="text-xs font-bold">git checkout -b feature-core</h4>
            </div>
            <span className="text-[9px] font-bold bg-[#CBEA7B] text-charcoal px-2.5 py-1 rounded-full uppercase">
              PR Active
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Continuously Explore Tech',
      description: 'Diving into backend systems, deploying automated web scripts, and configuring hosting clusters to stay on top of development trends.',
      illustration: (
        <div className="w-full h-full bg-[#1E2222] p-8 flex flex-col justify-between relative overflow-hidden rounded-[24px]">
          {/* Cloud ingress balancer simulation */}
          <div className="flex flex-col gap-2 mt-4 text-left font-mono text-[10px] text-white/80">
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 flex items-center justify-between">
              <span>ingress-load-balancer</span>
              <span className="text-emerald-500 font-bold">● ONLINE</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 flex items-center justify-between">
              <span>container-pod-react-1</span>
              <span className="text-[#CBEA7B] font-bold">Active</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 flex items-center justify-between">
              <span>database-replica-read</span>
              <span className="text-sky-400 font-bold">9ms Latency</span>
            </div>
          </div>

          <div className="mt-auto bg-white rounded-2xl p-4 flex items-center justify-between shadow-md relative z-10">
            <div className="text-left">
              <h4 className="text-xs font-extrabold text-charcoal">Cluster Health</h4>
              <p className="text-[9px] text-charcoal/50">All containers synced, deploy active</p>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="philosophy" className="w-full bg-[#F7F4EB] py-24 px-6 md:px-12 xl:px-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Stacked Text Block */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full min-h-[480px]">
          
          <div className="flex flex-col gap-6">
            <span className="font-jakarta text-xs font-extrabold uppercase tracking-widest text-charcoal/50 bg-charcoal/5 px-4 py-1.5 rounded-full w-fit">
              Development Ethics
            </span>
            
            {/* Vertical Navigation Titles */}
            <div className="flex flex-col gap-5">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="cursor-pointer group text-left border-l-2 pl-6 transition-all duration-300"
                  style={{
                    borderLeftColor: activeIndex === idx ? '#1E2222' : 'rgba(30, 34, 34, 0.1)',
                  }}
                >
                  <h3
                    className={`font-jakarta text-xl sm:text-2xl font-extrabold transition-all duration-300 ${
                      activeIndex === idx ? 'text-charcoal opacity-100' : 'text-charcoal/40 opacity-70 group-hover:opacity-90'
                    }`}
                  >
                    {slide.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Synchronized Description Crossfade Box */}
            <div className="min-h-[80px] sm:min-h-[72px] mt-2 relative overflow-hidden text-left w-full">
              {slides.map((slide, idx) => (
                <p
                  key={idx}
                  className={`font-jakarta text-xs sm:text-sm text-charcoal/70 leading-relaxed max-w-md absolute top-0 left-0 w-full transition-all duration-500 ease-in-out will-change-transform-opacity ${
                    activeIndex === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
                  }`}
                >
                  {slide.description}
                </p>
              ))}
            </div>
          </div>

          {/* Connect profiles badges */}
          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-charcoal/5">
            <a
              href="https://github.com/charan-bheesetty"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1E2222] text-white rounded-xl px-4 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-black transition-colors shadow-sm"
            >
              {/* Inline SVG for Github */}
              <svg className="w-5 h-5 text-[#CBEA7B]" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[8px] font-bold text-white/50 uppercase leading-none">Explore Repos</span>
                <span className="text-[11px] font-extrabold leading-none mt-0.5">GitHub Profile</span>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1E2222] text-white rounded-xl px-4 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-black transition-colors shadow-sm"
            >
              {/* Inline SVG for LinkedIn */}
              <svg className="w-4.5 h-4.5 text-[#CBEA7B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[8px] font-bold text-white/50 uppercase leading-none">Connect Online</span>
                <span className="text-[11px] font-extrabold leading-none mt-0.5">LinkedIn Profile</span>
              </div>
            </a>
          </div>

        </div>

        {/* Right Column: Absolute illustration crossfade container */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="w-full max-w-[480px] aspect-[4/3] rounded-[32px] overflow-hidden bg-charcoal border border-charcoal/10 shadow-2xl relative">
            
            <div className="relative w-full h-full">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out will-change-transform-opacity ${
                    activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {slide.illustration}
                </div>
              ))}
            </div>

            {/* Slide Indicators dot overlays */}
            <div className="absolute top-6 right-6 flex gap-1.5 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'bg-[#CBEA7B] w-4' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MediaCarousel;
