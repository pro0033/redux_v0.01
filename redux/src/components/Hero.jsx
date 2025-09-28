"use client"

import React from "react"
import { useRouter } from "next/navigation"
import Spline from "@splinetool/react-spline"

export default function Hero() {
  const router = useRouter()

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Container */}
      <div className="w-full h-full flex items-center justify-center relative px-8 lg:px-24">
        
        {/* Text next to Spline */}
        <div className="flex flex-col justify-center items-start space-y-2 z-20 max-w-lg ml-auto mr-4">
          <h1
            className="text-black text-4xl lg:text-6xl font-bold leading-tight whitespace-nowrap"
            style={{ fontFamily: "MyCustomFont" }}
          >
            YOUR CLOTHES
          </h1>
          <h1
            className="text-black text-4xl lg:text-6xl font-bold leading-tight whitespace-nowrap"
            style={{ fontFamily: "MyCustomFont" }}
          >
            FLASH x FLAWLESS
          </h1>
          <p
            className="text-gray-700 text-base lg:text-lg mt-0"
            style={{ fontFamily: "MyCustomFont" }}
          >
            Professional dry-cleaning services that bring life back to your wardrobe.
          </p>
        </div>

        {/* Spline Scene */}
        <div className="relative flex-1 flex justify-end items-end">
          <div className="w-[600px] h-[600px]">
            <Spline 
              scene="/blobs.spline" 
              onMouseDown={(e) => e.preventDefault()}
              onWheel={(e) => e.preventDefault()}
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-black text-white rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
          style={{ fontFamily: "MyCustomFont" }}
        >
          Book appointment
        </button>
      </div>
    </section>
  )
}