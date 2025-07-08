import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const orb4Ref = useRef<HTMLDivElement>(null);
  const orb5Ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth form animation
      gsap.fromTo(formRef.current, 
        { y: 20, opacity: 0, filter: "blur(3px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Smooth social icons animation
      gsap.fromTo(".social-icon", 
        { y: 15, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating orbs animations
      gsap.to(orb1Ref.current, {
        y: -30,
        x: 20,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(orb2Ref.current, {
        y: -25,
        x: -15,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5
      });

      gsap.to(orb3Ref.current, {
        y: -35,
        x: 25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3
      });

      gsap.to(orb4Ref.current, {
        y: -28,
        x: -40,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2
      });

      gsap.to(orb5Ref.current, {
        y: -45,
        x: 30,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 4
      });

    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate button
    const submitButton = e.currentTarget.querySelector('button[type="submit"]');
    gsap.to(submitButton, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });

    // Handle form submission logic here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section ref={contactRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Floating Orbs */}
      <div ref={orb1Ref} className="absolute top-24 left-20 w-4 h-4 bg-blue-500 rounded-full blur-sm opacity-60 shadow-lg shadow-blue-500/50" />
      <div ref={orb2Ref} className="absolute top-48 right-28 w-3 h-3 bg-purple-500 rounded-full blur-sm opacity-50 shadow-lg shadow-purple-500/50" />
      <div ref={orb3Ref} className="absolute bottom-32 left-1/4 w-5 h-5 bg-cyan-400 rounded-full blur-sm opacity-70 shadow-lg shadow-cyan-400/50" />
      <div ref={orb4Ref} className="absolute top-1/3 right-1/6 w-4 h-4 bg-yellow-400 rounded-full blur-sm opacity-60 shadow-lg shadow-yellow-400/50" />
      <div ref={orb5Ref} className="absolute bottom-16 right-1/4 w-6 h-6 bg-indigo-500 rounded-full blur-sm opacity-55 shadow-lg shadow-indigo-500/50" />

      {/* Background ambient effects */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-bounce" />
      <div className="absolute top-1/2 left-8 w-1 h-1 bg-cyan-400 rounded-full opacity-50 animate-ping" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Get{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to build something amazing together?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <PaperPlaneTilt size={20} weight="light" />
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-white">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about cloud technologies and DevOps practices.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400">
                <span className="text-blue-400">Email:</span> harshj86683@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-blue-400">Contact No.:</span> +91 8668396959
              </p>
              <p className="text-gray-400">
                <span className="text-blue-400">Location:</span> Maharashtra, India.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Harshwardhanjadhav0"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                <GithubLogo 
                  size={24} 
                  className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" 
                  weight="light"
                />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/jadhavharshwardhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                <LinkedinLogo 
                  size={24} 
                  className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" 
                  weight="light"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;