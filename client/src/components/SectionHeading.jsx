import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}
