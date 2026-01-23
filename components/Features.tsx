
import React from 'react';
import { Layout, Target, MousePointer2, Layers, BarChart3, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Neuro-Design Layouts",
    description: "We use eye-tracking data and psychological anchors to guide users effortlessly toward your primary call-to-action.",
    icon: <Layout className="w-8 h-8 text-[#BFF549]" />,
    color: "bg-lime-500/10"
  },
  {
    title: "Velocity-First Engineering",
    description: "Sub-second load times that keep visitors engaged. Faster sites don't just feel better—they rank higher and convert more.",
    icon: <BarChart3 className="w-8 h-8 text-blue-400]" />,
    color: "bg-blue-500/10"
  },
  {
    title: "Behavioral Triggers",
    description: "Smart interaction patterns that respond to intent, drastically reducing bounce rates and abandoned carts.",
    icon: <MousePointer2 className="w-8 h-8 text-purple-400" />,
    color: "bg-purple-500/10"
  },
  {
    title: "Iterative Optimization",
    description: "We don't launch and leave. We monitor, split-test, and refine every element to squeeze maximum profit from your traffic.",
    icon: <Target className="w-8 h-8 text-red-400" />,
    color: "bg-red-500/10"
  },
  {
    title: "Brand Authority Layer",
    description: "Visual aesthetics that instantly communicate prestige, building the trust required to close premium deals.",
    icon: <Layers className="w-8 h-8 text-[#BFF549]" />,
    color: "bg-emerald-500/10"
  },
  {
    title: "Enterprise Resilience",
    description: "Built on modern stacks that scale from 100 to 10M+ visitors without a single hiccup in performance.",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
    color: "bg-indigo-500/10"
  }
];

const Features: React.FC = () => {
  return (
    <section id="expertise" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-4xl md:text-[48px] font-black tracking-tighter mb-6">
            ENGINEERED FOR <span className="text-[#BFF549]">PERFORMANCE</span>
          </h2>
          <p className="text-xl text-[#99A1AF] max-w-2xl font-light">
            Generic templates kill businesses. We build bespoke digital machines designed for a single purpose: revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[#BFF549]/30 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-[#99A1AF] leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
