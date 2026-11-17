import { FiTarget, FiEye, FiHeart, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import Counter from '../components/Counter'
import { stats } from '../data/site'

const values = [
  { icon: FiHeart, title: 'Client-first', text: 'Your success is the only metric that matters. We treat every project like our own.' },
  { icon: FiZap, title: 'Quality obsessed', text: 'Clean, tested, maintainable code that stands the test of time and scale.' },
  { icon: FiTrendingUp, title: 'Outcome driven', text: 'We focus on measurable business results, not just shipping features.' },
  { icon: FiUsers, title: 'True partnership', text: 'Transparent communication and collaboration from kickoff to launch and beyond.' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Shansofts | Custom Software & IT Solutions Team"
        description="Learn about Shansofts — engineers, designers and strategists building custom software, web apps, mobile products and AI solutions for businesses worldwide."
        path="/about"
        keywords="about Shansofts, software development team, IT solutions company"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Shansofts',
          url: 'https://www.shansofts.com/about',
          description:
            'Shansofts is an IT solutions company building reliable custom software for businesses worldwide.',
        }}
      />

      <section className="relative bg-white py-16 sm:py-20">
        <div className="container-app">
          <SectionHeading
            eyebrow="About Shansofts"
            title="Engineering technology that empowers businesses"
            subtitle="We're a team of engineers, designers and strategists who love turning complex problems into elegant, reliable software."
          />
        </div>
      </section>

      <section className="bg-surface pb-8 pt-2">
        <div className="container-app grid gap-6 md:grid-cols-2">
          <Reveal direction="right">
            <div className="card h-full hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover">
              <FiTarget size={28} className="text-brand-600" strokeWidth={1.75} />
              <h2 className="mt-5 font-display text-xl font-semibold text-heading">Our Mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                To help businesses of every size harness technology through custom software that is fast,
                secure and built to scale — delivered by a team that genuinely cares about outcomes.
              </p>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.08}>
            <div className="card h-full hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover">
              <FiEye size={28} className="text-brand-600" strokeWidth={1.75} />
              <h2 className="mt-5 font-display text-xl font-semibold text-heading">Our Vision</h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                To be the go-to technology partner for ambitious teams worldwide — known for craftsmanship,
                reliability and long-term partnerships that drive real growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={(i % 4) * 0.1} scale>
                  <div className="card group h-full hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover">
                    <Icon size={26} className="text-brand-600 transition group-hover:text-brand-700" strokeWidth={1.75} />
                    <h3 className="mt-4 font-display font-semibold text-heading">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{v.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-brand-50">
        <div className="container-app grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              scale
              className="rounded-2xl border border-line bg-white py-8 text-center shadow-soft"
            >
              <Counter value={s.value} className="font-display text-3xl font-bold text-brand-600 sm:text-4xl" />
              <div className="mt-1 text-sm text-body">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
