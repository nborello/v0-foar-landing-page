"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function Services() {
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

  const services = [
    {
      title: "Automatización de Procesos",
      items: ["Flujos multicanal", "Emails y recordatorios automáticos", "Seguimiento de leads", "Integraciones"],
      claim: "Menos tareas manuales. Más tiempo para crecer.",
      image: "/placeholder-graphic.png",
    },
    {
      title: "Datos & Analytics",
      items: [
        "Estrategia y gobernanza de datos",
        "Tracking server-side",
        "Ingeniería de datos",
        "Modelos de atribución y MMM",
      ],
      claim: "Decidir con datos, no suposiciones.",
      image: "/placeholder-graphic.png",
    },
    {
      title: "Chatbots y Asistentes",
      items: ["WhatsApp y web", "Enrutamiento a humano", "Base de conocimiento", "Scoring de intención"],
      claim: "Atención inmediata que convierte.",
      image: "/placeholder-graphic.png",
    },
    {
      title: "Marketing Inteligente",
      items: ["Creatividades data-driven", "Paid search y social", "Experimentación continua", "CRO y SXO"],
      claim: "Invertir mejor, no solo invertir más.",
      image: "/placeholder-graphic.png",
    },
    {
      title: "Dashboards & BI",
      items: ["KPI en tiempo real", "Análisis de cohortes", "Customer Lifetime Value", "Embudos y atribución"],
      claim: "Ver hoy lo que impacta mañana.",
      image: "/placeholder-graphic.png",
    },
  ]

  return (
    <section ref={sectionRef} id="servicios" className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl space-y-32">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-on-scroll opacity-0 ${
              index % 2 === 0 ? "" : "lg:grid-flow-dense"
            }`}
          >
            {/* Content */}
            <div className={`space-y-6 ${index % 2 === 0 ? "" : "lg:col-start-2"}`}>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                {service.title}
              </h3>
              <ul className="space-y-3 font-[family-name:var(--font-inter)] text-base md:text-lg text-gray-700">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-semibold text-black pt-4">
                {service.claim}
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-[#FF0000] font-[family-name:var(--font-inter)] text-base font-medium hover:gap-3 transition-all group"
              >
                Ver cómo lo implementamos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Image */}
            <div className={`${index % 2 === 0 ? "" : "lg:col-start-1 lg:row-start-1"}`}>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-50">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
