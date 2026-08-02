import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Acasă', to: 'home' },
  { name: 'Servicii', to: 'services' },
  { name: 'Prețuri', to: 'pricing' },
  { name: 'Despre', to: 'about' },
  { name: 'Echipament', to: 'equipment' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-black/5 py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center cursor-pointer"
          aria-label="ProArt Studio – Acasă"
        >
          <img
            src="/logo.webp"
            alt="ProArt Studio"
            width="160"
            height="93"
            className={cn(
              'h-16 md:h-20 w-auto object-contain transition-[filter] duration-300',
              isScrolled ? 'brightness-100' : 'brightness-0 invert'
            )}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              className={cn(
                'relative text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer group/link',
                isScrolled ? 'text-black/70 hover:text-studio-accent' : 'text-white/70 hover:text-studio-accent'
              )}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-studio-accent transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
          <button 
            onClick={scrollToContact}
            className="group relative bg-studio-accent text-studio-darker px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest overflow-hidden transition-all"
          >
            <span className="relative z-10 transition-colors group-hover:text-studio-accent">Rezervă Sesiune</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Închide meniul de navigare' : 'Deschide meniul de navigare'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className={cn("md:hidden transition-colors", isScrolled ? "text-black" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navItems.map((item) => (
              <a
                key={item.to}
                href={`#${item.to}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest hover:text-studio-accent transition-colors text-black"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToContact();
              }} 
              className="bg-studio-accent text-studio-darker px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest w-full"
            >
              Rezervă Sesiune
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
