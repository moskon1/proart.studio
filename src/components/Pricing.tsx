import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

const pricingData = {
  Recording: [
    { name: 'Vocal Recording', price: '49', description: 'Professional vocal tracking with premium mics.' },
    { name: 'Instrument Tracking', price: '59', description: 'High-fidelity capture of any instrument.' },
    { name: 'Full Band Session', price: '349', description: 'Live tracking for the whole group.' },
    { name: 'Podcast Recording', price: '39', description: 'Clean voice recording for your show.' },
    { name: 'Voice Over', price: '45', description: 'Commercial grade voice recording.' },
    { name: 'Location Recording', price: '499', description: 'We bring the studio to you.' },
  ],
  Mixing: [
    { name: 'Single Track Mix', price: '199', description: 'Complete mixdown of your song.' },
    { name: 'EP Mixing Bundle', price: '749', description: 'Consistent sound for your EP.' },
    { name: 'Album Mixing', price: '1499', description: 'Full album professional mixing.' },
    { name: 'Stem Mixing', price: '299', description: 'Mixing from your grouped tracks.' },
    { name: 'Vocal Tuning', price: '79', description: 'Perfect pitch and timing for vocals.' },
    { name: 'Radio Edit', price: '49', description: 'Custom edit for radio play.' },
  ],
  Mastering: [
    { name: 'Digital Mastering', price: '49', description: 'Ready for all streaming platforms.' },
    { name: 'Analog Mastering', price: '89', description: 'Warmth and depth via analog gear.' },
    { name: 'Stem Mastering', price: '149', description: 'More control over the final master.' },
    { name: 'Album Mastering', price: '599', description: 'Cohesive sound for your project.' },
    { name: 'Vinyl Pre-Master', price: '99', description: 'Optimized for vinyl pressing.' },
    { name: 'DDP Image', price: '49', description: 'Standard format for CD production.' },
  ],
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<keyof typeof pricingData>('Recording');

  return (
    <section id="pricing" className="py-24 bg-studio-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-studio-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4"
          >
            Pricing Plans
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold mb-12"
          >
            STUDIO <span className="text-studio-accent">RATES</span>
          </motion.h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-white/5">
            {(Object.keys(pricingData) as Array<keyof typeof pricingData>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-xs font-bold uppercase tracking-[0.3em] transition-all relative ${
                  activeTab === tab 
                    ? 'text-studio-accent' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-studio-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10"
          >
            {pricingData[activeTab].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="flex items-end justify-between mb-2 gap-4">
                  <h3 className="text-lg font-display font-bold uppercase tracking-wider group-hover:text-studio-accent transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex-grow border-b border-dotted border-white/20 mb-1.5" />
                  <span className="text-xl font-display font-bold text-studio-accent">
                    ${item.price}
                  </span>
                </div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-20 text-center">
          <button className="bg-studio-accent text-white px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-studio-accent transition-all">
            Book Your Session
          </button>
        </div>
      </div>
    </section>
  );
}
