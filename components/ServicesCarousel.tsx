import React, { useRef, useState, useEffect } from 'react';

const services = [
  {
    title: "Auditoría 360°",
    desc: "Análisis de tu reputación, competencia y potencial.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "El Método",
    desc: "Cuándo pedir la reseña y cómo frenar la negativa.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Formación Pro",
    desc: "Capacitación rápida para el dueño y el equipo.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
  },
  {
    title: "Implementación",
    desc: "Adaptación total a tu operativa de barra o mesa.",
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Kit Tecnológico",
    desc: "Soportes físicos con tecnología NFC y QR.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Soporte Directo",
    desc: "Acompañamiento total en la puesta en marcha.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  }
];

export const ServicesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll Loop: Every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        // If at the end, go back to 0 (move left), else go next (move right)
        return current === services.length - 1 ? 0 : current + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Trigger scroll whenever activeIndex changes (either by auto-scroll or dot click)
  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  // Handle manual scroll to update dots (optional, keeping for robustness if user swipes)
  const handleScroll = () => {
    if (scrollRef.current) {
      // Logic to detect index if user manually drags. 
      // Note: Auto-scroll might fight with manual scroll, 
      // but for this requirement, we prioritize the auto-loop visual.
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const center = scrollLeft + (width / 2);
      const totalWidth = scrollRef.current.scrollWidth;
      const progress = center / totalWidth;
      const newIndex = Math.floor(progress * services.length);
      const safeIndex = Math.min(Math.max(newIndex, 0), services.length - 1);
      
      // Only update if significantly different to avoid jitter during auto-scroll
      if (Math.abs(safeIndex - activeIndex) > 1) {
         // setActiveIndex(safeIndex); // Optional: Uncomment to sync manual scroll state
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardNodes = scrollRef.current.children;
      // Index + 1 because of the first spacer div
      const actualIndex = index + 1;
      
      if (cardNodes[actualIndex]) {
        const card = cardNodes[actualIndex] as HTMLElement;
        const containerWidth = scrollRef.current.offsetWidth;
        const cardWidth = card.offsetWidth;
        
        const scrollPosition = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
        
        scrollRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="bg-black py-20 relative overflow-hidden border-t border-white/5">
      {/* Subtle Golden Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none z-0"></div>

      {/* --- HEADER SECTION --- */}
      <div className="relative z-20 text-center mb-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Todo listo desde el primer día
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-premium-gold mb-6">
          Solución llave en mano, no piezas sueltas
        </h3>
        <p className="text-white text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          No solo entregamos accesorios. Instalamos un sistema que funciona y se integra en tu operativa.
        </p>
      </div>

      {/* --- SWIPER CONTAINER --- */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 no-scrollbar relative z-10 items-center"
        style={{ scrollPaddingLeft: '2rem', scrollPaddingRight: '2rem' }}
      >
        {/* Spacer for centering first item visually */}
        <div className="shrink-0 w-2 md:w-[calc(50%-150px)]"></div>
        
        {services.map((service, index) => (
          <div 
            key={index}
            className={`
              relative shrink-0 snap-center 
              w-[75vw] md:w-[300px] h-[420px] 
              rounded-2xl overflow-hidden 
              border border-premium-gold/30 
              transition-all duration-500 ease-out
              group cursor-pointer
              ${index === activeIndex ? 'scale-100 opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'scale-95 opacity-60'}
            `}
            onClick={() => setActiveIndex(index)}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${service.image}')` }}
            ></div>

            {/* Dark Overlay (Gradient) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/95"></div>

            {/* Content Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-left">
              {/* Removed Icon as requested */}

              {/* Text Bottom */}
              <div className="transform translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white text-sm font-medium leading-relaxed opacity-90">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Spacer for centering last item */}
        <div className="shrink-0 w-2 md:w-[calc(50%-150px)]"></div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mt-2 relative z-20">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              rounded-full transition-all duration-300 
              ${index === activeIndex 
                ? 'w-8 h-1.5 bg-premium-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]' 
                : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};