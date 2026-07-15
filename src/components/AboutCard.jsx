import React from 'react';
import { Terminal } from 'lucide-react';

const AboutCard = () => {
  return (
    <div className="tron-card relative flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:col-span-1 lg:row-span-1">
      {/* Corner Accents */}
      <div className="tron-corner-accent accent-tl" />
      <div className="tron-corner-accent accent-tr" />
      <div className="tron-corner-accent accent-bl" />
      <div className="tron-corner-accent accent-br" />

      {/* Title */}
      <div>
        <div className="flex items-center gap-2 font-orbitron text-xs font-bold tracking-widest text-neon-green uppercase mb-4">
          <Terminal className="h-4 w-4" />
          SYSTEM_PROFILE // ABOUT
        </div>

        {/* Mock Terminal Screen */}
        <div className="rounded-xl border border-white/5 bg-[#050505] p-4 font-share-mono text-xs text-left leading-relaxed text-neutral-400">
          <div className="flex gap-1.5 border-b border-white/5 pb-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-red-500/60" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
            <span className="h-2 w-2 rounded-full bg-green-500/60" />
          </div>
          <p className="text-neon-cyan mb-1">
            &gt; cat profile.json
          </p>
          <pre className="text-neutral-300 select-none overflow-x-auto">
{`{
  "name": "Charan Bheesetty",
  "focus": [
    "Full-Stack Web",
    "AI Integration",
    "Systems Optimization"
  ],
  "languages": [
    "JavaScript",
    "Python",
    "Java",
    "C"
  ],
  "motto": "Clean code, optimal design"
}`}
          </pre>
        </div>
      </div>

      <div className="mt-4 border-t border-white/5 pt-4">
        <p className="text-left font-sans text-xs text-neutral-400">
          Passionate about performance, security, and building engaging user interfaces combined with strong backend architectures.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
