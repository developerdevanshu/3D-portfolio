import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import Lottie from 'lottie-react';

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  heroAnimationData?: any;
}

const Footer: React.FC<FooterProps> = ({ heroAnimationData }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Use hero animation data if provided
    if (heroAnimationData) {
      setAnimationData(heroAnimationData);
    } else {
      // Load animation data
      fetch('./animation.json')
        .then(response => response.json())
        .then(data => setAnimationData(data))
        .catch(error => console.log('Animation loading failed:', error));
    }

    const ctx = gsap.context(() => {
      // Smooth footer animation
      gsap.fromTo(footerRef.current, 
        { y: 15, opacity: 0, filter: "blur(2px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Smooth floating particles
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        Array.from(particles).forEach((particle, index) => {
          gsap.to(particle, {
            y: -10,
            x: Math.random() * 20 - 10,
            duration: 4 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.5
          });
        });
      }

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative py-12 bg-gray-900 border-t border-white/10 overflow-hidden">
      {/* Lottie Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        {animationData && (
          <Lottie 
            animationData={animationData}
            className="absolute inset-0 w-full h-full object-cover opacity-30 scale-150"
            loop={true}
            autoplay={true}
            speed={0.5}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice',
              clearCanvas: false,
              progressiveLoad: true,
              hideOnTransparent: true
            }}
          />
        )}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-900/40" />
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-30 blur-sm" />
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-purple-500 rounded-full opacity-40 blur-sm" />
        <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-cyan-400 rounded-full opacity-20 blur-sm" />
        <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-pink-500 rounded-full opacity-30 blur-sm" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-light text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Harshwardhan
              </span>
            </h3>
            <p className="text-gray-400 text-sm">AWS Cloud & DevOps Engineer</p>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-8">
            <a href="#hero" className="text-gray-400 hover:text-white transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Harshwardhanjadhav0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <GithubLogo size={24} weight="light" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jadhavharshwardhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <LinkedinLogo size={24} weight="light" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Harshwardhan Jadhav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;