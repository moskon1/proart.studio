import React from 'react';
import { Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 bg-studio-darker ">
  
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-2 border-t border-white/5 ">
          <div className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} ProArt Studio. Toate Drepturile Rezervate.
          </div>
          

        </div>
     
    </footer>
  );
}
