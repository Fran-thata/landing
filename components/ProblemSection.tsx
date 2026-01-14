import React, { useState, useEffect } from 'react';

export const ProblemSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Datos de las tarjetas para iterar y aplicar lógica
  const problems = [
    {
      icon: "fa-arrow-trend-down",
      title: "Perfil estancado",
      desc: "Sin reseñas recientes, pareces un negocio abandonado."
    },
    {
      icon: "fa-eye-slash",
      title: "Invisible en Google",
      desc: "Si no entran reseñas nuevas, Google deja de mostrarte."
    },
    {
      icon: "fa-users-slash",
      title: "Pérdida de clientes",
      desc: "Antes de entrar a un local valoran irse con quien tiene más estrellas."
    }
  ];

  useEffect(() => {
    // Se elimina la restricción de prefers-reduced-motion para forzar la animación en todos los dispositivos
    // Esto corrige el problema en móviles con modo de ahorro de energía activado.
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % problems.length);
    }, 5000); // 5 segundos por tarjeta

    return () => clearInterval(interval);
  }, [problems.length]);

  return (
    <>
      {/* --- PARTE 1: PROBLEMAS DEL NEGOCIO (Con Auto-Rotating Highlight) --- */}
      <section className="bg-neutral-950 py-20 md:py-28 px-5 md:px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          
          {/* Texto Principal Centrado */}
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Clientes satisfechos sin reseñas: <br className="hidden md:block" />
              <span className="text-premium-gold">Tu negocio no crece.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Si no pides la valoración en el momento justo, el cliente se olvida. <br className="hidden md:block" />
              Sin un sistema, tu perfil se estanca y la competencia te gana terreno.
            </p>
          </div>

          {/* Stack de 3 Tarjetas con Animación Cíclica */}
          <div className="flex flex-col gap-4">
            {problems.map((item, index) => {
              const isActive = index === activeIndex;
              
              return (
                <div 
                  key={index}
                  className={`
                    relative p-5 md:p-6 rounded-2xl flex items-center gap-5 md:gap-6 border 
                    transition-all duration-700 ease-in-out cursor-default
                    ${isActive 
                      ? "bg-white/[0.08] border-premium-gold shadow-[0_0_20px_rgba(212,175,55,0.15)] z-10 scale-[1.02]" 
                      : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04]" // Eliminada opacidad reducida para mantener importancia
                    }
                  `}
                >
                  {/* Icon Container */}
                  <div className={`
                    w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-700
                    ${isActive 
                      ? "bg-neutral-900 border-premium-gold shadow-[0_0_10px_rgba(212,175,55,0.2)]" 
                      : "bg-neutral-900 border-white/10"
                    }
                  `}>
                    <i className={`
                      fa-solid ${item.icon} text-xl md:text-2xl transition-colors duration-700
                      ${isActive ? "text-premium-gold" : "text-neutral-400"} 
                    `}></i>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col text-left">
                    <h3 className={`text-lg md:text-xl font-bold mb-1 transition-colors duration-700 ${isActive ? "text-white" : "text-neutral-200"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-base md:text-lg leading-snug transition-colors duration-700 ${isActive ? "text-neutral-200" : "text-neutral-400"}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SEPARADOR DORADO --- */}
      <div className="w-full h-1.5 bg-gradient-to-r from-premium-gold-dark via-premium-gold to-premium-gold-dark shadow-[0_0_25px_rgba(212,175,55,0.8)] relative z-20"></div>

      {/* --- PARTE 2: FONDO GRIS CARBÓN (MÉTODO VS SUERTE) --- */}
      <section className="bg-[#1A1A1A] py-16 md:py-24 px-5 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          
          {/* Títulos */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 md:mb-4 leading-tight">
              Sin un método, las reseñas dependen de la suerte
            </h2>
            <h3 className="text-xl md:text-3xl font-bold text-premium-gold">
              Con un sistema, son constantes y predecibles
            </h3>
          </div>

          {/* Comparativa Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
            
            {/* CAJA 1: EL CAOS (Padding ajustado para móvil p-6) */}
            <div className="bg-[#080808] border-2 border-[#7f1d1d] p-6 md:p-10 rounded-3xl relative min-h-[auto] md:min-h-[360px] flex flex-col justify-center shadow-2xl shadow-red-900/20 hover:bg-[#0a0a0a] hover:border-red-600 transition-colors">
               <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-[#1a0505] text-red-600 font-bold px-4 md:px-6 py-2 rounded-full text-xs md:text-sm border border-[#7f1d1d] shadow-lg uppercase tracking-wide whitespace-nowrap flex items-center gap-2">
                 <i className="fa-solid fa-xmark text-base md:text-lg"></i>
                 <span>Sin Método</span>
               </div>
               <ul className="space-y-6 md:space-y-8 mt-6 md:mt-0">
                  <li className="flex items-start gap-4 md:gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center shrink-0 border border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.25)]">
                        <i className="fa-regular fa-calendar-xmark text-red-500 text-sm drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]"></i>
                     </div>
                     <span className="text-neutral-200 font-medium text-base md:text-lg leading-tight">Se pide "cuando se puede" o te acuerdas.</span>
                  </li>
                  <li className="flex items-start gap-4 md:gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center shrink-0 border border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.25)]">
                        <i className="fa-solid fa-wave-square text-red-500 text-sm drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]"></i>
                     </div>
                     <span className="text-neutral-200 font-medium text-base md:text-lg leading-tight">Resultados a rachas, sin continuidad.</span>
                  </li>
                  <li className="flex items-start gap-4 md:gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center shrink-0 border border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.25)]">
                        <i className="fa-solid fa-circle-question text-red-500 text-sm drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]"></i>
                     </div>
                     <span className="text-neutral-200 font-medium text-base md:text-lg leading-tight">No sabes qué esperar cada semana.</span>
                  </li>
               </ul>
            </div>

            {/* CAJA 2: LA SOLUCIÓN (Padding ajustado p-6) */}
            <div className="bg-black border-2 border-premium-gold p-6 md:p-10 rounded-3xl relative shadow-2xl shadow-premium-gold/20 min-h-[auto] md:min-h-[360px] flex flex-col justify-center transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(212,175,55,0.3)]">
               <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-premium-gold to-premium-gold-dark text-neutral-950 font-extrabold px-4 md:px-6 py-2 rounded-full text-xs md:text-sm shadow-[0_0_15px_rgba(212,175,55,0.5)] uppercase tracking-wide whitespace-nowrap flex items-center gap-2">
                 <i className="fa-solid fa-check text-neutral-950 text-base md:text-lg"></i>
                 <span>Con Método</span>
               </div>
               <ul className="space-y-6 md:space-y-8 mt-6 md:mt-0">
                  <li className="flex items-start gap-4 md:gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-premium-gold/10 flex items-center justify-center shrink-0 border border-premium-gold/50">
                        <i className="fa-solid fa-bullseye text-premium-gold text-sm"></i>
                     </div>
                     <span className="text-white font-bold text-base md:text-lg leading-tight">Sabes exactamente cuándo pedirla.</span>
                  </li>
                  <li className="flex items-start gap-4 md:gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-premium-gold/10 flex items-center justify-center shrink-0 border border-premium-gold/50">
                        <i className="fa-solid fa-users-gear text-premium-gold text-sm"></i>
                     </div>
                     <span className="text-white font-bold text-base md:text-lg leading-tight">El equipo lo aplica como un reloj.</span>
                  </li>
                  <li className="flex items-start gap-4 md:gap-5">
                     <div className="mt-1 w-8 h-8 rounded-full bg-premium-gold/10 flex items-center justify-center shrink-0 border border-premium-gold/50">
                        <i className="fa-solid fa-arrow-trend-up text-premium-gold text-sm"></i>
                     </div>
                     <span className="text-white font-bold text-base md:text-lg leading-tight">Reseñas constantes, semana tras semana.</span>
                  </li>
               </ul>
            </div>

          </div>

          {/* Texto de Cierre */}
          <div className="text-center max-w-3xl mx-auto">
             <p className="text-xl md:text-3xl font-serif italic text-white leading-normal px-4">
               "Cuando el momento está definido, la reseña sale de forma natural."
             </p>
          </div>

        </div>
      </section>

      {/* --- PARTE 3: LA TECNOLOGÍA --- */}
      <section className="bg-black py-16 md:py-24 px-5 md:px-6 relative overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto">
            
            {/* Headers estilizados igual que Sección 2 */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  La tecnología no genera reseñas por sí sola
              </h2>
              <h3 className="text-xl md:text-3xl font-bold text-premium-gold">
                  Solo facilita la acción en el momento justo
              </h3>
            </div>

            {/* Contenedor tipo Tarjeta (Estilo oscuro y limpio) */}
            <div className="bg-[#080808] border border-white/10 p-6 md:p-14 rounded-3xl relative shadow-2xl max-w-4xl mx-auto hover:border-premium-gold/30 transition-colors duration-500">
                
                <div className="flex flex-col gap-6 md:gap-8 text-center">
                  <p className="text-base md:text-xl text-neutral-300 leading-relaxed font-light">
                      Sin un método, el NFC y el QR se ignoran. Son herramientas para eliminar la fricción, no para crear satisfacción. 
                      <br /><br />
                      <span className="text-white font-bold drop-shadow-md">Solo funcionan cuando el equipo ya ha hecho el trabajo previo: cerrar la experiencia y activar el deseo de valorar.</span>
                  </p>

                  {/* Cierre Destacado */}
                  <div className="mt-4 md:mt-6 pt-6 md:pt-8 border-t border-white/5">
                      <p className="text-xl md:text-3xl font-serif italic text-white leading-normal">
                          "Los dispositivos son la consecuencia del sistema, no el origen."
                      </p>
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- PARTE 4: EL MÉTODO 5★ (BULLET STYLE) --- */}
      <section className="bg-[#1A1A1A] py-16 md:py-20 px-4 relative border-t border-white/5 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            
            {/* Header Centrado */}
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                    El método para convertir <br className="hidden md:block"/> 
                    <span className="text-premium-gold">experiencias en 5★</span>
                </h2>
                <h3 className="text-lg md:text-xl font-bold text-neutral-300 mb-6 uppercase tracking-wide">
                    No es pedir por pedir. Es saber leer la mesa.
                </h3>
            </div>

            {/* Grid Compacto Bullet Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-12 md:mb-16 max-w-full">
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
            <div className="max-w-3xl mx-auto flex items-stretch px-2 md:px-0">
                {/* Gold Gradient Vertical Bar */}
                <div className="w-1 md:w-2 bg-gradient-to-b from-[#F2D06B] via-[#D4AF37] to-[#B48F26] shadow-[0_0_15px_rgba(212,175,55,0.5)] shrink-0"></div>
                
                {/* Text Content */}
                <div className="pl-4 md:pl-8 py-2 flex items-center">
                    <p className="text-lg md:text-3xl text-white font-serif italic leading-snug">
                        "La diferencia entre pedir y conseguir no está en la herramienta, está en el método."
                    </p>
                </div>
            </div>

        </div>
      </section>

      {/* --- SEPARADOR DORADO --- */}
      <div className="w-full h-1.5 bg-gradient-to-r from-premium-gold-dark via-premium-gold to-premium-gold-dark shadow-[0_0_25px_rgba(212,175,55,0.8)] relative z-20"></div>

      {/* --- PARTE 5: EL TIMING / CONTEXTO --- */}
      <section className="bg-neutral-950 py-16 md:py-24 px-5 md:px-6 relative border-t border-white/10">
        <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  No se trata de pedir reseñas
              </h2>
              <h3 className="text-xl md:text-3xl font-bold text-premium-gold">
                  Se trata de saber cuándo hacerlo
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                
                <div className="md:col-span-7 space-y-6 md:space-y-8">
                     <p className="text-base md:text-xl text-neutral-300 leading-relaxed font-light">
                        <span className="text-white font-bold">Un código QR en el ticket o un mensaje por WhatsApp o email, horas después no funciona.</span> El cliente ya ha desconectado.
                     </p>
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-premium-gold/10 flex items-center justify-center shrink-0 border border-premium-gold/30">
                           <i className="fa-solid fa-check text-premium-gold text-lg md:text-xl"></i>
                        </div>
                        <p className="text-base md:text-xl text-neutral-200 leading-relaxed">
                            La clave es hacerlo fácil y natural <span className="text-premium-gold font-bold">mientras siguen en la mesa</span>, cuando la satisfacción es máxima.
                        </p>
                     </div>
                </div>

                <div className="md:col-span-5">
                    <div className="bg-black/40 border border-premium-gold/30 p-8 md:p-10 rounded-3xl relative shadow-2xl shadow-black/50 hover:border-premium-gold/60 transition-colors group">
                        <i className="fa-solid fa-quote-right text-premium-gold/10 text-6xl md:text-8xl absolute -bottom-4 -right-4 rotate-12 group-hover:text-premium-gold/20 transition-colors"></i>
                        <p className="text-xl md:text-3xl font-serif italic text-white leading-tight relative z-10">
                            "La reseña es la consecuencia de un servicio bien hecho."
                        </p>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* --- PARTE 6: CÓMO FUNCIONA --- */}
      <section className="bg-black py-16 md:py-24 px-5 md:px-6 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto">
           
           <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                 Cómo funciona en el día a día
              </h2>
              <h3 className="text-xl md:text-3xl font-bold text-premium-gold">
                 Se integra sin frenar el ritmo del servicio
              </h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 mb-12 md:mb-16">
              {[
                {
                  step: 1,
                  icon: "fa-comment-dots",
                  title: "Petición Natural",
                  text: "Cliente feliz → El equipo pide la valoración al cerrar la mesa."
                },
                {
                  step: 2,
                  icon: "fa-wand-magic-sparkles",
                  title: "Guía del Mensaje",
                  text: "Sugerimos sutilmente qué escribir para que Google te premie."
                },
                {
                  step: 3,
                  icon: "fa-mobile-screen-button",
                  title: "Acción Inmediata",
                  text: "Se acerca el dispositivo (NFC/QR) y la reseña se publica en segundos."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#080808] border border-white/10 p-6 md:p-8 rounded-2xl relative group hover:border-premium-gold/50 transition-colors duration-300">
                   <div className="absolute top-4 right-6 text-6xl font-extrabold text-white/[0.03] select-none group-hover:text-premium-gold/[0.05] transition-colors">
                     {item.step}
                   </div>
                   <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-premium-gold/5 border border-premium-gold/20 flex items-center justify-center mb-6 group-hover:bg-premium-gold/10 group-hover:scale-110 transition-transform duration-300">
                     <i className={`fa-solid ${item.icon} text-xl md:text-2xl text-premium-gold`}></i>
                   </div>
                   <h4 className="text-lg md:text-xl font-bold text-white mb-4 relative z-10">{item.title}</h4>
                   <p className="text-sm md:text-base text-neutral-400 leading-relaxed relative z-10">
                     {item.text}
                   </p>
                </div>
              ))}
           </div>

           <div className="bg-[#111] border-l-4 border-premium-gold rounded-r-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-premium-gold/5 to-transparent pointer-events-none"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-full border border-white/10 flex items-center justify-center shrink-0 shadow-lg relative z-10">
                 <i className="fa-solid fa-user-shield text-2xl md:text-3xl text-premium-gold"></i>
              </div>
              <div className="text-center md:text-left relative z-10">
                 <h4 className="text-lg md:text-xl font-bold text-white mb-2 uppercase tracking-wide flex items-center justify-center md:justify-start gap-3">
                   <span className="bg-premium-gold/20 text-premium-gold px-2 py-0.5 rounded text-xs">SEGURIDAD</span>
                   ¿Y si hay quejas?
                 </h4>
                 <p className="text-base md:text-lg text-neutral-300">
                   El método permite detectarlas en la mesa, <span className="text-white font-bold border-b border-premium-gold/50">evitando que lleguen a internet.</span>
                 </p>
              </div>
           </div>

        </div>
      </section>

      {/* --- PARTE 7: TODO LO NECESARIO --- */}
      <section className="bg-[#1A1A1A] py-16 md:py-24 px-5 md:px-6 relative border-t border-white/5">
         <div className="max-w-7xl mx-auto">
           
           <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                 Todo lo necesario desde el primer día
              </h2>
              <h3 className="text-xl md:text-3xl font-bold text-premium-gold mb-6">
                 No son piezas sueltas. Es una solución llave en mano.
              </h3>
           </div>

           {/* Grid: 2 columnas en móvil para reducir altura */}
           <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 relative z-10">
              {[
                {
                  icon: "fa-chart-line",
                  title: "Auditoría Previa",
                  desc: "Análisis de tu reputación actual, competencia y potencial."
                },
                {
                  icon: "fa-book-open-reader",
                  title: "El Método",
                  desc: "Para pedir en el momento correcto, y prevenir reseña negativa."
                },
                {
                  icon: "fa-user-graduate",
                  title: "Formación Guiada",
                  desc: "Capacitación práctica para el dueño y el equipo."
                },
                {
                  icon: "fa-gears",
                  title: "Implementación",
                  desc: "Adaptación del sistema a tu operativa (Barra o Mesa)."
                },
                {
                  icon: "fa-mobile-screen-button",
                  title: "Kit Tecnológico",
                  desc: "Soportes físicos activadores (Expositor + Tarjetas NFC/QR)."
                },
                {
                  icon: "fa-headset",
                  title: "Soporte Directo",
                  desc: "Acompañamiento en la puesta en marcha."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-neutral-900/50 backdrop-blur-sm border border-premium-gold/30 p-4 rounded-xl relative hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,175,55,0.1)] transition-all duration-300 group flex flex-col items-center text-center h-full">
                   <div className="w-10 h-10 rounded-lg bg-premium-gold/10 flex items-center justify-center mb-3 group-hover:bg-premium-gold/20 transition-colors">
                      <i className={`fa-solid ${item.icon} text-base text-premium-gold`}></i>
                   </div>
                   <h4 className="text-sm font-bold text-white mb-2 leading-tight">{item.title}</h4>
                   <p className="text-[11px] text-neutral-400 leading-snug">{item.desc}</p>
                </div>
              ))}
           </div>

         </div>
      </section>
    </>
  );
};