import React from 'react';
import { motion } from 'motion/react';

const artists = [
  {
    name: 'Luna Ray',
    genre: 'Indie Pop',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'The Echoes',
    genre: 'Alternative Rock',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Marcus Vane',
    genre: 'Electronic',
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Sarah J.',
    genre: 'Jazz / Soul',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a340b?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Artists() {
  return (
    <section id="artists" className="py-24 bg-studio-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-studio-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold"
          >
            OUR <span className="text-studio-accent">ARTISTS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-studio-darker cursor-pointer"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with sliding effect */}
              <div className="absolute inset-0 bg-studio-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="overflow-hidden">
                  <motion.span 
                    className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100"
                  >
                    {artist.genre}
                  </motion.span>
                </div>
                
                <div className="overflow-hidden">
                  <motion.h3 
                    className="text-2xl font-display font-bold text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200"
                  >
                    {artist.name}
                  </motion.h3>
                </div>
                
                <div className="overflow-hidden mt-4">
                  <motion.button 
                    className="border border-white/40 px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-studio-accent transition-all transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-300"
                  >
                    View Project
                  </motion.button>
                </div>
              </div>
              
              {/* Border animation on hover */}
              <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
