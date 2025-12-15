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
                className="absolute top-8 right-14 bg-violet-500 text-white px-4 py-1 rounded-full font-bold text-md shadow-lg"
                style={{ zIndex: 10 }}
              >
                Hello!
              </motion.div>
            )}
          </div>
        </div>

        {/* Left: text/content (now second) */}
        <div className="w-full md:w-auto text-center md:text-left">
          {/* ...existing code... */}
           <div className="flex flex-col gap-4">
      
      {/* RUNNING TEXT GREETING */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="overflow-hidden"
      >
        <motion.p
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="text-sm font-mono text-violet-400 whitespace-nowrap"
        >
          Welcome to my portfolio • Let's build something amazing together • 
        </motion.p>
      </motion.div>

      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0, y: 30, letterSpacing: "0.3em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight"
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
        className="text-xl font-medium text-violet-300"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        Cybersecurity Student & Full-Stack Developer
      </motion.p>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-md text-base leading-relaxed text-gray-300"
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
        className="flex gap-4 mt-4"
      >
        <button className="px-6 py-3 border border-violet-500 text-white rounded-lg hover:bg-violet-500/10 transition">
          View Projects
        </button>
        <button className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
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
