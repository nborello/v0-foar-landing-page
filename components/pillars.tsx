"use client"

import { useEffect, useRef } from "react"
import { Zap, GitMerge, TrendingUp } from "lucide-react"

export default function Pillars() {
  const pillarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible")
            observer.unobserve(entry.target) // que anime solo una vez
          }
        })
      },
      { threshold: 0.2 },
    )

    const elements = pillarsRef.current?.querySelectorAll(
      "[data-animate-on-scroll]",
    )
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      icon: Zap,
      title: "Simplificar lo complejo",
      description: "Llevamos procesos y datos a un lenguaje accionable.",
      direction: "left" as const,
    },
    {
      icon: GitMerge,
      title: "Unificar para rendir",
      description:
        "Estrategia, automatización y medición bajo una misma estructura.",
      direction: "center" as const,
    },
    {
      icon: TrendingUp,
      title: "Impulsar lo que importa",
      description:
        "Eficiencia, performance y prueba de impacto real.",
      direction: "right" as const,
    },
  ]

  return (
    <section
      ref={pillarsRef}
      id="esto-es-foar"
      className="py-20 md:py-28 px-6 md:px-12 bg-white"
    >
      <div className="container mx-auto max-w-7xl">
        <h2
          data-animate-on-scroll
          className="pillars-heading font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-16 text-balance"
        >
          El caos operativo se ordena cuando todo trabaja junto.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                data-animate-on-scroll
                data-direction={pillar.direction}
                className="pillars-card flex flex-col items-start space-y-4 p-8 rounded-2xl border border-black/10 bg-white shadow-sm hover:border-black/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#FF0000]" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-bold text-black">
                  {pillar.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-base md:text-lg text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
