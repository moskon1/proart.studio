import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, Star, Crown, Sliders } from 'lucide-react';

const pricingData = {

    Premium: [
    {
      name: 'Pachet Standard',
      price: '100',
      description: 'Perfect pentru artiști independenți',
      features: [
        'Include 2h înregistrare (voce + negativ)',
        'Mixaj voce profesional',
        'Masterizare digitală',
        'Export în format WAV/MP3'
      ],
      icon: Star,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      accentColor: 'text-blue-400'
    },
    {
      name: 'Pachet Pro',
      price: '150',
      description: 'Pentru producții de calitate superioară',
      features: [
        'Include 2h înregistrare',
        'Mixaj STEM-uri (mix complet din track-uri grupate)',
        'Masterizare avansată',
        'Corecție vocală inclusă',
        'Export în formaturi multiple'
      ],
      popular: true,
      icon: Sparkles,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      accentColor: 'text-purple-400'
    },
    {
      name: 'Pachet Premium',
      price: '1500',
      description: 'Proiect complet de la zero la succes',
      features: [
        'Proiect complet creat în studioul nostru',
        'Producție instrumentală personalizată',
        'Versuri și linie melodică',
        'Înregistrare cu vocal coach dedicat',
        'Corecție vocală profesională',
        'Mixaj și masterizare premium',
        'Distribuție pe toate platformele de streaming',
        'Campanie de promovare inclusă'
      ],
      icon: Crown,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      accentColor: 'text-amber-400'
    },
    {
      name: 'Pachet Custom',
      price: 'Personalizat',
      description: 'Soluții adaptate nevoilor proiectului tău muzical',
      features: [
        'Pachete individualizate în funcție de cerințe',
        'Poate include orice servicii standard',
        'Servicii adiționale disponibile: Voiceover, Distribuție',
        'Proiecte educaționale și colaborări speciale',
        'Discutăm direct pentru a crea oferta perfectă'
      ],
      custom: true,
      icon: Sliders,
      color: 'from-studio-accent/20 to-studio-accent/10',
      borderColor: 'border-studio-accent/30',
      accentColor: 'text-studio-accent'
    }
  ],
  Înregistrare: [
    { name: 'Înregistrare Voce/Instrument', price: '50', description: 'Înregistrare vocală/instrumentala profesională cu microfoane premium.' },
    { name: 'Înregistrare Podcast', price: '50', description: 'Înregistrare vocală clară pentru emisiunea ta.' },
    { name: 'Înregistrare Grup', price: '70', description: 'Înregistrare live pentru întregul grup.' },
    { name: 'Înregistrare Locație', price: '100', description: 'Aducem studioul la tine.' },
    { name: 'Voice Over', price: '50', description: 'Înregistrare vocală de grad comercial.' },
  ],
  Mixaj: [
    { name: 'Mixaj Piesă Single', price: '50', description: 'Mixaj complet al piesei tale.' },
    { name: 'Mixaj Stem-uri', price: '100', description: 'Mixaj din track-urile tale grupate.' },
    { name: 'Corecție Vocală', price: '50', description: 'Pitch și timing perfect pentru voce.' },
    { name: 'Editare Radio', price: '50', description: 'Editare personalizată pentru difuzare radio.' },
  ],
  Mastering: [
    { name: 'Mastering Digital', price: '30', description: 'Gata pentru toate platformele de streaming.' },
    { name: 'Mastering Stem-uri', price: '70', description: 'Mai mult control asupra masterului final.' },
    { name: 'Pre-Master Vinil', price: '50', description: 'Optimizat pentru presare pe vinil.' },
  ]

};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<keyof typeof pricingData>('Premium');

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
          <div role="tablist" aria-label="Categorii de prețuri" className="flex flex-wrap justify-center gap-8 mb-16 border-b border-white/5">
            {(Object.keys(pricingData) as Array<keyof typeof pricingData>).map((tab) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-xs font-bold uppercase tracking-[0.3em] transition-all relative ${
                  activeTab === tab 
                    ? 'text-studio-accent' 
                    : 'text-white/70 hover:text-white'
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
          {activeTab !== 'Premium' ? (
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
          ) : (
            <motion.div
              key="premium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {pricingData.Premium.map((pkg, index) => {
                const Icon = pkg.icon;
                const isCustom = pkg.custom;
                const isPopular = pkg.popular;
                
                return (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border ${pkg.borderColor} transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full`}
                  >
                    {isPopular && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-studio-accent text-studio-darker text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full">
                          Recomandat
                        </span>
                      </div>
                    )}
                    
                    <div className={`bg-gradient-to-br ${pkg.color} p-6 text-center border-b border-white/10`}>
                      <div className={`inline-flex p-3 rounded-full bg-white/10 mb-4 ${pkg.accentColor}`}>
                        <Icon size={32} />
                      </div>
                      <h3 className="text-xl font-display font-bold text-studio-text-light mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-4">
                        {pkg.description}
                      </p>
                      <div className="flex items-baseline justify-center gap-1">
                        {isCustom ? (
                          <span className={`text-3xl font-display font-bold ${pkg.accentColor}`}>
                            Personalizat
                          </span>
                        ) : (
                          <>
                            <span className={`text-4xl font-display font-bold ${pkg.accentColor}`}>
                              {pkg.price}
                            </span>
                            <span className="text-white/40 text-sm">€</span>
                            {!isCustom && pkg.name !== 'Pachet Premium' && (
                              <span className="text-white/30 text-xs ml-1">/melodie</span>
                            )}
                          </>
                        )}
                      </div>
                     
                    </div>
                    
                    <div className="p-6 flex-grow">
                      <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                            <Check size={16} className={`${pkg.accentColor} flex-shrink-0 mt-0.5`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
           
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="mt-20 text-center">
          <button 
                onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                     className="bg-studio-accent text-studio-darker px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-studio-accent transition-all">
            Rezervă Sesiunea Ta
          </button>
        </div>
      </div>
    </section>
  );
}
