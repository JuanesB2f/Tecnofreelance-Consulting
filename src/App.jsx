import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Equipo from './components/Equipo'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
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

