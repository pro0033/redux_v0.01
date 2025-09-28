"use client"

import React from "react"
import Card from "./Card"

const Snapshot4 = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen w-full bg-black flex items-center justify-center relative z-10"
    >
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

Snapshot4.displayName = "Snapshot4"
export default Snapshot4
