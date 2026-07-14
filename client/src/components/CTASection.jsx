import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-app">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-700/40 via-ink-800 to-ink-800 px-6 py-14 text-center shadow-glow sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
            <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s build something great together
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
              Whether you have a fully-formed spec or just an idea, our team will help you turn it into a
              reliable, scalable product.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn-ghost">
                View Our Work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
