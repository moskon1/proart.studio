export type ServicePageData = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  serviceType: string;
  intro: string;
  paragraphs: string[];
  includes: string[];
  pricing: { label: string; value: string }[];
  duration: string;
  audience: string[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: 'inregistrare',
    title: 'Înregistrare audio în Ploiești',
    seoTitle: 'Înregistrare audio în Ploiești | ProArt Studio',
    metaDescription: 'Înregistrări vocale și instrumentale în Ploiești, într-un studio tratat acustic, cu microfoane premium și inginer de sunet dedicat.',
    serviceType: 'Servicii de înregistrare audio',
    intro: 'Înregistrează voce, instrumente sau o piesă întreagă într-un studio audio profesionist din Ploiești. ProArt Studio te ajută să obții o captură clară, naturală și pregătită pentru producție.',
    paragraphs: [
      'Fiecare sesiune începe cu pregătirea spațiului, alegerea microfonului potrivit și stabilirea unui flux de lucru adaptat interpretului. Lucrăm cu artiști independenți, trupe, podcasteri și proiecte educaționale.',
      'Pe lângă partea tehnică, oferim îndrumare în timpul sesiunii pentru interpretare, dicție, respirație și confort vocal. Scopul este ca timpul petrecut în studio să fie eficient și să păstreze personalitatea interpretării.',
      'Studioul este situat pe Strada Doctor Toma Ionescu 27, în Ploiești, cu acces pentru artiști din Prahova și localitățile apropiate.'
    ],
    includes: ['Spațiu tratat acustic', 'Microfoane și preamplificare premium', 'Monitorizare în căști', 'Asistență din partea inginerului de sunet', 'Vocal coaching la cerere'],
    pricing: [
      { label: 'Înregistrare voce sau instrument', value: 'de la 50€' },
      { label: 'Înregistrare grup', value: 'de la 70€' },
      { label: 'Înregistrare locație', value: 'de la 100€' }
    ],
    duration: '2-4 ore per piesă',
    audience: ['Voci și instrumente', 'Trupe', 'Podcast-uri', 'Artiști aflați la început']
  },
  {
    slug: 'mixaj',
    title: 'Mixaj audio în Ploiești',
    seoTitle: 'Mixaj audio profesional în Ploiești | ProArt Studio',
    metaDescription: 'Mixaj audio profesional în Ploiești pentru single-uri, albume, podcast-uri și proiecte video. Echilibru, claritate și impact pentru fiecare piesă.',
    serviceType: 'Servicii de mixaj audio',
    intro: 'Transformăm pistele înregistrate într-un mix coerent, clar și expresiv. Mixajul ProArt Studio este potrivit pentru single-uri, EP-uri, albume, podcast-uri și proiecte video.',
    paragraphs: [
      'Analizăm fiecare element al producției și construim un echilibru între voce, instrumente, spațiu și dinamică. Procesul poate include editare, volum, panning, egalizare, compresie și efecte creative.',
      'Păstrăm comunicarea deschisă pe tot parcursul proiectului și oferim feedback acolo unde este necesar. Livrarea poate include mixul final și stem-uri grupate pentru etapele următoare.',
      'Pentru artiștii din Ploiești și Prahova, colaborarea se poate face la studio sau la distanță prin trimiterea pistelor și a referințelor.'
    ],
    includes: ['Editare și organizare piste', 'Volum și panning', 'Egalizare și procesare dinamică', 'Reverb, delay și efecte', 'Feedback și versiuni de lucru', 'Stem-uri la cerere'],
    pricing: [{ label: 'Mixaj audio', value: '50€ - 100€' }],
    duration: '2-5 ore per piesă',
    audience: ['Single-uri și EP-uri', 'Albume', 'Podcast-uri', 'Coloane sonore și video']
  },
  {
    slug: 'mastering',
    title: 'Mastering audio în Ploiești',
    seoTitle: 'Mastering audio în Ploiești | ProArt Studio',
    metaDescription: 'Mastering audio în Ploiești pentru streaming, radio și distribuție digitală. Un master echilibrat, competitiv și verificat pe mai multe sisteme de redare.',
    serviceType: 'Servicii de mastering audio',
    intro: 'Masteringul este etapa finală care pregătește piesa pentru ascultare și distribuție. ProArt Studio oferă mastering audio pentru artiști și producători din Ploiești și Prahova.',
    paragraphs: [
      'Lucrăm într-un spațiu tratat acustic și urmărim echilibrul tonal, dinamica și compatibilitatea piesei pe mai multe sisteme de redare. Deciziile sunt luate în funcție de gen, producție și destinația materialului.',
      'Putem pregăti fișiere pentru platforme de streaming, radio sau arhivare, în formatele potrivite proiectului. Păstrăm caracterul muzical al mixului și evităm procesarea excesivă.',
      'Înainte de masterizare verificăm materialul primit și comunicăm clar dacă este nevoie de ajustări în mix pentru un rezultat final mai bun.'
    ],
    includes: ['Corecție EQ finală', 'Compresie și limitare', 'Optimizare pentru streaming', 'Export WAV, MP3 sau FLAC', 'Verificare pe sisteme multiple'],
    pricing: [{ label: 'Mastering audio', value: '30€ - 70€' }],
    duration: '1-2 ore per piesă',
    audience: ['Single-uri', 'EP-uri și albume', 'Lansări digitale', 'Proiecte pregătite pentru radio']
  },
  {
    slug: 'voice-over',
    title: 'Voice Over și producție spot audio în Ploiești',
    seoTitle: 'Voice Over pentru reclame în Ploiești | ProArt Studio',
    metaDescription: 'Voice-over și producție de spoturi audio în Ploiești pentru radio, social media, YouTube, magazine și materiale promoționale.',
    serviceType: 'Voice-over și producție audio publicitară',
    intro: 'Realizăm voice-over și producție de spoturi audio pentru reclame în Ploiești: înregistrare voce, editare, procesare, muzică, efecte și mixaj.',
    paragraphs: [
      'Pentru un voice-over de reclamă, înregistrăm vocea clientului sau colaborăm cu un voice-over artist, în funcție de tonul și publicul campaniei. Oferim direcție pentru dicție, ritm, pronunție și interpretare.',
      'Pentru producția completă a unui spot audio, integrăm muzică și efecte sonore, realizăm editarea, procesarea vocală, mixajul și masterizarea. Livrăm fișiere potrivite pentru radio, YouTube, social media, website-uri, magazine sau alte canale de promovare.',
      'ProArt Studio lucrează cu firme, agenții și creatori din Ploiești, Prahova și localitățile apropiate. Pentru proiectele la distanță, materialele și indicațiile pot fi transmise online.'
    ],
    includes: ['Vocal booth', 'Microfon Neumann TLM 104', 'Editare și curățare vocală', 'Procesare și mixaj', 'Muzică și efecte sonore la cerere', 'Pregătire pentru radio și online'],
    pricing: [
      { label: 'Voice Over Reclamă', value: 'de la 30€' },
      { label: 'Producție Reclamă Audio', value: 'de la 60€' },
      { label: 'Spot publicitar complet', value: 'ofertă personalizată' }
    ],
    duration: '1-3 ore',
    audience: ['Spoturi radio și TV', 'Social media și YouTube', 'Magazine și materiale promoționale', 'Prezentări corporate']
  },
  {
    slug: 'post-productie-audio',
    title: 'Post-producție audio în Ploiești',
    seoTitle: 'Post-producție audio în Ploiești | ProArt Studio',
    metaDescription: 'Post-producție audio în Ploiești pentru film, documentar, reclame și YouTube: curățare, editare, sincronizare și design sonor.',
    serviceType: 'Servicii de post-producție audio',
    intro: 'Aducem claritate și coerență proiectelor audio-video prin editare, curățare, sincronizare și design sonor realizate cu atenție la detalii.',
    paragraphs: [
      'Post-producția poate însemna eliminarea zgomotului, repararea dialogului, echilibrarea nivelurilor sau construirea unei atmosfere sonore care susține imaginea. Stabilim de la început livrabilele și cerințele tehnice.',
      'Putem lucra cu interviuri, reclame, documentare, filme scurte, materiale YouTube și conținut educațional. Fiecare proiect primește un flux de lucru adaptat duratei și platformei de difuzare.',
      'ProArt Studio este o opțiune locală pentru producători, agenții și creatori din Ploiești, Prahova și împrejurimi.'
    ],
    includes: ['Curățare și restaurare audio', 'Editare dialog', 'Design sonor și efecte', 'Foley și înregistrări adiționale', 'Sincronizare cu video', 'Export pentru difuzare'],
    pricing: [{ label: 'Post-producție audio', value: 'ofertă personalizată' }],
    duration: 'În funcție de proiect',
    audience: ['Filme scurte', 'Documentare', 'Reclame', 'Conținut YouTube']
  },
  {
    slug: 'distributie-muzicala',
    title: 'Distribuție muzicală în Ploiești',
    seoTitle: 'Distribuție muzicală în Ploiești | ProArt Studio',
    metaDescription: 'Distribuție muzicală pentru artiști din Ploiești: pregătirea lansării și publicarea pieselor pe Spotify, Apple Music și alte platforme.',
    serviceType: 'Servicii de distribuție muzicală',
    intro: 'Te ajutăm să publici muzica pe principalele platforme digitale și să treci organizat de la fișierul final la lansarea oficială.',
    paragraphs: [
      'Verificăm materialele necesare, metadatele, coperta și formatele înainte de trimiterea lansării. Un proces bine organizat reduce erorile și ajută piesa să apară corect pe platformele alese.',
      'Serviciul este potrivit pentru artiști independenți, producători și proiecte care au nevoie de suport pentru primul single, un EP sau un album complet.',
      'Oferim consultanță locală în Ploiești, iar colaborarea poate continua online pentru actualizări și lansări ulterioare.'
    ],
    includes: ['Distribuție pe platforme digitale', 'Verificarea metadatelor', 'Pregătirea materialelor', 'Suport pentru lansare', 'Asistență după publicare'],
    pricing: [{ label: 'Distribuție muzicală', value: 'de la 50€' }],
    duration: '3-15 zile lucrătoare',
    audience: ['Single-uri', 'EP-uri', 'Albume complete', 'Artiști independenți']
  },
  {
    slug: 'proiecte-educationale',
    title: 'Proiecte educaționale audio în Ploiești',
    seoTitle: 'Ateliere audio și muzicale în Ploiești | ProArt Studio',
    metaDescription: 'Ateliere și proiecte educaționale audio în Ploiești pentru elevi, studenți și grupuri: înregistrare, signal flow și prima piesă.',
    serviceType: 'Proiecte educaționale audio',
    intro: 'Organizăm ateliere practice în care elevii și grupurile interesate descoperă cum se creează, se înregistrează și se finalizează o producție audio.',
    paragraphs: [
      'Sesiunile combină explicații accesibile cu demonstrații practice despre microfoane, traseul semnalului, înregistrare și lucru în studio. Conținutul poate fi adaptat vârstei și obiectivelor grupului.',
      'Participanții pot urmări procesul de la idee la sunet și pot contribui la realizarea unei mici producții. Activitatea este gândită să stimuleze curiozitatea, colaborarea și creativitatea.',
      'Lucrăm cu școli, licee, studenți, profesori și grupuri din Ploiești și județul Prahova.'
    ],
    includes: ['Ateliere pentru școli și licee', 'Signal flow și noțiuni de înregistrare', 'Prezentări interactive', 'Demonstrații practice', 'Proiect final'],
    pricing: [{ label: 'Proiect educațional', value: 'ofertă personalizată' }],
    duration: 'Program flexibil',
    audience: ['Grupe școlare', 'Studenți', 'Profesori', 'Workshop-uri pentru organizații']
  },
  {
    slug: 'tratamente-acustice',
    title: 'Tratamente acustice în Ploiești',
    seoTitle: 'Tratamente acustice și consultanță în Ploiești | ProArt Studio',
    metaDescription: 'Consultanță și tratamente acustice în Ploiești pentru home studio, săli de conferințe și spații comerciale, cu soluții adaptate încăperii.',
    serviceType: 'Servicii de acustică și tratament acustic',
    intro: 'Îmbunătățește claritatea și controlul sunetului printr-o soluție acustică adaptată spațiului tău, de la home studio la sală de conferințe.',
    paragraphs: [
      'Începem cu analiza încăperii și a modului în care este folosită. Identificăm reflexiile, frecvențele problematice și nevoile de izolare sau absorbție înainte de a recomanda materiale.',
      'Planul poate include panouri, bass traps, poziționare, recomandări de instalare și verificări după implementare. Evităm soluțiile standard aplicate fără măsurători și context.',
      'Oferim consultanță pentru clienți din Ploiești, Prahova și localitățile apropiate, inclusiv pentru spații de lucru și studiouri de acasă.'
    ],
    includes: ['Analiză acustică', 'Raport cu soluții recomandate', 'Panouri și bass traps la cerere', 'Plan de instalare', 'Calcule RT60 și recomandări', 'Suport post-instalare'],
    pricing: [{ label: 'Tratamente acustice', value: 'de la 500€' }],
    duration: '2-5 zile',
    audience: ['Home studio-uri', 'Săli de conferințe', 'Cinematografe home', 'Spații comerciale']
  }
];

export const getServicePage = (slug: string) => servicePages.find((service) => service.slug === slug);
