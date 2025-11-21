import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function domainPlaceholder(url) {
  try {
    const u = new URL(url.startsWith('http') ? url : `https://${url}`)
    const host = u.hostname.replace('www.', '')
    const initials = host
      .split('.')
      .filter(Boolean)
      .slice(0, 2)
      .map(s => s[0].toUpperCase())
      .join('')
    return { host, initials }
  } catch {
    return { host: url, initials: 'WW' }
  }
}

export default function ProjectCard({ name, url, meta, large=false }) {
  const [hover, setHover] = useState(false)
  const { host, initials } = domainPlaceholder(url)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${large ? 'col-span-2 row-span-2' : ''}`}
    >
      <div className="p-5 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-white/60 text-sm">{meta}</p>
        </div>
        <span className="text-xs text-white/60">{host}</span>
      </div>

      <div className="relative h-52 overflow-hidden rounded-b-2xl">
        <AnimatePresence>
          {hover ? (
            <motion.iframe
              key="iframe"
              src={url.startsWith('http') ? url : `https://${url}`}
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
            />
          ) : (
            <motion.div
              key="ph"
              className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-white/10 text-white flex items-center justify-center text-2xl font-bold mb-2">
                  {initials}
                </div>
                <span className="text-white/60 text-xs">Hover to preview</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
