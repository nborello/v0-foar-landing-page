"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // todos cerrados al inicio

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

  const services = [
    {
      title: "Marketing Inteligente",
      items: [
        "Creatividades data-driven",
        "Paid search y paid social",
        "Experimentación y testing continuo",
        "CRO y SXO para mejorar la conversión",
      ],
      claim: "Invertir mejor, no solo invertir más.",
      image: "/placeholder-graphic.png",
    },
    {
      title: "Automatización de Procesos",
      items: [
        "Flujos multicanal (email, WhatsApp, SMS)",
        "Emails y recordatorios automáticos",
        "Seguimiento y nurturing de leads",
        "Integraciones entre tus herramientas actuales",
      ],
      claim: "Menos tareas manuales. Más tiempo para crecer.",
      image: "/placeholder-graphic.png",
    },
    {
      title: "Data Design",
      items: [
        "Diseño de dashboards accionables",
        "Definición de KPIs y métricas clave",
        "Historias de datos para dirección y equipos",
        "Visualizaciones claras para tomar decisiones rápido",
      ],
      claim: "Ver claro qué está pasando y qué hacer después.",
      image: "/placeholder-graphic.png",
    },
  ]

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-20 md:py-32 px-6 md:px-12 bg-white"
    >
      <div className="mx-auto max-w-7xl space-y-10 animate-on-scroll opacity-0">
        {/* Header */}
        <div className="space-y-4">
          <p className="font-[family-name:var(--font-inter)] text-xs md:text-sm tracking-[0.2em] uppercase text-gray-400">
            Servicios
          </p>

          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Sistemas que trabajan mientras tu equipo está en otra cosa.
          </h2>

          <p className="font-[family-name:var(--font-inter)] text-base md:text-lg text-gray-700 max-w-3xl">
            Diseñamos, implementamos y operamos soluciones de automatización,
            datos e IA que se integran con tu stack actual y no dependen de
            héroes internos.
          </p>
        </div>

        {/* Acordeón */}
        <div className="space-y-4">
          {services.map((service, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-gray-50/80 hover:bg-gray-50 transition-colors"
              >
                {/* Header del ítem */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5"
                >
                  <div className="flex items-center gap-4 md:gap-5">
                    {/* Número rojo */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE5E5] text-[#FF0000] font-[family-name:var(--font-space-grotesk)] text-sm font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Título y subtítulo */}
                    <div className="text-left">
                      <p className="font-[family-name:var(--font-space-grotesk)] text-lg md:text-xl font-semibold text-gray-900">
                        {service.title}
                      </p>
                      <p className="hidden md:block font-[family-name:var(--font-inter)] text-sm text-gray-500">
                        {service.claim}
                      </p>
                    </div>
                  </div>

                  {/* Chevron en rojo */}
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#FF0000]/30 text-[#FF0000] transition-transform ${
                      isActive ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Contenido desplegable */}
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                    isActive ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {isActive && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-gray-200/80">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start pt-5">
                        {/* Lista */}
                        <div className="space-y-4">
                          <ul className="space-y-3 font-[family-name:var(--font-inter)] text-sm md:text-base text-gray-700">
                            {service.items.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] mt-2.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          <p className="font-[family-name:var(--font-space-grotesk)] text-lg md:text-xl font-semibold text-gray-900 pt-2">
                            {service.claim}
                          </p>

                          <a
                            href="#contacto"
                            className="inline-flex items-center gap-2 text-[#FF0000] font-[family-name:var(--font-inter)] text-sm md:text-base font-medium hover:gap-3 transition-all group"
                          >
                            Ver cómo lo implementamos
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>

                        {/* Imagen */}
                        <div>
                          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
