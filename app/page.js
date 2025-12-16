import Hero from '../components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

const page = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* Noise overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: `
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><filter id="no"><feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23no)" opacity="0.10"/></svg>'),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><filter id="no2"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23no2)" opacity="0.06"/></svg>')
          `,
          backgroundBlendMode: 'overlay, multiply',
          backgroundSize: '96px 96px, 256px 256px',
        }}
      />

      <Navbar />

      <main className="relative">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="projects" className="min-h-screen scroll-mt-24">
          <Projects />
        </section>

        <section id="skills" className="min-h-screen scroll-mt-24">
          <Skills />
        </section>
        
      </main>

    </div>
  )
}

export default page
