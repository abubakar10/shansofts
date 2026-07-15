import { motion } from 'framer-motion'

export default function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="card group relative h-full overflow-hidden hover:border-brand-200 hover:shadow-card-hover"
    >
      {/* hover gradient wash */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-brand-50 via-transparent to-accent-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-100 to-accent-100 text-brand-600 shadow-sm transition-all duration-300 group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white group-hover:shadow-glow">
          <Icon size={22} />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.short}</p>
        <ul className="mt-4 space-y-1.5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" /> {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
