import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "“Ya tengo reseñas, ¿para qué necesito esto?”",
    answer: "No vendemos reseñas, vendemos un sistema de captación. Sin un método, tu crecimiento depende del azar. Con esto, aseguras que cada buen servicio se convierta en un activo digital."
  },
  {
    id: 2,
    question: "“Mi negocio ya funciona sin Google Maps”",
    answer: "Funciona hoy por ubicación, pero el cliente nuevo compara en el móvil antes de entrar. Si tu competencia tiene mejor puntuación, estás perdiendo dinero que ni siquiera llegas a ver."
  },
  {
    id: 3,
    question: "“He probado a pedir reseñas y no funcionó”",
    answer: "Pedir por compromiso incomoda al equipo y al cliente. El secreto no es pedir más, sino pedir mejor: en el momento exacto y de forma natural."
  },
  {
    id: 4,
    question: "“En mi zona la gente no deja reseñas”",
    answer: "El cliente no deja reseñas porque le da pereza pensar qué escribir. Nuestro sistema le da ideas clave y facilita el proceso para que se publique en 10 segundos."
  },
  {
    id: 5,
    question: "“Ahora no es buen momento, lo veré más adelante”",
    answer: "Cada semana que pospones el sistema es una semana que tu competencia te saca ventaja. Mientras lo piensas, otros están blindando su reputación."
  }
];

export const FAQSection: React.FC = () => {
  // Default to the first item open as per "Muestra 1 ítem abierto" stylistic hint
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-[120px] px-6 bg-[#060608] overflow-hidden flex flex-col items-center">
      
      {/* --- CUSTOM ANIMATIONS --- */}
      <style>{`
        @keyframes border-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes dust-float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.6; }
        }
        .animate-border-spin {
          animation: border-spin 4s linear infinite;
        }
        .animate-dust {
          animation: dust-float 8s ease-in-out infinite;
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-[#0A0A0C] to-[#0E0E12] z-0"></div>

      {/* 2. Spotlight (Top Center) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[140%] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none z-0 blur-3xl"></div>

      {/* 3. Film Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}>
      </div>

      {/* 4. Gold Dust Bokeh */}
      <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-[#D4AF37] rounded-full blur-[1px] animate-dust z-0"></div>
      <div className="absolute top-[50%] right-[15%] w-1.5 h-1.5 bg-[#D4AF37] rounded-full blur-[2px] animate-dust z-0" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[30%] left-[20%] w-0.5 h-0.5 bg-[#D4AF37] rounded-full blur-[0px] animate-dust z-0" style={{ animationDelay: '4s' }}></div>


      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col gap-16">
        
        {/* H2 Title */}
        <div className="text-left px-2">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F0F0F0] leading-[1.15] tracking-tight">
            Dudas habituales <br/>
            antes de decidir
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={item.id} 
                className="relative group w-full"
                onClick={() => toggleFAQ(index)}
              >
                {/* --- ACTIVE STATE: LED BORDER SWEEP --- */}
                {/* Only renders when open to save resources and create the effect */}
                <div className={`absolute -inset-[1px] rounded-[28px] overflow-hidden transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-border-spin"
                         style={{
                             background: 'conic-gradient(transparent 120deg, rgba(212,175,55,0.8) 180deg, transparent 240deg)'
                         }}>
                    </div>
                </div>

                {/* --- CARD BODY --- */}
                <div className={`
                    relative w-full rounded-[26px] overflow-hidden backdrop-blur-xl transition-all duration-500 cursor-pointer
                    ${isOpen 
                      ? 'bg-[#0E0E12]/90' // Darker when open for contrast
                      : 'bg-[#0E0E12]/40 hover:bg-[#0E0E12]/60 border border-white/[0.06]' // Lighter glass when closed
                    }
                  `}
                  // Small margin to show the LED border behind
                  style={{ margin: isOpen ? '1px' : '0' }}
                >
                  
                  {/* Active State: Nacreous Reflection (Diagonal Shine) */}
                  {isOpen && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-[#D4AF37]/[0.02] pointer-events-none z-0"></div>
                  )}

                  <div className="relative z-10 p-6 md:p-7">
                    
                    {/* Header Row */}
                    <div className="flex items-start gap-4 md:gap-5">
                      
                      {/* 1. Number Badge */}
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-500 mt-1
                        ${isOpen 
                          ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40 text-[#D4AF37]' 
                          : 'bg-white/5 border-white/10 text-white/40'
                        }
                      `}>
                        <span className="text-xs font-bold font-manrope">{item.id}</span>
                      </div>

                      {/* 2. Question (Champagne Pill) & Icon */}
                      <div className="flex-1">
                         <div className="flex justify-between items-start gap-4">
                           
                           {/* The Pill Highlight */}
                           <div className="inline-block bg-[rgba(201,162,74,0.14)] border border-[rgba(201,162,74,0.35)] rounded-[20px] px-5 py-2.5 transition-all duration-300">
                             <h3 className="text-[#E5D196] text-[15px] md:text-[16px] font-medium leading-snug tracking-wide">
                               {item.question}
                             </h3>
                           </div>

                           {/* Toggle Icon */}
                           <div className={`shrink-0 mt-2 text-[#D4AF37] transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                             {isOpen ? (
                               <i className="fa-solid fa-minus text-sm"></i>
                             ) : (
                               <i className="fa-solid fa-plus text-sm"></i>
                             )}
                           </div>
                         </div>

                         {/* 3. Answer Body (Expandable) */}
                         <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pt-5' : 'grid-rows-[0fr] opacity-0 pt-0'}`}>
                           <div className="overflow-hidden">
                             <p className="text-white/80 text-[16px] leading-[1.65] font-light">
                               {item.answer}
                             </p>
                           </div>
                         </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="w-full flex justify-center pt-8">
            <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="
                  relative h-[56px] w-full max-w-sm rounded-full 
                  bg-[#060608] border border-[#D4AF37]/50 
                  text-[#D4AF37] text-[16px] font-bold uppercase tracking-widest
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,1)]
                  hover:bg-[#D4AF37]/5 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]
                  transition-all duration-500 ease-out
                  flex items-center justify-center gap-3
                  group
                "
            >
                <span className="relative z-10 group-hover:tracking-[0.15em] transition-all duration-500">
                   Quiero mejorar mis reseñas
                </span>
                {/* Micro Metallic Shine */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
        </div>

      </div>
    </section>
  );
};
