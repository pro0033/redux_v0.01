"use client"

import React from "react"
import SplashCursor from "./SplashCursor"

const Snapshot7 = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen w-full bg-black relative flex flex-col justify-between p-8 md:p-16"
    >
      
      {/* Top section with logo */}
      <div className="flex justify-between items-start">
        <div className="text-2xl font-bold text-white font-custom">redux</div>
        <div className="text-white text-sm">
          {new Date().getFullYear()}
        </div>
      </div>

      {/* Center content */}
      <div className="text-center space-y-8">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white font-custom leading-none">
          REDUX
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Building digital experiences that matter
        </p>
      </div>

      {/* Bottom section with links and info */}
      <div className="space-y-8">
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8">
          <div className="flex gap-8 text-white font-custom">
            <a href="#" className="hover:opacity-70 transition-opacity">Work</a>
            <a href="#" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
          </div>
          
          <div className="flex gap-6 text-white">
            <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Twitter</a>
            <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-gray-800 pt-6">
          <p>© {new Date().getFullYear()} Redux. All rights reserved.</p>
          <p>Made with passion</p>
        </div>
      </div>
    </div>
  )
})

Snapshot7.displayName = "Snapshot7"
export default Snapshot7
