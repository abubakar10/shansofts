import { Link } from 'react-router-dom'
import { FiArrowRight, FiStar } from 'react-icons/fi'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { services } from '../data/services'
import { process, testimonials } from '../data/process'
import { projects } from '../data/projects'
import { stats, site } from '../data/site'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.domain,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.domain}/search?q={query}`,
      'query-input': 'required name=query',
    },
  }

  return (
    <>
      <SEO
        title="Custom Software, Web & Mobile App Development"
        description="Shansofts is an IT solutions company delivering custom software, web development, mobile apps, cloud and AI solutions that scale your business."
        path="/"
        jsonLd={jsonLd}
      />

      <Hero />

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container-app grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-app">
          <SectionHeading
            eyebrow="What we do"
            title="Solutions for every stage of growth"
            subtitle="From first line of code to global scale, we offer the full spectrum of software and IT services."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-ghost">
              See all services <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section border-t border-white/10 bg-white/[0.02]">
        <div className="container-app">
          <SectionHeading
            eyebrow="How we work"
            title="A proven process, no surprises"
            subtitle="A transparent, collaborative approach that keeps you in the loop from kickoff to launch."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={(i % 4) * 0.08}>
                <div className="card h-full">
                  <span className="font-display text-4xl font-bold text-brand-500/40">{p.step}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section">
        <div className="container-app">
          <SectionHeading
            eyebrow="Selected work"
            title="Products we're proud of"
            subtitle="A glimpse of the digital products we've designed and engineered for clients across industries."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08}>
                <article className="card group h-full overflow-hidden p-0">
                  <div className={`relative h-40 bg-gradient-to-br ${p.gradient}`}>
                    <div className="absolute inset-0 bg-grid-slate [background-size:24px_24px] opacity-30" />
                    <span className="absolute bottom-3 left-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/portfolio" className="btn-ghost">
              View full portfolio <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section border-t border-white/10 bg-white/[0.02]">
        <div className="container-app">
          <SectionHeading eyebrow="Testimonials" title="Trusted by founders & teams" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08}>
                <figure className="card h-full">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FiStar key={idx} className="fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-slate-300">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 font-semibold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{t.name}</span>
                      <span className="block text-xs text-slate-400">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
