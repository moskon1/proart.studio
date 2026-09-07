import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import RecentRecords from './components/RecentRecords';
import Equipment from './components/Equipment';
import Pricing from './components/Pricing';
import Artists from './components/Artists';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LocalSeo from './components/LocalSeo';
import ServicePage from './components/ServicePage';

export default function App() {
  const servicePath = window.location.pathname.match(/^\/servicii\/([^/]+)\/?$/);

  if (servicePath) {
    return <ServicePage slug={decodeURIComponent(servicePath[1])} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LocalSeo />
        {/* <RecentRecords /> */}
             <Pricing /> 
               <About />
        <Equipment />

        {/* <Artists /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
