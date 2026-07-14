export default function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <div className="card group hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-glow">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600/30 to-accent-500/20 text-brand-300 transition-colors group-hover:from-brand-500 group-hover:to-accent-500 group-hover:text-white">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.short}</p>
      <ul className="mt-4 space-y-1.5">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
