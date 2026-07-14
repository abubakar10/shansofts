import { FiTarget, FiEye, FiHeart, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
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

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
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
          <Reveal>
            <div className="card h-full">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600/30 to-accent-500/20 text-brand-300">
                <FiTarget size={22} />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-white">Our Mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                To help businesses of every size harness technology through custom software that is fast,
                secure and built to scale — delivered by a team that genuinely cares about outcomes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card h-full">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600/30 to-accent-500/20 text-brand-300">
                <FiEye size={22} />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-white">Our Vision</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                To be the go-to technology partner for ambitious teams worldwide — known for craftsmanship,
                reliability and long-term partnerships that drive real growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-white/10 bg-white/[0.02]">
        <div className="container-app">
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={(i % 4) * 0.08}>
                  <div className="card h-full">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600/20 text-brand-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 font-display font-semibold text-white">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.text}</p>
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
            <Reveal key={s.label} delay={i * 0.08} className="rounded-2xl border border-white/10 bg-white/[0.03] py-8 text-center">
              <div className="font-display text-3xl font-bold gradient-text sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
