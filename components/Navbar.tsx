import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="fixed left-0 top-0 w-full z-50 px-6 py-4 
  bg-black/30 backdrop-blur-lg border-b border-white/10">

        <div className='flex justify-between items-center max-w-7xl mx-auto '>
            <div className='text-white font-serif text-lg '>
                Mayank <span className='text-violet-400'>.</span>

            </div>
            <ul className='flex gap-8 text-gray-300'>
                 <li className="hover:text-white transition cursor-pointer">Home</li>
      <li className="hover:text-white transition cursor-pointer">Projects</li>
      <li className="hover:text-white transition cursor-pointer">Skills</li>
      <li className="hover:text-white transition cursor-pointer">Contact</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
