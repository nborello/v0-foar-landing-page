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
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = pillarsRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      icon: Zap,
      title: "Simplificar lo complejo",
      description: "Llevamos procesos y datos a un lenguaje accionable.",
    },
    {
      icon: GitMerge,
      title: "Unificar para rendir",
      description: "Estrategia, automatización y medición bajo una misma estructura.",
    },
    {
      icon: TrendingUp,
      title: "Impulsar lo que importa",
      description: "Eficiencia, performance y prueba de impacto real.",
    },
  ]

  return (
    <section
      ref={pillarsRef}
      id="esto-es-foar"
      className="py-20 md:py-28 px-6 md:px-12 bg-white"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-16 animate-on-scroll opacity-0 text-balance">
          El caos operativo se ordena cuando todo trabaja junto.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className={`flex flex-col items-start space-y-4 p-8 rounded-2xl border border-black/10 bg-white shadow-sm animate-on-scroll opacity-0 animate-delay-${(index + 1) * 100} hover:border-black/30 transition-colors duration-300`}
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
