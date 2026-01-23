
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StickyCTAProps {
  isVisible: boolean;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-full max-w-xl px-6"
        >
          <div className="bg-white rounded-3xl p-4 flex items-center justify-between shadow-2xl border border-black/10">
            <div className="pl-4">
              <div className="text-black font-black text-lg tracking-tight">Ready to convert?</div>
              <div className="text-black/50 text-xs font-bold uppercase tracking-widest">Limited spots available</div>
            </div>
            <button className="px-8 py-4 bg-[#BFF549] text-black font-black rounded-2xl hover:bg-black hover:text-white transition-all transform active:scale-95">
              Secure Your Slot
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
