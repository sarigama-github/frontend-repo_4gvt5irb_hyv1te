import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function useMagnetic() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const strength = 30
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const relX = e.clientX - rect.left - rect.width / 2
      const relY = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${relX / strength}px, ${relY / strength}px)`
    }
    const reset = () => (el.style.transform = 'translate(0,0)')
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', reset)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', reset)
    }
  }, [])
  return ref
}

export default function Hero({ onViewProjects }) {
  const magRef = useMagnetic()
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
        >
          Architecting High-Performance Commerce.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-lg sm:text-xl text-white/80"
        >
          Ibrahim Irfan — Shopify & Full-Stack Engineer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10"
        >
          <button
            ref={magRef}
            onClick={onViewProjects}
            className="relative inline-flex items-center gap-2 rounded-full px-7 py-3 text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-red-600 shadow-lg shadow-orange-600/30 hover:shadow-orange-500/40 transition-all duration-300"
          >
            View Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}
