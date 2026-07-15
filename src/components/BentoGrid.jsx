import React from 'react';
import HeroCard from './HeroCard';
import AboutCard from './AboutCard';
import BackendCard from './BackendCard';
import GameCard from './GameCard';
import SkillsCard from './SkillsCard';
import ProjectsCard from './ProjectsCard';
import ContactCard from './ContactCard';

const BentoGrid = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
        <HeroCard />
        
        <AboutCard />
        
        <SkillsCard />
        
        <BackendCard />
        
        <GameCard />
        
        <ProjectsCard />
        
        <ContactCard />
      </div>
    </main>
  );
};

export default BentoGrid;
