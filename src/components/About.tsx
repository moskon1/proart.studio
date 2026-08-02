import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-studio-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-sm overflow-hidden">
              <picture>
                <source media="(max-width: 767px)" srcSet="/about-400.webp" />
                <img
                  src="/about-800.webp"
                  srcSet="/about-480.webp 480w, /about-640.webp 640w, /about-800.webp 800w"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  width="800"
                  height="533"
                  alt="Sesiune de înregistrări la ProArt Studio Ploiești"
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </picture>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-studio-accent z-0" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-studio-accent z-0" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-studio-accent text-studio-darker p-8 rounded-sm shadow-2xl">
                <span className="text-5xl font-display font-bold block">2019</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Anul Fondării</span>
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
            <div className="text-white/60 text-lg font-light leading-relaxed mb-8 space-y-5">
              <p>
                Fondat în 2019, studioul nostru a luat naștere din dorința de a oferi
                servicii de înregistrare audio de calitate artiștilor din Ploiești și nu
                numai. Ne desfășurăm activitatea într-un spațiu profesional, dotat pentru
                a răspunde celor mai înalte standarde de producție audio.
              </p>
              <p>
                Echipa noastră este formată din oameni pasionați, cu experiență și
                pregătire în domeniu, dedicați fiecărui proiect. Indiferent dacă ești la
                început de drum sau un artist cu experiență, îți oferim un mediu
                profesionist în care muzica ta poate prinde viață la cel mai înalt nivel.
              </p>
            </div>
          
    
          </motion.div>
        </div>
      </div>
    </section>
  );
}
