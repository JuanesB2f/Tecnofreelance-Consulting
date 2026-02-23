import { motion } from 'framer-motion'
import { ArrowUp, Mail, LayoutGrid, Users, MessageCircle, ExternalLink } from 'lucide-react'
import { PORTFOLIO_URL } from '../data/especialidades'

const Footer = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 lg:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 lg:mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold tracking-tight mb-3">Tecnofreelance Consulting</h3>
            <p className="text-gray-400 max-w-md leading-relaxed text-sm mb-3">
              Soluciones digitales escalables mediante Power Platform, Power BI, desarrollo pro code y agentes de inteligencia artificial con Copilot.
            </p>
            <p className="text-gray-500 text-xs mb-4">
              Power Platform · CoE · Data · Pro Code · AI Agents
            </p>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-white transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" /> Ver portafolio
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Navegación</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => scrollTo('servicios')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <LayoutGrid className="w-4 h-4" /> Soluciones digitales
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('equipo')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <Users className="w-4 h-4" /> Sobre nosotros
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contacto')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <MessageCircle className="w-4 h-4" /> Contáctanos
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Contacto</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:contacto@tecnofreelance.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> contacto@tecnofreelance.com
                </a>
              </li>
              <li className="text-gray-500">Servicios remotos · Global</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 lg:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tecnofreelance Consulting. Todos los derechos reservados.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors"
          >
            <ArrowUp className="w-4 h-4" /> Volver arriba
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
