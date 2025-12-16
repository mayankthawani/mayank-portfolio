"use client"
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed left-0 top-0 w-full z-50 px-4 sm:px-6 py-4 
  bg-black/30 backdrop-blur-lg border-b border-white/10">

        <div className='flex justify-between items-center max-w-7xl mx-auto'>
            <div className='text-white font-serif text-lg sm:text-xl'>
                Mayank <span className='text-violet-400'>.</span>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-6 lg:gap-8 text-gray-300 text-sm lg:text-base'>
                 <li className="hover:text-white transition cursor-pointer">Home</li>
      <li className="hover:text-white transition cursor-pointer">Projects</li>
      <li className="hover:text-white transition cursor-pointer">Skills</li>
      <li className="hover:text-white transition cursor-pointer">Contact</li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className='flex flex-col gap-4 text-gray-300 text-base'>
              <li className="hover:text-white transition cursor-pointer py-2 border-b border-white/10">Home</li>
              <li className="hover:text-white transition cursor-pointer py-2 border-b border-white/10">Projects</li>
              <li className="hover:text-white transition cursor-pointer py-2 border-b border-white/10">Skills</li>
              <li className="hover:text-white transition cursor-pointer py-2">Contact</li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
