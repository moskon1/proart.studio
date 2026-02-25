import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Mic2, Music, Radio, Headphones, Layers, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Mic2,
    title: 'Înregistrare',
    description: 'Înregistrare vocală și instrumentală de înaltă fidelitate în camere tratate acustic cu microfoane premium.',
  },
  {
    icon: Layers,
    title: 'Mixaj',
    description: 'Mixaj profesional multi-track pentru a asigura că fiecare element al piesei tale stă perfect în scenă.',
  },
  {
    icon: Volume2,
    title: 'Mastering',
    description: 'Ultima finisare de care are nevoie muzica ta pentru a suna profesional pe toate sistemele de redare.',
  },
  {
    icon: Music,
    title: 'Producție',
    description: 'Servicii complete de producție muzicală, de la aranjament și beat-making până la producția vocală finală.',
  },
  {
    icon: Radio,
    title: 'Podcasting',
    description: 'Înregistrare și editare vocală clară pentru podcasturi, audiobook-uri și proiecte de voice-over.',
  },
  {
    icon: Headphones,
    title: 'Design Sonor',
    description: 'Efecte sonore personalizate și texturi atmosferice pentru film, jocuri și media comercială.',
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-studio-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-studio-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4"
            >
              Ce Oferim
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-bold text-studio-text-light"
            >
              SERVICII <span className="text-studio-accent">STUDIO</span>
            </motion.h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-studio-accent hover:border-studio-accent hover:text-white transition-all text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-studio-accent hover:border-studio-accent hover:text-white transition-all text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-0 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] snap-start group p-12 bg-studio-dark border border-white/5 transition-all duration-500 relative overflow-hidden cursor-pointer"
            >
              {/* Hover Background Fill */}
              <div className="absolute inset-0 bg-studio-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-studio-gray/10 rounded-sm flex items-center justify-center mb-8 group-hover:bg-white transition-colors duration-500">
                  <service.icon className="text-studio-accent group-hover:text-studio-accent w-8 h-8 transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-white transition-colors duration-500 text-studio-text-light">
                  {service.title}
                </h3>
                <p className="text-white/40 group-hover:text-white/80 leading-relaxed font-medium text-sm uppercase tracking-wider transition-colors duration-500">
                  {service.description}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-studio-accent group-hover:text-white transition-colors duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Citește Mai Mult</span>
                  <div className="w-8 h-px bg-current" />
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 text-white/5 font-display text-9xl transform group-hover:scale-110 group-hover:text-white/10 transition-all duration-700">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
