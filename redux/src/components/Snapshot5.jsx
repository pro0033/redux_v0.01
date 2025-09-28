"use client"

import React from "react"
import LogoLoop from "./LogoLoop"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si"

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
]

const Snapshot5 = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen w-full bg-black flex items-center justify-center relative z-10 overflow-hidden"
    >
      {/* Logo loop positioned in the middle */}
      <div className="w-full max-w-5xl">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={64}
          gap={60}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  )
})

Snapshot5.displayName = "Snapshot5"
export default Snapshot5
