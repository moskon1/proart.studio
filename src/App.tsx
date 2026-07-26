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

export default function App() {
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
