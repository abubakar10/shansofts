import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const highlights = ['Web & Mobile Apps', 'Cloud & DevOps', 'AI Solutions']

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-slate [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-accent-500/20 blur-[100px]" />
      </div>

      <div className="container-app grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" /> IT &amp; Software Solutions
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            We build <span className="gradient-text">software</span> that moves your business forward
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Shansofts is your end-to-end technology partner for custom web development, mobile apps, cloud
            infrastructure and AI — engineered with the MERN stack and a relentless focus on quality.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote <FiArrowRight />
            </Link>
            <Link to="/services" className="btn-ghost">
              Explore Services
            </Link>
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-slate-300">
                <FiCheckCircle className="text-accent-400" /> {h}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md animate-float">
            <div className="rounded-2xl border border-white/10 bg-ink-800/80 p-4 shadow-card backdrop-blur">
              <div className="flex items-center gap-1.5 pb-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <pre className="overflow-hidden rounded-xl bg-ink-900 p-4 text-xs leading-relaxed">
<code><span className="text-fuchsia-400">const</span> <span className="text-sky-300">shansofts</span> = <span className="text-amber-300">async</span> () =&gt; {'{'}
{'  '}<span className="text-fuchsia-400">const</span> idea = <span className="text-emerald-300">await</span> discover(client);
{'  '}<span className="text-fuchsia-400">const</span> design = craft(idea);
{'  '}<span className="text-fuchsia-400">const</span> product = build(design);
{'  '}<span className="text-fuchsia-400">return</span> <span className="text-emerald-300">deploy</span>(product);
{'}'};</code>
              </pre>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {['React', 'Node.js', 'MongoDB'].map((t) => (
                  <div key={t} className="rounded-lg border border-white/5 bg-white/5 px-2 py-2 text-center text-xs font-medium text-slate-300">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-6 -top-6 rounded-xl border border-white/10 bg-brand-600/90 px-4 py-3 text-sm font-semibold text-white shadow-glow backdrop-blur">
              99.9% Uptime
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-ink-700/90 px-4 py-3 text-sm font-semibold text-white shadow-card backdrop-blur">
              ⚡ Lightning fast
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
