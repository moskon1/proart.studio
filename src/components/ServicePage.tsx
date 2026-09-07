import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Clock, MapPin, Phone } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { getServicePage } from '../data/servicePages';

type ServicePageProps = {
  slug: string;
};

const siteUrl = 'https://proartstudio.ro';

function setMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export default function ServicePage({ slug }: ServicePageProps) {
  const service = getServicePage(slug);

  useEffect(() => {
    if (!service) return;

    const canonicalUrl = `${siteUrl}/servicii/${service.slug}`;
    document.title = service.seoTitle;
    setMetaTag('name', 'description', service.metaDescription);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large');
    setMetaTag('property', 'og:title', service.seoTitle);
    setMetaTag('property', 'og:description', service.metaDescription);
    setMetaTag('property', 'og:url', canonicalUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      serviceType: service.serviceType,
      description: service.metaDescription,
      areaServed: [
        { '@type': 'City', name: 'Ploiești' },
        { '@type': 'AdministrativeArea', name: 'Prahova' }
      ],
      provider: {
        '@type': 'LocalBusiness',
        name: 'ProArt Studio',
        url: siteUrl,
        telephone: '+40 720 140 462',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Strada Doctor Toma Ionescu 27',
          addressLocality: 'Ploiești',
          postalCode: '100169',
          addressCountry: 'RO'
        }
      },
      url: canonicalUrl
    };

    let jsonLd = document.head.querySelector<HTMLScriptElement>('script[data-service-schema]');
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.type = 'application/ld+json';
      jsonLd.dataset.serviceSchema = 'true';
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);

    return () => {
      jsonLd?.remove();
    };
  }, [service]);

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-studio-darker text-white flex items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <h1 className="text-5xl font-display text-white mb-6">Pagina nu există</h1>
            <a href="/" className="text-studio-accent uppercase tracking-widest text-xs font-bold">Înapoi la ProArt Studio</a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-studio-darker text-white">
      <Navbar />
      <main>
        <header className="relative overflow-hidden border-b border-white/10 bg-studio-dark pt-40 pb-20 md:pt-48 md:pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,125,38,0.18),transparent_42%)]" />
          <div className="relative max-w-7xl mx-auto px-6">
            <a href="/#services" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-studio-accent transition-colors mb-10">
              <ArrowLeft size={16} />
              Înapoi la servicii
            </a>
            <p className="text-studio-accent text-xs uppercase tracking-[0.3em] font-bold mb-5">ProArt Studio · Ploiești</p>
            <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[0.95] mb-8">
              {service.title}
            </h1>
            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-white/65">{service.intro}</p>
          </div>
        </header>

        <section className="py-20 md:py-28 bg-studio-darker">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_360px] gap-16 lg:gap-24">
            <article className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-display text-white mb-8">Serviciul potrivit pentru proiectul tău</h2>
              <div className="space-y-6 text-white/65 leading-relaxed text-base md:text-lg">
                {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>

              <h2 className="text-3xl md:text-5xl font-display text-white mt-16 mb-8">Ce include</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 border border-white/10 p-4 text-white/70">
                    <CheckCircle2 size={18} className="text-studio-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl md:text-5xl font-display text-white mt-16 mb-8">Prețuri orientative</h2>
              <div className="border border-white/10 divide-y divide-white/10">
                {service.pricing.map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-5">
                    <span className="text-white/70">{item.label}</span>
                    <span className="text-studio-accent font-display text-xl uppercase">{item.value}</span>
                  </div>
                ))}
              </div>
            </article>

            <aside className="h-fit border border-white/10 bg-white/[0.03] p-7 md:p-8 lg:sticky lg:top-28">
              <p className="text-studio-accent text-xs uppercase tracking-[0.25em] font-bold mb-6">Detalii sesiune</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="text-studio-accent shrink-0" size={22} />
                  <div><p className="text-white/40 text-xs uppercase tracking-widest mb-1">Durată estimativă</p><p>{service.duration}</p></div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="text-studio-accent shrink-0" size={22} />
                  <div><p className="text-white/40 text-xs uppercase tracking-widest mb-1">Locație</p><p>Strada Doctor Toma Ionescu 27, Ploiești</p></div>
                </div>
              </div>

              <div className="border-t border-white/10 mt-8 pt-8">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Potrivit pentru</p>
                <div className="flex flex-wrap gap-2">
                  {service.audience.map((item) => <span key={item} className="border border-studio-accent/40 px-3 py-2 text-xs text-white/70">{item}</span>)}
                </div>
              </div>

              <a href="/#contact" className="mt-8 inline-flex items-center justify-center gap-3 w-full bg-studio-accent text-studio-darker px-5 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors">
                <Phone size={16} />
                Rezervă o sesiune
              </a>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
