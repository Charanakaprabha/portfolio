import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, MessageSquare, Terminal } from 'lucide-react';

const HowItWorks = () => {
  const [inView, setInView] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="w-full bg-[#1E2222] py-12 md:py-16 px-6 md:px-12 xl:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <span className="font-jakarta text-xs font-extrabold uppercase tracking-widest text-[#CBEA7B] bg-white/5 px-4 py-1.5 rounded-full">
            Technical Arsenal
          </span>
          <h2 className="font-jakarta text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            My Skills &amp; Stack
          </h2>
        </div>

        {/* Bento Grid Container */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-fr"
        >
          
          {/* Card 1: Foundations (Top Left) */}
          <div
            className={`col-span-1 md:col-span-4 bg-white rounded-[24px] p-6 flex flex-col justify-between shadow-lg will-change-transform-opacity transition-premium hover:scale-[1.02] delay-[100ms] ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-charcoal/50">Core</span>
                <span className="text-[10px] font-bold bg-[#CBEA7B] text-charcoal px-2.5 py-1 rounded-full">Solid</span>
              </div>
              <h3 className="font-jakarta text-2xl font-extrabold text-charcoal mb-2">Foundations</h3>
              <p className="font-jakarta text-sm text-charcoal/70 mb-4 leading-relaxed">
                Proficient in primary programming languages, basic data structures, OOP design patterns, and relational query structures.
              </p>
            </div>
            
            {/* Checklist elements */}
            <div className="flex flex-col gap-2.5 bg-[#F7F4EB] p-3.5 rounded-xl text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                <span className="text-xs font-semibold text-charcoal">Java &amp; OOP Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                <span className="text-xs font-semibold text-charcoal">Data Structures &amp; Algorithmic Logic</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                <span className="text-xs font-semibold text-charcoal">SQL Databases &amp; Query Tuning</span>
              </div>
            </div>
          </div>

          {/* Card 2: Collaboration (Top Center) */}
          <div
            className={`col-span-1 md:col-span-5 bg-charcoal rounded-[24px] border border-white/10 p-6 flex flex-col justify-between shadow-lg will-change-transform-opacity transition-premium hover:scale-[1.02] delay-[200ms] ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#CBEA7B]">Teamwork</span>
                <span className="w-2 h-2 rounded-full bg-[#CBEA7B] animate-pulse" />
              </div>
              
              {/* Overlapping User Avatars representing teammates */}
              <div className="flex items-center -space-x-3 mb-4">
                <div className="w-9 h-9 rounded-full border-2 border-charcoal overflow-hidden hover:translate-y-[-4px] transition-transform">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Teammate" className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-charcoal overflow-hidden hover:translate-y-[-4px] transition-transform">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Teammate" className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-charcoal overflow-hidden hover:translate-y-[-4px] transition-transform">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Teammate" className="w-full h-full object-cover" />
                </div>
                <div className="w-7 h-7 rounded-full bg-[#CBEA7B] border-2 border-charcoal flex items-center justify-center text-[9px] font-extrabold text-charcoal">
                  +5
                </div>
              </div>
            </div>

            <div className="text-left">
              <h3 className="font-jakarta text-2xl font-extrabold text-white mb-2">Collaboration</h3>
              <p className="font-jakarta text-sm text-white/60 leading-relaxed">
                Active participant in university hackathons, open-source script repositories, and group development sprints.
              </p>
            </div>
          </div>

          {/* Card 3: DevOps & Deploy (Right Column) */}
          <div
            className={`col-span-1 md:col-span-3 md:row-span-2 bg-[#CBEA7B] rounded-[24px] p-6 flex flex-col justify-between shadow-lg will-change-transform-opacity transition-premium delay-[300ms] ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-charcoal/70">Environments</span>
                <span className="text-[10px] font-bold bg-charcoal text-white px-2.5 py-1 rounded-full">DevOps</span>
              </div>
              <h3 className="font-jakarta text-2xl font-extrabold text-charcoal mb-2">DevOps &amp; Deploy</h3>
              <p className="font-jakarta text-sm text-charcoal/80 leading-relaxed mb-4">
                Automating compiler runs, packing script targets, and maintaining serverless configurations.
              </p>
            </div>

            {/* Sync Stack */}
            <div className="flex flex-col gap-2.5 bg-white/50 p-3.5 rounded-xl border border-white/30 text-left">
              <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-indigo-50 rounded flex items-center justify-center text-[#1E2222]">
                    {/* Custom Inline SVG for Github */}
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-charcoal">GitHub Actions</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Synced</span>
              </div>

              <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-black/5 rounded flex items-center justify-center text-charcoal">
                    <Terminal className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-charcoal">Docker Registry</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Active</span>
              </div>

              <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-charcoal rounded flex items-center justify-center text-white font-extrabold text-[10px]">
                    V
                  </div>
                  <span className="text-xs font-bold text-charcoal">Vercel Deploy</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Linked</span>
              </div>
            </div>
          </div>

          {/* Card 4: News Grid -> Tech stack (Bottom Left) */}
          <div
            className={`col-span-1 md:col-span-5 bg-white rounded-[24px] p-6 flex flex-col justify-between shadow-lg will-change-transform-opacity transition-premium hover:scale-[1.02] delay-[400ms] ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-charcoal/50 block mb-2">Toolkit</span>
              <h3 className="font-jakarta text-2xl font-extrabold text-charcoal mb-3">
                Technologies I Work With
              </h3>
            </div>

            {/* Grid of brand logotypes */}
            <div className="grid grid-cols-3 gap-2.5 bg-[#F7F4EB] p-3.5 rounded-xl">
              <div className="bg-white px-2 py-1.5 rounded-lg text-center shadow-xs border border-charcoal/5 font-extrabold text-xs text-charcoal tracking-tighter">
                REACT
              </div>
              <div className="bg-white px-2 py-1.5 rounded-lg text-center shadow-xs border border-charcoal/5 font-extrabold text-xs text-charcoal tracking-tighter">
                NODE.JS
              </div>
              <div className="bg-white px-2 py-1.5 rounded-lg text-center shadow-xs border border-charcoal/5 font-extrabold text-xs text-charcoal tracking-tighter">
                PYTHON
              </div>
              <div className="bg-white px-2 py-1.5 rounded-lg text-center shadow-xs border border-charcoal/5 font-extrabold text-xs text-charcoal tracking-tighter">
                POSTGRES
              </div>
              <div className="bg-white px-2 py-1.5 rounded-lg text-center shadow-xs border border-charcoal/5 font-extrabold text-xs text-charcoal tracking-tighter">
                TAILWIND
              </div>
              <div className="bg-white px-2 py-1.5 rounded-lg text-center shadow-xs border border-charcoal/5 font-extrabold text-xs text-charcoal tracking-tighter">
                AWS CLOUD
              </div>
            </div>
          </div>

          {/* Card 5: Split row mini cards (Bottom Mid) */}
          <div
            className={`col-span-1 md:col-span-4 flex flex-col gap-3 will-change-transform-opacity transition-premium delay-[500ms] ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            
            {/* Sub-Card 1: Resume Download */}
            <a
              href="/Charan Resume (1).pdf"
              download="Charan_Resume.pdf"
              className="bg-[#1E2222] border border-white/10 rounded-[20px] p-4 flex items-center justify-between shadow-md flex-1 hover:border-[#CBEA7B]/30 transition-colors cursor-pointer"
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-[#CBEA7B] uppercase tracking-wider mb-1">Credentials</span>
                <h4 className="text-sm font-extrabold text-white">Resume Download</h4>
              </div>
              
              <div>
                <div className="bg-white rounded px-2.5 py-1.5 flex items-center gap-1.5 hover:bg-white/90 transition-colors">
                  <svg className="w-3.5 h-3.5 text-charcoal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  <span className="text-[10px] font-bold text-charcoal uppercase tracking-wider">PDF format</span>
                </div>
              </div>
            </a>

            {/* Sub-Card 2: Topic Specialties */}
            <div className="bg-[#1E2222] border border-white/10 rounded-[20px] p-4 flex flex-col justify-between shadow-md flex-1 hover:border-[#CBEA7B]/30 transition-colors">
              <span className="text-[10px] font-bold text-[#CBEA7B] uppercase tracking-wider mb-1">Focus Domains</span>
              <h4 className="text-sm font-extrabold text-white mb-2 text-left">My Specialties</h4>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-extrabold bg-[#CBEA7B] text-charcoal px-2.5 py-0.5 rounded-full cursor-pointer hover:scale-105 transition-transform">
                  Web Dev
                </span>
                <span className="text-[10px] font-extrabold bg-white/10 text-white/80 px-2.5 py-0.5 rounded-full cursor-pointer hover:bg-white/20 transition-all">
                  AI / ML
                </span>
                <span className="text-[10px] font-extrabold bg-white/10 text-white/80 px-2.5 py-0.5 rounded-full cursor-pointer hover:bg-white/20 transition-all">
                  Databases
                </span>
                <span className="text-[10px] font-extrabold bg-[#CBEA7B] text-charcoal px-2.5 py-0.5 rounded-full cursor-pointer hover:scale-105 transition-transform">
                  Algorithms
                </span>
                <span className="text-[10px] font-extrabold bg-white/10 text-white/60 px-2.5 py-0.5 rounded-full cursor-pointer hover:bg-white/20 transition-all">
                  UI / UX
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
