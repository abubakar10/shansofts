// Soft, animated aurora background for the whole page (light theme).
export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50" />
      {/* Animated colour blobs */}
      <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-brand-300/40 blur-[120px] animate-blob" />
      <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-accent-400/30 blur-[120px] animate-blob [animation-delay:3s]" />
      <div className="absolute bottom-0 left-1/3 h-[36rem] w-[36rem] rounded-full bg-grape-400/30 blur-[130px] animate-blob [animation-delay:6s]" />
      <div className="absolute -bottom-32 right-1/4 h-[28rem] w-[28rem] rounded-full bg-blush-400/20 blur-[120px] animate-blob [animation-delay:9s]" />
      {/* Subtle grid + top fade so content stays readable */}
      <div className="absolute inset-0 bg-grid-slate [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-slate-50/90" />
    </div>
  )
}
