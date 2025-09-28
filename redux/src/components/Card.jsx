"use client"

import React from "react"

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-[#1a1a1a] p-6 flex flex-col justify-between w-full max-w-[460px] h-[500px]">
      {/* Title */}
      <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      {/* Image */}
      {image && (
        <div className="mb-4 flex-1">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Bottom line */}
      <div className="flex justify-between items-center border-t border-gray-700 pt-2 mt-auto">
        <span className="text-gray-400 text-sm font-medium">Book Appointment</span>
        <span className="text-white text-lg font-bold">→</span>
      </div>
    </div>
  )
}

export default Card
