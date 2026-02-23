import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Equipo from './components/Equipo'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    // Inicializar el tema desde localStorage o preferencias del sistema
    const stored = window.localStorage.getItem('tf-theme')
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    // Aplicar el tema inicial al HTML
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      // Guardar en localStorage
      window.localStorage.setItem('tf-theme', next)
      // Aplicar inmediatamente al HTML
      if (next === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return next
    })
  }

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50 transition-colors duration-300 font-sans">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="pb-20 md:pb-0">
          <Hero />
          <Servicios />
          <Equipo />
          <Contacto />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

