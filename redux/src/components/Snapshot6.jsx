"use client"

import { forwardRef } from "react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import Spline from "@splinetool/react-spline"

export default forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen w-full fixed top-0 left-0 z-30 overflow-hidden"
    >
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="/scene.spline" /> {/* <-- put your spline file path here */}
      </div>

      {/* Overlay (to make content readable) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Top row (Contact Us + Icons) */}
      <div className="absolute top-6 left-6 z-20 flex justify-between items-center w-[calc(100%-3rem)]">
        <h1 className="text-[3vw] font-bold text-white">CONTACT US</h1>
        <div className="flex space-x-4">
          <FaFacebookF className="text-white text-xl cursor-pointer hover:text-pink-500 transition" />
          <FaTwitter className="text-white text-xl cursor-pointer hover:text-pink-500 transition" />
          <FaInstagram className="text-white text-xl cursor-pointer hover:text-pink-500 transition" />
        </div>
      </div>

      {/* Centered form */}
      <div className="flex items-center justify-center h-full w-full relative z-20">
        <form className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
              rows="4"
              placeholder="Your Message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-black text-white font-semibold hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Bottom description text */}
      <div className="absolute bottom-6 left-0 w-full text-center px-6 z-20">
        <p className="text-white text-lg leading-relaxed">
          Have questions or want to work together? Reach out via email at
          <a
            href="mailto:info@example.com"
            className="underline mx-1 hover:text-pink-400 transition"
          >
            info@example.com
          </a>
          or call us at <span className="ml-1">+123 456 7890</span>.
        </p>
      </div>
    </div>
  )
})
