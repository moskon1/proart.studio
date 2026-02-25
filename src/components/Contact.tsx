import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-studio-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-studio-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4"
            >
              Contact Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight"
            >
              GET IN <br /> <span className="text-studio-accent">TOUCH</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
              <div className="space-y-4">
                <h4 className="text-studio-accent font-display text-2xl">Location</h4>
                <p className="text-white/50 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
                  123 Studio Lane, <br /> Creative District, <br /> London, UK
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-studio-accent font-display text-2xl">Booking</h4>
                <p className="text-white/50 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
                  hello@recondstudio.com <br /> +44 (0) 20 1234 5678
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-studio-gray flex items-center justify-center hover:bg-studio-accent transition-all group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-studio-dark p-12 border border-white/5"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-studio-accent transition-colors text-sm uppercase tracking-widest font-bold" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-studio-accent transition-colors text-sm uppercase tracking-widest font-bold" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Your Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-studio-accent transition-colors resize-none text-sm uppercase tracking-widest font-bold"></textarea>
              </div>
              <button className="bg-studio-accent text-white px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-studio-accent transition-all w-full">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
