"use client"
import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const progress = (scrollLeft / maxScroll) * 100;
        
        setScrollProgress(progress);
        
        if (scrollLeft > 50) {
          setShowScrollHint(false);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const getProjectsData = () => {
    return [
      
  {
    id: 1,
    title: "FitARena",
    shortDescription:
      "AI-powered gamified fitness platform using body movement detection to turn workouts into interactive challenges.",
    description:
      "An AI-powered fitness platform that detects body movements to transform workouts into interactive, game-like challenges, improving user engagement and motivation.",
    highlights: [
      "AI-based body movement detection for gamified workouts",
      "PSP-style motion-based controller using physical movements",
      "Medical rehabilitation module for guided recovery exercises",
    ],
    tech: ["Next.js", "Firebase", "AI", "Computer Vision"],
    status: "Completed",
    statusColor: "bg-green-500",
    image: "/fitai.png",
    github: "",
    live: "",
  },
  {
    id: 2,
    title: "MakAI",
    shortDescription:
      "AI-powered career guidance platform offering personalized insights, skill trends, and interview preparation.",
    description:
      "An AI-driven career platform providing personalized career insights, skill trend analysis, and interview preparation with performance analytics.",
    highlights: [
      "AI-driven personalized career insights and recommendations",
      "Interview preparation with performance analytics",
      "Dynamic Resume Builder and Cover Letter Generator",
    ],
    tech: [ "AI/ML", "FastAPI", "Web Technologies"],
    status: "Prototype",
    statusColor: "bg-blue-500",
    image: "/Makai.png",
    github: "",
    live: "",
  },
  {
    id: 3,
    title: "MicroShield",
    shortDescription:
      "Cybersecurity-focused micro project for experimenting with threat analysis and security monitoring.",
    description:
      "A cybersecurity-focused micro project built to explore threat analysis, system monitoring, and security data visualization as practical security experiments.",
    highlights: [
      "Threat analysis and security data exploration",
      "Security-focused microservice-style architecture",
      "Hands-on experimentation with cybersecurity concepts",
    ],
    tech: ["JavaScript", "Node.js", "Cybersecurity"],
    status: "In Progress",
    statusColor: "bg-yellow-500",
    image: "/microshield.jpg",
    github: "",
    live: "",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced features like real-time inventory management, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    status: "Completed",
    statusColor: "bg-green-500",
    image: "/fitai.png",
    github: "",
    live: "",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team collaboration features, and productivity analytics.",
    tech: ["Next.js", "PostgreSQL", "WebSocket", "Prisma"],
    status: "In Progress",
    statusColor: "bg-yellow-500",
    image: "/Makai.png",
    github: "",
    live: "",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard with forecasts, interactive maps, and location-based alerts using multiple weather APIs.",
    tech: ["Vue.js", "Weather API", "Leaflet", "TailwindCSS"],
    status: "Completed",
    statusColor: "bg-green-500",
    image: "/microshield.jpg",
    github: "",
    live: "",
  },
];
  };

  const projects = getProjectsData();

  return (
    <section className="min-h-screen flex items-center py-12 sm:py-16 md:py-20 relative">
      <div className="mx-auto max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center px-2"
        >
          Featured Projects
        </motion.h2>
        
        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll Hint Arrow - Hidden on small screens */}
          {showScrollHint && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="hidden sm:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-violet-600/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs md:text-sm font-medium items-center gap-2 pointer-events-none"
            >
              <span className="hidden md:inline">Scroll Right</span>
              <span className="md:hidden">→</span>
              <span className="hidden md:inline">→</span>
            </motion.div>
          )}

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-3 sm:pb-4 scroll-smooth scrollbar-hide touch-pan-x"
          >
            <div className="flex gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 px-1 sm:px-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative flex flex-col flex-shrink-0 w-[280px] xs:w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] xl:w-[460px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 shadow-lg hover:shadow-violet-500/20 bg-gray-900/50"
                >
                  {/* Image Section */}
                  <div className="relative h-40 xs:h-44 sm:h-52 md:h-56 lg:h-64 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 flex items-center gap-1 xs:gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-2 py-0.5 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10">
                      <span className={`${project.statusColor} w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse`}></span>
                      <span className="text-[9px] xs:text-[10px] sm:text-xs font-medium text-white">{project.status}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-grow p-3 xs:p-4 sm:p-5 md:p-6 space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4">
                    <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed flex-grow line-clamp-3 sm:line-clamp-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 xs:px-2 sm:px-3 sm:py-1 text-[9px] xs:text-[10px] sm:text-xs font-medium bg-violet-500/20 text-violet-200 border border-violet-400/30 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="w-full mt-1.5 xs:mt-2 sm:mt-3 px-3 py-1.5 xs:py-2 sm:px-4 sm:py-2.5 bg-violet-600 text-white rounded-md sm:rounded-lg hover:bg-violet-700 transition-all text-[11px] xs:text-xs sm:text-sm font-medium">
                      View Project →
                    </button>
                  </div>

                  <div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="mt-3 sm:mt-4 md:mt-5 flex justify-center gap-1.5 sm:gap-2 px-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  Math.floor((scrollProgress / 100) * projects.length) === index
                    ? 'bg-violet-500 w-6 sm:w-8'
                    : 'bg-gray-600 w-1.5 sm:w-2'
                }`}
              />
            ))}
          </div>

          {/* Custom Scrollbar Styles - Hidden */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

export default Projects
