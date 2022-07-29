import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[100%]'>
      <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
        <a href="/" class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
    </div>
  )
}
