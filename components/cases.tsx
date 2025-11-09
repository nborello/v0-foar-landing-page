"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function Cases() {
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

  const cases = [
    {
      industry: "E-commerce",
      title: "Automatización end-to-end que triplicó conversiones",
      highlights: [
        "300% incremento en tasa de conversión",
        "Reducción del 60% en tiempo de respuesta",
        "ROI positivo desde el primer mes",
      ],
    },
    {
      industry: "Fintech",
      title: "Sistema de scoring que redujo fraude 85%",
      highlights: ["85% reducción en fraude detectado", "Dashboard en tiempo real", "Integración con stack existente"],
    },
    {
      industry: "Healthcare",
      title: "Chatbot que liberó 40h semanales del equipo",
      highlights: ["40 horas semanales ahorradas", "95% satisfacción de usuarios", "Atención 24/7 automatizada"],
    },
    {
      industry: "SaaS",
      title: "Estrategia de datos que optimizó CAC en 45%",
      highlights: ["45% reducción en CAC", "Modelo de atribución completo", "Decisiones basadas en datos"],
    },
  ]

  return (
    <section ref={sectionRef} id="work" className="py-20 md:py-32 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-16 text-balance animate-on-scroll opacity-0">
          Algunos ejemplos de FOAR en acción.
        </h2>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.title}
              className={`bg-white p-8 md:p-10 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 animate-on-scroll opacity-0 animate-delay-${(index + 1) * 100} group cursor-pointer`}
            >
              <p className="text-sm font-[family-name:var(--font-inter)] text-[#FF0000] font-semibold uppercase tracking-wide">
                {caseItem.industry}
              </p>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-black group-hover:text-[#FF0000] transition-colors">
                {caseItem.title}
              </h3>
              <ul className="space-y-2 font-[family-name:var(--font-inter)] text-base text-gray-600">
                {caseItem.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-[#FF0000] font-[family-name:var(--font-inter)] text-sm font-medium hover:gap-3 transition-all pt-2"
              >
                Ver caso completo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        
      </div>
    </section>
  )
}
