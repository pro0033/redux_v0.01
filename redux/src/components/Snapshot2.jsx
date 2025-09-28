"use client"

import React from "react"
import SplashCursor from "./SplashCursor"

const Snapshot2 = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-full w-full bg-black flex items-center justify-center absolute top-0 left-0 z-20"
    >
      <SplashCursor />

      {/* About Section - moved 1cm right */}
      <div className="absolute top-12 left-[7%] text-left z-30 text-white space-y-2 font-custom">
        <p className="text-base md:text-lg">Location: 123 Main Street, City</p>
        <p className="text-base md:text-lg">Phone: +1 234 567 890</p>
        <p className="text-base md:text-lg">Email: info@example.com</p>
      </div>

      {/* Bottom-centered REDUX text */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 overflow-hidden z-30">
        <h1
          className="text-[30vw] sm:text-[32vw] md:text-[30vw] lg:text-[28vw] xl:text-[26vw] text-white font-custom leading-none"
          style={{ whiteSpace: "nowrap" }}
        >
          REDUX
        </h1>
      </div>
    </div>
  )
})

Snapshot2.displayName = "Snapshot2"
export default Snapshot2
