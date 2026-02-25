import React from 'react';
import { motion } from 'motion/react';
import { Play, ShoppingCart } from 'lucide-react';

const records = [
  {
    id: 1,
    title: 'Midnight City',
    artist: 'The Echoes',
    duration: '03:45',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    title: 'Golden Hour',
    artist: 'Luna Ray',
    duration: '04:12',
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 3,
    title: 'Electric Dreams',
    artist: 'Marcus Vane',
    duration: '02:58',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 4,
    title: 'Soulful Night',
    artist: 'Sarah J.',
    duration: '05:20',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=200',
  },
];

export default function RecentRecords() {
  return (
    <section id="records" className="py-24 bg-studio-light-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="md:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-studio-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4"
            >
              Cele Mai Noi Lucrări
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight text-studio-text"
            >
              ÎNREGISTRĂRI <span className="text-studio-accent">RECENTE</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <p className="text-studio-text/40 text-sm font-medium uppercase tracking-widest leading-relaxed">
              Ascultă câteva dintre cele mai recente piese înregistrate și produse chiar aici la ProArt Studio.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {records.map((record, index) => (
            <motion.div
              key={record.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center gap-6 p-4 bg-studio-dark border border-black/5 hover:border-studio-accent/50 transition-all duration-300"
            >
              <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-sm">
                <img src={record.image} alt={record.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-studio-accent/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play size={20} fill="white" />
                </div>
              </div>

              <div className="flex-grow grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                <div>
                  <h4 className="text-lg font-display font-bold group-hover:text-studio-accent transition-colors text-studio-text-light">{record.title}</h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{record.artist}</p>
                </div>
                
                <div className="hidden md:block text-center">
                  <span className="text-white/20 font-mono text-sm">{record.duration}</span>
                </div>

                <div className="flex justify-end gap-4">
                  <button className="p-2 text-white/40 hover:text-studio-accent transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                  <button className="border border-white/10 px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-studio-accent hover:text-white transition-all text-white">
                    Detalii
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-studio-accent text-white px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-studio-text transition-all">
            Vezi Toate Înregistrările
          </button>
        </div>
      </div>
    </section>
  );
}
