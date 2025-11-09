"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const textElements = entry.target.querySelectorAll(".text-animate")
            const imageElements = entry.target.querySelectorAll(".image-animate")

            textElements.forEach((el) => el.classList.add("animate-slide-left"))
            imageElements.forEach((el) => el.classList.add("animate-slide-right"))
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 text-animate opacity-0">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold text-black text-balance">
              Sobre FOAR
            </h2>
            <div className="w-20 h-1 bg-[#FF0000]" />
            <p className="font-[family-name:var(--font-inter)] text-xl md:text-2xl text-black leading-relaxed text-pretty">
              Somos una agencia enfocada en optimizar procesos, automatizar tareas y potenciar la productividad. Creemos
              en procesos más inteligentes, no en más trabajo.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-lg md:text-xl text-gray-600 leading-relaxed text-pretty">
              Combinamos estrategia, diseño y tecnología para impulsar la eficiencia real en cada proyecto.
            </p>
          </div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] image-animate opacity-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
              <Image src="/abstract-digital-technology-pattern-minimal-red-ac.jpg" alt="FOAR Technology Pattern" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
