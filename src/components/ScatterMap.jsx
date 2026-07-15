import React, { useState, useRef } from 'react';

const ScatterMap = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // DC popular superheroes rotating through the map positions
  const avatars = [
    { id: 1, top: '12%', left: '8%', size: 'w-16 h-16', drift: 0.04, img: '/batman_avatar.png' },
    { id: 2, top: '26%', left: '22%', size: 'w-12 h-12', drift: -0.03, img: '/superman_avatar.png' },
    { id: 3, top: '10%', right: '12%', size: 'w-18 h-18', drift: 0.05, img: '/wonderwoman_avatar.png' },
    { id: 4, top: '32%', right: '22%', size: 'w-14 h-14', drift: -0.04, img: '/flash_avatar.png' },
    { id: 5, top: '65%', left: '10%', size: 'w-18 h-18', drift: 0.03, img: '/greenlantern_avatar.png' },
    { id: 6, top: '78%', left: '22%', size: 'w-12 h-12', drift: -0.02, img: '/aquaman_avatar.png' },
    { id: 7, top: '60%', right: '8%', size: 'w-16 h-16', drift: 0.04, img: '/cyborg_avatar.png' },
    { id: 8, top: '75%', right: '24%', size: 'w-14 h-14', drift: -0.03, img: '/robin_avatar.png' },
    { id: 9, top: '48%', left: '5%', size: 'w-14 h-14', drift: 0.02, img: '/martian_avatar.png' },
    { id: 10, top: '45%', right: '3%', size: 'w-12 h-12', drift: -0.05, img: '/batman_avatar.png' },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="network"
      className="w-full bg-[#CBEA7B] min-h-[75vh] py-20 px-6 relative flex flex-col items-center justify-center overflow-hidden"
    >
      
      {/* Scattered Superhero Elements */}
      {avatars.map((av) => {
        const driftX = mousePos.x * av.drift;
        const driftY = mousePos.y * av.drift;

        return (
          <div
            key={av.id}
            className="absolute z-10 hidden sm:block will-change-transform-opacity"
            style={{
              top: av.top,
              left: av.left,
              right: av.right,
              transform: `translate(${driftX}px, ${driftY}px)`,
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className={`${av.size} rounded-full overflow-hidden border-2 border-charcoal shadow-md cursor-pointer hover:scale-125 transition-transform duration-300 animate-pulse-micro will-change-transform-opacity`}>
              <img
                src={av.img}
                alt="DC Superhero Profile"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        );
      })}

      {/* Mobile-only Avatars Row */}
      <div className="flex sm:hidden items-center justify-center gap-2.5 mb-8 flex-wrap max-w-sm">
        {avatars.slice(0, 6).map((av) => (
          <div key={av.id} className="w-11 h-11 rounded-full overflow-hidden border-2 border-charcoal animate-pulse-micro">
            <img src={av.img} alt="Superhero Icon" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Central Typography Copy */}
      <div className="relative z-20 max-w-2xl text-center flex flex-col items-center px-4">
        <h2 className="font-jakarta text-5xl sm:text-7xl font-extrabold tracking-tight text-charcoal leading-none mb-6">
          Join the League
        </h2>
        <p className="font-jakarta text-sm sm:text-base text-charcoal/80 max-w-md leading-relaxed font-semibold">
          Let's connect. Add me to your network to collaborate, share project ideas, or discuss code.
        </p>

        {/* Row of symbols only for phone dialer, WhatsApp, and Mail */}
        <div className="flex items-center justify-center gap-5 mt-8 select-none">
          {/* WhatsApp Link */}
          <a
            href="https://wa.me/918074084493"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-charcoal text-white hover:bg-white hover:text-charcoal flex items-center justify-center shadow-lg transition-premium hover:scale-110 active:scale-95 border border-transparent hover:border-charcoal"
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5.5 w-5.5">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.638 1.97 14.16 1.053 11.998 1.055 6.562 1.055 2.138 5.428 2.134 10.858c-.001 1.787.485 3.534 1.408 5.092L2.52 21.08l5.244-1.372c1.556.88 3.112 1.446 4.883 1.446zm11.362-7.556c-.3-.15-1.776-.875-2.049-.974-.274-.1-.474-.15-.674.15-.2.3-.776.974-.95 1.174-.176.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.492-1.776-1.667-2.076-.176-.3-.019-.462.131-.611.135-.134.3-.349.45-.524.15-.175.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.674-1.623-.924-2.224-.244-.6-.513-.519-.699-.524-.18-.004-.387-.005-.595-.005-.208 0-.547.078-.833.39-.286.312-1.092 1.067-1.092 2.602 0 1.536 1.118 3.02 1.268 3.224.15.204 2.2 3.359 5.33 4.717.745.323 1.325.515 1.779.659.749.238 1.431.205 1.97.124.601-.09 1.776-.724 2.025-1.424.25-.699.25-1.299.175-1.424-.075-.125-.275-.2-.575-.35z" />
            </svg>
          </a>

          {/* Mail Link */}
          <a
            href="mailto:bheesettycharan@gmail.com"
            className="w-12 h-12 rounded-full bg-charcoal text-white hover:bg-white hover:text-charcoal flex items-center justify-center shadow-lg transition-premium hover:scale-110 active:scale-95 border border-transparent hover:border-charcoal"
            title="Send Email"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </a>

          {/* Phone Link */}
          <a
            href="tel:+918074084493"
            className="w-12 h-12 rounded-full bg-charcoal text-white hover:bg-white hover:text-charcoal flex items-center justify-center shadow-lg transition-premium hover:scale-110 active:scale-95 border border-transparent hover:border-charcoal"
            title="Call Phone"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
};

export default ScatterMap;
