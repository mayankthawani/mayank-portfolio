import React from 'react'
import Hero from '../components/Hero' // capitalize component usage

const page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Extra noise overlay (non-interactive) */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: -1,
          backgroundImage: `
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><filter id="no"><feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23no)" opacity="0.10"/></svg>'),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><filter id="no2"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23no2)" opacity="0.06"/></svg>')
          `,
          backgroundBlendMode: 'overlay, multiply',
          backgroundSize: '96px 96px, 256px 256px',
          opacity: 0.9,
        }}
      />
      <Hero />
    </div>
  )
}

export default page
