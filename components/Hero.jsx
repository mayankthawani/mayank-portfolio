"use client"
import { useState } from 'react'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const image  = ["/myphoto.png", "/myhiiphoto.png"]
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev)=>(prev === 0 ? 1 : 0));
      
    }, 5000);
    return ()=> clearInterval(interval);
  
    
  }, [])
  
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 md:py-16 min-h-screen flex items-center">
      <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:gap-10 lg:gap-12 md:justify-center">
        {/* Photo - First on all screens */}
        <div className="flex justify-center relative flex-shrink-0 mt-8 sm:mt-6 md:mt-0">
          {/* Transparent black platform/shadow */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-6 sm:h-8 bg-black/40 blur-xl rounded-full"
            style={{ zIndex: 0 }}
          />
          
          <div 
            className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[26rem] lg:w-[26rem] xl:h-[28rem] xl:w-[28rem] overflow-hidden rounded-xl"
           
          >
            {/* ...existing code... */}
            <img
              src={image[current]}
              alt="Profile photo"
              className="h-full w-full object-cover"
            />
            
            {/* Hello text that appears with second image */}
            {current === 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute top-4 right-8 sm:top-6 sm:right-10 md:top-8 md:right-14 bg-violet-500 text-white px-3 py-1 sm:px-4 rounded-full font-bold text-sm sm:text-base shadow-lg"
                style={{ zIndex: 10 }}
              >
                Hello!
              </motion.div>
            )}
          </div>
        </div>

        {/* Text content - Second on all screens */}
        <div className="w-full md:max-w-xl text-center">
           <div className="flex flex-col gap-3 sm:gap-4">
      
      {/* RUNNING TEXT GREETING */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="overflow-hidden h-5 sm:h-6"
      >
        <motion.p
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="text-xs sm:text-sm font-mono text-violet-400 whitespace-nowrap"
        >
          Welcome to my portfolio • Let's build something amazing together • 
        </motion.p>
      </motion.div>

      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0, y: 30, letterSpacing: "0.3em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
        style={{ fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif" }}
      >
        <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
          Mayank Thawani
        </span>
      </motion.h1>

      {/* ROLE */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-base sm:text-lg md:text-xl font-medium text-violet-300"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        Cybersecurity Student & Full-Stack Developer
      </motion.p>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-md mx-auto text-sm sm:text-base leading-relaxed text-gray-300 px-4 sm:px-0"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        I build secure, scalable web applications and turn ideas into real-world
        products through projects and hackathons.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 px-4 sm:px-0"
      >
        <button className="px-5 py-2.5 sm:px-6 sm:py-3 border border-violet-500 text-white rounded-lg hover:bg-violet-500/10 transition text-sm sm:text-base">
          View Projects
        </button>
        <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition text-sm sm:text-base">
          Download Resume
        </button>
      </motion.div>

    </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
