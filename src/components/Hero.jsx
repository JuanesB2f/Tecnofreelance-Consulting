import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Imagen de inicio (coloca tu archivo en public/img/inicio.png)
const HERO_IMAGE_URL = '/img/inicio.png'

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Fondo: atmósfera que integra con la imagen (estrellas y circuito sutil) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_60%,rgba(99,102,241,0.06),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Líneas de circuito muy suaves */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 v20 M30 40 v20 M0 30 h20 M40 30 h20" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="30" cy="30" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="flex-1 relative flex items-center">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Columna izquierda: texto (contraste claro sobre fondo oscuro) */}
            <div className="text-left">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sky-300 dark:text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3"
              >
                Centro de Excelencia · Power Platform · IA
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-display-lg font-bold text-white mb-4 sm:mb-5 leading-[1.1] tracking-tight"
              >
                <span className="block">Tecnofreelance</span>
                <span className="block text-sky-400 mt-1">Consulting</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-200 dark:text-slate-300 mb-4 leading-relaxed max-w-xl"
              >
                Creamos soluciones digitales escalables mediante Power Platform, Power BI, desarrollo pro code y agentes de inteligencia artificial con Copilot.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm sm:text-base text-slate-400 dark:text-slate-500 mb-6 sm:mb-8 leading-relaxed max-w-xl"
              >
                Somos un equipo de consultores tecnológicos especializados en soluciones Microsoft, analítica de datos, automatización de procesos y desarrollo de software empresarial.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 30px -5px rgba(56, 189, 248, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo('contacto')}
                  className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors shadow-lg shadow-sky-500/30"
                >
                  Contáctanos
                </motion.button>
              </motion.div>
            </div>

            {/* Columna derecha: imagen (soluciones digitales, datos, tecnología) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
              <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-2xl" />
              <div className="relative w-full max-w-[520px] ml-auto">
                {/* Panel con ambas esquinas redondeadas y desvanecido en ambos bordes */}
                <div
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden ring-2 ring-white/20 ring-inset border border-white/15 dark:ring-sky-400/15 dark:border-sky-500/20"
                  style={{
                    boxShadow: [
                      'inset 0 0 0 1px rgba(255,255,255,0.1)',
                      '0 8px 32px -8px rgba(0,0,0,0.4)',
                      '0 0 0 1px rgba(255,255,255,0.06)',
                      '0 20px 48px -16px rgba(56, 189, 248, 0.2)',
                    ].join(', '),
                  }}
                >
                  <img
                    src={HERO_IMAGE_URL}
                    alt="Tecnofreelance Consulting - Soluciones digitales, Power Platform, datos y tecnología"
                    className="w-full h-auto object-cover object-center aspect-[4/3] max-h-[420px] block"
                  />
                  {/* Desvanecido en ambos bordes (izquierdo y derecho) y suave arriba/abajo */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
                    style={{
                      background: [
                        'linear-gradient(90deg, rgba(15, 23, 42, 0.75) 0%, transparent 22%, transparent 78%, rgba(15, 23, 42, 0.7) 100%)',
                        'linear-gradient(180deg, rgba(15, 23, 42, 0.25) 0%, transparent 15%, transparent 85%, rgba(15, 23, 42, 0.2) 100%)',
                      ].join(', '),
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Curva inferior */}
      <div className="w-full flex-shrink-0 h-14 sm:h-20 lg:h-24 bg-gray-50 dark:bg-gray-950 rounded-t-[2.5rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem]" aria-hidden="true" />

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollTo('servicios')}
          className="p-2 rounded-full bg-white/10 text-sky-300 hover:bg-white/20 hover:text-white transition-colors border border-white/20"
          aria-label="Bajar a servicios"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
