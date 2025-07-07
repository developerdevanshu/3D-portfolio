import React, { forwardRef } from 'react';

const Header = forwardRef<HTMLElement>((props, ref) => {
  return (
    <header ref={ref} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#home" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
            Home
          </a>
          <a href="#about" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
            About
          </a>
          <a href="#projects" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
            Projects
          </a>
          <a href="#contact" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
            Contact
          </a>
          <a 
            href="/resume.pdf" 
            download 
            className="px-4 py-2 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
});

export default Header;