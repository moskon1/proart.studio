import React from 'react';
import { motion } from 'motion/react';

const equipment = [
  { category: 'Monitorizare', items: ['ADAM A77X', 'RME OCTAMIC XTC', 'SSL 24', 'BEYERDYNAMIC DT 770 PRO x 5', 'BEYERDYNAMIC DT 990 PRO 2500HM', 'MAKIE HM-800', 'BEHRINGER ULTRAGAING DIGITAL'] },
  { category: 'Microfoane', items: ['NEUMANN TLM 103', 'OKTAVA MK 012 MSP x 2', 'SHURE BETA 91A', 'SHURE SM57 x 2', 'SENNHEISER E604 x 3', 'SE ELECTRONICS X15 STUDIO BUNDLE'] },
  { category: 'Instrumente Muzicale si Control MIDI', items: ['ICON QCON PRO X', 'ABLETON PUSH 3', 'PEARL ROADSHOW STUDIO JET BLACK', 'ZULTAN 22" Q RIDE', 'CONGA LP A647-SW 11"-12"', 'LP 1428NY BLACK BOX CAJON', 'LP 1209+ JAM BLOCK GUIRO', 'TERRE DJEMBE 60CM', 'LP 249 CUBAN GUIRO', 'STUDIO 49 RC 2 PALISANDER CLAVES ROYAL', 'ZULTAN 10" SPLASH DARK MATTER', 'YAMAHA YEV-104 NT ELECTRIC VIOLIN', 'M-AUDIO CODE 61 BLACK'] },
  { category: 'Outboard', items: ['SPL GOLDMIKE 9844', 'VERMONA VSR 3.2', 'DRAWMEER MXPRO-30', 'TASCAM 12'] }
  
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-studio-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-studio-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4"
            >
              Arsenalul Nostru
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl text-white font-display font-bold mb-8 leading-tight text-studio-text"
            >
              ECHIPAMENT <br /> <span className="text-studio-accent">STUDIO</span>
            </motion.h2>
            <p className="text-studio-text/50 text-white font-medium uppercase tracking-widest text-sm leading-relaxed mb-10">
              Folosim doar cel mai bun echipament pentru a ne asigura că sunetul tău este captat cu precizie absolută și caracter.
            </p>
            
            <div className="relative rounded-sm overflow-hidden group">
              <img 
                src="/equip.webp"
                srcSet="/equip-480.webp 480w, /equip-800.webp 800w"
                sizes="(min-width: 1024px) 50vw, 100vw"
                width="800"
                height="533"
                alt="Echipament Studio"
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-studio-accent/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {equipment.map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-studio-accent font-display text-2xl mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-studio-accent" />
                    {group.category}
                  </h3>
                  <ul className="space-y-4">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 group cursor-default">
                        <span className="text-studio-text/70 text-white font-bold uppercase tracking-widest text-[10px] group-hover:text-studio-accent transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
        
          </div>
        </div>
      </div>
    </section>
  );
}
