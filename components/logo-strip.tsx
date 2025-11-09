"use client"

import { useEffect, useRef } from "react"

export default function LogoStrip() {
  const stripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = stripRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const logos = [
    { name: "Google", width: 120 },
    { name: "Meta", width: 100 },
    { name: "OpenAI", width: 120 },
    { name: "Microsoft", width: 130 },
    { name: "Salesforce", width: 140 },
    { name: "HubSpot", width: 120 },
  ]

  return (
    <section ref={stripRef} className="py-16 md:py-24 px-6 md:px-12 bg-white border-b border-gray-100">
      <div className="container mx-auto max-w-7xl">
        <p className="text-center text-sm md:text-base text-gray-500 mb-12 animate-on-scroll opacity-0 font-[family-name:var(--font-inter)]">
          Marcas con las que trabajamos
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center animate-on-scroll opacity-0 animate-delay-100">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={`/placeholder-graphic.png?height=40&width=${logo.width}&query=${logo.name}+logo`}
                alt={`${logo.name} logo`}
                className="h-8 md:h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
