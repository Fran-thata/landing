import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-premium-dark/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tighter text-white flex items-center gap-2">
          <i className="fa-solid fa-star text-premium-gold"></i>
          FUSIÓN<span className="text-premium-gold">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-premium-gray">
          <a href="#testimonios" className="hover:text-white transition-colors">Resultados</a>
        </div>
        <button className="text-premium-gold font-bold uppercase text-xs border border-premium-gold px-6 py-2.5 rounded-full hover:bg-premium-gold hover:text-premium-dark transition-all shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
          Acceso Clientes
        </button>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-black py-12 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-xl font-bold text-white">
        FUSIÓN<span className="text-premium-gold">.</span>
      </div>
      <p className="text-neutral-500 text-sm">
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
      <Navbar />
      <Hero />
      <ProblemSection />
      <Footer />
    </div>
  );
};

export default App;