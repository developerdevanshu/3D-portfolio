import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Lottie from 'lottie-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const jobTitleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const linkedinRef = useRef<HTMLAnchorElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    // Immediate scroll to top and performance optimization
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';
    
    // Load animation data with better error handling
    fetch('/animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.log('Animation loading failed:', error));

    // Performance-optimized initial setup
    const elements = [headingRef.current, jobTitleRef.current, subtitleRef.current, contactRef.current, ctaRef.current, linkedinRef.current, profileRef.current].filter(Boolean);
    
    gsap.set(elements, {
      opacity: 0,
      y: 15,
      filter: "blur(2px)",
      force3D: true,
      willChange: "transform, opacity, filter"
    });

    // Smooth synchronized entrance
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.08,
      onComplete: () => {
        document.body.style.overflow = 'auto';
        gsap.set(elements, { willChange: "auto" });
      }
    });
    
    // Continue with individual animations after fade-in
    const tl = gsap.timeline({ delay: 0.8 });
    
    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power2.out"
    })
    .to(jobTitleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.6")
    .to(contactRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.5")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    .to([profileRef.current, ctaRef.current, linkedinRef.current], {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.3,
      ease: "power1.out",
      stagger: 0.1
    }, "-=0.2");

    // Profile picture floating animation (constrained to avoid header)
    gsap.to(profileRef.current, {
      y: 5,
      x: 2,
      rotation: 1,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Profile picture hover effects
    const profileElement = profileRef.current;
    if (profileElement) {
      profileElement.addEventListener('mouseenter', () => {
        gsap.to(profileElement, {
          scale: 1.05,
          rotation: 3,
          y: 8,
          duration: 0.4,
          ease: "power2.out"
        });
      });

      profileElement.addEventListener('mouseleave', () => {
        gsap.to(profileElement, {
          scale: 1,
          rotation: 1,
          y: 5,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    }

    // Visible floating animations with independent ranges
    gsap.to(headingRef.current, {
      y: -8,
      x: 3,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0
    });

    gsap.to(jobTitleRef.current, {
      y: 6,
      x: -2,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });

    gsap.to(contactRef.current, {
      y: 10,
      x: 4,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2
    });

    gsap.to(subtitleRef.current, {
      y: -5,
      x: -3,
      duration: 8.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3
    });

    gsap.to(ctaRef.current, {
      y: 7,
      x: 2,
      duration: 7.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 4
    });

    gsap.to(linkedinRef.current, {
      y: -6,
      x: -4,
      duration: 8.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 5
    });

    // Floating orbs with improved performance
    gsap.to(orb1Ref.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(orb2Ref.current, {
      y: -30,
      x: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 0.5
    });

    gsap.to(orb3Ref.current, {
      y: -25,
      x: -15,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1
    });

    // CTA hover effect
    const ctaButton = ctaRef.current;
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
          scale: 1.05,
          boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
          duration: 0.3,
          ease: "power2.out"
        });
      });

      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
          scale: 1,
          boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Lottie Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        {animationData && (
          <Lottie 
            animationData={animationData}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
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
        <div className="absolute inset-0 bg-gray-900/60" />
      </div>

      {/* Enhanced Floating Orbs */}
      <div ref={orb1Ref} className="absolute top-20 left-20 w-4 h-4 bg-blue-500 rounded-full blur-sm opacity-60 shadow-lg shadow-blue-500/50" />
      <div ref={orb2Ref} className="absolute top-40 right-32 w-3 h-3 bg-purple-500 rounded-full blur-sm opacity-50 shadow-lg shadow-purple-500/50" />
      <div ref={orb3Ref} className="absolute bottom-32 left-1/4 w-5 h-5 bg-cyan-400 rounded-full blur-sm opacity-70 shadow-lg shadow-cyan-400/50" />

      {/* Additional ambient particles */}
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full opacity-50 animate-ping" />
      <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-indigo-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }} />

      {/* Content Container */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 
              ref={headingRef}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">
                Harshwardhan Jadhav
              </span>
            </h1>
            
            <div className="mt-4 mb-8">
              <span ref={jobTitleRef} className="text-3xl md:text-4xl lg:text-5xl text-gray-300 whitespace-nowrap">
                AWS Cloud & DevOps Engineer
              </span>
            </div>
            
            {/* Contact Info */}
            <div ref={contactRef} className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <p className="text-xl text-blue-400 font-medium">
                🕿 +91 8668396959
              </p>
              <p className="text-lg text-green-400 font-medium flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Available for Opportunities
              </p>
            </div>
            
            <div className="mt-6">
              <p 
                ref={subtitleRef}
                className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
                style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.3)' }}
              >
                Building scalable, high-availability systems with <span className="whitespace-nowrap">cutting-edge</span> cloud technologies
              </p>
            </div>


          </div>

          {/* Profile Picture */}
          <div className="flex flex-col items-center lg:items-end order-1 lg:order-2">
            <div 
              ref={profileRef}
              className="relative group -mt-16 z-10"
            >
              {/* Outer glowing ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
              
              {/* Middle ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-md opacity-40 animate-spin" style={{ animationDuration: '8s' }} />
              
              {/* Inner ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-60 animate-pulse" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <img 
                  src="/portfolio.jpg"
                  alt="Harshwardhan Jadhav"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10"
                />
                
                {/* Floating particles around profile */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="absolute top-16 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-12 right-4 w-4 h-4 bg-cyan-400 rounded-full opacity-70 animate-ping" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1.5s' }} />
                
                {/* Orbital rings */}
                <div className="absolute inset-0 border border-blue-400/20 rounded-full animate-spin opacity-40" style={{ animationDuration: '12s' }} />
                <div className="absolute inset-4 border border-purple-400/20 rounded-full animate-spin opacity-30" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-8 border border-cyan-400/20 rounded-full animate-spin opacity-20" style={{ animationDuration: '18s' }} />
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </div>
            
            {/* Buttons below profile picture */}
            <div className="flex items-center gap-4 mt-16">
              <button
                ref={ctaRef}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Harshwardhan_Jadhav_Resume.pdf';
                  link.click();
                }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105 hover:px-12 peer"
                style={{
                  boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                  padding: "12px 32px",
                  minWidth: "120px"
                }}
              >
                <span className="group-hover:opacity-0 group-hover:translate-y-[-20px] transition-all duration-500 ease-in-out block">Hire Me</span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">Download Resume</span>
              </button>
              
              <a
                ref={linkedinRef}
                href="https://www.linkedin.com/in/jadhavharshwardhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105 peer-hover:translate-x-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;