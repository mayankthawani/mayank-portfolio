"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
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
    github: "", // add if public
    live: "",   // add if deployed
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
];

    
  };

  const projects = getProjectsData();

  return (
    <section className="min-h-screen flex items-center py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent font-bold mb-8 sm:mb-10 md:mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative h-[450px] sm:h-[480px] md:h-[500px] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 shadow-lg hover:shadow-violet-500/20"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

              {/* Status Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10">
                <span className={`${project.statusColor} w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse`}></span>
                <span className="text-[10px] sm:text-xs font-medium text-white">{project.status}</span>
              </div>

              {/* Content Overlay with Blur */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                <div className="backdrop-blur-md bg-black/30 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-white/10 space-y-2 sm:space-y-2.5 md:space-y-3">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium bg-violet-500/20 text-violet-200 border border-violet-400/30 rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="w-full mt-2 sm:mt-3 px-3 py-2 sm:px-4 sm:py-2.5 bg-violet-600/80 backdrop-blur-sm text-white rounded-lg hover:bg-violet-600 transition-all text-xs sm:text-sm font-medium border border-violet-400/30">
                    View Project →
                  </button>
                </div>
              </div>

              {/* Violet Glow on Hover */}
              <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
