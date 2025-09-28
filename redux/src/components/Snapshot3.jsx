"use client"

import { forwardRef } from "react"
import Card from "./Card"

export default forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen w-full fixed top-0 left-0 z-30 flex flex-col"
      style={{ background: "black" }}
    >
      {/* SERVICES Heading */}
      <h1 className="text-[3vw] font-bold text-white mt-12 ml-8">
        SERVICES
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-8 px-8 justify-center mt-16 flex-1">
        <Card
          title="Service One"
          description="Minimal description for service one."
          image="/hero.png"
        />
        <Card
          title="Service Two"
          description="Minimal description for service two."
          image="/hero.png"
        />
        <Card
          title="Service Three"
          description="Minimal description for service three."
          image="/hero.png"
        />
      </div>
    </div>
  )
})
