import { FiLock } from 'react-icons/fi'

function hostFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

// A premium "browser window" placeholder used as the project image. It's pure CSS
// (no network requests), styled to look like a live site preview.
export default function ProjectThumb({ project, className = '', showShine = true }) {
  const Icon = project.icon
  const host = project.url ? hostFromUrl(project.url) : 'Private Project'

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} ${className}`}>
      {/* pattern + glow */}
      <div className="absolute inset-0 bg-grid-slate [background-size:22px_22px] opacity-25" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/25 blur-3xl" />

      {/* fake browser chrome */}
      <div className="absolute inset-x-4 top-4 flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 backdrop-blur-sm ring-1 ring-white/20">
        <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="ml-2 flex items-center gap-1.5 truncate rounded-md bg-white/20 px-2.5 py-1 text-[11px] font-medium text-white">
          {!project.url && <FiLock size={11} className="shrink-0" />}
          <span className="truncate">{host}</span>
        </span>
      </div>

      {/* watermark icon */}
      <div className="absolute inset-0 flex items-center justify-center pt-6">
        <Icon className="text-white/90 drop-shadow-lg" size={54} />
      </div>

      {/* big translucent initials */}
      <span className="pointer-events-none absolute -bottom-4 right-3 font-display text-6xl font-bold text-white/10">
        {project.title
          .split(' ')
          .slice(0, 2)
          .map((w) => w[0])
          .join('')}
      </span>

      {/* shine sweep on hover (card handles the `group`) */}
      {showShine && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </div>
  )
}
