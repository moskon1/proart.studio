import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic2, Music, Radio, Headphones, Layers, Volume2, ChevronLeft, ChevronRight, X, Clock, CheckCircle2, Award, Users } from 'lucide-react';

// Import pricing data to sync prices
const pricingData = {
  Înregistrare: [
    { name: 'Înregistrare Voce/Instrument', price: '30', description: 'Înregistrare vocală/instrumentala profesională cu microfoane premium.' },
    { name: 'Înregistrare Podcast', price: '30', description: 'Înregistrare vocală clară pentru emisiunea ta.' },
    { name: 'Înregistrare', price: '50', description: 'Înregistrare live pentru întregul grup.' },
    { name: 'Înregistrare Locație', price: '100', description: 'Aducem studioul la tine.' },
    { name: 'Voice Over', price: '30', description: 'Înregistrare vocală de grad comercial.' },
  ],
  Mixaj: [
    { name: 'Mixaj Piesă Single', price: '50', description: 'Mixaj complet al piesei tale.' },
    { name: 'Mixaj Stem-uri', price: '100', description: 'Mixaj din track-urile tale grupate.' },
    { name: 'Corecție Vocală', price: '50', description: 'Pitch și timing perfect pentru voce.' },
    { name: 'Editare Radio', price: '30', description: 'Editare personalizată pentru difuzare radio.' },
  ],
  Mastering: [
    { name: 'Mastering Digital', price: '30', description: 'Gata pentru toate platformele de streaming.' },
    { name: 'Mastering Stem-uri', price: '70', description: 'Mai mult control asupra masterului final.' },
    { name: 'Pre-Master Vinil', price: '50', description: 'Optimizat pentru presare pe vinil.' },
  ],
};

// Helper function to get price from pricing data based on service title
const getPriceFromPricing = (serviceTitle: string): string => {
  const serviceMap: { [key: string]: { price: string; category: string } } = {
    'Înregistrare': { price: '30-100', category: 'Înregistrare' },
    'Mixaj': { price: '30-100', category: 'Mixaj' },
    'Mastering': { price: '30-70', category: 'Mastering' },
    'Voice Over': { price: '30', category: 'Înregistrare' },
    'Post-producție audio': { price: 'Personalizat', category: '' },
    'Distribuție muzicală': { price: '50', category: '' },
    'Proiecte educaționale': { price: 'Personalizat', category: '' },
    'Tratamente acustice': { price: 'De la 500', category: '' },
  };

  if (serviceMap[serviceTitle]) {
    const mapping = serviceMap[serviceTitle];
    
    if (mapping.category && pricingData[mapping.category as keyof typeof pricingData]) {
      const categoryPrices = pricingData[mapping.category as keyof typeof pricingData];
      if (categoryPrices && categoryPrices.length > 0) {
        const prices = categoryPrices.map(item => parseInt(item.price)).filter(p => !isNaN(p));
        if (prices.length > 0) {
          const minPrice = Math.min(...prices);
          const maxPrice = Math.max(...prices);
          return minPrice === maxPrice ? `${minPrice}€` : `${minPrice}-${maxPrice}€`;
        }
      }
    }
    
    return mapping.price === 'Personalizat' ? 'Personalizat' : 
           mapping.price === 'De la 500' ? 'De la 500€' : 
           `${mapping.price}€`;
  }

  return 'La cerere';
};

// Helper to get detailed pricing info for modal
const getDetailedPricing = (serviceTitle: string) => {
  switch(serviceTitle) {
    case 'Înregistrare':
      return {
        startingPrice: '30€',
        priceRange: '30€ - 100€',
        priceDetails: [
          { name: 'Înregistrare Voce/Instrument', price: '30€' },
          { name: 'Înregistrare Podcast', price: '30€' },
          { name: 'Înregistrare Live (grup)', price: '50€' },
          { name: 'Înregistrare Locație', price: '100€' }
        ]
      };
    case 'Mixaj':
      return {
        startingPrice: '50€',
        priceRange: '30€ - 100€',
        priceDetails: [
          { name: 'Mixaj Piesă Single', price: '50€' },
          { name: 'Mixaj Stem-uri', price: '100€' },
          { name: 'Corecție Vocală', price: '50€' },
          { name: 'Editare Radio', price: '30€' }
        ]
      };
    case 'Mastering':
      return {
        startingPrice: '30€',
        priceRange: '30€ - 70€',
        priceDetails: [
          { name: 'Mastering Digital', price: '30€' },
          { name: 'Mastering Stem-uri', price: '70€' },
          { name: 'Pre-Master Vinil', price: '50€' }
        ]
      };
    case 'Voice Over':
      return {
        startingPrice: '30€',
        priceRange: '30€',
        priceDetails: [{ name: 'Voice Over', price: '30€' }]
      };
    default:
      return null;
  }
};

