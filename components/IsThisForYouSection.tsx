import React from 'react';

export const IsThisForYouSection: React.FC = () => {
  return (
    <section className="relative w-full py-[120px] px-6 bg-[#060608] overflow-hidden flex flex-col items-center">
      
      {/* --- CUSTOM STYLES & ANIMATIONS --- */}
      <style>{`
        @keyframes subtle-drift {
          0% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-10px); opacity: 0.6; }
          100% { transform: translateY(0px); opacity: 0.3; }
        }
        @keyframes border-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-subtle-drift {
          animation: subtle-drift 8s ease-in-out infinite;
        }
        .animate-border-rotate {
          animation: border-rotate 6s linear infinite;
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-[#08080A] to-[#0E0E12] z-0"></div>
      
      {/* 2. Cinematic Spotlight (Diffuse) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>
      
      {/* 3. Film Grain (2-3% opacity) */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-0 mix-blend-overlay" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}>
      </div>

      {/* 4. Minimal Gold Dust Bokeh */}
      <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-[#D4AF37] rounded-full blur-[1px] animate-subtle-drift z-0"></div>
      <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-[#D4AF37] rounded-full blur-[2px] animate-subtle-drift z-0" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[30%] left-[20%] w-0.5 h-0.5 bg-[#D4AF37] rounded-full blur-[0px] animate-subtle-drift z-0" style={{ animationDelay: '4s' }}></div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col gap-12">
        
        {/* HEADER */}
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-[1.2] tracking-tight mb-2">
                Este sistema no es para todos <br/>
                <span className="opacity-60 font-light text-2xl">(y es intencionado)</span>
            </h2>
        </div>

        {/* --- CARD 1: ENCAJA CONTIGO (Gold/Champagne) --- */}
        <div className="relative group w-full rounded-[28px]">
            {/* LED Edge Effect (Animated Border) */}
            <div className="absolute -inset-[1px] rounded-[28px] overflow-hidden opacity-80">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-border-rotate"
                     style={{
                         background: 'conic-gradient(transparent 180deg, #D4AF37 210deg, transparent 240deg)'
                     }}>
                </div>
            </div>
            
            {/* Card Body */}
            <div className="relative bg-[#0E0E12]/90 backdrop-blur-xl border border-[#D4AF37]/20 rounded-[26px] p-8 h-full overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
                {/* Iridescent Top Reflection */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

                <h3 className="text-[#E5D196] text-[10px] font-bold uppercase tracking-[4px] mb-8 text-center opacity-90">
                    Encaja contigo si:
                </h3>

                <ul className="flex flex-col gap-6">
                    {[
                        { title: "Atención Directa", desc: "Tienes servicio en mesa o mostrador." },
                        { title: "Flujo Constante", desc: "Buscas reseñas diarias, no picos temporales." },
                        { title: "Ambición Digital", desc: "Quieres control total sobre tu visibilidad en Google." },
                        { title: "Compromiso", desc: "Estás dispuesto a aplicar un método real con tu equipo." }
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-5">
                            <div className="mt-0.5 shrink-0 text-[#D4AF37] text-sm drop-shadow-[0_0_5px_rgba(212,175,55,0.4)]">
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white text-[15px] font-bold tracking-wide">
                                    {item.title}
                                </span>
                                <span className="text-white/60 text-[14px] font-light leading-relaxed">
                                    {item.desc}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* --- CARD 2: NO ES PARA TI (Muted/Garnet) --- */}
        <div className="relative w-full rounded-[28px]">
            {/* Subtle Static Border (No rotation, muted luxury) */}
            <div className="absolute -inset-[1px] rounded-[28px] border border-[#4a0404]/30 bg-transparent"></div>
            
            {/* Card Body */}
            <div className="relative bg-[#0A0A0C]/90 backdrop-blur-md border border-white/5 rounded-[26px] p-8 h-full overflow-hidden shadow-none">
                 
                 <h3 className="text-[#E5D196] text-[10px] font-bold uppercase tracking-[4px] mb-8 text-center opacity-50">
                    No es para ti si:
                </h3>

                <ul className="flex flex-col gap-6">
                    {[
                        { title: "Sin Contacto", desc: "No tienes trato directo con el cliente final." },
                        { title: "Atajos", desc: "Buscas trucos mágicos o comprar reseñas falsas." },
                        { title: "Pasividad", desc: "No quieres implicar al equipo ni mejorar procesos." }
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-5 opacity-70">
                            <div className="mt-0.5 shrink-0 text-[#883333] text-sm">
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white/90 text-[15px] font-bold tracking-wide">
                                    {item.title}
                                </span>
                                <span className="text-white/40 text-[14px] font-light leading-relaxed">
                                    {item.desc}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* --- CTA BUTTON --- */}
        <div className="w-full flex justify-center mt-4">
            <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="
                  relative h-[56px] w-full max-w-xs rounded-full 
                  bg-[#060608] border border-[#D4AF37]/40 
                  text-[#D4AF37] text-[15px] font-bold uppercase tracking-widest
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
                {/* Subtle Metallic Shine Overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
        </div>

      </div>
    </section>
  );
};