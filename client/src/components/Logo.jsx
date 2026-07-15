import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="Shansofts home">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 via-grape-500 to-accent-500 bg-[length:200%_auto] shadow-glow transition-all duration-500 group-hover:bg-[position:right_center] group-hover:shadow-[0_10px_30px_-8px_rgba(31,64,245,0.6)]">
        <span className="font-display text-lg font-bold text-white">S</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-slate-900">
        Shan<span className="gradient-text">softs</span>
      </span>
    </Link>
  )
}
