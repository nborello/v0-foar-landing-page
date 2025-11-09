"use client"

import { useEffect, useRef } from "react"
import { Shield, Cpu, Users } from "lucide-react"

export default function HowWeWork() {
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

  const principles = [
    {
      icon: Users,
      title: "Partner independiente y centrado en cliente",
      description: "Estrategias a medida, sin sesgos de plataforma.",
    },
    {
      icon: Cpu,
      title: "Tecnología como ventaja",
      description: "Desarrollo e integraciones para acelerar resultados.",
    },
    {
      icon: Shield,
      title: "Privacidad primero",
      description: "Cumplimiento y medición sostenible.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-20 text-balance animate-on-scroll opacity-0">
          Cómo lo hacemos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <div
                key={principle.title}
                className={`bg-white p-8 md:p-10 rounded-lg shadow-sm space-y-6 animate-on-scroll opacity-0 animate-delay-${(index + 1) * 100}`}
              >
                <div className="w-14 h-14 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#FF0000]" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-bold text-black">
                  {principle.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-base md:text-lg text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
