"use client"

import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"

const Snapshot1 = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen w-full bg-white fixed top-0 left-0 z-10 flex flex-col"
    >
      {/* Navbar positioned inside Snapshot1 */}
      <Navbar />

      {/* Hero / Main content */}
      <div className="flex-1 flex items-center justify-center h-screen">
        <Hero />
      </div>
    </div>
  )
})

export default Snapshot1