const services = [
  {
    icon: Mic2,
    title: 'Înregistrare',
    description: 'Înregistrare vocală și instrumentală de înaltă fidelitate în camere tratate acustic cu microfoane premium.',
    detailedDescription: `Oferim servicii complete de înregistrare, atât pentru instrumente, cât și pentru voce, într-un mediu profesional, conceput pentru a obține cele mai bune rezultate din fiecare sesiune.

Echipa noastră este formată din ingineri de sunet cu experiență, care asigură o captare clară și fidelă a sunetului, folosind tehnici moderne și echipamente de înaltă calitate. Indiferent dacă înregistrezi un instrument solo sau un aranjament complex, ne concentrăm pe detalii și pe redarea autentică a interpretării tale.

În ceea ce privește înregistrările vocale, punem un accent deosebit pe confortul și performanța artistului. Pe lângă suportul tehnic oferit de inginerul de sunet, îți punem la dispoziție și servicii de vocal coaching chiar în timpul sesiunii. Astfel, vei beneficia de îndrumare în timp real — de la tehnică vocală și respirație, până la interpretare și expresivitate.

Oferim sfaturi profesionale adaptate fiecărui nivel de experiență, fie că ești artist la început de drum sau deja consacrat. În plus, avem răbdarea și experiența necesară pentru a lucra și cu copii, creând un mediu relaxat, prietenos și încurajator, în care aceștia să se simtă în siguranță și să își exprime liber potențialul.

Scopul nostru este să transformăm fiecare sesiune de înregistrare într-o experiență productivă, plăcută și valoroasă din punct de vedere artistic.`,
    includes: [
      'Studio acustic tratat profesional',
      'Microfoane premium',
      'Preamplificare si conversie de cea mai buna calitate',
      'Monitorizare în timp real în căști profesionale',
      'Asistență tehnică din partea unui inginer de sunet',
      'Servicii de vocal coaching în timpul sesiunii'
    ],
    duration: '2-4 ore per piesă',
    features: ['Vocale', 'Instrumente acustice', 'Tobe', 'Chitare', 'Piane', 'Copii (mediu prietenos)']
  },
  {
    icon: Layers,
    title: 'Mixaj',
    description: 'Mixaj profesional multi-track pentru a asigura că fiecare element al piesei tale stă perfect în scenă.',
    detailedDescription: `Procesul de editare și mixaj este etapa în care înregistrările brute prind viață și capătă coerență, claritate și impact. În cadrul studioului nostru, tratăm fiecare proiect cu atenție la detalii și o înțelegere profundă a echilibrului sonor.

Pe lângă partea tehnică, oferim și feedback profesionist, acolo unde este necesar, contribuind la rafinarea materialului și la obținerea unui rezultat final cât mai apropiat de viziunea artistică a clientului.

Colaborarea și comunicarea sunt esențiale în acest proces, iar scopul nostru este să livrăm un produs final echilibrat, competitiv și pregătit pentru orice platformă de distribuție.`,
    includes: [
      'Volum și panning',
      'Egalizare sunet',
      'Compresie și procesare dinamică',
      'Efecte (reverb, delay, modulație)',
      'Automatizare',
      'Feedback',
      'Stem-uri grupate la cerere'
    ],
    duration: '2-5 ore per piesă',
    features: ['Orice gen muzical', 'Podcast-uri', 'Proiecte video', 'Coloane sonore']
  },
  {
    icon: Volume2,
    title: 'Mastering',
    description: 'Ultima finisare de care are nevoie muzica ta pentru a suna profesional pe toate sistemele de redare.',
    detailedDescription: `Un element esențial în obținerea unui mastering de calitate este mediul în care acesta este realizat. Monitorizarea are loc într-un spațiu tratat acustic la nivel profesional, ceea ce permite o audiție precisă și obiectivă, fără distorsiuni sau influențe nedorite. Acest lucru ne ajută să luăm decizii corecte și să livrăm un sunet echilibrat, care se traduce excelent pe orice sistem — de la căști și boxe de studio, până la sisteme audio consumer.

Folosim echipamente și tehnici moderne pentru a asigura un nivel optim de loudness, păstrând în același timp dinamica și caracterul piesei. Fiecare proiect este tratat individual, cu respect pentru viziunea artistică și cu obiectivul de a obține un rezultat final competitiv pe piața actuală.`,
    includes: [
      'Corecție EQ finală',
      'Compresie',
      'Limitare și normalizare LUFS',
      'Optimizare pentru streaming (Spotify, Apple Music)',
      'Diferite formate (WAV, MP3, FLAC)',
      'Verificare pe sisteme multiple de redare'

    ],
    duration: '1-2 ore per piesă',
    features: ['Single-uri', 'EP-uri', 'Albume', 'Platforme streaming']
  },
  {
    icon: Music,
    title: 'Voice Over',
    description: 'Oferim servicii profesionale de înregistrare voice over pentru reclame, prezentări, audiobook-uri sau conținut online.',
    detailedDescription: `Oferim servicii profesionale de înregistrare voice over pentru reclame, prezentări, audiobook-uri sau conținut online. Asigurăm atât suport tehnic de înaltă calitate, cât și îndrumare pentru obținerea unei dicții clare, naturale și expresive, adaptate scopului proiectului.`,
    includes: [
      'Vocal Booth',
      'Microfoan Neumann TLM 104',
      'Editare și curățare audio',
      'Mixaj voce',
      'Pregătire pentru broadcast',
      'Îndrumare pentru dicție și expresivitate'
    ],
    duration: '1-3 ore',
    features: ['Reclame radio/TV', 'Audiobook-uri', 'Prezentări corporate', 'Jocuri video']
  },
  {
    icon: Radio,
    title: 'Post-producție audio',
    description: 'Realizăm servicii de post-producție pentru diverse tipuri de conținut audio și video.',
    detailedDescription: `Realizăm servicii de post-producție pentru diverse tipuri de conținut audio și video, incluzând editare, curățare sunet, sincronizare și optimizare finală. Ne asigurăm că rezultatul este coerent, clar și pregătit pentru difuzare, indiferent de platformă.`,
    includes: [
      'Curățare și restaurare audio',
      'Design sonor și efecte',
      'Foley și înregistrări adiționale',
      'Sincronizare cu video',
      'Ambianța',
      'Coloana sonora'
    ],
    duration: 'În funcție de proiect',
    features: ['Filme scurte', 'Documentare', 'Reclame', 'Conținut YouTube']
  },
  {
    icon: Headphones,
    title: 'Distribuție muzicală',
    description: 'Te ajutăm să îți publici muzica pe principalele platforme de streaming, ocupându-ne de întregul proces.',
    detailedDescription: `Te ajutăm să îți publici muzica pe principalele platforme de streaming, ocupându-ne de întregul proces — de la pregătirea materialelor, până la crearea și gestionarea conturilor necesare. Oferim suport pentru ca lansarea ta să fie simplă, corect realizată și aliniată standardelor industriei.`,
    includes: [
      'Distribuție pe 50+ platforme (Spotify, Apple Music, etc.)',
      'Management metadate și ISRC codes',
      'Optimizare playlisturi editoriale',
      'Raportări lunare de streaming',
      'Colectare redevențe',
      'Creare și gestionare conturi',
      'Asistență continuă'
    ],
    duration: '3-5 zile lucrătoare',
    features: ['Single-uri', 'EP-uri', 'Albume complete', 'Distribuție nelimitată']
  },
  {
    icon: Radio,
    title: 'Proiecte educaționale',
    description: 'Organizăm sesiuni dedicate elevilor care doresc să descopere procesul de creare a sunetului și al muzicii.',
    detailedDescription: `Organizăm activități și sesiuni dedicate elevilor care doresc să descopere procesul de creare a sunetului și al muzicii. Acestea includ prezentări interactive și demonstrații practice, într-un mediu prietenos, menit să stimuleze curiozitatea și creativitatea.`,
    includes: [
      'Ateliere pentru școli și licee',
      'Tabere de vară audio',
      'Cursuri individuale de producție',
      'Teoria sunetului și acustică',
      'Prezentări interactive',
      'Demonstrații practice',
      'Proiect final - prima piesă'
    ],
    duration: 'Program flexibil',
    features: ['Grupe școlare', 'Studenți', 'Profesori', 'Workshop-uri corporate']
  },
  {
    icon: Headphones,
    title: 'Tratamente acustice',
    description: 'Oferim consultanță și soluții pentru optimizarea acustică a diverselor tipuri de spații.',
    detailedDescription: `Oferim consultanță și soluții pentru optimizarea acustică a diverselor tipuri de spații, de la studiouri de înregistrări și home studio-uri, până la spații comerciale sau săli de conferințe. Analizăm caracteristicile fiecărui spațiu și recomandăm tratamente acustice adaptate, pentru a îmbunătăți claritatea sunetului, controlul reflexiilor și confortul auditiv. Scopul nostru este să obținem un mediu echilibrat, funcțional și potrivit destinației sale.`,
    includes: [
      'Analiză acustică profesională',
      'Raport detaliat cu soluții',
      'Furnizare materiale premium (panouri, basstraps)',
      'Plan de instalare personalizat',
      'Calcule RT60 și izolare fonică',
      'Recomandări adaptate spațiului',
      'Suport post-instalare'
    ],
    duration: '2-5 zile',
    features: ['Home studio-uri', 'Săli de conferințe', 'Cinematografe home', 'Spații comerciale']
  },
];

