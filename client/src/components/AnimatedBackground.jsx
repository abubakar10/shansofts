export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-surface/80" />
    </div>
  )
}
