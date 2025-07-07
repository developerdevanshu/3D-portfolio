import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const toolsContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const tools = [
    { 
      name: 'Docker', 
      image: '/pngwing.com.png',
      position: { top: '10%', left: '20%' },
      animation: { duration: 4, delay: 0 }
    },
    { 
      name: 'AWS EC2', 
      image: '/EC2.png',
      position: { top: '26%', left: '5%' },
      animation: { duration: 5, delay: 0 }
    },
    { 
      name: 'Grafana', 
      image: '/grafana-icon.png',
      position: { bottom: '25%', left: '10%' },
      animation: { duration: 3.5, delay: 0 }
    },
    { 
      name: 'GitHub', 
      image: '/5847f98fcef1014c0b5e48c0.png',
      position: { top: '54%', left: '50%' },
      animation: { duration: 4.5, delay: 0 }
    },
    { 
      name: 'EKS', 
      image: '/EKS Cloud.png',
      position: { bottom: '10%', right: '25%' },
      animation: { duration: 3, delay: 0 }
    },
    { 
      name: 'Kubernetes', 
      image: '/kuberneteslogo.png',
      position: { top: '35%', left: '45%' },
      animation: { duration: 4.2, delay: 0 }
    },
    { 
      name: 'ArgoCD', 
      image: '/argocdlogo.png',
      position: { bottom: '45%', right: '5%' },
      animation: { duration: 3.8, delay: 0 }
    },
    { 
      name: 'AWS', 
      image: '/amazonCloud.png',
      position: { top: '5%', left: '60%' },
      animation: { duration: 4.3, delay: 0 }
    },
    { 
      name: 'GCP', 
      image: '/googleCloud.png',
      position: { top: '40%', left: '19%' },
      animation: { duration: 3.6, delay: 0 }
    },
    { 
      name: 'Azure', 
      image: '/azure.png',
      position: { bottom: '60%', left: '70%' },
      animation: { duration: 4.1, delay: 0 }
    },
    { 
      name: 'Terraform', 
      image: '/terraform.png',
      position: { top: '70%', right: '50%' },
      animation: { duration: 3.9, delay: 0 }
    }
  ];



  useEffect(() => {
    const ctx = gsap.context(() => {
      // Tools container animation
      gsap.fromTo(toolsContainerRef.current, 
        { 
          opacity: 0, 
          scale: 0.8,
          filter: "blur(10px)" 
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Individual tool animations
      tools.forEach((tool, index) => {
        const toolElement = document.querySelector(`[data-tool="${tool.name}"]`);
        if (toolElement) {
          // Initial setup
          gsap.set(toolElement, {
            opacity: 0,
            scale: 0,
            rotation: Math.random() * 360
          });

          // Animate in
          gsap.to(toolElement, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0,
            ease: "back.out(1.7)",
            delay: tool.animation.delay,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });

          // Floating animation
          gsap.to(toolElement, {
            y: -20,
            x: Math.sin(index) * 15,
            rotation: Math.sin(index) * 10,
            duration: tool.animation.duration,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: tool.animation.delay
          });

          // Hover effect
          toolElement.addEventListener('mouseenter', () => {
            gsap.to(toolElement, {
              scale: 1.2,
              rotation: 360,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          toolElement.addEventListener('mouseleave', () => {
            gsap.to(toolElement, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

      // Text animation
      gsap.fromTo(textRef.current, 
        { 
          y: 40, 
          opacity: 0, 
          filter: "blur(5px)" 
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );



    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Floating Tools Container */}
          <div ref={toolsContainerRef} className="relative h-96 md:h-[500px]">
            {/* Background glow effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Floating Tool Logos */}
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                data-tool={tool.name}
                className="absolute group cursor-pointer"
                style={tool.position}
              >
                {/* Outer glow ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Middle ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                
                {/* Tool logo container */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20">
                  <img 
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                  
                  {/* Tool name tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {tool.name}
                  </div>
                </div>

                {/* Floating particles around each tool */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: `${index * 0.5}s` }} />
                <div className="absolute bottom-0 left-0 w-1 h-1 bg-purple-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: `${index * 0.7}s` }} />
              </div>
            ))}

            {/* Additional floating elements */}
            <div className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40 animate-bounce" />
            <div className="absolute bottom-12 left-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-50 animate-pulse" />
            <div className="absolute top-1/2 right-4 w-4 h-4 border border-purple-400/30 rounded-full animate-spin opacity-30" />
            <div className="absolute bottom-8 right-12 w-3 h-3 border border-blue-400/30 rounded-lg rotate-45 animate-pulse opacity-40" />
          </div>

          {/* Content */}
          <div ref={textRef} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-white">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Hi, I'm Harshwardhan Jadhav — a passionate AWS Cloud & DevOps Engineer 
                who loves building scalable, high-availability systems using cutting-edge 
                technologies like Docker, Kubernetes, Terraform, and CI/CD.
              </p>
              <p className="text-lg">
                I'm driven by innovation, cloud architecture, and crafting smooth 
                developer experiences that empower teams to ship faster and more reliably.
              </p>
            </div>

            {/* Space for new content */}
            <div className="mt-12 p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              {/* Add your new content here */}
              <div className="text-center text-gray-400">
                <p>Space available for new content</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background ambient effects */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-bounce" />
      <div className="absolute top-1/2 left-8 w-1 h-1 bg-cyan-400 rounded-full opacity-50 animate-ping" />
    </section>
  );
};

export default About;