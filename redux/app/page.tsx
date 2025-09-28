"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Import snapshot components
import Snapshot1 from "../src/components/Snapshot1"
import Snapshot2 from "../src/components/Snapshot2"
import Snapshot3 from "../src/components/Snapshot3"
import Snapshot4 from "../src/components/Snapshot4"
import Snapshot5 from "../src/components/Snapshot5"
import Snapshot6 from "../src/components/Snapshot6"
import Snapshot7 from "../src/components/Snapshot7"

gsap.registerPlugin(ScrollTrigger)

export default function PageTransitionDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pinContainerRef = useRef<HTMLDivElement>(null)

  const snapshot1Ref = useRef<HTMLDivElement>(null)
  const snapshot2Ref = useRef<HTMLDivElement>(null)
  const snapshot3Ref = useRef<HTMLDivElement>(null)
  const snapshot4Ref = useRef<HTMLDivElement>(null)
  const snapshot5Ref = useRef<HTMLDivElement>(null)
  const snapshot6Ref = useRef<HTMLDivElement>(null)
  const snapshot7Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- SEQUENCE 1 (S1 -> S2 -> pause -> S3) ---
      gsap.set(snapshot2Ref.current, { yPercent: 100 })
      gsap.set(snapshot3Ref.current, { xPercent: -100 })

      const SEGMENT_DURATION = 0.5
      const S2_START_TIME = 0.05
      const S2_DURATION = SEGMENT_DURATION
      const PAUSE_DURATION = SEGMENT_DURATION
      const S3_DURATION = SEGMENT_DURATION
      const S2_END_TIME = S2_START_TIME + S2_DURATION
      const S3_START_TIME = S2_END_TIME + PAUSE_DURATION
      const S3_END_TIME = S3_START_TIME + S3_DURATION

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "400% top",
          scrub: 1,
          pin: pinContainerRef.current,
          pinSpacing: true,
        },
      })

      tl1.to(snapshot2Ref.current, { yPercent: 0, ease: "none", duration: S2_DURATION }, S2_START_TIME)
      tl1.to({}, { duration: PAUSE_DURATION }, S2_END_TIME)
      tl1.to(snapshot3Ref.current, { xPercent: 0, ease: "none", duration: S3_DURATION }, S3_START_TIME)
      tl1.to({}, { duration: 0.5 }, S3_END_TIME)

      // --- SEQUENCE 2 (S5 pinned + S6 slides) ---
      gsap.set(snapshot6Ref.current, { xPercent: 100 })

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: snapshot5Ref.current,
          start: "top top",
          end: "+=600%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      })

      tl2.to({}, { duration: 0.1 })
      tl2.to(snapshot6Ref.current, { xPercent: 0, ease: "none" })
      tl2.to({}, { duration: 0.7 })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* PIN CONTAINER (S1, S2, S3) */}
      <div ref={pinContainerRef} className="h-screen w-full relative z-40">
        <Snapshot1 ref={snapshot1Ref} />
        <Snapshot2 ref={snapshot2Ref} />
        <Snapshot3 ref={snapshot3Ref} />
      </div>

      {/* Snapshot 4 */}
      <Snapshot4 ref={snapshot4Ref} />

      {/* Snapshot 5 (Pinned container for Snapshot 6) */}
      <div ref={snapshot5Ref} className="h-screen w-full relative z-10 overflow-hidden">
        <Snapshot5 />
        <Snapshot6 ref={snapshot6Ref} />
      </div>

      {/* Snapshot 7 */}
      <Snapshot7 ref={snapshot7Ref} />
    </div>
  )
}