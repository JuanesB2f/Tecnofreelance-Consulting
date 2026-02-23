import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, ExternalLink } from 'lucide-react'
import { PORTFOLIO_URL } from '../data/especialidades'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SpecializationModal = ({ specialization, onClose }) => {
  const scrollToContact = () => {
    onClose()
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 200)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 lg:p-8">
            {/* Encabezado: especialidad (sin nombre de persona) */}
            <div className="mb-8">
              <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-widest uppercase mb-2">
                Nuestros especialistas
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {specialization.role}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {specialization.title}
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="mt-4 inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contáctanos
              </motion.button>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Acerca de esta especialidad</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {specialization.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Qué hacemos</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {specialization.what}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Cómo lo hacemos</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {specialization.how}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Servicios asociados</h3>
              <div className="flex flex-wrap gap-3">
                {specialization.services.map((s, i) => (
                  <span
                    key={i}
                    className="bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-lg font-medium text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Portafolio</h3>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                }}
                className="rounded-xl overflow-hidden"
              >
                {specialization.portfolio.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <img
                        src={image}
                        alt={`Portafolio ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4 text-center">
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:underline text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Ver portafolio completo (portafoleo.netlify.app)
              </a>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                ¿Interesado en trabajar con nuestros especialistas en {specialization.role}?
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
              >
                Ir al formulario de contacto →
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SpecializationModal
