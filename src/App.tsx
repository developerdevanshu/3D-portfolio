import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
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
  const [astronautData, setAstronautData] = useState(null);
  const [heroAnimationData, setHeroAnimationData] = useState(null);
  const astronautRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading) {
      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  useEffect(() => {
    // Load astronaut animation
    fetch('./astronaut.json')
      .then(response => response.json())
      .then(data => setAstronautData(data))
      .catch(error => console.log('Astronaut animation loading failed:', error));

    // Load hero background animation for footer
    fetch('./animation.json')
      .then(response => response.json())
      .then(data => setHeroAnimationData(data))
      .catch(error => console.log('Hero animation loading failed:', error));

    if (!isLoading && astronautRef.current) {
      // Seamless continuous astronaut animation
      gsap.set(astronautRef.current, { x: 0, y: 0, rotation: 0 });
      
      const tl = gsap.timeline({ repeat: -1 });
      
      tl.to(astronautRef.current, {
        x: window.innerWidth * 0.7,
        y: -200,
        rotation: 20,
        duration: 12,
        ease: "sine.inOut"
      })
      .to(astronautRef.current, {
        x: window.innerWidth * 0.2,
        y: 150,
        rotation: -15,
        duration: 14,
        ease: "sine.inOut"
      })
      .to(astronautRef.current, {
        x: window.innerWidth * 0.8,
        y: 300,
        rotation: 25,
        duration: 13,
        ease: "sine.inOut"
      })
      .to(astronautRef.current, {
        x: window.innerWidth * 0.1,
        y: -150,
        rotation: -20,
        duration: 11,
        ease: "sine.inOut"
      })
      .to(astronautRef.current, {
        x: window.innerWidth * 0.6,
        y: 250,
        rotation: 18,
        duration: 15,
        ease: "sine.inOut"
      })
      .to(astronautRef.current, {
        x: window.innerWidth * 0.3,
        y: -100,
        rotation: -12,
        duration: 10,
        ease: "sine.inOut"
      })
      .to(astronautRef.current, {
        x: window.innerWidth * 0.9,
        y: 200,
        rotation: 22,
        duration: 16,
        ease: "sine.inOut"
      })
      .to(astronautRef.current, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 18,
        ease: "sine.inOut"
      });
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
        
        {/* Global Astronaut Animation */}
        {!isLoading && (
          <div ref={astronautRef} className="fixed pointer-events-none z-[5] opacity-60" style={{ top: '50%', left: '0%' }}>
            {astronautData && (
              <Lottie 
                animationData={astronautData}
                loop={true}
                autoplay={true}
                style={{ width: '500px', height: '500px' }}
                speed={0.1}
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid meet',
                  clearCanvas: false,
                  progressiveLoad: false,
                  hideOnTransparent: false
                }}
              />
            )}
          </div>
        )}
        
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
        <Footer heroAnimationData={heroAnimationData} />
      </div>
    </div>
  );
}

export default App;