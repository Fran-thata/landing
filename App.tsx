import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ReviewAssistantDemo } from './components/ReviewAssistantDemo';

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
          <a href="#sistema" className="hover:text-white transition-colors">Sistema</a>
          <a href="#demo" className="hover:text-white transition-colors">Demo AI</a>
          <a href="#testimonios" className="hover:text-white transition-colors">Resultados</a>
        </div>
        {/* Actualizado a rounded-full y añadido padding/sombra sutil */}
        <button className="text-premium-gold font-bold uppercase text-xs border border-premium-gold px-6 py-2.5 rounded-full hover:bg-premium-gold hover:text-premium-dark transition-all shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
          Acceso Clientes
        </button>
      </div>
    </nav>
  );
};

const FeaturesGrid: React.FC = () => {
  const features = [
    { title: "Códigos QR Inteligentes", desc: "Redirecciona a tus clientes directamente al formulario de 5 estrellas.", icon: "fa-qrcode" },
    { title: "Filtrado de Malas Reseñas", desc: "Intercepta comentarios negativos antes de que lleguen a Google.", icon: "fa-filter" },
    { title: "Dashboard en Tiempo Real", desc: "Monitoriza tu reputación desde cualquier dispositivo al instante.", icon: "fa-chart-line" }
  ];

  return (
    <section id="sistema" className="py-24 bg-neutral-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Un ecosistema de reputación</h2>
          <p className="text-premium-gray">Todo lo que necesitas para dominar tu zona y atraer más comensales.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-neutral-900/50 p-8 rounded border border-white/5 hover:border-premium-gold/30 transition-colors group">
              <div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-premium-gold group-hover:text-premium-dark transition-colors duration-300">
                <i className={`fa-solid ${f.icon} text-xl text-premium-gold group-hover:text-premium-dark`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      <FeaturesGrid />
      <ReviewAssistantDemo />
      <Footer />
    </div>
  );
};

export default App;