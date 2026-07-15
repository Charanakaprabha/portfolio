import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gateway from './components/Gateway';
import HowItWorks from './components/HowItWorks';
import Projects from './components/Projects';
import ScatterMap from './components/ScatterMap';
import EventMap from './components/EventMap';
import MediaCarousel from './components/MediaCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#F7F4EB] text-[#1E2222] font-jakarta selection:bg-[#CBEA7B]/40 selection:text-charcoal overflow-x-hidden">
      <Navbar />
      <Hero />
      <Gateway />
      <HowItWorks />
      <Projects />
      <EventMap />
      <MediaCarousel />
      <ScatterMap />
      <Footer />
    </div>
  );
}

export default App;
