import React from 'react';
import { LayoutGrid, ArrowUpRight, ExternalLink } from 'lucide-react';

const ProjectsCard = () => {
  const projects = [
    {
      title: 'CargoMate: Logistics Management',
      description: 'A full-stack logistics platform connecting truck owners and delivery service providers. Developed responsive frontend interfaces, scalable backend APIs, and integrated user authentication for real-time operations.',
      image: null, // We will use a custom CSS schematic
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      link: 'https://github.com/charan-bheesetty',
      github: 'https://github.com/charan-bheesetty',
      primaryColor: 'green',
    },
    {
      title: 'Emerlance: Smart Emergency Response',
      description: 'A smart emergency response system featuring real-time ambulance route optimization and automated traffic signal control using Google Maps Platform, where traffic signals turn green as the ambulance approaches.',
      image: null, // We will use a custom CSS schematic
      tags: ['React', 'Node.js', 'Express.js', 'Google Maps API', 'Route Optimization'],
      link: 'https://github.com/charan-bheesetty',
      github: 'https://github.com/charan-bheesetty',
      primaryColor: 'cyan',
    }
  ];

  return (
    <div className="tron-card relative flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:col-span-2 lg:row-span-2">
      {/* Corner Accents */}
      <div className="tron-corner-accent accent-tl" />
      <div className="tron-corner-accent accent-tr" />
      <div className="tron-corner-accent accent-bl" />
      <div className="tron-corner-accent accent-br" />

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 font-orbitron text-xs font-bold tracking-widest text-neon-green uppercase mb-4">
          <LayoutGrid className="h-4 w-4" />
          SYSTEM_ARCHIVE // PROJECTS
        </div>
        <h3 className="font-orbitron text-2xl font-bold text-white mb-2 text-left">
          Featured Deployments
        </h3>
        <p className="font-sans text-xs text-neutral-400 mb-6 text-left">
          A selection of active code repositories and live applications deployed across production nodes.
        </p>

        {/* Projects List */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const isGreen = project.primaryColor === 'green';
            return (
              <div
                key={project.title}
                className="group/project flex flex-col justify-between rounded-2xl border border-white/5 bg-[#070707] p-5 transition-all duration-300 hover:border-white/10 hover:bg-[#090909]"
              >
                <div>
                  {/* Project Image / Schematic Container */}
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-xl border border-white/5 bg-[#050505]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/project:scale-103"
                      />
                    ) : project.title.includes('CargoMate') ? (
                      /* CargoMate Logistics Flow Diagram */
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[#050505] p-4 font-share-mono text-[9px] text-neutral-500">
                        <div className="scanline absolute inset-0 pointer-events-none z-10 opacity-30" />
                        <div className="flex items-center gap-1.5 mb-2 text-neon-green">
                          <span>[CARGO]</span>
                          <span className="animate-pulse">---&gt;</span>
                          <span>[TRUCK_MATCH]</span>
                          <span className="animate-pulse">---&gt;</span>
                          <span>[DELIVERED]</span>
                        </div>
                        <div className="rounded border border-white/5 bg-[#0D0D0D] px-2 py-1 text-[8px] text-neutral-400">
                          LOAD: Active Dispatch // MATCH_RATE: 98.4% // STATUS: SECURE
                        </div>
                      </div>
                    ) : (
                      /* Emerlance Route Optimization Diagram */
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[#050505] p-4 font-share-mono text-[9px] text-neutral-500">
                        <div className="scanline absolute inset-0 pointer-events-none z-10 opacity-30" />
                        <div className="flex items-center gap-1.5 mb-2 text-neon-cyan">
                          <span>[AMBULANCE]</span>
                          <span className="animate-pulse">===&gt;</span>
                          <span>[SIGNAL: GREEN]</span>
                          <span className="animate-pulse">===&gt;</span>
                          <span>[HOSPITAL]</span>
                        </div>
                        <div className="rounded border border-white/5 bg-[#0D0D0D] px-2 py-1 text-[8px] text-neutral-400">
                          GPS: Engaged // Traffic Preemption: Active // Delay: 0.0s
                        </div>
                      </div>
                    )}

                    {/* Dark overlay & buttons on hover */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity duration-300 group-hover/project:opacity-100">
                      <a
                        href={project.github}
                        className="flex items-center justify-center rounded-lg bg-neutral-900 border border-white/10 p-2 text-white hover:bg-neutral-800 hover:border-neon-green/50 transition-all"
                        title="View Github"
                      >
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                      <a
                        href={project.link}
                        className="flex items-center justify-center rounded-lg bg-neon-green p-2 text-black hover:bg-white transition-all shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                        title="Live Link"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="flex items-center justify-between font-orbitron text-base font-bold text-white group-hover/project:text-neon-green transition-colors text-left">
                    {project.title}
                    <ArrowUpRight className={`h-4 w-4 transition-transform group-hover/project:translate-x-0.5 group-hover/project:-translate-y-0.5 ${
                      isGreen ? 'text-neon-green' : 'text-neon-cyan'
                    }`} />
                  </h4>
                  <p className="mt-2 text-left font-sans text-xs text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/5 px-2 py-0.5 font-share-mono text-[9px] text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 border-t border-white/5 pt-4 text-left">
        <a
          href="#github"
          className="inline-flex items-center gap-1.5 font-share-mono text-xs text-neutral-500 hover:text-neon-green transition-colors"
        >
          // FETCH_ALL_REPOSITORIES.sh
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
