import React from 'react';
import { motion } from 'motion/react';
import { Headphones, MapPin, Mic2 } from 'lucide-react';

const highlights = [
  {
    icon: Mic2,
    title: 'Înregistrări audio',
    text: 'Sesiuni pentru voce, instrumente, trupe, podcast și voice-over, într-un spațiu tratat acustic.',
  },
  {
    icon: Headphones,
    title: 'Producție, mixaj și mastering',
    text: 'De la prima înregistrare până la varianta finală pregătită pentru platformele digitale.',
  },
  {
    icon: MapPin,
    title: 'Studio în Ploiești',
    text: 'Ne găsești pe Strada Doctor Toma Ionescu 27, Ploiești, județul Prahova.',
  },
];

export default function LocalSeo() {
  return (
    <section aria-labelledby="studio-ploiesti-title" className="py-24 bg-studio-darker">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-14"
        >
          <span className="text-studio-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4">
            Sunet profesional, aproape de tine
          </span>
          <h2
            id="studio-ploiesti-title"
            className="text-4xl md:text-6xl font-display font-bold text-studio-text-light mb-7"
          >
            Studio de înregistrări în <span className="text-studio-accent">Ploiești</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            ProArt Studio este un studio de muzică din Ploiești dedicat artiștilor,
            trupelor și creatorilor care caută înregistrări clare și un proces creativ
            bine ghidat. Oferim servicii audio complete, de la captarea vocii sau a
            instrumentelor la producție muzicală, mixaj și mastering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article key={title} className="border border-white/10 p-8 bg-white/[0.02]">
              <Icon aria-hidden="true" className="text-studio-accent mb-5" size={32} />
              <h3 className="text-2xl font-display font-bold text-white mb-3">{title}</h3>
              <p className="text-white/50 leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
