import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="Shansofts home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-glow">
        <span className="font-display text-lg font-bold text-white">S</span>
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-white">
        Shan<span className="gradient-text">softs</span>
      </span>
    </Link>
  )
}
