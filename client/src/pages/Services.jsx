import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import Breadcrumbs from '../components/Breadcrumbs'
import { services } from '../data/services'
import { breadcrumbSchema, organizationSchema, serviceListSchema } from '../utils/seo'

export default function Services() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]

  return (
    <>
      <SEO
        title="Software Development Services | Web, Mobile, Cloud & AI"
        description="Shansofts software development services: custom software, MERN web apps, mobile apps, cloud & DevOps, AI automation, e-commerce, UI/UX and security QA."
        path="/services"
        keywords="software development services, web development company, mobile app development services, cloud DevOps services, AI development services"
        jsonLd={[organizationSchema(), breadcrumbSchema(crumbs), serviceListSchema(services)]}
      />

      <section className="relative py-16 sm:py-20">
        <div className="container-app">
          <Breadcrumbs items={crumbs} />
          <SectionHeading
            eyebrow="Our services"
            title="Software & IT services to build and scale products"
            subtitle="End-to-end web, mobile and custom software development — plus cloud, AI and QA support so your product stays reliable after launch."
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
                  className="card group flex h-full gap-5 hover:border-brand-300 hover:shadow-card-hover"
                >
                  <div className="shrink-0 text-brand-600">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-heading">{service.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-body">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-line bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
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
