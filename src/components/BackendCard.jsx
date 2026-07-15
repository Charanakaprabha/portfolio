import React from 'react';
import { Database, Server, RefreshCw, Cpu } from 'lucide-react';

const BackendCard = () => {
  return (
    <div className="tron-card relative flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:col-span-2 lg:row-span-1">
      {/* Corner Accents */}
      <div className="tron-corner-accent accent-tl" />
      <div className="tron-corner-accent accent-tr" />
      <div className="tron-corner-accent accent-bl" />
      <div className="tron-corner-accent accent-br" />

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 font-orbitron text-xs font-bold tracking-widest text-neon-green uppercase mb-3">
          <Server className="h-4 w-4" />
          SYSTEM_INFRASTRUCTURE // BACKEND
        </div>
        <h3 className="font-orbitron text-lg font-bold text-white mb-2 text-left">
          Backend Architecture & Data Warehousing
        </h3>
        <p className="font-sans text-xs text-neutral-400 mb-6 text-left">
          Designing resilient, highly-available backend systems. I engineer RESTful & GraphQL APIs and optimize databases for high-throughput queries.
        </p>
      </div>

      {/* Schematic Diagram */}
      <div className="relative flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/5 bg-[#050505] p-5 md:flex-row">
        {/* Animated flow pulse line (CSS animation) */}
        <div className="absolute top-1/2 left-0 right-0 hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-neon-green/0 via-neon-green to-neon-green/0 opacity-20 md:block">
          <div className="h-full w-24 bg-gradient-to-r from-transparent via-neon-green to-transparent animate-[flow-pulse_2.5s_infinite_linear]" />
        </div>

        {/* Node 1: API Clients */}
        <div className="z-10 flex w-full flex-col items-center rounded-lg border border-white/5 bg-[#0D0D0D] p-3 text-center md:w-1/4">
          <Cpu className="mb-1.5 h-5 w-5 text-neon-cyan glow-text-cyan animate-pulse" />
          <span className="font-share-mono text-[10px] text-neutral-300 font-bold">CLIENTS / APIs</span>
          <span className="font-sans text-[9px] text-neutral-500">REST, GraphQL, gRPC</span>
        </div>

        {/* Connector (mobile-only) */}
        <div className="h-4 w-[2px] bg-neutral-800 md:hidden" />

        {/* Node 2: Servers */}
        <div className="z-10 flex w-full flex-col items-center rounded-lg border border-white/5 bg-[#0D0D0D] p-3 text-center md:w-1/4">
          <Server className="mb-1.5 h-5 w-5 text-neon-green glow-text-green" />
          <span className="font-share-mono text-[10px] text-neutral-300 font-bold">SERVICES</span>
          <span className="font-sans text-[9px] text-neutral-500">Node, Python, Java</span>
        </div>

        {/* Connector (mobile-only) */}
        <div className="h-4 w-[2px] bg-neutral-800 md:hidden" />

        {/* Node 3: Databases */}
        <div className="z-10 flex w-full flex-col items-center rounded-lg border border-white/5 bg-[#0D0D0D] p-3 text-center md:w-1/4">
          <Database className="mb-1.5 h-5 w-5 text-neon-green glow-text-green" />
          <span className="font-share-mono text-[10px] text-neutral-300 font-bold">DATABASES</span>
          <span className="font-sans text-[9px] text-neutral-500">PostgreSQL, MongoDB</span>
        </div>

        {/* Connector (mobile-only) */}
        <div className="h-4 w-[2px] bg-neutral-800 md:hidden" />

        {/* Node 4: Warehouse */}
        <div className="z-10 flex w-full flex-col items-center rounded-lg border border-white/5 bg-[#0D0D0D] p-3 text-center md:w-1/4">
          <RefreshCw className="mb-1.5 h-5 w-5 text-neon-cyan glow-text-cyan animate-spin-slow" />
          <span className="font-share-mono text-[10px] text-neutral-300 font-bold">WAREHOUSE</span>
          <span className="font-sans text-[9px] text-neutral-500">BigQuery, ETLs</span>
        </div>
      </div>

      {/* Tech Specifications */}
      <div className="mt-4 flex flex-wrap gap-2 pt-2">
        <span className="rounded bg-white/5 px-2 py-0.5 font-share-mono text-[10px] text-neutral-400">NodeJS</span>
        <span className="rounded bg-white/5 px-2 py-0.5 font-share-mono text-[10px] text-neutral-400">FastAPI</span>
        <span className="rounded bg-white/5 px-2 py-0.5 font-share-mono text-[10px] text-neutral-400">Spring Boot</span>
        <span className="rounded bg-white/5 px-2 py-0.5 font-share-mono text-[10px] text-neutral-400">SQL / NoSQL</span>
        <span className="rounded bg-white/5 px-2 py-0.5 font-share-mono text-[10px] text-neutral-400">ETL Pipelines</span>
      </div>

      {/* Inline styles for custom keyframe animations */}
      <style>{`
        @keyframes flow-pulse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BackendCard;
