import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { services } from '../data/services'
import { site } from '../data/site'

export default function Services() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'Service',
      position: i + 1,
      name: s.title,
      description: s.short,
      provider: { '@type': 'Organization', name: site.name },
    })),
  }

  return (
    <>
      <SEO
        title="Services"
        description="Explore Shansofts services: web development, mobile apps, cloud & DevOps, AI, e-commerce, UI/UX design, custom software and security."
        path="/services"
        jsonLd={jsonLd}
      />

      <section className="relative py-16 sm:py-20">
        <div className="container-app">
          <SectionHeading
            eyebrow="Our services"
            title="Everything you need to build & scale"
            subtitle="We offer all kinds of web, mobile and software development — plus the IT solutions to support them end to end."
          />
        </div>
      </section>

      <section className="pb-8">
        <div className="container-app grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.slug} delay={(i % 2) * 0.08} scale>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="card group flex h-full gap-5 hover:border-brand-200 hover:shadow-card-hover"
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-100 to-accent-100 text-brand-600 shadow-sm transition-all duration-300 group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white group-hover:shadow-glow">
                    <Icon size={26} />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-slate-900">{service.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CTASection />
    </>
  )
}
