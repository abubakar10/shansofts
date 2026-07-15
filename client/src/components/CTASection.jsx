import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Magnetic from './Magnetic'

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-app">
        <Reveal scale>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-grape-600 px-6 py-16 text-center shadow-glow sm:px-12">
            {/* animated blobs */}
            <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-accent-400/40 blur-3xl animate-blob" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-blush-400/40 blur-3xl animate-blob [animation-delay:4s]" />
            <div className="pointer-events-none absolute inset-0 bg-grid-slate [background-size:32px_32px] opacity-20" />

            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
                Let&apos;s build something great together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-brand-100">
                Whether you have a fully-formed spec or just an idea, our team will help you turn it into a
                reliable, scalable product.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Magnetic>
                  <Link
                    to="/contact"
                    className="btn bg-white text-brand-700 shadow-lg hover:shadow-2xl active:scale-[0.97]"
                  >
                    Start Your Project
                  </Link>
                </Magnetic>
                <Link
                  to="/portfolio"
                  className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
