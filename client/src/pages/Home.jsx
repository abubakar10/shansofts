import { Link } from 'react-router-dom'
import { FiArrowRight, FiStar } from 'react-icons/fi'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import Counter from '../components/Counter'
import Marquee from '../components/Marquee'
import { services } from '../data/services'
import { process, testimonials } from '../data/process'
import { projects } from '../data/projects'
import { stats, site, techStack } from '../data/site'

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

      {/* Tech marquee */}
      <section className="py-6">
        <div className="container-app">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            Technologies we master
          </p>
          <Marquee items={techStack} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-10">
        <div className="container-app">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-soft backdrop-blur md:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.label} className="text-center">
                  <Counter
                    value={s.value}
                    className="font-display text-3xl font-bold gradient-text sm:text-4xl"
                  />
                  <div className="mt-1 text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
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
              <Reveal key={service.slug} delay={(i % 4) * 0.08} scale>
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
      <section className="section">
        <div className="container-app">
          <SectionHeading
            eyebrow="How we work"
            title="A proven process, no surprises"
            subtitle="A transparent, collaborative approach that keeps you in the loop from kickoff to launch."
          />
          <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* connecting line */}
            <div className="pointer-events-none absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />
            {process.map((p, i) => (
              <Reveal key={p.step} delay={(i % 4) * 0.1} direction="up">
                <div className="card group relative h-full hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="inline-block font-display text-4xl font-bold text-transparent [-webkit-text-stroke:1.5px_rgba(53,99,255,0.35)] transition-all group-hover:[-webkit-text-stroke:1.5px_rgba(53,99,255,0.7)]">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
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
              <Reveal key={p.title} delay={(i % 3) * 0.08} scale>
                <article className="card group h-full overflow-hidden p-0 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                    <div className="absolute inset-0 bg-grid-slate [background-size:24px_24px] opacity-30" />
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="absolute bottom-3 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
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
      <section className="section">
        <div className="container-app">
          <SectionHeading eyebrow="Testimonials" title="Trusted by founders & teams" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.1} scale>
                <figure className="card h-full hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FiStar key={idx} className="fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-slate-600">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 font-semibold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-900">{t.name}</span>
                      <span className="block text-xs text-slate-500">{t.role}</span>
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
