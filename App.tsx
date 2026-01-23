
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import AuditTool from './components/AuditTool';
import Pricing from './components/Pricing';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#BFF549] selection:text-black">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <AuditTool />
        <Pricing />
        <Testimonials />
      </main>

      <StickyCTA isVisible={isScrolled} />
      <Footer />
    </div>
  );
};

export default App;
