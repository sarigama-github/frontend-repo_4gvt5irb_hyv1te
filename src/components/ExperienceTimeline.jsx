import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ExperienceTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const items = [
    {
      title: 'Witsol Technologies',
      period: '2022 – Present',
      points: ['Integrated ERPs', 'Built Custom Apps', 'Optimized CRO'],
    },
  ]

  return (
    <section ref={ref} className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Experience</h2>
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />
        <motion.div style={{ height }} className="absolute left-4 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-orange-500 to-red-600" />

        <ul className="space-y-10">
          {items.map((item, i) => (
            <li key={i} className="relative pl-12 sm:pl-0 sm:text-center">
              <div className="absolute left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-600 to-red-600 ring-4 ring-black/40" />
              <div className="sm:ml-0 ml-6">
                <h3 className="text-white font-semibold text-xl">{item.title}</h3>
                <p className="text-white/60 text-sm mb-2">{item.period}</p>
                <div className="flex flex-wrap gap-2 justify-start sm:justify-center">
                  {item.points.map((p, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs border border-white/10">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
