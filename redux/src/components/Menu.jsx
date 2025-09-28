"use client"

import React from "react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// Register the ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin)

export default function Menu({ isOpen, onClose }) {
  const handleNavigation = (item) => {
    let scrollPosition = 0
    
    switch(item) {
      case 'HOME':
        scrollPosition = 0 // Top of page (Snapshot1)
        break
      case 'ABOUT':
        scrollPosition = window.innerHeight // Scroll to trigger Snapshot2
        break
      case 'SERVICES':
        scrollPosition = window.innerHeight * 2 // Scroll to trigger Snapshot3
        break
      case 'CONTACT':
        scrollPosition = window.innerHeight * 4 // Scroll to Snapshot6 area
        break
    }
    
    // Use GSAP to scroll smoothly
    gsap.to(window, {
      duration: 1.5,
      scrollTo: scrollPosition,
      ease: "power2.out"
    })
    
    onClose()
  }

  return (
    <div
      className={`fixed inset-0 bg-black text-white flex flex-col justify-between items-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-md font-custom"
      >
        CLOSE X
      </button>

      {/* Navigation links */}
      <div className="flex gap-12 justify-center items-center flex-1">
        {["HOME", "ABOUT", "SERVICES", "CONTACT"].map((item) => (
          <button
            key={item}
            onClick={() => handleNavigation(item)}
            className="text-6xl font-custom hover:opacity-70 transition cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Social links */}
      <div className="flex gap-6 mb-10 font-custom">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>
  )
}