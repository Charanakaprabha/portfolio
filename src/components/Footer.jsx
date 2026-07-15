import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#1E2222] pt-16 pb-6 px-6 md:px-12 xl:px-24 relative overflow-hidden">
      
      {/* Huge fluid neon-green ribbon loop vector background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] text-[#CBEA7B] opacity-15 animate-ribbon-wave"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 150 C 300 50, 450 450, 720 250 C 990 50, 1100 550, 1490 350 L 1490 650 L -50 650 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-50 200 C 300 100, 450 500, 720 300 C 990 100, 1100 600, 1490 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Asymmetrical bento block layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 pb-4">
          
          {/* Left Column Block: Message Trigger */}
          <div className="col-span-1 md:col-span-6 flex flex-col justify-between gap-8 text-left">
            <div className="max-w-md">
              <h3 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Get in Touch
              </h3>
              <p className="font-jakarta text-sm text-white/60 leading-relaxed mb-6">
                Have a coding challenge, project idea, or hackathon collaboration? Shoot me an email or drop a message here. I will get back to you shortly!
              </p>
              
              {/* Form Input Container with email and message textarea */}
              <form className="flex flex-col gap-3.5 w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs font-semibold text-white placeholder-white/30 focus:border-[#CBEA7B] focus:outline-none transition-colors"
                  required
                />
                <textarea
                  placeholder="Type your message..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs font-semibold text-white placeholder-white/30 focus:border-[#CBEA7B] focus:outline-none transition-colors resize-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#CBEA7B] text-charcoal font-bold text-xs rounded-xl px-5 py-2.5 hover:bg-[#CBEA7B]/90 hover:scale-102 active:scale-98 transition-all shadow-md w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Center Column Block: Contacts */}
          <div className="col-span-1 md:col-span-3 text-left">
            <h4 className="font-jakarta text-xs font-extrabold uppercase tracking-widest text-[#CBEA7B] mb-6">
              Contacts
            </h4>
            <div className="flex flex-col gap-6 font-jakarta">
              <div>
                <p className="text-[10px] text-white/40 font-bold uppercase">Direct Email</p>
                <a href="mailto:bheesettycharan@gmail.com" className="text-sm font-bold text-white hover:text-[#CBEA7B] transition-colors">
                  bheesettycharan@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-bold uppercase">Direct Phone</p>
                <a href="tel:+918074084493" className="text-sm font-bold text-white hover:text-[#CBEA7B] transition-colors">
                  +91 8074084493
                </a>
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-bold uppercase">Location</p>
                <p className="text-sm font-bold text-white leading-relaxed">
                  Visakhapatnam, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Block: Socials */}
          <div className="col-span-1 md:col-span-3 text-left">
            <h4 className="font-jakarta text-xs font-extrabold uppercase tracking-widest text-[#CBEA7B] mb-6">
              Connect
            </h4>
            
            {/* Social pills */}
            <div className="flex flex-col gap-3 max-w-[200px]">
              <a
                href="https://github.com/charan-bheesetty"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-full bg-white/5 border border-white/10 px-5 py-3 hover:bg-[#CBEA7B] hover:text-charcoal hover:border-[#CBEA7B] transition-all duration-300"
              >
                <span className="text-xs font-bold text-white group-hover:text-charcoal transition-colors">GitHub Profile</span>
                <span className="text-xs font-extrabold text-[#CBEA7B] group-hover:text-charcoal transition-colors">↗</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-full bg-white/5 border border-white/10 px-5 py-3 hover:bg-[#CBEA7B] hover:text-charcoal hover:border-[#CBEA7B] transition-all duration-300"
              >
                <span className="text-xs font-bold text-white group-hover:text-charcoal transition-colors">LinkedIn Hub</span>
                <span className="text-xs font-extrabold text-[#CBEA7B] group-hover:text-charcoal transition-colors">↗</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-full bg-white/5 border border-white/10 px-5 py-3 hover:bg-[#CBEA7B] hover:text-charcoal hover:border-[#CBEA7B] transition-all duration-300"
              >
                <span className="text-xs font-bold text-white group-hover:text-charcoal transition-colors">Twitter / X</span>
                <span className="text-xs font-extrabold text-[#CBEA7B] group-hover:text-charcoal transition-colors">↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Full-width Divider Line & Copyright */}
        <div className="border-t border-white/10 pt-4 mt-4 flex justify-between items-center text-[10px] text-white/40 font-bold uppercase tracking-wider">
          <span>© {new Date().getFullYear()} Charan Bheesetty. All Rights Reserved.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
