import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      ScrollTrigger.refresh();
    }
  }, [isLoading]);



  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      
      <div className="scroll-container">
        {!isLoading && <Header />}
        

        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div>
    </div>
  );
}

export default App;