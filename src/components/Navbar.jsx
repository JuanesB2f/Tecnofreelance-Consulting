import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, LayoutGrid, Users, Mail, Sun, Moon } from 'lucide-react'

const Navbar = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const navLinkClass = (scrolled) =>
    `text-sm font-medium transition-colors hover:text-sky-300 ${
      scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white/90'
    }`

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200/80 dark:border-gray-800 shadow-soft dark:shadow-soft-dark py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-baseline gap-1.5"
            >
              <span
                className={`text-xl font-bold tracking-tight transition-colors ${
                  isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                }`}
              >
                Tecnofreelance
              </span>
              <span
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  isScrolled ? 'text-primary-600 dark:text-primary-400' : 'text-sky-300'
                }`}
              >
                Consulting
              </span>
            </motion.button>

            <div className="flex items-center gap-4 xl:gap-8">
              <button onClick={() => scrollToSection('servicios')} className={`min-h-[44px] min-w-[44px] flex items-center justify-center ${navLinkClass(isScrolled)}`}>
                Soluciones digitales
              </button>
              <button onClick={() => scrollToSection('equipo')} className={`min-h-[44px] min-w-[44px] flex items-center justify-center ${navLinkClass(isScrolled)}`}>
                Sobre nosotros
              </button>
              <button onClick={() => scrollToSection('contacto')} className={`min-h-[44px] min-w-[44px] flex items-center justify-center ${navLinkClass(isScrolled)}`}>
                Contáctanos
              </button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('contacto')}
                className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-primary-600/25"
              >
                Contáctanos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={(e) => { e.preventDefault(); onToggleTheme?.() }}
                type="button"
                className={`p-2.5 rounded-xl transition-colors ${
                  isScrolled
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
                aria-label="Cambiar tema"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_24px_rgba(0,0,0,0.3)] safe-area-bottom"
      >
        <div className="max-w-xl mx-auto flex items-center justify-around min-h-[64px] h-16 px-2 py-2">
          <button onClick={scrollToTop} className="flex flex-col items-center justify-center gap-0.5 min-h-[44px] min-w-[44px] py-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors touch-manipulation">
            <Home className="w-5 h-5 shrink-0" /> Inicio
          </button>
          <button onClick={() => scrollToSection('servicios')} className="flex flex-col items-center justify-center gap-0.5 min-h-[44px] min-w-[44px] py-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors touch-manipulation">
            <LayoutGrid className="w-5 h-5 shrink-0" /> Soluciones
          </button>
          <button onClick={() => scrollToSection('equipo')} className="flex flex-col items-center justify-center gap-0.5 min-h-[44px] min-w-[44px] py-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors touch-manipulation">
            <Users className="w-5 h-5 shrink-0" /> Nosotros
          </button>
          <button onClick={() => scrollToSection('contacto')} className="flex flex-col items-center justify-center gap-0.5 min-h-[44px] min-w-[44px] py-2 text-xs font-medium text-primary-600 dark:text-primary-400 touch-manipulation">
            <Mail className="w-5 h-5 shrink-0" /> Contacto
          </button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.preventDefault(); onToggleTheme?.() }}
            type="button"
            className="flex flex-col items-center justify-center gap-0.5 min-h-[44px] min-w-[44px] py-2 text-xs font-medium text-gray-500 dark:text-gray-400 touch-manipulation"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 shrink-0" /> : <Moon className="w-5 h-5 shrink-0" />} Tema
          </motion.button>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
