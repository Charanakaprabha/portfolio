import React, { useState } from 'react';
import { Cpu, Terminal, Layers } from 'lucide-react';

const SkillsCard = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'LANGUAGES', 'BACKEND', 'FRONTEND', 'DATA_TOOLS'];

  const skills = [
    // Languages
    { name: 'Python', category: 'LANGUAGES', level: 'Expert', color: 'green' },
    { name: 'Java', category: 'LANGUAGES', level: 'Advanced', color: 'green' },
    { name: 'JavaScript', category: 'LANGUAGES', level: 'Expert', color: 'cyan' },
    { name: 'C#', category: 'LANGUAGES', level: 'Intermediate', color: 'cyan' },
    { name: 'SQL', category: 'LANGUAGES', level: 'Expert', color: 'green' },

    // Backend
    { name: 'Node.js', category: 'BACKEND', level: 'Expert', color: 'green' },
    { name: 'Express.js', category: 'BACKEND', level: 'Expert', color: 'green' },
    { name: 'Spring Boot', category: 'BACKEND', level: 'Intermediate', color: 'green' },
    { name: 'FastAPI', category: 'BACKEND', level: 'Advanced', color: 'green' },
    { name: 'REST & GraphQL', category: 'BACKEND', level: 'Expert', color: 'green' },

    // Frontend
    { name: 'React', category: 'FRONTEND', level: 'Expert', color: 'cyan' },
    { name: 'Tailwind CSS', category: 'FRONTEND', level: 'Expert', color: 'cyan' },
    { name: 'HTML5/CSS3', category: 'FRONTEND', level: 'Expert', color: 'cyan' },
    { name: 'Vite', category: 'FRONTEND', level: 'Advanced', color: 'cyan' },

    // Data/Tools
    { name: 'PostgreSQL', category: 'DATA_TOOLS', level: 'Expert', color: 'green' },
    { name: 'MongoDB', category: 'DATA_TOOLS', level: 'Advanced', color: 'green' },
    { name: 'BigQuery', category: 'DATA_TOOLS', level: 'Intermediate', color: 'green' },
    { name: 'Git', category: 'DATA_TOOLS', level: 'Expert', color: 'cyan' },
    { name: 'Docker', category: 'DATA_TOOLS', level: 'Intermediate', color: 'cyan' },
  ];

  const filteredSkills = activeCategory === 'ALL'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="tron-card relative flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:col-span-2 lg:row-span-1">
      {/* Corner Accents */}
      <div className="tron-corner-accent accent-tl" />
      <div className="tron-corner-accent accent-tr" />
      <div className="tron-corner-accent accent-bl" />
      <div className="tron-corner-accent accent-br" />

      {/* Top section: Header & Filters */}
      <div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="flex items-center gap-2 font-orbitron text-xs font-bold tracking-widest text-neon-green uppercase">
            <Cpu className="h-4 w-4" />
            CORE_COMPILER // SKILLS
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-1 font-share-mono text-[10px]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded px-2.5 py-1 font-bold border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-neon-green bg-neon-green/10 text-neon-green shadow-[0_0_10px_rgba(204,255,0,0.15)]'
                    : 'border-white/5 bg-[#0D0D0D] text-neutral-500 hover:border-white/10 hover:text-neutral-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="font-sans text-xs text-neutral-400 mb-6 text-left">
          Technical assets compiled in memory. Hover over the nodes to inspect capabilities.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredSkills.map((skill) => {
            const isGreen = skill.color === 'green';
            return (
              <div
                key={skill.name}
                className={`group relative flex flex-col justify-between rounded-xl border bg-[#050505] p-3 text-left transition-all duration-300 cursor-pointer ${
                  isGreen
                    ? 'border-white/5 hover:border-neon-green/40 hover:shadow-[0_0_15px_rgba(204,255,0,0.08)]'
                    : 'border-white/5 hover:border-neon-cyan/40 hover:shadow-[0_0_15px_rgba(0,229,255,0.08)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Terminal className={`h-3.5 w-3.5 ${isGreen ? 'text-neon-green' : 'text-neon-cyan'}`} />
                  <span className="font-share-mono text-[8px] text-neutral-500 group-hover:text-neutral-400">
                    {skill.level}
                  </span>
                </div>
                <span className="font-share-mono text-xs text-white font-bold tracking-tight">
                  {skill.name}
                </span>

                {/* Micro-glow indicator on top-right of capsule */}
                <div className={`absolute top-1.5 right-1.5 h-1 w-1 rounded-full opacity-30 group-hover:opacity-100 transition-opacity ${
                  isGreen ? 'bg-neon-green shadow-[0_0_5px_#CCFF00]' : 'bg-neon-cyan shadow-[0_0_5px_#00E5FF]'
                }`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend Footer */}
      <div className="mt-6 flex gap-4 border-t border-white/5 pt-4 font-share-mono text-[10px] text-neutral-500">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-green" />
          <span>SYSTEM CORE (BACKEND / DB)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
          <span>INTERFACE DESIGN (FRONTEND)</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
