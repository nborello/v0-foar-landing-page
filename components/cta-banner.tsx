"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Linkedin, Instagram } from "lucide-react"

export default function CTABanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

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

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-gray-100">
      <div ref={bannerRef} className="container mx-auto max-w-5xl text-center space-y-8 opacity-0">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl lg:text-6xl font-bold text-black text-balance">
          ¿Querés optimizar tus procesos y resultados?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Button
            size="lg"
            className="bg-[#FF0000] hover:bg-[#DD0000] text-white px-10 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Agendar demo
          </Button>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-black hover:border-[#FF0000] hover:text-[#FF0000] flex items-center justify-center transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-black hover:border-[#FF0000] hover:text-[#FF0000] flex items-center justify-center transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
