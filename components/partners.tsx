"use client"

import { useEffect, useRef } from "react"

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const partners = [
    { name: "Google", width: 120 },
    { name: "Meta", width: 100 },
    { name: "OpenAI", width: 120 },
    { name: "n8n", width: 100 },
    { name: "Vercel", width: 110 },
    { name: "Supabase", width: 130 },
    { name: "Google Analytics", width: 140 },
    { name: "Stripe", width: 100 },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-black text-center mb-6 animate-on-scroll opacity-0">
          Partners & herramientas
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-base text-gray-600 text-center mb-16 animate-on-scroll opacity-0 animate-delay-100">
          Implementamos con un stack moderno y seguro.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 md:gap-16 items-center justify-items-center animate-on-scroll opacity-0 animate-delay-200">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={`/placeholder-graphic.png?height=40&width=${partner.width}&query=${partner.name}+logo`}
                alt={`${partner.name} logo`}
                className="h-10 md:h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
