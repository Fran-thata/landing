import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex items-start justify-start px-6 md:px-12 lg:px-24 overflow-hidden pt-6 md:pt-12 pb-24">
      {/* Background Image - Static, no animation */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-premium-dark/95 via-premium-dark/80 to-premium-dark/40" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl text-left">
        
        {/* Badge / Línea restaurada */}
        <div className="inline-flex items-center gap-2 text-premium-gold text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-8 bg-premium-gold/10 px-4 py-2 rounded border-l-4 border-premium-gold backdrop-blur-sm">
          <i className="fa-solid fa-star"></i>
          <span>Método probado para hostelería</span>
        </div>
        
        {/* H1 Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white mb-8">
          Convierte clientes satisfechos en <span className="text-premium-gold">Reseñas de 5★</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl leading-relaxed text-premium-gray mb-12 max-w-2xl font-light">
          Sistema completo para conseguir reseñas constantes y más visibilidad en Google Maps.
        </p>

        {/* Features List */}
        <div className="flex flex-col gap-6 mb-12">
          {[
            { 
              icon: "fa-square-check", 
              text: "Reseñas constantes." 
            },
            { 
              icon: "fa-shield-halved", 
              text: "Previene reseñas negativas a tiempo." 
            },
            { 
              icon: "fa-map-location-dot", 
              text: "Ficha más fuerte en Google Maps." 
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-5">
              <i className={`fa-solid ${item.icon} text-premium-gold text-xl md:text-2xl`}></i>
              <span className="text-white text-lg md:text-xl font-bold tracking-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* --- CINTA GOOGLE (MARQUEE) --- */}
        <div className="w-full max-w-md mb-12">
            <div className="relative w-full overflow-hidden bg-white/5 border border-white/10 rounded-lg py-3 backdrop-blur-sm">
              <div className="flex animate-marquee-hero whitespace-nowrap items-center">
                {/* Items duplicados para loop infinito */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center gap-6 mx-6">
                    <div className="flex items-center gap-2">
                       <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-3 h-3" />
                       </div>
                       <span className="font-bold text-white text-sm">Google</span>
                    </div>
                    <div className="flex items-center gap-1">
                       <div className="text-[#F4B400] text-xs flex gap-0.5">
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/20 to-transparent z-10"></div>
            </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-start w-fit gap-3 mb-8">
          <Button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
            QUIERO REVISAR MI CASO
          </Button>
          <span className="text-white/60 text-sm font-medium tracking-wide ml-1">
            Conversación breve. Sin presión.
          </span>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee-hero {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-hero {
          animation: marquee-hero 25s linear infinite;
        }
      `}</style>
    </section>
  );
};