import React, { useState, useRef, useEffect } from 'react';

const testimonials = [
  "https://res.cloudinary.com/ddpujsrsg/image/upload/v1768571922/Captura_de_pantalla_2026-01-16_145831_m8nr0f.png",
  "https://res.cloudinary.com/ddpujsrsg/image/upload/v1768571870/1768340133191_bk4lbl.png",
  "https://res.cloudinary.com/ddpujsrsg/image/upload/v1768571865/1768340133219_x0jtqj.png",
  "https://res.cloudinary.com/ddpujsrsg/image/upload/v1768571864/1768340133177_gppxak.png"
];

const benefits = [
  { icon: "fa-arrow-trend-up", title: "Crecimiento real", desc: "Sin picos artificiales que alerten a Google.", emoji: "📈" },
  { icon: "fa-star", title: "100% Orgánico", desc: "Reseñas auténticas de clientes reales.", emoji: "⭐" },
  { icon: "fa-eye", title: "Más Visibilidad", desc: "Apareces antes que tu competencia local.", emoji: "👁️" },
  { icon: "fa-sliders", title: "Uso Sencillo", desc: "Se aplica en segundos, sin frenar el servicio.", emoji: "⚙️" },
  { icon: "fa-shield-halved", title: "Cero Riesgos", desc: "Sin compras falsas ni penalizaciones.", emoji: "🛡️" }
];

export const ResultsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Sync scroll with activeIndex
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Children mapping: 0=Spacer, 1=Card0, 2=Card1...
      const targetChildIndex = activeIndex + 1;
      const card = container.children[targetChildIndex] as HTMLElement;

      if (card) {
        // Calculate center position: Card Center - Container Center
        // We want the card to be in the middle of the viewport
        const containerCenter = container.offsetWidth / 2;
        const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
        const scrollLeft = cardCenter - containerCenter;

        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative w-full py-[120px] px-6 bg-[#060608] overflow-hidden flex flex-col items-center">
      
      {/* --- ESTILOS & ANIMACIONES --- */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes float-gold {
          0%, 100% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-15px); opacity: 0.5; }
        }
        .animate-float-gold { animation: float-gold 6s ease-in-out infinite; }
      `}</style>

      {/* --- CAPAS DE FONDO --- */}
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608] to-[#0E0E12] z-0"></div>
      
      {/* 2. Spotlight (Diffuse) */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[140%] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none z-0 blur-3xl"></div>
      
      {/* 3. Film Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}>
      </div>

      {/* 4. Gold Particles */}
      <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-[#D4AF37] rounded-full blur-[0.5px] animate-float-gold z-0"></div>
      <div className="absolute bottom-[25%] right-[10%] w-1.5 h-1.5 bg-[#D4AF37] rounded-full blur-[1px] animate-float-gold z-0" style={{ animationDelay: '2s' }}></div>


      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col">
        
        {/* HEADER */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F5F5F7] mb-6 tracking-tight leading-[1.1]">
            Resultados en negocios reales
          </h2>
          <p className="text-[#F5F5F7]/80 text-lg leading-[1.65] font-light">
            Probado en barras y mesas con equipos de todo tipo. La reseña llega sola como el cierre natural de un buen servicio.
          </p>
        </div>

        {/* BENEFIT TILES (STACK) */}
        <div className="flex flex-col gap-[14px] mb-20">
          {benefits.map((item, idx) => (
            <div 
              key={idx}
              className="relative group overflow-hidden rounded-[24px] bg-[rgba(14,15,20,0.65)] backdrop-blur-md border border-white/[0.06] p-[20px] flex items-start gap-5 transition-all duration-500 hover:bg-[rgba(14,15,20,0.8)]"
            >
              {/* Gold Accent Border Left */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37]/40 to-transparent"></div>
              
              {/* Icon */}
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 mt-0.5">
                <i className={`fa-solid ${item.icon} text-[#E5D196] text-sm`}></i>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <h3 className="text-[#F5F5F7] text-[17px] font-semibold tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[#F5F5F7]/60 text-[15px] leading-snug font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CARRUSEL DE TESTIMONIOS (AUTO-PLAY) */}
        <div className="w-full mb-8 relative">
          
          {/* Swiper Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 pb-12 pointer-events-none md:pointer-events-auto"
            style={{ margin: '0 -24px' }} 
          >
            {/* Start Spacer */}
            <div className="shrink-0 w-[12px]"></div>

            {testimonials.map((imgUrl, idx) => (
              <div 
                key={idx}
                className="shrink-0 snap-center w-[85%] md:w-[380px] flex flex-col items-center transition-all duration-500"
              >
                {/* Glass Card - Updated: Removed scale-95 opacity-60 logic. All cards are full size. */}
                <div className={`relative w-full rounded-[26px] overflow-hidden bg-[#1A1A1E]/40 backdrop-blur-xl border border-[#D4AF37]/20 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] group transition-all duration-500 scale-100 opacity-100`}>
                    
                    {/* Inner Content (Image) */}
                    <div className="p-3">
                        <div className="w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-black/50 relative">
                             <img 
                               src={imgUrl} 
                               alt="Testimonio real" 
                               className="w-full h-full object-contain object-center"
                             />
                        </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            ))}

            {/* End Spacer */}
            <div className="shrink-0 w-[12px]"></div>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center gap-3 mt-[-20px]">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`transition-all duration-500 rounded-full h-1.5 ${
                  idx === activeIndex 
                    ? 'w-8 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)]' 
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ver testimonio ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* FOOTER TEXT */}
        <div className="text-center px-4">
          <p className="text-[#F5F5F7]/80 text-[16px] leading-relaxed font-light">
            Un sistema probado para obtener resultados que se mantienen en el tiempo.
          </p>
        </div>

      </div>
    </section>
  );
};
