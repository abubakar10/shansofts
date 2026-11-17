import { Link } from 'react-router-dom'
import logo from '../assets/Shansofts-header.png'

export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Shansofts home"
    >
      <img
        src={logo}
        alt="Shansofts — IT Consulting & Software Solutions"
        className="h-10 w-auto max-w-[200px] object-contain object-left sm:h-11 sm:max-w-[240px] md:h-12 md:max-w-[280px]"
        width="280"
        height="48"
        decoding="async"
      />
    </Link>
  )
}
