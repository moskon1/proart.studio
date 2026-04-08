import React from 'react';
import { motion } from 'motion/react';

const equipment = [
  { category: 'Console', items: ['SSL 4000G+ 48 Canale', 'Neve 88RS 60 Canale', 'Avid S6 M40'] },
  { category: 'Microfoane', items: ['Neumann U87 Ai', 'AKG C12 VR', 'Shure SM7B', 'Sennheiser MD421'] },
  { category: 'Outboard', items: ['Universal Audio 1176LN', 'Teletronix LA-2A', 'Neve 1073 Preamp'] },
  { category: 'Monitorizare', items: ['ATC SCM25A Pro', 'Yamaha NS-10M', 'Genelec 8351B'] },
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-studio-light">
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
              className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight text-studio-text"
            >
              ECHIPAMENT <br /> <span className="text-studio-accent">STUDIO</span>
            </motion.h2>
            <p className="text-studio-text/50 font-medium uppercase tracking-widest text-sm leading-relaxed mb-10">
              Folosim doar cel mai bun echipament pentru a ne asigura că sunetul tău este captat cu precizie absolută și caracter.
            </p>
            
            <div className="relative rounded-sm overflow-hidden group">
              <img 
                src="/equip.jpg"
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
                        <span className="text-studio-text/70 font-bold uppercase tracking-widest text-[10px] group-hover:text-studio-accent transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <button className="mt-16 bg-studio-accent text-white px-10 py-5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-studio-text transition-all self-start">
              Lista Completă de Echipamente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
