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

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
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
              <Reveal key={service.slug} delay={(i % 2) * 0.08}>
                <article className="card flex h-full gap-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600/30 to-accent-500/20 text-brand-300">
                    <Icon size={26} />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-white">{service.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CTASection />
    </>
  )
}
