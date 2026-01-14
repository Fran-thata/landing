import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90svh] w-full flex items-center justify-start px-5 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image - Static, no animation */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-premium-dark/95 via-premium-dark/80 to-premium-dark/40" />

      {/* Content */}
      <div className="relative z-20 max-w-3xl text-left pt-16 md:pt-20 w-full">
        
        {/* Badge / Línea restaurada */}
        <div className="inline-flex items-center gap-2 text-premium-gold text-[10px] md:text-sm font-bold uppercase tracking-[0.15em] mb-6 bg-premium-gold/10 px-3 py-1.5 md:px-4 md:py-2 rounded border-l-4 border-premium-gold backdrop-blur-sm whitespace-normal">
          <i className="fa-solid fa-star shrink-0"></i>
          <span>Método probado para hostelería</span>
        </div>
        
        {/* H1 Headline - CONTROL MANUAL DE SALTOS Y SIN CORTE DE PALABRAS */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight md:leading-[1.1] text-white mb-6 hyphens-none break-normal">
          Convierte clientes <br className="block md:hidden" />
          satisfechos en <br className="block md:hidden" />
          <span className="text-premium-gold">Reseñas de 5★</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-xl leading-relaxed text-premium-gray mb-10 max-w-2xl font-light">
          Sistema completo para conseguir reseñas constantes y más visibilidad en Google Maps.
        </p>

        {/* Features List */}
        <div className="flex flex-col gap-4 md:gap-5 mb-8">
          {[
            { 
              icon: "fa-square-check", 
              text: "Reseñas constantes." 
            },
            { 
              icon: "fa-shield-halved", 
              text: "Previene reseñas negativas." 
            },
            { 
              icon: "fa-map-location-dot", 
              text: "Ficha fuerte en Google Maps." 
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start md:items-center gap-3 md:gap-4">
              <i className={`fa-solid ${item.icon} text-premium-gold text-lg md:text-xl mt-1 md:mt-0 shrink-0`}></i>
              <span className="text-white text-base md:text-xl font-bold tracking-tight leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* --- CINTA GOOGLE (MARQUEE) --- */}
        <div className="w-full max-w-md mb-10">
            <div className="relative w-full overflow-hidden bg-white/5 border border-white/10 rounded-lg py-3 backdrop-blur-sm">
              <div className="flex animate-marquee-hero whitespace-nowrap items-center">
                {/* Items duplicados para loop infinito */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center gap-4 mx-4 md:gap-6 md:mx-6">
                    <div className="flex items-center gap-2">
                       <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-3 h-3" />
                       </div>
                       <span className="font-bold text-white text-sm">Google</span>
                    </div>
                    <div className="flex items-center gap-1">
                       <div className="text-[#F4B400] text-xs flex gap-0.5 shrink-0">
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
              <div className="absolute inset-y-0 left-0 w-6 md:w-8 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-6 md:w-8 bg-gradient-to-l from-black/20 to-transparent z-10"></div>
            </div>
        </div>

        {/* CTA - Centrado en móvil, izquierda en escritorio */}
        <div className="flex flex-col items-center w-full md:items-start md:w-fit gap-3 pb-10 md:pb-0">
          <Button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="w-full md:w-auto">
            QUIERO REVISAR MI CASO
          </Button>
          <span className="text-white/60 text-xs md:text-sm font-medium tracking-wide text-center md:text-left">
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