import React from 'react'

const Hero = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col-reverse items-center gap-4 md:flex-row md:gap-6 md:justify-center">
        {/* Right: photo (now first) */}
        <div className="flex justify-center md:justify-start mt-8 md:mt-16 relative">
          {/* Transparent black platform/shadow */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/40 blur-xl rounded-full"
            style={{ zIndex: 0 }}
          />
          
          <div 
            className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem] overflow-hidden rounded-xl"
           
          >
            {/* ...existing code... */}
            <img
              src="/myphoto.png"
              alt="Profile photo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Left: text/content (now second) */}
        <div className="w-full md:w-auto text-center md:text-left">
          {/* ...existing code... */}
          <h1 className="text-4xl text-white font-bold mb-4">Welcome to My Portfolio</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
