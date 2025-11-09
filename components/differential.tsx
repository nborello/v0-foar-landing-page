"use client"

import { useEffect, useRef } from "react"
import { Brain, TrendingUp, ArrowUpRight } from "lucide-react"

const differentials = [
  {
    icon: Brain,
    title: "IA aplicada",
    description: "Automatizamos lo importante, no lo rutinario.",
  },
  {
    icon: TrendingUp,
    title: "Estrategia de datos",
    description: "Convertimos información en decisiones.",
  },
  {
    icon: ArrowUpRight,
    title: "Escalabilidad",
    description: "Creamos sistemas que crecen con tu negocio.",
  },
]

export default function Differential() {
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

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {differentials.map((item, index) => (
            <div
              key={index}
              className={`text-center space-y-4 animate-on-scroll opacity-0 animate-delay-${(index + 1) * 100}`}
            >
              <div className="flex justify-center mb-6">
                <item.icon className="w-12 h-12 md:w-16 md:h-16 text-[#FF0000]" strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-black">
                {item.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-lg text-gray-600 text-pretty">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
