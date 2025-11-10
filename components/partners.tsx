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
    <section
      ref={sectionRef}
      id="partners"
      className="py-20 md:py-32 px-6 md:px-12 bg-white scroll-mt-24"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-8 relative">
          {/* Título y descripción */}
          <div className="flex-shrink-0 z-20 relative bg-white pr-8 animate-on-scroll opacity-0">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-black whitespace-nowrap">
              Partners & herramientas
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-base text-gray-600 mt-2 whitespace-nowrap">
              Implementamos con un stack moderno y seguro.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="flex-1 relative overflow-hidden animate-on-scroll opacity-0 animate-delay-100">
            {/* Fade gradient on the left (where title meets carousel) */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            {/* Fade gradient on the right */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Scrolling logos */}
            <div className="flex items-center gap-20 animate-scroll-partners whitespace-nowrap">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={`/placeholder-graphic.png?height=40&width=${partner.width}&query=${partner.name}+logo`}
                    alt={`${partner.name} logo`}
                    className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes scroll-partners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll-partners {
          display: flex;
          animation: scroll-partners 55s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  )
}
