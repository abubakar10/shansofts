import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

// Animated count-up. Parses a value like "120+", "24/7", "99.9%" and animates the numeric part.
export default function Counter({ value, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState('0')

  const match = String(value).match(/^([^\d]*)([\d.]+)(.*)$/)
  const prefix = match ? match[1] : ''
  const target = match ? parseFloat(match[2]) : 0
  const suffix = match ? match[3] : String(value)
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0

  const mv = useMotionValue(0)

  useEffect(() => {
    if (!match) {
      setDisplay(String(value))
      return
    }
    if (!inView) return
    const controls = animate(mv, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    })
    return controls.stop
  }, [inView]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className}>
      {match ? `${prefix}${display}${suffix}` : display}
    </span>
  )
}
