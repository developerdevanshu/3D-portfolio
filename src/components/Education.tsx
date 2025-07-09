import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title fade-in animation
      gsap.fromTo(".education-title", 
        { y: 40, opacity: 0, filter: "blur(5px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards fade-in animation
      gsap.fromTo(".education-card", 
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating orbs animations
      gsap.to(orb1Ref.current, {
        y: -30,
        x: 25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(orb2Ref.current, {
        y: -40,
        x: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });

      gsap.to(orb3Ref.current, {
        y: -25,
        x: 30,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2
      });

    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={educationRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Floating Orbs */}
      <div ref={orb1Ref} className="absolute top-28 left-16 w-4 h-4 bg-green-500 rounded-full blur-sm opacity-60 shadow-lg shadow-green-500/50" />
      <div ref={orb2Ref} className="absolute top-56 right-20 w-3 h-3 bg-blue-500 rounded-full blur-sm opacity-50 shadow-lg shadow-blue-500/50" />
      <div ref={orb3Ref} className="absolute bottom-36 left-1/4 w-5 h-5 bg-purple-400 rounded-full blur-sm opacity-70 shadow-lg shadow-purple-400/50" />

      {/* Background ambient effects */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-bounce" />
      <div className="absolute top-1/2 left-8 w-1 h-1 bg-purple-400 rounded-full opacity-50 animate-ping" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="education-title text-4xl md:text-5xl font-light text-white text-center mb-16">
          Education & {' '}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="education-card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:border-green-500/50 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-green-400 mb-2">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-gray-300 mb-2">Vidyadhan College, BAMU University</p>
                <p className="text-gray-400 text-sm mb-2">Chh.Sambhajinagar, Maharashtra</p>
                <p className="text-blue-400 font-medium">Jun 2021 – Jul 2024</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">Master of Computer Applications (MCA)</h4>
                <p className="text-gray-300 mb-2">Pursuing</p>
                <p className="text-blue-400 font-medium">2025 - Ongoing</p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="education-card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-white mb-6">Certifications</h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">AWS Solutions Architect - Associate</h4>
                <p className="text-gray-300 mb-2">Amazon Web Services (AWS)</p>
                <p className="text-green-400 font-medium mb-3">Nov 2024 – Nov 2027</p>
                <a 
                  href="/aws-certificate.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  View Certificate
                </a>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-purple-400 mb-2">Mastering Git & GitHub</h4>
                <p className="text-gray-300 mb-2">From Basics to Advanced Workflows</p>
                <p className="text-green-400 font-medium mb-3">Completed</p>
                <a 
                  href="/git-github-certificate.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;