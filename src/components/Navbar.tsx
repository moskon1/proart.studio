import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Records', to: 'records' },
  { name: 'Equipment', to: 'equipment' },
  { name: 'Pricing', to: 'pricing' },
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

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-studio-darker/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="home" smooth={true} className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-studio-accent rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <Music className="text-white w-6 h-6" />
          </div>
          <span className="text-3xl font-display font-bold tracking-widest uppercase">Recond</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              spy={true}
              activeClass="text-studio-accent"
              className="relative text-xs font-bold uppercase tracking-[0.2em] hover:text-studio-accent transition-colors cursor-pointer group/link"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-studio-accent transition-all duration-300 group-hover/link:w-full" />
            </Link>
          ))}
          <button className="group relative bg-studio-accent text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest overflow-hidden transition-all">
            <span className="relative z-10 transition-colors group-hover:text-studio-accent">Book Session</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-studio-gray border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium uppercase tracking-widest hover:text-studio-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-studio-gold text-studio-dark px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest w-full">
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
