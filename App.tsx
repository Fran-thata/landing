import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ServicesCarousel } from './components/ServicesCarousel';

const Footer: React.FC = () => (
  <footer className="bg-black py-12 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-xl font-bold text-white">
        FUSIÓN<span className="text-premium-gold">.</span>
      </div>
      <p className="text-white text-sm">
        © {new Date().getFullYear()} Premium Fusión Systems. Todos los derechos reservados.
      </p>
      <div className="flex gap-4">
        <i className="fa-brands fa-instagram text-white hover:text-premium-gold cursor-pointer transition-colors"></i>
        <i className="fa-brands fa-linkedin text-white hover:text-premium-gold cursor-pointer transition-colors"></i>
        <i className="fa-brands fa-twitter text-white hover:text-premium-gold cursor-pointer transition-colors"></i>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-premium-dark text-white font-manrope selection:bg-premium-gold selection:text-black">
      <Hero />
      <ProblemSection />
      <ServicesCarousel />
      <Footer />
    </div>
  );
};

export default App;