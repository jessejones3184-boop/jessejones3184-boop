
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const pricingPlans = [
  {
    name: "Totally Free",
    subtitle: "No credit card required",
    price: "0",
    features: [
      "20k tool calls/mo",
      "Community support"
    ],
    badge: "NO USAGE BASED",
    highlight: false,
    hoverGradient: "from-[#1e3a8a] via-[#1e40af] to-[#0f172a]", // Deep Blue/Navy
    accentColor: "text-blue-400"
  },
  {
    name: "Ridiculously Cheap",
    subtitle: "No need to talk to humans",
    price: "29",
    features: [
      "200k tool calls/mo",
      "Email support"
    ],
    badge: "$0.299/1K ADDITIONAL CALLS",
    highlight: true,
    hoverGradient: "from-[#7c83ff] via-[#ff7c7c] to-[#ff4d00]", // Sunset/Orange
    accentColor: "text-[#BFF549]"
  },
  {
    name: "Serious Business",
    subtitle: "Maybe talk to humans?",
    price: "229",
    features: [
      "2M tool calls/mo",
      "Slack support (1k+/month)"
    ],
    badge: "$0.249/1K ADDITIONAL CALLS",
    highlight: false,
    hoverGradient: "from-[#4c1d95] via-[#5b21b6] to-[#1e1b4b]", // Purple/Indigo
    accentColor: "text-purple-400"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[56px] font-black tracking-tighter mb-6 uppercase"
          >
            PLANS THAT <span className="text-[#BFF549]">SCALE</span>
          </motion.h2>
          <p className="text-[#99A1AF] text-xl font-light max-w-2xl mx-auto">
            Choose a plan that fits your growth stage. Transparent pricing with no hidden surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover="hover"
              className="group relative flex flex-col min-h-[600px] rounded-[40px] p-10 overflow-hidden border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-transparent"
            >
              {/* Dynamic Background Gradient - ONLY on hover */}
              <div className={`absolute inset-0 z-0 bg-gradient-to-b ${plan.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full text-white">
                <div className="mb-12">
                  <h3 className="text-4xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-lg font-medium text-[#99A1AF] group-hover:text-white/80 transition-colors duration-500">
                    {plan.subtitle}
                  </p>
                </div>

                <div className="space-y-6 mb-12 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Zap className={`w-5 h-5 shrink-0 transition-colors duration-500 ${plan.highlight ? 'text-[#BFF549]' : plan.accentColor} group-hover:text-white`} />
                      <span className="text-lg font-medium group-hover:text-white transition-colors duration-500">{feature}</span>
                    </div>
                  ))}
                  
                  <div className="inline-block px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase mt-4 transition-all duration-500 bg-white/10 text-[#99A1AF] group-hover:bg-white/20 group-hover:text-white backdrop-blur-md">
                    {plan.badge}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-6xl font-black">${plan.price}</span>
                    <span className="text-xl text-[#99A1AF] group-hover:text-white/60 transition-colors duration-500">/ month</span>
                  </div>
                  
                  <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all transform active:scale-95 ${
                    plan.highlight 
                    ? 'bg-[#BFF549] text-black group-hover:bg-white group-hover:text-black' 
                    : 'bg-white/5 text-white border border-white/10 group-hover:bg-white group-hover:text-black group-hover:border-transparent'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>

              {/* Unique Glow Accent on Hover */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none rounded-full blur-[100px] ${
                index === 0 ? 'bg-blue-400' : index === 1 ? 'bg-[#BFF549]' : 'bg-purple-400'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
