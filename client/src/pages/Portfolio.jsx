import { useState } from 'react'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { projects } from '../data/projects'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <SEO
        title="Portfolio"
        description="See a selection of software, web and mobile products designed and engineered by Shansofts across fintech, healthcare, e-commerce and more."
        path="/portfolio"
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-96 rounded-full bg-accent-500/15 blur-[120px]" />
        <div className="container-app">
          <SectionHeading
            eyebrow="Portfolio"
            title="Work that speaks for itself"
            subtitle="A selection of the products we've helped launch and grow. Filter by category to explore."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === c
                    ? 'bg-brand-600 text-white shadow-glow'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-app grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="card group h-full overflow-hidden p-0">
                <div className={`relative h-44 bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 bg-grid-slate [background-size:24px_24px] opacity-30" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-semibold text-white">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
