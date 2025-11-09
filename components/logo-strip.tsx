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
    { name: "Amazon", width: 120 },
    { name: "Vercel", width: 110 },
  ]

  return (
    <section
      ref={stripRef}
      className="relative py-16 md:py-24 px-6 md:px-12 bg-white border-b border-gray-100 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <p className="text-center text-sm md:text-base text-gray-500 mb-12 animate-on-scroll opacity-0 font-[family-name:var(--font-inter)]">
          Marcas con las que trabajamos
        </p>

        {/* Carrusel con fade lateral */}
        <div className="relative w-full overflow-hidden animate-on-scroll opacity-0 animate-delay-100">
          {/* Gradientes de difuminado laterales */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Logos desplazándose */}
          <div className="flex items-center gap-16 animate-scroll whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
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
      </div>

      {/* Animación CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  )
}
