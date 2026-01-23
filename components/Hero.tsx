
import React, { useRef, useState, useMemo } from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const StarField: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 180 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 20 + Math.random() * 40,
      twinkleDuration: 2 + Math.random() * 5,
      delay: Math.random() * -60,
      opacity: 0.3 + Math.random() * 0.7,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 4}px rgba(255,255,255,0.9)`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.2, star.opacity],
            scale: [1, 1.3, 1],
            y: [0, -60, 0],
            x: [0, 30, 0],
          }}
          transition={{
            y: { duration: star.duration, repeat: Infinity, ease: "linear", delay: star.delay },
            x: { duration: star.duration * 1.5, repeat: Infinity, ease: "linear", delay: star.delay },
            opacity: { duration: star.twinkleDuration, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: star.twinkleDuration, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const springConfig = { damping: 50, stiffness: 60 };
  const mouseXSpring = useSpring(mousePosition.x, springConfig);
  const mouseYSpring = useSpring(mousePosition.y, springConfig);

  const textX = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]);
  const textY = useTransform(mouseYSpring, [-0.5, 0.5], [-15, 15]);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-6, 6]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#02040a] pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,15,30,1)_0%,rgba(0,0,0,1)_100%)] z-0" />
      
      <StarField />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ x: useTransform(mouseXSpring, [-0.5, 0.5], [-80, 80]), y: useTransform(mouseYSpring, [-0.5, 0.5], [-80, 80]) }}
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-[900px] h-[900px] bg-[#BFF549] rounded-full blur-[200px]" 
        />
        <motion.div 
          style={{ x: useTransform(mouseXSpring, [-0.5, 0.5], [80, -80]), y: useTransform(mouseYSpring, [-0.5, 0.5], [80, -80]) }}
          className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[220px]" 
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-[5] pointer-events-none" />

      <motion.div 
        style={{ x: textX, y: textY, rotateX, rotateY, perspective: 1200 }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
          <span className="inline-flex items-center gap-3 px-5 py-2 mb-10 rounded-full border border-white/10 bg-white/5 text-[#BFF549] text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BFF549] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BFF549]"></span>
            </span>
            Performance Optimized Design
          </span>
          
          <h1 className="text-[52px] md:text-[110px] font-black leading-[0.82] tracking-tighter mb-12 text-white max-w-6xl mx-auto">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FACC15] to-[#BFF549] drop-shadow-[0_0_20px_rgba(191,245,73,0.4)]">
              GORGEOUS
            </span> <br />
            WEBSITES.
          </h1>

          <p className="text-xl md:text-2xl text-[#99A1AF] max-w-3xl mx-auto mb-16 font-light leading-relaxed tracking-tight">
            Elevating digital presence through scientific design. We don't just build sites; we engineer conversion engines.
          </p>
          
          <div className="flex items-center justify-center">
            <div className="relative group">
              {/* Green Gradient Halo Glow */}
              <div className="absolute inset-0 bg-[#BFF549] rounded-2xl blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
              
              <button className="group relative px-16 py-7 bg-[#BFF549] text-black font-black text-2xl rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_70px_rgba(191,245,73,0.5)] hover:scale-[1.05] active:scale-95 z-10">
                <span className="relative z-10 flex items-center gap-3">
                  Secure Your Audit <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
