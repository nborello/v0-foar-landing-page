"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-white relative pt-20"
    >
      <div className="max-w-6xl w-full text-center space-y-10">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight text-balance animate-on-scroll opacity-0">
          Automatizamos procesos, optimizamos decisiones y escalamos negocios.
        </h1>

        <p className="font-[family-name:var(--font-inter)] text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto text-pretty animate-on-scroll opacity-0 animate-delay-100">
          Sistemas que simplifican, miden y potencian resultados.
        </p>

        <div className="pt-6 animate-on-scroll opacity-0 animate-delay-200">
          <Button
            size="lg"
            className="bg-[#FF0000] hover:bg-[#DD0000] text-white px-10 py-6 text-base md:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {"Hablemos"}
          </Button>
        </div>
      </div>
    </section>
  )
}
