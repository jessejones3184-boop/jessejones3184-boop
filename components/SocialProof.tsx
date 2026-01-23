
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  'TechVibe', 'NexusLabs', 'Quantum', 'Elevate', 'Stellar', 'FlowState', 'Velocity'
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-black/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-[#99A1AF] text-sm font-medium uppercase tracking-widest mb-12">
          Trusted by high-growth companies worldwide
        </p>
        
        <div className="relative overflow-hidden flex whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 md:gap-32 items-center pr-16"
          >
            {[...brands, ...brands].map((brand, i) => (
              <span key={i} className="text-3xl md:text-5xl font-black text-white/20 hover:text-[#BFF549] transition-colors cursor-default tracking-tighter uppercase">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
