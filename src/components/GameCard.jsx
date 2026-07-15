import React from 'react';
import { Gamepad2, ArrowUpRight } from 'lucide-react';

const GameCard = () => {
  return (
    <div className="tron-card relative flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:col-span-1 lg:row-span-2">
      {/* Corner Accents */}
      <div className="tron-corner-accent accent-tl" />
      <div className="tron-corner-accent accent-tr" />
      <div className="tron-corner-accent accent-bl" />
      <div className="tron-corner-accent accent-br" />

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 font-orbitron text-xs font-bold tracking-widest text-neon-cyan uppercase mb-3">
          <Gamepad2 className="h-4 w-4 text-neon-cyan glow-text-cyan" />
          PROJECTS // GAME_DEV
        </div>
        <h3 className="font-orbitron text-xl font-bold text-white mb-1 text-left">
          Journey to Her
        </h3>
        <p className="font-share-mono text-xs text-neon-green mb-4 text-left">
          STATUS: IN_DEVELOPMENT [ALPHA_0.3]
        </p>
      </div>

      {/* Game Image Mockup / Screen */}
      <div className="group/screen relative my-4 aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#050505] shadow-inner">
        {/* CRT Scanline Overlay */}
        <div className="scanline absolute inset-0 pointer-events-none z-10 opacity-40" />

        {/* Mock Screen Glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-70 pointer-events-none z-10" />

        {/* Hover overlay text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover/screen:opacity-100">
          <span className="flex items-center gap-1.5 font-share-mono text-xs font-bold text-neon-cyan border border-neon-cyan/50 bg-[#050505]/80 px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            VIEW_DOCUMENTATION.md <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <img
          src="/game_journey.png"
          alt="Journey to Her Mockup"
          className="h-full w-full object-cover transition-transform duration-500 group-hover/screen:scale-105"
        />
      </div>

      {/* Description & Technical details */}
      <div className="mt-2 text-left">
        <p className="font-sans text-xs text-neutral-400 leading-relaxed mb-4">
          A story-driven sci-fi puzzle RPG where players navigate grids, decode memories, and rewrite corrupted algorithms in a cyberpunk universe.
        </p>

        {/* Mini HUD Stats */}
        <div className="grid grid-cols-3 gap-2 rounded-lg border border-white/5 bg-[#050505] p-2.5 font-share-mono text-[10px] text-neutral-500">
          <div className="flex flex-col">
            <span>ENGINE</span>
            <span className="text-white font-semibold">Unity/C#</span>
          </div>
          <div className="flex flex-col border-l border-white/5 pl-2">
            <span>COMPLETION</span>
            <span className="text-neon-cyan font-semibold">65%</span>
          </div>
          <div className="flex flex-col border-l border-white/5 pl-2">
            <span>RENDER</span>
            <span className="text-neon-green font-semibold">URP 2D</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-5 border-t border-white/5 pt-4">
        <a
          href="#game-docs"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-neon-cyan/30 bg-neon-cyan/5 py-2.5 font-share-mono text-xs font-bold text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
        >
          EXPLORE_PROJECT.log
        </a>
      </div>
    </div>
  );
};

export default GameCard;
