import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-studio-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-studio-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4"
          >
            Contactează-ne
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold mb-12 leading-tight text-studio-text-light"
          >
            HAI SĂ <br /> <span className="text-studio-accent">VORBIM</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-12 w-full">
            <div className="space-y-6">
              <h4 className="text-studio-accent font-display text-3xl">Locație</h4>
              <p className="text-white/50 font-bold uppercase tracking-[0.2em] text-xs leading-relaxed">
                Liceul Tehnologic UCECOM Spiru Haret, <br /> 
                Strada Doctor Toma Ionescu 27, <br /> 
                100169 Ploiești, România
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-studio-accent font-display text-3xl">Rezervări</h4>
              <p className="text-white/50 font-bold uppercase tracking-[0.2em] text-xs leading-relaxed">
                hello@proartstudio.ro <br /> 
                +40 722 123 456
              </p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 space-y-8 w-full max-w-md"
          >
            <h4 className="text-studio-text-light font-display text-2xl uppercase tracking-widest">Rapid pe WhatsApp</h4>
            <a 
              href="https://wa.me/40722123456" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform w-full shadow-xl"
            >
              <MessageCircle size={28} />
              Trimite Mesaj WhatsApp
            </a>
          </motion.div>

          <div className="flex gap-6 mt-16">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-14 h-14 bg-studio-gray/10 flex items-center justify-center hover:bg-studio-accent hover:text-white transition-all group border border-white/5">
                <Icon size={20} className="group-hover:scale-125 transition-transform text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
