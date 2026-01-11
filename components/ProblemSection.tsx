import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <>
      {/* --- PARTE 1: FONDO OSCURO (CONSECUENCIAS) --- */}
      <section className="bg-neutral-950 py-24 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Clientes satisfechos sin reseñas: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-gold to-premium-gold-light">
                Tu negocio no crece.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
              El día a día te come. Si no pides la valoración en el momento justo, el cliente cruza la puerta y se olvida para siempre. Sin un sistema, tu ficha se estanca mientras tu competencia (que sí lo pide) te adelanta por la derecha.
            </p>
          </div>

          {/* Grid de 3 Consecuencias */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                icon: "fa-arrow-trend-down",
                title: "Perfil estancado",
                desc: "Pocas reseñas nuevas dan imagen de negocio abandonado.",
                color: "text-neutral-500"
              },
              {
                icon: "fa-eye-slash",
                title: "Invisible en Google",
                desc: "Sin actividad constante, el algoritmo te esconde.",
                color: "text-neutral-500"
              },
              {
                icon: "fa-users-slash",
                title: "Pérdida de clientes",
                desc: "Los indecisos eligen a la competencia con más estrellas.",
                color: "text-neutral-500"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-premium-gold/70 p-8 rounded-2xl hover:bg-white/[0.05] hover:border-premium-gold hover:-translate-y-2 hover:shadow-2xl hover:shadow-premium-gold/10 transition-all duration-300 group text-center md:text-left cursor-default">
                <div className={`w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-premium-gold/30`}>
                  <i className={`fa-solid ${item.icon} text-2xl ${item.color} group-hover:text-premium-gold transition-colors`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEPARADOR DORADO --- */}
      <div className="w-full h-1.5 bg-gradient-to-r from-premium-gold-dark via-premium-gold to-premium-gold-dark shadow-[0_0_25px_rgba(212,175,55,0.8)] relative z-20"></div>

      {/* --- PARTE 2: FONDO GRIS CARBÓN (MÉTODO VS SUERTE) --- */}
      <section className="bg-[#1A1A1A] py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          
          {/* Títulos */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Sin un método, las reseñas dependen de la suerte
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-premium-gold">
              Con un sistema, son constantes y predecibles
            </h3>
          </div>

          {/* Comparativa Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
            
            {/* CAJA 1: EL CAOS (Fondo Negro Intenso / Borde Sangre Brillante / Icono X) */}
            <div className="bg-[#080808] border-2 border-[#7f1d1d] p-10 rounded-3xl relative min-h-[360px] flex flex-col justify-center shadow-2xl shadow-red-900/20 hover:bg-[#0a0a0a] hover:border-red-600 transition-colors">
               <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1a0505] text-red-600 font-bold px-6 py-2 rounded-full text-sm border border-[#7f1d1d] shadow-lg uppercase tracking-wide whitespace-nowrap flex items-center gap-2">
                 <i className="fa-solid fa-xmark text-lg"></i>
                 <span>Sin Método</span>
               </div>
               <ul className="space-y-8">
                  <li className="flex items-start gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center shrink-0 border border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.25)]">
                        <i className="fa-regular fa-calendar-xmark text-red-500 text-sm drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]"></i>
                     </div>
                     <span className="text-neutral-200 font-medium text-lg leading-tight">Se pide "cuando se puede" o te acuerdas.</span>
                  </li>
                  <li className="flex items-start gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center shrink-0 border border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.25)]">
                        <i className="fa-solid fa-wave-square text-red-500 text-sm drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]"></i>
                     </div>
                     <span className="text-neutral-200 font-medium text-lg leading-tight">Resultados a rachas, sin continuidad.</span>
                  </li>
                  <li className="flex items-start gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center shrink-0 border border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.25)]">
                        <i className="fa-solid fa-circle-question text-red-500 text-sm drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]"></i>
                     </div>
                     <span className="text-neutral-200 font-medium text-lg leading-tight">No sabes qué esperar cada semana.</span>
                  </li>
               </ul>
            </div>

            {/* CAJA 2: LA SOLUCIÓN (Alineada y con efecto flotante al Hover) */}
            <div className="bg-black border-2 border-premium-gold p-10 rounded-3xl relative shadow-2xl shadow-premium-gold/20 min-h-[360px] flex flex-col justify-center transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(212,175,55,0.3)]">
               <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-premium-gold to-premium-gold-dark text-neutral-950 font-extrabold px-6 py-2 rounded-full text-sm shadow-[0_0_15px_rgba(212,175,55,0.5)] uppercase tracking-wide whitespace-nowrap flex items-center gap-2">
                 <i className="fa-solid fa-check text-neutral-950 text-lg"></i>
                 <span>Con Método</span>
               </div>
               <ul className="space-y-8">
                  <li className="flex items-start gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-premium-gold/10 flex items-center justify-center shrink-0 border border-premium-gold/50">
                        <i className="fa-solid fa-bullseye text-premium-gold text-sm"></i>
                     </div>
                     <span className="text-white font-bold text-lg leading-tight">Sabes exactamente cuándo pedirla.</span>
                  </li>
                  <li className="flex items-start gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-premium-gold/10 flex items-center justify-center shrink-0 border border-premium-gold/50">
                        <i className="fa-solid fa-users-gear text-premium-gold text-sm"></i>
                     </div>
                     <span className="text-white font-bold text-lg leading-tight">El equipo lo aplica como un reloj.</span>
                  </li>
                  <li className="flex items-start gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-premium-gold/10 flex items-center justify-center shrink-0 border border-premium-gold/50">
                        <i className="fa-solid fa-arrow-trend-up text-premium-gold text-sm"></i>
                     </div>
                     <span className="text-white font-bold text-lg leading-tight">Reseñas constantes, semana tras semana.</span>
                  </li>
               </ul>
            </div>

          </div>

          {/* Texto de Cierre */}
          <div className="text-center max-w-3xl mx-auto">
             <p className="text-2xl md:text-3xl font-serif italic text-white leading-normal">
               "Cuando el momento está definido, la reseña sale de forma natural."
             </p>
          </div>

        </div>
      </section>

      {/* --- PARTE 3: EL TIMING (Estilo Sección 1 - Fondo Negro, Detalles Dorados) --- */}
      <section className="bg-neutral-950 py-24 px-6 relative overflow-hidden">
        {/* Background decoration igual que Parte 1 */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            
            {/* Header Centrado */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  La tecnología no genera reseñas por sí sola <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-gold to-premium-gold-light">
                      Solo facilita la acción en el momento justo
                  </span>
              </h2>
            </div>

            {/* Contenedor tipo Tarjeta (Estilo Parte 1 pero layout adaptado a texto único) */}
            <div className="bg-white/[0.03] border border-premium-gold/70 p-10 md:p-14 rounded-2xl hover:bg-white/[0.05] hover:border-premium-gold hover:-translate-y-2 hover:shadow-2xl hover:shadow-premium-gold/10 transition-all duration-300 group max-w-5xl mx-auto">
                
                <div className="flex flex-col gap-8">
                  <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light text-center md:text-left">
                      Sin un método, el NFC y el QR se ignoran. Son herramientas para eliminar la fricción, no para crear satisfacción. 
                      <br /><br />
                      <span className="text-white font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">Solo funcionan cuando el equipo ya ha hecho el trabajo previo: cerrar la experiencia y activar el deseo de valorar.</span>
                  </p>

                  {/* Cierre Destacado con barra vertical dorada */}
                  <div className="flex items-stretch border-l-4 border-premium-gold pl-6 py-2 group-hover:border-premium-gold-light transition-colors">
                      <p className="text-xl md:text-3xl text-white font-serif italic leading-snug">
                          "Los dispositivos son la consecuencia del sistema, no el origen."
                      </p>
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- PARTE 4: EL MÉTODO 5★ (BULLET STYLE COMPACT & GOLD BORDERS) --- */}
      <section className="bg-[#1A1A1A] py-20 px-4 relative border-t border-white/5 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            
            {/* Header Centrado */}
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                    El método para convertir <br className="hidden md:block"/> 
                    <span className="text-premium-gold">experiencias en 5★</span>
                </h2>
                <h3 className="text-lg md:text-xl font-bold text-neutral-300 mb-6 uppercase tracking-wide">
                    No es pedir por pedir. Es saber leer la mesa.
                </h3>
                <p className="text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                    Las reseñas no llegan por suerte. Llegan cuando tu equipo sabe cerrar la experiencia usando la frase exacta en el segundo perfecto.
                </p>
            </div>

            {/* Grid Compacto Bullet Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-16 max-w-full">
                {[
                    {
                        icon: "fa-magnifying-glass-plus",
                        title: "Identificar",
                        desc: "Detectar al cliente satisfecho.",
                    },
                    {
                        icon: "fa-handshake-simple",
                        title: "Cerrar",
                        desc: "Sin prisas ni presión.",
                    },
                    {
                        icon: "fa-microphone-lines",
                        title: "Naturalidad",
                        desc: "Usar una frase cercana.",
                    },
                    {
                        icon: "fa-user-xmark",
                        title: "Filtrar",
                        desc: "Saber a quién NO pedirla.",
                    },
                    {
                        icon: "fa-shield-halved",
                        title: "Anticipar",
                        desc: "Prevenir malas reseñas.",
                    }
                ].map((item, idx) => (
                   <div key={idx} className={`bg-white/[0.02] border border-premium-gold/70 shadow-[0_0_10px_rgba(212,175,55,0.2)] py-4 px-4 rounded-xl flex flex-row items-center gap-3 hover:bg-premium-gold/10 hover:border-premium-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 group ${idx === 4 ? 'col-span-1 sm:col-span-2 lg:col-span-1' : ''}`}>
                       {/* Icon Bullet */}
                       <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-[#2a2a2a] to-black border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-premium-gold/10 group-hover:border-premium-gold/40 transition-all">
                           <i className={`fa-solid ${item.icon} text-sm text-premium-gold group-hover:scale-110 transition-transform`}></i>
                       </div>
                       
                       {/* Text Content */}
                       <div className="flex flex-col text-left">
                           <h4 className="text-sm font-bold text-white group-hover:text-premium-gold transition-colors leading-tight mb-1">{item.title}</h4>
                           <p className="text-[11px] text-neutral-400 leading-tight group-hover:text-neutral-300 transition-colors">
                               {item.desc}
                           </p>
                       </div>
                   </div>
                ))}
            </div>

            {/* Cierre Destacado: Diseño réplica de la imagen */}
            <div className="max-w-3xl mx-auto flex items-stretch">
                {/* Gold Gradient Vertical Bar */}
                <div className="w-1.5 md:w-2 bg-gradient-to-b from-[#F2D06B] via-[#D4AF37] to-[#B48F26] shadow-[0_0_15px_rgba(212,175,55,0.5)] shrink-0"></div>
                
                {/* Text Content */}
                <div className="pl-6 md:pl-8 py-2 flex items-center">
                    <p className="text-xl md:text-3xl text-white font-serif italic leading-snug">
                        "La diferencia entre pedir y conseguir no está en la herramienta, está en el método."
                    </p>
                </div>
            </div>

        </div>
      </section>
    </>
  );
};