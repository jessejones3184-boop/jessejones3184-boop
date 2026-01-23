
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "CEO of TechStream",
    content: "We saw a 140% lift in conversions within the first 30 days of launching the new site. The psychological hooks are absolutely real.",
    avatar: "https://picsum.photos/100/100?random=1",
    company: "TechStream"
  },
  {
    name: "Sarah Chen",
    role: "Founder of GlowUp",
    content: "The most beautiful website I've ever owned. But more importantly, it actually makes me money while I sleep. Incredible team.",
    avatar: "https://picsum.photos/100/100?random=2",
    company: "GlowUp"
  },
  {
    name: "Jameson Blake",
    role: "VP Marketing, Velocity",
    content: "Their process is elite. They understood our enterprise needs and delivered a high-converting masterpiece in record time.",
    avatar: "https://picsum.photos/100/100?random=3",
    company: "Velocity"
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-[48px] font-black tracking-tighter mb-8 leading-none">
              WHAT OUR <br />
              <span className="text-[#BFF549]">PARTNERS</span> SAY
            </h2>
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full bg-[#BFF549] flex items-center justify-center hover:bg-white text-black transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="md:w-2/3 relative h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute inset-0 flex flex-col justify-center p-12 bg-white/[0.03] border border-white/10 rounded-[40px] shadow-2xl"
              >
                <Quote className="w-12 h-12 text-[#BFF549] mb-6 opacity-50" />
                <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                  {testimonials[index].content}
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[index].avatar} 
                    alt={testimonials[index].name}
                    className="w-14 h-14 rounded-full border-2 border-[#BFF549]/30"
                  />
                  <div>
                    <div className="font-bold text-lg">{testimonials[index].name}</div>
                    <div className="text-[#99A1AF] text-sm uppercase tracking-widest">{testimonials[index].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
