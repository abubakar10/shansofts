import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck, FiPlay, FiStar } from 'react-icons/fi'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import Counter from '../components/Counter'
import FaqAccordion from '../components/FaqAccordion'
import { testimonials } from '../data/process'
import { blogPosts } from '../data/blog'
import {
  trustServices,
  capabilities,
  mosaicItems,
  caseStudies,
  industries,
  excellenceSteps,
  videoTestimonials,
  leaders,
  packages,
  faqs,
  homeStats,
  images,
} from '../data/home'
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  professionalServiceSchema,
  websiteSchema,
} from '../utils/seo'

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState(1)
  const latestPosts = blogPosts
    .slice()
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3)

  return (
    <>
      <SEO
        title="Custom Software, Web & Mobile App Development Company"
        description="Hire Shansofts for custom software, MERN web apps, mobile development, cloud DevOps and AI features. Transparent delivery for startups and growing businesses."
        path="/"
        keywords="custom software development company, web app development, mobile app development, MERN stack developers, AI software development, cloud DevOps"
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          professionalServiceSchema(),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
          faqSchema(faqs),
        ]}
      />

      <Hero />

      {/* Trusted services */}
      <section className="section">
        <div className="container-app">
          <SectionHeading
            eyebrow="What we deliver"
            title="Product & Quality From Trusted Pros"
            subtitle="End-to-end IT solutions — from strategy and design to engineering, cloud and ongoing support."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trustServices.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.title} delay={(i % 3) * 0.06}>
                  <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover">
                    <Icon size={28} className="text-brand-600" strokeWidth={1.75} />
                    <h3 className="mt-5 font-display text-lg font-semibold text-heading">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{s.description}</p>
                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      Discuss this service <FiArrowRight />
                    </Link>
                  </article>
                </Reveal>
              )
            })}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Start Your Project <FiArrowRight />
            </Link>
            <Link to="/services" className="btn-ghost">
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-line bg-surface section">
        <div className="container-app">
          <SectionHeading
            eyebrow="Capabilities"
            title="Digital Transformation, End to End"
            subtitle="A complete toolkit for modern products — engineered to fit your business, not the other way around."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {capabilities.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={(i % 5) * 0.04}>
                  <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-white px-3 py-6 text-center transition hover:border-brand-300 hover:bg-brand-50/40">
                    <Icon size={26} className="text-brand-600" strokeWidth={1.75} />
                    <span className="text-sm font-semibold text-heading">{c.title}</span>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio mosaic */}
      <section className="section">
        <div className="container-app">
          <SectionHeading
            eyebrow="Selected work"
            title="Engineering the Future"
            subtitle="A look at platforms and products we've designed and shipped for clients across industries."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-2">
            {mosaicItems.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 4) * 0.05}
                className={item.featured ? 'md:col-span-2 md:row-span-2' : ''}
              >
                <Link
                  to="/portfolio"
                  className={`group relative block overflow-hidden rounded-2xl bg-heading ${
                    item.featured ? 'min-h-[320px] md:h-full md:min-h-[420px]' : 'min-h-[180px] md:min-h-[200px]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-heading/45" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                      {item.label}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </Link>
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

      {/* Case studies */}
      <section className="border-y border-line bg-surface section">
        <div className="container-app">
          <SectionHeading
            eyebrow="Case studies"
            title="Bridging the digital and physical worlds"
            subtitle="Outcomes that matter — clearer operations, faster products and measurable growth."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-card">
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-heading">{c.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{c.blurb}</p>
                    <Link
                      to={c.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline"
                    >
                      View Case Study <FiArrowRight />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + conversion strip */}
      <section className="bg-brand-600 py-14 text-white">
        <div className="container-app">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {homeStats.map((s) => (
              <div key={s.label} className="text-center">
                <Counter value={s.value} className="font-display text-3xl font-bold text-white sm:text-4xl" />
                <div className="mt-2 text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-white/20 pt-10 text-center sm:flex-row">
            <p className="max-w-md text-base font-medium text-white sm:text-left">
              Ready to turn your idea into a shipped product?
            </p>
            <Link to="/contact" className="btn-white shrink-0">
              Book a free consultation <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container-app">
          <SectionHeading
            eyebrow="Industries"
            title="Our Industry Expertise"
            subtitle="Domain-aware delivery across the sectors where software has to perform under pressure."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((ind, i) => {
              const Icon = ind.icon
              return (
                <Reveal key={ind.title} delay={(i % 4) * 0.05}>
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-heading">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-heading/40" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <Icon className="mb-2 text-white" size={22} strokeWidth={1.75} />
                      <h3 className="font-display text-base font-semibold text-white sm:text-lg">{ind.title}</h3>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Excellence */}
      <section className="border-y border-line bg-surface section">
        <div className="container-app">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our approach"
                title="How we really maintain excellence"
                subtitle="A disciplined process that keeps quality high without slowing delivery."
              />
              <ol className="mt-10 space-y-5">
                {excellenceSteps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 0.06} direction="left">
                    <li className="flex gap-4">
                      <span className="font-display text-2xl font-bold text-brand-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-heading">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-body">{step.description}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
            <Reveal scale>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-white shadow-card">
                <div className="relative aspect-[4/3]">
                  <img
                    src={images.success}
                    alt="Client success collaboration"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-heading/40" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Client success</p>
                    <p className="mt-2 font-display text-2xl font-bold">Built for lasting partnerships</p>
                    <p className="mt-2 text-sm text-white/80">
                      From first workshop to production support — we stay accountable to outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-app">
          <SectionHeading eyebrow="Testimonials" title="What they said about us" />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {videoTestimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-heading">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-heading/20" />
                  <div className="absolute right-3 top-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-white shadow-soft">
                      <FiPlay size={16} className="ml-0.5" />
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-heading/60 p-4 text-white">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-white/80">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="card h-full">
                  <div className="flex gap-1 text-brand-600">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FiStar key={idx} className="fill-brand-600" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-body">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5">
                    <span className="block text-sm font-semibold text-heading">{t.name}</span>
                    <span className="block text-xs text-body">{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-y border-line bg-surface section">
        <div className="container-app">
          <SectionHeading
            eyebrow="Leadership"
            title="Heads Behind Strategy"
            subtitle="People who care about craft, clarity and shipping products that last."
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
            {leaders.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-soft sm:h-48 sm:w-48">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-heading">{person.name}</h3>
                  <p className="mt-1 text-sm text-body">{person.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section">
        <div className="container-app">
          <SectionHeading
            eyebrow="Engagements"
            title="Choose how we work together"
            subtitle="Clear packages for common needs — or a custom partnership when your product demands more."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, i) => {
              const active = selectedPackage === i
              return (
                <Reveal key={pkg.title} delay={i * 0.08}>
                  <article
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedPackage(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setSelectedPackage(i)
                    }}
                    className={`flex h-full cursor-pointer flex-col rounded-2xl border p-6 transition ${
                      active
                        ? 'border-brand-600 bg-brand-600 text-white shadow-card-hover'
                        : 'border-line bg-white hover:border-brand-300'
                    }`}
                  >
                    <h3 className={`font-display text-xl font-semibold ${active ? 'text-white' : 'text-heading'}`}>
                      {pkg.title}
                    </h3>
                    <p className={`mt-2 text-sm ${active ? 'text-white/80' : 'text-body'}`}>
                      {pkg.description}
                    </p>
                    <p className={`mt-5 font-display text-2xl font-bold ${active ? 'text-white' : 'text-brand-600'}`}>
                      {pkg.price}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {pkg.features.map((f) => (
                        <li
                          key={f}
                          className={`flex items-start gap-2 text-sm ${active ? 'text-white/85' : 'text-body'}`}
                        >
                          <FiCheck className={`mt-0.5 shrink-0 ${active ? 'text-brand-100' : 'text-brand-600'}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`mt-6 w-full text-center ${active ? 'btn-white' : 'btn-primary'}`}
                    >
                      {active ? 'Continue with this plan' : 'Select & get quote'}
                    </Link>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="section">
        <div className="container-app">
          <SectionHeading
            eyebrow="Insights"
            title="Recent guides for founders & product teams"
            subtitle="SEO-focused articles on software buying, SaaS MVPs, AI ROI, mobile stacks and secure delivery."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:border-brand-300 hover:shadow-card">
                  <Link to={`/blog/${post.slug}`} className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width="640"
                      height="400"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{post.category}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-heading">
                      <Link to={`/blog/${post.slug}`} className="hover:text-brand-700">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-body">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="mt-4 text-sm font-semibold text-brand-600">
                      Read more →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/blog" className="btn-ghost">
              View all articles <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-surface section">
        <div className="container-app">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mx-auto mt-10 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
