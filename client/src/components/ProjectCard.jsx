import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import { FiArrowUpRight, FiExternalLink, FiLock, FiBriefcase } from 'react-icons/fi'
import ProjectThumb from './ProjectThumb'

export default function ProjectCard({ project, onOpen }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(53,99,255,0.10), transparent 70%)`

  const maxTech = 5
  const shownTech = project.tech.slice(0, maxTech)
  const extraTech = project.tech.length - shownTech.length

  return (
    <motion.article
      layout
      onMouseMove={handleMove}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-soft backdrop-blur-sm transition-shadow duration-300 hover:border-brand-200 hover:shadow-card-hover"
    >
      {/* spotlight overlay */}
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* image / preview */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative block h-44 w-full text-left focus:outline-none"
        aria-label={`View details for ${project.title}`}
      >
        <ProjectThumb project={project} className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]" />
        {/* status badge */}
        <span
          className={`absolute right-3 top-3 z-20 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur ${
            project.url
              ? 'bg-emerald-500/90 text-white'
              : 'bg-slate-900/70 text-white'
          }`}
        >
          {project.url ? (
            <>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Live
            </>
          ) : (
            <>
              <FiLock size={11} /> Private
            </>
          )}
        </span>
      </button>

      {/* content */}
      <div className="relative z-20 flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-brand-200/70 bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-700">
            {project.category}
          </span>
        </div>

        <h3 className="mt-3 font-display text-lg font-bold text-slate-900">{project.title}</h3>

        <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <FiBriefcase size={12} className="text-brand-500" /> {project.role}
        </p>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{project.description}</p>

        {/* tech badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {shownTech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600"
            >
              {t}
            </span>
          ))}
          {extraTech > 0 && (
            <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500">
              +{extraTech}
            </span>
          )}
        </div>

        {/* footer actions (pinned to bottom for equal height) */}
        <div className="mt-auto flex items-center gap-2 pt-5">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-primary flex-1 px-4 py-2.5 text-xs"
            >
              Live Demo <FiExternalLink size={14} />
            </a>
          ) : (
            <span className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-500">
              <FiLock size={13} /> Private Project
            </span>
          )}
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="btn-ghost px-4 py-2.5 text-xs"
          >
            Details <FiArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
