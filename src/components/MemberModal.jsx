import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const MemberModal = ({ member, onClose }) => {
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
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85dvh] sm:max-h-[90vh] overflow-y-auto overflow-x-hidden border border-gray-200 dark:border-gray-800 mx-2 sm:mx-4"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors touch-manipulation"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-4 sm:p-6 lg:p-8 pt-14 sm:pt-16">
            {/* Header: área (sin nombre de persona) */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 break-words pr-10">
                {member.role}
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-4">
                {member.title}
              </p>
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors min-h-[44px] touch-manipulation"
              >
                <Mail className="w-5 h-5" />
                Contáctanos
              </button>
            </div>

            {/* Acerca de */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Acerca de</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {member.description}
              </p>
            </div>

            {/* Qué hace / Cómo lo hace */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Qué hace</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {member.what}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Cómo lo hace</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {member.how}
                </p>
              </div>
            </div>

            {/* Servicios Asociados */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Servicios Asociados</h3>
              <div className="flex flex-wrap gap-3">
                {member.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-lg font-medium text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Carrusel de imágenes */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Portafolio visual</h3>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                }}
                className="rounded-xl overflow-hidden"
              >
                {member.portfolio.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <img
                        src={image}
                        alt={`Portafolio ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                ¿Interesado en esta área?
              </p>
              <a
                href="mailto:tecnofreelanceconsulting@outlook.com"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
              >
                <Mail className="w-5 h-5" />
                tecnofreelanceconsulting@outlook.com
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MemberModal
