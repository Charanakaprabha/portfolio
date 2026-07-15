import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';

const HeroCard = () => {
  return (
    <div className="tron-card relative flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:col-span-2 lg:row-span-2">
      {/* Corner Accents */}
      <div className="tron-corner-accent accent-tl" />
      <div className="tron-corner-accent accent-tr" />
      <div className="tron-corner-accent accent-bl" />
      <div className="tron-corner-accent accent-br" />

      {/* Decorative Grid Line */}
      <div className="absolute top-0 right-1/4 h-full w-px bg-white/[0.02] pointer-events-none" />

      {/* Top Section: Avatar & Status */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative h-24 w-24 shrink-0 rounded-2xl border border-neon-green/30 bg-[#121212] p-1 shadow-[0_0_15px_rgba(204,255,0,0.1)]">
          <img
            src="/cyber_profile.png"
            alt="Coder Avatar"
            className="h-full w-full rounded-xl object-cover"
          />
          <span className="absolute -bottom-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#050505] border border-white/5">
            <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
          </span>
        </div>

        <div className="flex flex-wrap gap-2 sm:justify-end">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neon-green/20 bg-neon-green/5 px-3 py-1 font-share-mono text-xs text-neon-green">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-green" />
            AVAILABLE FOR PROJECTS
          </span>
        </div>
      </div>

      {/* Middle Section: Main Pitch */}
      <div className="my-8">
        <h1 className="font-orbitron text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-left">
          BUILDING THE <br />
          <span className="text-neon-green glow-text-green">FUTURE GRID</span>
        </h1>
        <p className="mt-4 max-w-xl text-left font-sans text-sm leading-relaxed text-neutral-400 md:text-base">
          Hi, I'm <span className="text-white font-semibold">Charan</span>. I design and architect immersive digital experiences. I specialize in building highly scalable Node.js/Python backends, developing custom games, and crafting state-of-the-art interactive frontends.
        </p>
      </div>

      {/* Bottom Section: CTA Button */}
      <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
        <span className="font-share-mono text-xs text-neutral-500">
          SYSTEM_ID: USER_CHR_01
        </span>
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-xl bg-neon-green px-5 py-3 font-share-mono text-sm font-black text-black transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(204,255,0,0.5)] hover:scale-[1.03] duration-300"
        >
          <MessageSquare className="h-4 w-4" />
          LET'S TALK.exe
        </a>
      </div>
    </div>
  );
};

export default HeroCard;
