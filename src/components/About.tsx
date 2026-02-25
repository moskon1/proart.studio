import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-studio-darker overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000"
                alt="Sesiune Studio"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-studio-accent z-0" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-studio-accent z-0" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-studio-accent text-white p-8 rounded-sm shadow-2xl">
                <span className="text-5xl font-display font-bold block">15+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Ani de Experiență</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-studio-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4">
              Povestea Noastră
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight text-studio-text-light">
              SUNTEM <br /> <span className="text-studio-accent">PROART</span> STUDIO
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
              Fondat în 2008, ProArt Studio a fost în fruntea industriei muzicale, 
              oferind artiștilor mediul perfect pentru a-și surprinde sunetul. 
              Misiunea noastră este de a reduce decalajul dintre excelența tehnică și libertatea creativă.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-studio-accent font-display text-xl mb-2">Echipament Modern</h4>
                <p className="text-white/40 text-sm">Cele mai noi instrumente digitale pentru o producție precisă.</p>
              </div>
              <div>
                <h4 className="text-studio-accent font-display text-xl mb-2">Suflet Analog</h4>
                <p className="text-white/40 text-sm">Hardware vintage pentru acel sunet cald clasic.</p>
              </div>
            </div>
            <button className="border-b-2 border-studio-accent pb-2 text-xs font-bold uppercase tracking-widest text-white hover:text-studio-accent transition-colors">
              Află Mai Multe Despre Noi
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
