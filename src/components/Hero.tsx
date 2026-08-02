import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/hero1.webp',
    subtitle: 'Studio de Înregistrări Profesional',
    title: 'PROART <br /> <span class="text-studio-accent">STUDIO</span>',
    description: 'Studio de înregistrări în Ploiești pentru producție muzicală, mixaj și mastering.',
  },
    {
    image: '/hero3.webp',
    subtitle: 'Atmosferă Creativă',
    title: 'SUNETUL <br /> <span class="text-studio-accent">TĂU</span>',
    description: 'Un spațiu conceput pentru a inspira și a surprinde identitatea ta muzicală.',
  },
  {
    image: '/hero2.webp',
    subtitle: 'Spatiu Educativ',
    title: 'INVETI <br /> <span class="text-studio-accent">EXPERIMENTEZI</span>',
    description: 'Nu suntem doar un spațiu de lucru, suntem un loc unde îți poți atinge întregul potențial creativ.',
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
            srcSet={`${slides[currentSlide].image.replace('.webp', '')}-640.webp 640w, ${slides[currentSlide].image.replace('.webp', '')}-1280.webp 1280w, ${slides[currentSlide].image.replace('.webp', '')}-1440.webp 1440w, ${slides[currentSlide].image.replace('.webp', '')}-1920.webp 1920w`}
            sizes="100vw"
            width="1920"
            height="1280"
            alt="Studio de înregistrări ProArt din Ploiești"
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white" />
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
              <span className="text-studio-darker font-bold uppercase tracking-[0.4em] text-xs bg-studio-accent px-4 py-2 rounded-sm">
                {slides[currentSlide].subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-7xl md:text-9xl lg:text-[10rem] font-display font-normal mb-6 leading-[0.85] tracking-tighter text-studio-text"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm md:text-base text-white max-w-xl mx-auto mb-10 font-medium uppercase tracking-[0.2em] leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                type="button"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-studio-accent text-studio-darker px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-widest overflow-hidden transition-all"
              >
                <span className="relative z-10">Servicii</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 flex items-center justify-center text-studio-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">Servicii</span>
              </button>
              
              <button
                type="button"
                onClick={() => document.getElementById('equipment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-black/5 backdrop-blur-sm text-studio-text px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-studio-accent hover:text-white transition-all border border-black/10"
              >
                Echipament
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        <button
          type="button"
          aria-label="Imaginea precedentă"
          onClick={prevSlide}
          className="w-12 h-12 border border-black/10 flex items-center justify-center hover:bg-studio-accent hover:border-studio-accent hover:text-white transition-all text-studio-text"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Imaginea următoare"
          onClick={nextSlide}
          className="w-12 h-12 border border-black/10 flex items-center justify-center hover:bg-studio-accent hover:border-studio-accent hover:text-white transition-all text-studio-text"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-12 flex flex-col gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Afișează imaginea ${i + 1} din ${slides.length}`}
            aria-current={currentSlide === i ? 'true' : undefined}
            onClick={() => setCurrentSlide(i)}
            className={`relative w-11 h-11 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1 transition-all duration-500 ${
              currentSlide === i ? 'after:bg-studio-accent after:h-11' : 'after:bg-black/30 after:h-8'
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
