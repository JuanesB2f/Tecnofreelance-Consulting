import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { equipo, competenciasCompartidas } from '../data/equipo'
import { Check, ArrowRight, Layers, BarChart3, Zap, Bot } from 'lucide-react'
import MemberModal from './MemberModal'

const iconByRole = {
  'CoE & Gobierno Power Platform': Layers,
  'Power BI & Analítica de Datos': BarChart3,
  'Power Platform': Zap,
  'Agentes de Inteligencia Artificial (Copilot)': Bot,
}

const Equipo = () => {
  const [selectedArea, setSelectedArea] = useState(null)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }
  const card = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <>
      <section id="equipo" className="section-padding bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
              Sobre nosotros
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 text-[15px] sm:text-base">
              Somos un equipo de consultores tecnológicos especializados en soluciones Microsoft, analítica de datos, automatización de procesos y desarrollo de software empresarial.
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Ayudamos a las organizaciones a optimizar sus procesos, tomar decisiones basadas en datos y escalar soluciones digitales de forma segura.
            </p>
          </motion.div>

          {/* Competencias compartidas */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-12"
          >
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
              Competencias compartidas del equipo
            </h3>
            <ul className="flex flex-wrap gap-3">
              {competenciasCompartidas.map((item, i) => (
                <li
                  key={i}
                  className="inline-flex items-center gap-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Grid de áreas del equipo */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {equipo.map((area) => {
              const Icon = iconByRole[area.role] || Layers
              return (
                <motion.article
                  key={area.id}
                  variants={card}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedArea(area)}
                  className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                >
                  <div className="h-52 sm:h-56 bg-gradient-to-br from-primary-500/10 to-primary-600/10 dark:from-primary-500/20 dark:to-primary-600/20 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-primary-500 dark:text-primary-400 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                      {area.role}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-3">
                      {area.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {area.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all">
                      Ver detalle completo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedArea && (
          <MemberModal
            member={selectedArea}
            onClose={() => setSelectedArea(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Equipo
