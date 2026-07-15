// Infinite horizontal marquee. Duplicates children so the loop is seamless.
export default function Marquee({ items = [], className = '' }) {
  return (
    <div className={`group relative w-full max-w-full overflow-hidden mask-fade-x ${className}`}>
      <div className="flex w-max animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]">
        {items.concat(items).map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
