import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import manCameraImg from '../assets/man_camera.png';

const ModernHero = () => {
  return (
    <section className="min-h-screen bg-[#FDFDFB] text-black font-inter flex flex-col justify-between px-6 py-4 md:px-12 md:py-6 selection:bg-[#FFB834]/30 selection:text-black">
      {/* 1. Navigation Bar */}
      <nav className="w-full flex items-center justify-between py-4 border-b border-black/5">
        {/* Left: Minimalist Logo */}
        <div className="flex items-center text-black cursor-pointer hover:opacity-85 transition-opacity" aria-label="Home">
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="12" r="9" fill="currentColor" />
            <path d="M22 3 A9 9 0 0 1 29 12 A9 9 0 0 1 22 21 A7 7 0 0 0 25 12 A7 7 0 0 0 22 3" fill="currentColor" />
            <path d="M30 3 A9 9 0 0 1 37 12 A9 9 0 0 1 30 21 A7 7 0 0 0 33 12 A7 7 0 0 0 30 3" fill="currentColor" />
          </svg>
        </div>

        {/* Center: Menu Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-black/70">
          <a href="#home" className="hover:text-black transition-colors">Home</a>
          <span className="text-black/10">/</span>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <span className="text-black/10">/</span>
          <a href="#portfolio" className="hover:text-black transition-colors">Portfolio</a>
          <span className="text-black/10">/</span>
          <a href="#exhibitions" className="hover:text-black transition-colors">Exhibitions</a>
          <span className="text-black/10">/</span>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>

        {/* Right: Location & Profile */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-black/5 px-3 py-1.5 rounded-full">
            {/* Orange 4-Point Star */}
            <svg className="w-3 h-3 text-[#FFB834] fill-current animate-pulse" viewBox="0 0 24 24">
              <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" />
            </svg>
            <span className="text-[11px] font-semibold text-black/70">Sala Canal, 22 Nov 23</span>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-black/10 shadow-sm cursor-pointer hover:scale-105 transition-transform">
            <img
              src="/cyber_profile.png"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      {/* 2. Main Content Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto py-8">
        {/* Left Column: Content & Typography */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full gap-12">
          {/* Main Heading & Description Block */}
          <div className="relative flex flex-col">
            <h1 className="font-syne text-[14vw] sm:text-[10vw] lg:text-[7.5rem] xl:text-[8.5rem] font-extrabold leading-[0.82] tracking-[-0.06em] text-black lowercase select-none">
              charan<br />bheesetty
            </h1>

            {/* Sub-headline/Description Paragraph */}
            <div className="lg:absolute lg:right-0 lg:bottom-1 mt-6 lg:mt-0 max-w-[340px] text-left lg:text-right self-end lg:self-auto">
              <p className="text-xs sm:text-sm text-black/60 font-medium leading-relaxed">
                Welcome to the portfolio of Charan Bheesetty. Full Stack Developer & Computer Science student, bridging design and clean code.
              </p>
            </div>
          </div>

          {/* Social Media Row */}
          <div className="flex items-center gap-2">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-black/80 rounded-full flex items-center justify-center text-xs font-semibold text-black hover:bg-black hover:text-white transition-all duration-300">yt</a>
            <span className="text-black/20 font-light select-none">/</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-black/80 rounded-full flex items-center justify-center text-xs font-semibold text-black hover:bg-black hover:text-white transition-all duration-300">ig</a>
            <span className="text-black/20 font-light select-none">/</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-black/80 rounded-full flex items-center justify-center text-xs font-semibold text-black hover:bg-black hover:text-white transition-all duration-300">fb</a>
            <span className="text-black/20 font-light select-none">/</span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-black/80 rounded-full flex items-center justify-center text-xs font-semibold text-black hover:bg-black hover:text-white transition-all duration-300">x</a>
          </div>

          {/* Stats Counter Row */}
          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-black/5">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span className="font-syne font-extrabold italic text-5xl lg:text-6xl text-black tracking-tighter leading-none">+250k</span>
              <p className="mt-2 text-[11px] sm:text-xs text-black/60 font-medium leading-relaxed max-w-[200px]">
                Videos that reaching a wide audience and give lasting impression
              </p>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col">
              <span className="font-syne font-extrabold italic text-5xl lg:text-6xl text-black tracking-tighter leading-none">+800k</span>
              <p className="mt-2 text-[11px] sm:text-xs text-black/60 font-medium leading-relaxed max-w-[200px]">
                Hours watched, engaging storytelling that captivates viewers
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: The Feature Image Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          {/* Card Outer Container (Handles Overlapping Badges) */}
          <div className="relative w-full max-w-[440px] aspect-[4/5]">

            {/* 1. Top-Right Corner Masking Circle & Globe Badge */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#FDFDFB] rounded-full z-10 flex items-center justify-center">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* 2. Left-Edge Inset Floating Badges (Masking Circles + Badges) */}

            {/* Badge 1 (Top: Camera) */}
            <div className="absolute top-[48%] -left-8 w-18 h-18 bg-[#FDFDFB] rounded-full z-10 flex items-center justify-center">
              <div className="w-13 h-13 rounded-full overflow-hidden bg-cream border border-black/5 shadow-sm">
                <img
                  src={manCameraImg}
                  alt="Camera lens"
                  className="w-full h-full object-cover scale-[2.2] object-[35%_42%]"
                />
              </div>
            </div>

            {/* Badge 2 (Middle: Face/Profile) */}
            <div className="absolute top-[63%] -left-8 w-18 h-18 bg-[#FDFDFB] rounded-full z-10 flex items-center justify-center">
              <div className="w-13 h-13 rounded-full overflow-hidden bg-cream border border-black/5 shadow-sm">
                <img
                  src="/cyber_profile.png"
                  alt="Profile thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Badge 3 (Bottom: Arrow Up-Right ↗) */}
            <div className="absolute top-[78%] -left-8 w-18 h-18 bg-[#FDFDFB] rounded-full z-10 flex items-center justify-center">
              <button
                className="w-13 h-13 bg-black rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-black/90 hover:scale-105 transition-transform"
                aria-label="View Project Details"
              >
                <ArrowUpRight className="w-6 h-6 text-white stroke-[2.5]" />
              </button>
            </div>

            {/* Inner Yellow Card Container */}
            <div className="w-full h-full rounded-[45px] overflow-hidden bg-[#FFB834] relative shadow-lg">
              {/* Signature Script ("Charan") */}
              <div className="absolute top-8 left-8 text-white font-signature text-5.5xl opacity-95 select-none pointer-events-none z-10 leading-none">
                Charan
              </div>

              {/* Main Feature Image of Man Holding Vintage Camera */}
              <img
                src={manCameraImg}
                alt="Portrait of man holding vintage film camera"
                className="w-full h-full object-cover object-[center_20%] select-none pointer-events-none"
              />
            </div>

          </div>
        </div>
      </div>

      {/* 3. Simple Elegant Footer Info */}
      <footer className="w-full flex items-center justify-between border-t border-black/5 pt-4 text-[10px] text-black/40 font-semibold tracking-wider uppercase mt-4">
        <span>© 2026 Charan Bheesetty // Full Stack Developer</span>
        <span>All Rights Reserved</span>
      </footer>
    </section>
  );
};

export default ModernHero;
