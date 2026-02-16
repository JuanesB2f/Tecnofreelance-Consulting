import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Tecnofreelance Consulting</h3>
            <p className="text-gray-400 leading-relaxed">
              Soluciones digitales escalables para empresas que buscan transformar su futuro tecnológico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('servicios')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('equipo')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Equipo
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contacto')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:contacto@tecnofreelance.com"
                  className="hover:text-white transition-colors"
                >
                  contacto@tecnofreelance.com
                </a>
              </li>
              <li>Servicios Remotos · Global</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tecnofreelance Consulting. Todos los derechos reservados.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Volver arriba ↑
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

