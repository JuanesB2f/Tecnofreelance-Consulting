import { motion } from 'framer-motion'
import { servicios } from '../data/servicios'
import { Building2, Zap, BarChart3, Bot, Code } from 'lucide-react'

const iconMap = {
  building: Building2,
  zap: Zap,
  'bar-chart-3': BarChart3,
  bot: Bot,
  code: Code,
}

const Servicios = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="servicios" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight px-1">
            Servicios de Transformación Digital
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-1">
            Especialista en Microsoft Power Platform, Business Intelligence y desarrollo de soluciones empresariales.
            Ayudo a organizaciones a automatizar procesos, construir aplicaciones empresariales y tomar decisiones basadas en datos,
            utilizando tecnologías modernas low-code y pro‑code.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {servicios.map((s) => {
            const Icon = iconMap[s.icon] || Zap
            return (
              <motion.article
                key={s.id}
                variants={item}
                whileHover={{ y: -4 }}
                className={`group relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 min-w-0 ${s.borderColor} hover:border-opacity-50`}
              >
                <div className={`h-1 w-full bg-gradient-to-r ${s.color}`} />
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl font-bold text-gray-400 dark:text-gray-500 tabular-nums shrink-0">
                      {s.number}
                    </span>
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${s.color} text-white shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 tracking-tight break-words">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-3">
                    {s.description}
                  </p>
                  {s.items && s.items.length > 0 && (
                    <ul className="space-y-1.5 text-gray-600 dark:text-gray-400 text-sm">
                      {s.items.map((itemText, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                          <span>{itemText}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Servicios
