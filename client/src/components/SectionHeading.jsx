export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'left' ? 'text-left' : 'mx-auto text-center'
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? 'text-brand-300' : 'text-brand-600'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl ${
          light ? 'text-white' : 'text-heading'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/75' : 'text-body'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
