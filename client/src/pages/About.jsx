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
        title="About Us"
        description="Shansofts is an IT solutions company of passionate engineers, designers and strategists building reliable software for businesses worldwide."
        path="/about"
      />

      <section className="relative py-16 sm:py-20">
        <div className="container-app">
          <SectionHeading
            eyebrow="About Shansofts"
            title="Engineering technology that empowers businesses"
            subtitle="We're a team of engineers, designers and strategists who love turning complex problems into elegant, reliable software."
          />
        </div>
      </section>

      <section className="pb-8">
        <div className="container-app grid gap-6 md:grid-cols-2">
          <Reveal direction="right">
            <div className="card h-full hover:-translate-y-1 hover:shadow-card-hover">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-100 to-accent-100 text-brand-600">
                <FiTarget size={22} />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                To help businesses of every size harness technology through custom software that is fast,
                secure and built to scale — delivered by a team that genuinely cares about outcomes.
              </p>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.08}>
            <div className="card h-full hover:-translate-y-1 hover:shadow-card-hover">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-100 to-accent-100 text-brand-600">
                <FiEye size={22} />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-slate-900">Our Vision</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                To be the go-to technology partner for ambitious teams worldwide — known for craftsmanship,
                reliability and long-term partnerships that drive real growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-app">
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={(i % 4) * 0.1} scale>
                  <div className="card group h-full hover:-translate-y-2 hover:shadow-card-hover">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-600 transition-all group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 font-display font-semibold text-slate-900">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-app grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              scale
              className="rounded-2xl border border-slate-200/80 bg-white/70 py-8 text-center shadow-soft backdrop-blur"
            >
              <Counter value={s.value} className="font-display text-3xl font-bold gradient-text sm:text-4xl" />
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
