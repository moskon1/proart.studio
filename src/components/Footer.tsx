import React from 'react';
import { Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-studio-darker border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-studio-accent rounded-sm flex items-center justify-center">
                <Music className="text-white w-6 h-6" />
              </div>
              <span className="text-3xl font-display font-bold tracking-widest uppercase">Recond</span>
            </div>
            <p className="text-white/40 text-sm font-medium uppercase tracking-widest leading-relaxed max-w-sm">
              The ultimate recording studio experience. Professional gear, expert engineers, and a creative atmosphere.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-display text-xl mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Equipment', 'Pricing'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-studio-accent text-[10px] font-bold uppercase tracking-widest transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display text-xl mb-6 uppercase tracking-widest">Newsletter</h4>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">Subscribe for studio updates.</p>
            <div className="flex">
              <input type="email" placeholder="EMAIL" className="bg-studio-gray border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-studio-accent w-full" />
              <button className="bg-studio-accent text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-studio-accent transition-all">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <div className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} Recond Studio. All Rights Reserved.
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-white/20 hover:text-studio-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-white/20 hover:text-studio-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
