"use client"

import React, { useState } from "react"
import Menu from "./Menu"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50">
        {/* Logo with custom font */}
        <div className="text-2xl font-custom font-bold text-black">REDUX</div>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-md font-custom text-black flex items-center gap-1"
        >
          Menu<span className="text-3xl leading-none">+</span>
        </button>
      </nav>

      {/* Fullscreen menu overlay */}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}