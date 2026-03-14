import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SkillsMarquee from './components/SkillsMarquee';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="app-container">
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <SkillsMarquee />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
