
import React from 'react';
import { Zap } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#BFF549] rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
            <Zap className="text-black w-6 h-6" fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">VOLTFLOW</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Expertise', 'Process', 'Audit', 'Testimonials'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[#99A1AF] hover:text-[#BFF549] transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="px-5 py-2 bg-white text-black font-bold text-sm rounded-full hover:bg-[#BFF549] transition-all transform active:scale-95">
            Book a Strategy Call
          </button>
        </div>

        <button className="md:hidden text-white">
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
