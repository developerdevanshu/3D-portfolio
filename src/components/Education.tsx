import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Certificate, Download } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(".education-title", 
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
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
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(orb2Ref.current, {
        y: -40,
        x: -25,
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
      <div ref={orb1Ref} className="absolute top-32 left-16 w-4 h-4 bg-green-500 rounded-full blur-sm opacity-60 shadow-lg shadow-green-500/50" />
      <div ref={orb2Ref} className="absolute top-64 right-24 w-3 h-3 bg-blue-500 rounded-full blur-sm opacity-50 shadow-lg shadow-blue-500/50" />
      <div ref={orb3Ref} className="absolute bottom-40 left-1/3 w-5 h-5 bg-purple-400 rounded-full blur-sm opacity-70 shadow-lg shadow-purple-400/50" />

      {/* Background ambient effects */}
      <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-green-400 rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-50 animate-ping" />
      <div className="absolute top-3/4 left-1/6 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-bounce" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="education-title text-4xl md:text-5xl font-light text-white text-center mb-16">
          Education & {' '}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="education-card bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-green-500/50 transition-all duration-500">
            <div className="flex items-center mb-6">
              <GraduationCap size={32} className="text-green-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-green-400 mb-2">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-gray-300 mb-2">Vidyadhan College, BAMU University</p>
                <p className="text-gray-400 text-sm mb-2">Chh.Sambhajinagar, Maharashtra</p>
                <p className="text-blue-400 font-medium">Jun 2021 – Jul 2024</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">Master of Computer Applications (MCA)</h4>
                <p className="text-gray-300 mb-2">Pursuing</p>
                <p className="text-blue-400 font-medium">2025 - Ongoing</p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="education-card bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-500">
            <div className="flex items-center mb-6">
              <Certificate size={32} className="text-blue-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">AWS Solutions Architect - Associate</h4>
                <p className="text-gray-300 mb-2">Amazon Web Services (AWS)</p>
                <p className="text-green-400 font-medium mb-3">Nov 2024 – Nov 2027</p>
                <a 
                  href="/aws-certificate.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <Download size={16} />
                  <span className="text-sm">View Certificate</span>
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-purple-400 mb-2">Mastering Git & GitHub</h4>
                <p className="text-gray-300 mb-2">From Basics to Advanced Workflows</p>
                <p className="text-green-400 font-medium mb-3">Completed</p>
                <a 
                  href="/git-github-certificate.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <Download size={16} />
                  <span className="text-sm">View Certificate</span>
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