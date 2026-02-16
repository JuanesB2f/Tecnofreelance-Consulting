import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const MemberModal = ({ member, onClose }) => {
  const handleContact = () => {
    window.location.href = `mailto:${member.email}?subject=Consulta desde Tecnofreelance Consulting`
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
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          {/* Content */}
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary-100"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h2>
                <p className="text-xl text-primary-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-4">
                  {member.title}
                </p>
                <button
                  onClick={handleContact}
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Contactar
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Acerca de</h3>
              <p className="text-gray-700 leading-relaxed">
                {member.description}
              </p>
            </div>

            {/* What & How */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Qué hace</h3>
                <p className="text-gray-700 leading-relaxed">
                  {member.what}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Cómo lo hace</h3>
                <p className="text-gray-700 leading-relaxed">
                  {member.how}
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Servicios Asociados</h3>
              <div className="flex flex-wrap gap-3">
                {member.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-medium text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio Carousel */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Portafolio Visual</h3>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                }}
                className="rounded-xl overflow-hidden"
              >
                {member.portfolio.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-5 h-5 text-primary-600" />
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-primary-600 transition-colors"
                >
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MemberModal