// Enhance services with dynamic price getters
const servicesWithPrices = services.map(service => ({
  ...service,
  getPrice: () => getPriceFromPricing(service.title),
  getDetailedPricing: () => getDetailedPricing(service.title)
}));

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<typeof servicesWithPrices[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const openModal = (service: typeof servicesWithPrices[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="services" className="py-24 bg-studio-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="text-left">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-studio-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4"
              >
                Ce Oferim
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-display font-bold text-studio-text-light"
              >
                SERVICII <span className="text-studio-accent">STUDIO</span>
              </motion.h2>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-studio-accent hover:border-studio-accent hover:text-white transition-all text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-studio-accent hover:border-studio-accent hover:text-white transition-all text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-0 snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {servicesWithPrices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] snap-start group p-8 md:p-12 bg-studio-dark border border-white/5 transition-all duration-500 relative overflow-hidden cursor-pointer"
              >
                {/* Hover Background Fill */}
                <div className="absolute inset-0 bg-studio-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-studio-gray/10 rounded-sm flex items-center justify-center mb-6 md:mb-8 group-hover:bg-white transition-colors duration-500">
                    <service.icon className="text-studio-accent group-hover:text-studio-accent w-6 h-6 md:w-8 md:h-8 transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4 group-hover:text-white transition-colors duration-500 text-studio-text-light">
                    {service.title}
                  </h3>
                  <p className="text-white/40 group-hover:text-white/80 leading-relaxed font-medium text-xs md:text-sm uppercase tracking-wider transition-colors duration-500">
                    {service.description}
                  </p>
                  
                  <button 
                    onClick={() => openModal(service)}
                    className="mt-6 md:mt-8 flex items-center gap-2 text-studio-accent group-hover:text-white transition-colors duration-500"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest">Citește Mai Mult</span>
                    <div className="w-6 md:w-8 h-px bg-current" />
                  </button>
                </div>
                
                <div className="absolute -bottom-10 -right-10 text-white/5 font-display text-7xl md:text-9xl transform group-hover:scale-110 group-hover:text-white/10 transition-all duration-700">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Mobile Responsive */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 md:p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-studio-dark border border-white/10 rounded-2xl overflow-hidden max-h-[95vh] md:max-h-[90vh] overflow-y-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Header with gradient background - Mobile Optimized */}
              <div className="relative bg-gradient-to-br from-studio-accent/20 to-transparent p-4 md:p-8 border-b border-white/10">
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-studio-accent transition-all flex items-center justify-center group z-10"
                >
                  <X size={18} className="text-white md:w-5 md:h-5" />
                </button>
                
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-studio-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <selectedService.icon className="text-studio-accent w-7 h-7 md:w-10 md:h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-studio-text-light mb-2 md:mb-3">
                      {selectedService.title}
                    </h3>
                    <p className="text-white/60 text-xs md:text-sm uppercase tracking-wider">
                      {selectedService.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content - Mobile Optimized */}
              <div className="p-4 md:p-8 space-y-6 md:space-y-8">
                {/* Detailed Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-studio-accent mb-3">
                    Despre Serviciu
                  </h4>
                  <div className="text-white/70 leading-relaxed whitespace-pre-line text-sm md:text-base">
                    {selectedService.detailedDescription}
                  </div>
                </div>

                {/* Pricing Section - Commented out as requested */}
                {/* <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-studio-accent mb-4 flex items-center gap-2">
                    <Award size={16} />
                    Prețuri {selectedService.title}
                  </h4>
                  
                  {selectedService.getDetailedPricing() ? (
                    <div className="space-y-3">
                      <div className="bg-studio-accent/10 border border-studio-accent/20 rounded-lg p-4 mb-4">
                        <div className="text-center">
                          <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Preț de pornire</div>
                          <div className="text-2xl md:text-3xl font-display font-bold text-studio-accent">
                            {selectedService.getDetailedPricing()?.startingPrice}
                          </div>
                          <div className="text-xs text-white/30 mt-1">{selectedService.getDetailedPricing()?.priceRange}</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-2">
                        {selectedService.getDetailedPricing()?.priceDetails.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-white/70 text-xs md:text-sm">{item.name}</span>
                            <span className="text-studio-accent font-bold text-sm md:text-base">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-xl md:text-2xl font-display font-bold text-studio-accent mb-1">
                          {selectedService.getPrice()}
                        </div>
                        <p className="text-xs text-white/40">Contactați-ne pentru o ofertă personalizată</p>
                      </div>
                    </div>
                  )}
                </div> */}

                {/* Includes */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-studio-accent mb-4 flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    Ce Include
                  </h4>
                  <div className="grid grid-cols-1 gap-2 md:gap-3">
                    {selectedService.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-white/60 text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-studio-accent mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Info Cards - Mobile Optimized */}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 pt-4 border-t border-white/10">
                  <div className="bg-white/5 p-3 md:p-4 rounded-lg">
                    <Clock size={16} className="text-studio-accent mb-2 md:w-[18px] md:h-[18px]" />
                    <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider mb-1">Durată Estimativă</div>
                    <div className="text-white font-medium text-sm md:text-base">{selectedService.duration}</div>
                  </div>
                  <div className="bg-white/5 p-3 md:p-4 rounded-lg">
                    <Users size={16} className="text-studio-accent mb-2 md:w-[18px] md:h-[18px]" />
                    <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider mb-1">Potrivit Pentru</div>
                    <div className="text-white font-medium text-sm md:text-base">{selectedService.features.slice(0, 2).join(', ')}</div>
                  </div>
                </div>

                {/* CTA Buttons - Mobile Optimized */}
                <div className="flex flex-col gap-3 md:flex-row md:gap-4 pt-4">
                  <button
                    onClick={closeModal}
                    className="w-full md:flex-1 bg-studio-accent text-white px-4 md:px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-studio-accent transition-all"
                  >
                    Închide
                  </button>
                  <button
                    onClick={() => {
                      closeModal();
                      const pricingSection = document.getElementById('pricing');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full md:flex-1 border border-studio-accent text-studio-accent px-4 md:px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-studio-accent hover:text-white transition-all"
                  >
                    Vezi Toate Prețurile
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}