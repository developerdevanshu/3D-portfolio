import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: onComplete
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <div 
          className="text-8xl text-cyan-400"
          style={{
            textShadow: '0 0 10px rgba(0, 254, 186, 0.5), 0 0 20px rgba(0, 254, 186, 0.3)',
            animation: 'flip 1.5s ease-in-out infinite'
          }}
        >
          ∞
        </div>
        <p 
          className="mt-3 text-xl text-white/70 tracking-widest animate-pulse"
          style={{
            animation: 'blink 1.5s ease-in-out infinite'
          }}
        >
          Loading
        </p>
      </div>
    </div>
  );
};

export default Preloader;