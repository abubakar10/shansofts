import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="card group relative h-full overflow-hidden hover:border-brand-300 hover:shadow-card-hover"
    >
      <div className="relative">
        <Icon size={28} className="text-brand-600" strokeWidth={1.75} />
        <h3 className="mt-5 font-display text-lg font-semibold text-heading">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-body">{service.short}</p>
        <ul className="mt-4 space-y-1.5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-body">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" /> {f}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Get a quote <FiArrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
