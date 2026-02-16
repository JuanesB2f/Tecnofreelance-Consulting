import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, Grid3X3, Users, Mail } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Navbar superior solo para desktop/tablet */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <h1
                className={`text-2xl font-bold transition-colors ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                }`}
              >
                Tecnofreelance
              </h1>
              <span
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}
              >
                Consulting
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('servicios')}
                className={`font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('equipo')}
                className={`font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Equipo
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className={`font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Contacto
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contacto')}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Contáctanos
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Barra inferior tipo iPhone solo para móvil */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(15,23,42,0.18)] md:hidden"
      >
        <div className="max-w-xl mx-auto flex items-center justify-around h-16 px-4">
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center justify-center text-xs font-medium text-gray-500 hover:text-primary-600 transition-colors"
          >
            <Home className="w-5 h-5 mb-1" />
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('servicios')}
            className="flex flex-col items-center justify-center text-xs font-medium text-gray-500 hover:text-primary-600 transition-colors"
          >
            <Grid3X3 className="w-5 h-5 mb-1" />
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('equipo')}
            className="flex flex-col items-center justify-center text-xs font-medium text-gray-500 hover:text-primary-600 transition-colors"
          >
            <Users className="w-5 h-5 mb-1" />
            Equipo
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="flex flex-col items-center justify-center text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            <Mail className="w-5 h-5 mb-1" />
            Contacto
          </button>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar

