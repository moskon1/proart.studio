import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'Professional Recording Studio',
    title: 'RECOND <br /> <span class="text-studio-accent">STUDIO</span>',
    description: 'The best place for your music production, mixing & mastering.',
  },
  {
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'High-End Equipment',
    title: 'ANALOG <br /> <span class="text-studio-accent">SOUL</span>',
    description: 'Experience the warmth of vintage gear combined with modern precision.',
  },
  {
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a340b?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'Creative Atmosphere',
    title: 'YOUR <br /> <span class="text-studio-accent">SOUND</span>',
    description: 'A space designed to inspire and capture your unique musical identity.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-studio-darker">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
            src={slides[currentSlide].image}
            alt="Recording Studio"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-studio-darker/20 via-studio-darker/60 to-studio-darker" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-studio-accent font-bold uppercase tracking-[0.4em] text-xs bg-studio-accent/10 px-4 py-2 rounded-sm">
                {slides[currentSlide].subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-7xl md:text-9xl lg:text-[10rem] font-display font-bold mb-6 leading-[0.85] tracking-tighter"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm md:text-base text-white/70 max-w-xl mx-auto mb-10 font-medium uppercase tracking-[0.2em] leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="group relative bg-studio-accent text-white px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-widest overflow-hidden transition-all">
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 flex items-center justify-center text-studio-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">Explore Services</span>
              </button>
              
              <button className="bg-white/5 backdrop-blur-sm text-white px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-studio-accent transition-all border border-white/10">
                Our Equipment
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-studio-accent hover:border-studio-accent transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-studio-accent hover:border-studio-accent transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-12 flex flex-col gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-1 h-8 transition-all duration-500 ${
              currentSlide === i ? 'bg-studio-accent h-12' : 'bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-studio-accent to-transparent"
      />
    </section>
  );
}
