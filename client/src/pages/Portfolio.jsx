import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { projects, projectFilters } from '../data/projects'
import { site } from '../data/site'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  // Only show filters that actually have projects.
  const filters = useMemo(
    () => projectFilters.filter((f) => f === 'All' || projects.some((p) => p.filter === f)),
    []
  )

  const filtered = active === 'All' ? projects : projects.filter((p) => p.filter === active)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Shansofts Portfolio',
    url: `${site.domain}/portfolio`,
    hasPart: projects.map((p) => ({
      '@type': 'CreativeWork',
      name: p.title,
      about: p.category,
      ...(p.url ? { url: p.url } : {}),
    })),
  }

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore Shansofts' portfolio of SaaS platforms, enterprise systems, dashboards, e-commerce and websites — built with React, Node.js, MongoDB and more."
        path="/portfolio"
        jsonLd={jsonLd}
      />

      <section className="relative py-16 sm:py-20">
        <div className="container-app">
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects that deliver real results"
            subtitle="A selection of platforms, dashboards and websites we've designed and engineered across industries. Filter by category or open a project for full details."
          />

          {/* filter bar */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === c ? 'text-white' : 'border border-slate-200 bg-white text-slate-600 hover:text-brand-700'
                }`}
              >
                {active === c && (
                  <motion.span
                    layoutId="portfolio-filter-pill"
                    className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 shadow-glow"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
              </button>
            ))}
          </div>

          {/* count */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            {active !== 'All' && ` in ${active}`}
          </p>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-app">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={p} onOpen={setSelected} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
