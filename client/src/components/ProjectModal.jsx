import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink, FiLock, FiBriefcase, FiCheckCircle, FiTag } from 'react-icons/fi'
import ProjectThumb from './ProjectThumb'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-slate-700 shadow-md backdrop-blur transition hover:bg-white hover:text-brand-600"
              aria-label="Close"
            >
              <FiX size={18} />
            </button>

            <ProjectThumb project={project} className="h-48 w-full shrink-0 sm:h-56" showShine={false} />

            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-brand-200/70 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  <FiTag size={11} /> {project.category}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    project.url ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {project.url ? (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
                    </>
                  ) : (
                    <>
                      <FiLock size={11} /> Private Project
                    </>
                  )}
                </span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-bold text-slate-900">{project.title}</h2>
              <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-slate-500">
                <FiBriefcase size={14} className="text-brand-500" /> {project.role}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">{project.description}</p>

              <div className="mt-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Technologies</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Features</h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <FiCheckCircle className="shrink-0 text-accent-500" size={15} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* footer */}
            <div className="shrink-0 border-t border-slate-100 bg-slate-50/80 p-4 sm:px-8">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  Visit Live Website <FiExternalLink size={16} />
                </a>
              ) : (
                <span className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-500">
                  <FiLock size={15} /> This project is private and has no public demo
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
