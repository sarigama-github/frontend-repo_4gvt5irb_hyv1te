import { useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import ExperienceTimeline from './components/ExperienceTimeline'

const projects = [
  { name: 'Mizodia', url: 'https://www.mizodia.com', meta: 'German Jewelry Store' },
  { name: 'Star Naming', url: 'https://www.star-naming.com', meta: 'Gifting Platform' },
  { name: 'Actual Body', url: 'https://www.actualbody.com', meta: 'Therapy Consultation' },
  { name: 'Mullein', url: 'https://www.mullein.com', meta: 'Health E-commerce' },
  { name: 'Duma Tiles', url: 'https://www.dumatiles.co.uk', meta: 'UK Wall Panels' },
  { name: 'Try Sorelle', url: 'https://www.trysorelle.com', meta: 'Tanning Drops' },
]

const globalExpansions = [
  'https://www.institut-stellaire.fr',
  'https://www.gravelshop.com',
  'https://www.istituto-stellare.it',
  'https://www.sterntaufen-institut.de',
  'https://www.sterrenregister.nl',
  'https://www.registro-galaxia.es',
  'https://www.star-naming.in',
  'https://www.galaxieregister.de',
  'https://www.samarsheikh.com',
]

export default function App() {
  const projectsRef = useRef(null)
  const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-[#0b0b10]">
      <Hero onViewProjects={scrollToProjects} />

      {/* About Scrollytelling */}
      <section className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About</h2>
        <p className="text-white/80 leading-8 text-lg">
          Dedicated <span className="text-sky-400">Shopify</span> Developer with 2+ years experience.
          Proven expert in <span className="text-emerald-400">Liquid</span> & <span className="text-sky-400">React</span>,
          <span className="text-emerald-400"> Node</span>, <span className="text-sky-400">PHP</span> and the MERN Stack.
          Adept at RESTful APIs and complex app integrations.
        </p>
      </section>

      <ExperienceTimeline />

      {/* Bento Grid */}
      <section ref={projectsRef} className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Works</h2>
          <p className="text-white/60 text-sm">Hover a project to preview</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr] gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} large={i === 0} />
          ))}
        </div>

        {/* Global Expansions Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex items-center gap-6 animate-[marquee_22s_linear_infinite] [--gap:1.5rem]">
            {[...globalExpansions, ...globalExpansions].map((u, i) => (
              <div key={i} className="flex-shrink-0 w-64 h-28 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <ProjectCard name="Global Expansion" url={u} meta="Localization" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 pb-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white/60 text-sm">Email</p>
            <a className="text-white font-medium" href="mailto:ibrahimirfandev@gmail.com">ibrahimirfandev@gmail.com</a>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white/60 text-sm">Phone</p>
            <a className="text-white font-medium" href="tel:+9232365328812">+92 323 65328812</a>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white/60 text-sm">Location</p>
            <p className="text-white font-medium">Gujranwala, Pakistan</p>
          </div>
        </div>

        <ContactForm />

        <footer className="mt-12 flex items-center gap-6 text-white/70">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition">Instagram</a>
        </footer>
      </section>

      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>
    </div>
  )
}

function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      // Demo: Use EmailJS/Resend on a real deployment. For now, mailto fallback.
      window.location.href = `mailto:ibrahimirfandev@gmail.com?subject=${encodeURIComponent('Portfolio Inquiry')}&body=${encodeURIComponent(`${data.name}\n${data.email}\n${data.message}`)}`
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input name="name" placeholder="Your name" required className="col-span-1 sm:col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500" />
      <input name="email" type="email" placeholder="Your email" required className="col-span-1 sm:col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500" />
      <textarea name="message" placeholder="Tell me about your project" rows="5" className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500" />
      <button className="col-span-1 sm:col-span-2 justify-self-start rounded-xl px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold">Send message</button>
    </form>
  )
}
