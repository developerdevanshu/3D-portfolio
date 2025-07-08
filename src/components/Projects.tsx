import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const orb4Ref = useRef<HTMLDivElement>(null);
  const orb5Ref = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "AWS Infrastructure Automation",
      description: "Scalable cloud infrastructure with Terraform and AWS services",
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["AWS", "Terraform", "Docker", "Kubernetes"],
      featured: true
    },
    {
      id: 2,
      title: "CI/CD Pipeline Platform",
      description: "Automated deployment pipeline with monitoring and rollback",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Jenkins", "Docker", "AWS", "Git"],
      featured: true
    },
    {
      id: 3,
      title: "Microservices Architecture",
      description: "Containerized microservices with service mesh",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Kubernetes", "Docker", "Istio", "Prometheus"],
      featured: false
    },
    {
      id: 4,
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring solution with alerts",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Grafana", "Prometheus", "ELK Stack", "AWS"],
      featured: false
    },
    {
      id: 5,
      title: "Serverless Data Pipeline",
      description: "Event-driven data processing with AWS Lambda",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["AWS Lambda", "S3", "DynamoDB", "API Gateway"],
      featured: false
    },
    {
      id: 6,
      title: "Security & Compliance",
      description: "Automated security scanning and compliance checks",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["AWS Security Hub", "Terraform", "SIEM", "Compliance"],
      featured: false
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(".projects-title", 
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(".project-card", 
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating orbs animations
      gsap.to(orb1Ref.current, {
        y: -25,
        x: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(orb2Ref.current, {
        y: -35,
        x: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });

      gsap.to(orb3Ref.current, {
        y: -20,
        x: 25,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2
      });

      gsap.to(orb4Ref.current, {
        y: -40,
        x: -30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });

      gsap.to(orb5Ref.current, {
        y: -15,
        x: 35,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3.5
      });

    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={projectsRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Floating Orbs */}
      <div ref={orb1Ref} className="absolute top-32 left-16 w-4 h-4 bg-blue-500 rounded-full blur-sm opacity-60 shadow-lg shadow-blue-500/50" />
      <div ref={orb2Ref} className="absolute top-64 right-24 w-3 h-3 bg-purple-500 rounded-full blur-sm opacity-50 shadow-lg shadow-purple-500/50" />
      <div ref={orb3Ref} className="absolute bottom-40 left-1/3 w-5 h-5 bg-cyan-400 rounded-full blur-sm opacity-70 shadow-lg shadow-cyan-400/50" />
      <div ref={orb4Ref} className="absolute top-1/2 right-1/5 w-6 h-6 bg-pink-500 rounded-full blur-sm opacity-55 shadow-lg shadow-pink-500/50" />
      <div ref={orb5Ref} className="absolute bottom-20 right-1/3 w-3 h-3 bg-green-400 rounded-full blur-sm opacity-65 shadow-lg shadow-green-400/50" />

      {/* Additional ambient particles */}
      <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full opacity-50 animate-ping" />
      <div className="absolute top-3/4 left-1/6 w-3 h-3 bg-indigo-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="projects-title text-4xl md:text-5xl font-light text-white text-center mb-16">
          Featured{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4">
                  <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    <GithubLogo size={20} weight="light" />
                    <span className="text-sm">View Code</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    <span className="text-sm">Live Demo</span>
                    <ArrowUpRight size={20} weight="light" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;