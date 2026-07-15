import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F4EB]/85 backdrop-blur-md border-b border-[#1E2222]/5">
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-12 flex items-center justify-between">
        
        {/* Left Element: Developer Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <svg
            className="w-7 h-7 text-[#1E2222] group-hover:text-accent-bright transition-colors duration-300"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Custom bracket < /> SVG */}
            <path
              d="M35 25 L15 50 L35 75"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M65 25 L85 50 L65 75"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M58 20 L42 80"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span className="font-jakarta text-lg font-extrabold tracking-tight text-[#1E2222]">
            charan.dev
          </span>
        </a>

        {/* Center Elements: Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="font-jakarta text-sm font-semibold text-[#1E2222]/75 hover:text-[#1E2222] transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="font-jakarta text-sm font-semibold text-[#1E2222]/75 hover:text-[#1E2222] transition-colors duration-200"
          >
            Skills
          </a>
          <a
            href="#milestones"
            className="font-jakarta text-sm font-semibold text-[#1E2222]/75 hover:text-[#1E2222] transition-colors duration-200"
          >
            Milestones
          </a>
        </nav>

        {/* Right Element: Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#1E2222] px-6 py-2.5 font-jakarta text-sm font-bold text-white shadow-md hover:bg-[#1E2222]/90 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Contact Me
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1E2222] hover:bg-[#1E2222]/5 rounded-full transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F7F4EB] border-b border-[#1E2222]/5 px-6 py-6 flex flex-col gap-4 shadow-lg animate-fade-in">
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="font-jakarta text-base font-semibold text-[#1E2222] py-2 border-b border-[#1E2222]/5"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="font-jakarta text-base font-semibold text-[#1E2222] py-2 border-b border-[#1E2222]/5"
          >
            Skills
          </a>
          <a
            href="#milestones"
            onClick={() => setIsOpen(false)}
            className="font-jakarta text-base font-semibold text-[#1E2222] py-2 border-b border-[#1E2222]/5"
          >
            Milestones
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center rounded-full bg-[#1E2222] py-3 font-jakarta text-sm font-bold text-white shadow-md"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
