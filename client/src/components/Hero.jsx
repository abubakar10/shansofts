import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiStar } from 'react-icons/fi'
import Magnetic from './Magnetic'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const highlights = ['Web & Mobile Apps', 'Cloud & DevOps', 'AI Solutions']

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-app grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div variants={container} initial="hidden" animate="show" className="min-w-0">
          <motion.span variants={item} className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            IT &amp; Software Solutions
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 text-balance sm:text-5xl lg:text-6xl"
          >
            We build{' '}
            <span className="relative whitespace-nowrap">
              <span className="gradient-text-animated">software</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 8C50 3 150 3 198 8"
                  stroke="url(#grad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1f40f5" />
                    <stop offset="0.5" stopColor="#8b5cf6" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            that moves your business forward
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600 break-words">
            Shansofts is your end-to-end technology partner for custom web development, mobile apps, cloud
            infrastructure and AI — engineered with the MERN stack and a relentless focus on quality.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Magnetic>
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Get a Free Quote <FiArrowRight />
              </Link>
            </Magnetic>
            <Link to="/services" className="btn-ghost w-full sm:w-auto">
              Explore Services
            </Link>
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <FiCheckCircle className="shrink-0 text-accent-500" /> {h}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 12 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-w-0 [perspective:1200px]"
        >
          <div className="relative mx-auto w-full max-w-md px-2 sm:px-0 animate-float">
            {/* Glow behind card */}
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-400/40 via-grape-400/30 to-accent-400/40 blur-2xl sm:-inset-6" />

            <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/90 p-3 shadow-card backdrop-blur-xl sm:p-4">
              <div className="flex items-center gap-1.5 pb-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <pre className="max-w-full overflow-x-auto rounded-xl bg-slate-900 p-3 text-[11px] leading-relaxed sm:p-4 sm:text-xs">
<code><span className="text-fuchsia-400">const</span> <span className="text-sky-300">shansofts</span> = <span className="text-amber-300">async</span> () =&gt; {'{'}
{'  '}<span className="text-fuchsia-400">const</span> idea = <span className="text-emerald-300">await</span> discover(client);
{'  '}<span className="text-fuchsia-400">const</span> design = craft(idea);
{'  '}<span className="text-fuchsia-400">const</span> product = build(design);
{'  '}<span className="text-fuchsia-400">return</span> <span className="text-emerald-300">deploy</span>(product);
{'}'};</code>
              </pre>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                {['React', 'Node.js', 'MongoDB'].map((t) => (
                  <div
                    key={t}
                    className="rounded-lg border border-slate-100 bg-slate-50 px-1.5 py-2 text-center text-[11px] font-semibold text-slate-600 sm:px-2 sm:text-xs"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute right-0 top-0 flex items-center gap-2 rounded-xl border border-white/60 bg-white/90 px-3 py-2 text-xs font-semibold text-slate-800 shadow-soft backdrop-blur animate-float-slow sm:-right-6 sm:-top-6 sm:px-4 sm:py-3 sm:text-sm"
            >
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white sm:h-8 sm:w-8">
                ✓
              </span>
              99.9% Uptime
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-0 left-0 rounded-xl border border-white/60 bg-white/90 px-3 py-2 shadow-soft backdrop-blur animate-float-slow [animation-delay:2s] sm:-bottom-6 sm:-left-6 sm:px-4 sm:py-3"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} className="fill-amber-400" size={14} />
                ))}
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600">Rated 5.0 by clients</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
