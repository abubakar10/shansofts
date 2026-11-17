import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { images } from '../data/home'

const trustPoints = ['Free consultation', 'Clear fixed scope', 'Reply in 24 hours']

export default function Hero() {
  return (
    <section className="relative -mt-16 min-h-[86vh] overflow-hidden bg-heading text-white md:-mt-20">
      <img
        src={images.hero}
        alt="Shansofts team collaborating on software solutions"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-heading/55" />

      <div className="container-app relative flex min-h-[86vh] flex-col items-center justify-center px-4 pb-20 pt-28 text-center sm:px-6 md:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white sm:text-sm"
        >
          IT Consulting &amp; Software Solutions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
        >
          Build software that wins customers — not just tickets
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
        >
          Shansofts designs and ships custom web apps, mobile products, cloud platforms and AI features
          with clear timelines, transparent pricing and production-ready quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
        >
          <Link to="/contact" className="btn-primary px-8 py-3.5 text-base shadow-glow">
            Get a Free Quote <FiArrowRight />
          </Link>
          <Link to="/portfolio" className="btn-ghost border-white bg-white text-brand-700 hover:bg-brand-50">
            See Our Work
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-6"
        >
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-medium text-white/90">
              <FiCheckCircle className="text-brand-400" /> {point}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
