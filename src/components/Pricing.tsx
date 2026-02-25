import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

const pricingData = {
  Înregistrare: [
    { name: 'Sesiune Vocală', price: '49', description: 'Înregistrare vocală profesională cu microfoane premium.' },
    { name: 'Înregistrare Instrument', price: '59', description: 'Captură de înaltă fidelitate pentru orice instrument.' },
    { name: 'Sesiune Band Complet', price: '349', description: 'Înregistrare live pentru întregul grup.' },
    { name: 'Înregistrare Podcast', price: '39', description: 'Înregistrare vocală clară pentru emisiunea ta.' },
    { name: 'Voice Over', price: '45', description: 'Înregistrare vocală de grad comercial.' },
    { name: 'Înregistrare Locație', price: '499', description: 'Aducem studioul la tine.' },
  ],
  Mixaj: [
    { name: 'Mixaj Piesă Single', price: '199', description: 'Mixaj complet al piesei tale.' },
    { name: 'Pachet Mixaj EP', price: '749', description: 'Sunet consistent pentru EP-ul tău.' },
    { name: 'Mixaj Album', price: '1499', description: 'Mixaj profesional pentru întregul album.' },
    { name: 'Mixaj Stem-uri', price: '299', description: 'Mixaj din track-urile tale grupate.' },
    { name: 'Corecție Vocală', price: '79', description: 'Pitch și timing perfect pentru voce.' },
    { name: 'Editare Radio', price: '49', description: 'Editare personalizată pentru difuzare radio.' },
  ],
  Mastering: [
    { name: 'Mastering Digital', price: '49', description: 'Gata pentru toate platformele de streaming.' },
    { name: 'Mastering Analog', price: '89', description: 'Căldură și profunzime prin echipament analog.' },
    { name: 'Mastering Stem-uri', price: '149', description: 'Mai mult control asupra masterului final.' },
    { name: 'Mastering Album', price: '599', description: 'Sunet coeziv pentru proiectul tău.' },
    { name: 'Pre-Master Vinil', price: '99', description: 'Optimizat pentru presare pe vinil.' },
    { name: 'Imagine DDP', price: '49', description: 'Format standard pentru producția de CD-uri.' },
  ],
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<keyof typeof pricingData>('Înregistrare');

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
            Planuri de Prețuri
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold mb-12 text-studio-text-light"
          >
            TARIFE <span className="text-studio-accent">STUDIO</span>
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
                  <h3 className="text-lg font-display font-bold uppercase tracking-wider group-hover:text-studio-accent transition-colors text-studio-text-light">
                    {item.name}
                  </h3>
                  <div className="flex-grow border-b border-dotted border-white/10 mb-1.5" />
                  <span className="text-xl font-display font-bold text-studio-accent">
                    {item.price}€
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
            Rezervă Sesiunea Ta
          </button>
        </div>
      </div>
    </section>
  );
}
