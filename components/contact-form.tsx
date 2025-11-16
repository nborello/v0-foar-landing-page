"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
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
    <section
      ref={sectionRef}
      id="contacto"
      className="py-20 md:py-32 px-6 md:px-12 bg-white"
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-8 text-balance animate-on-scroll opacity-0">
          Hablemos de tu proyecto
        </h2>

        <p className="font-[family-name:var(--font-inter)] text-base md:text-lg text-gray-600 text-center mb-12 animate-on-scroll opacity-0 animate-delay-100">
          Contanos qué necesitás y te respondemos en menos de 24 horas.
        </p>

        {/* FORMULARIO REAL QUE FUNCIONA */}
        <form
          action="https://formsubmit.co/foaragency@gmail.com"
          method="POST"
          className="space-y-6 animate-on-scroll opacity-0 animate-delay-200"
        >
          {/* Hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Nuevo mensaje desde la web de FOAR"
          />
          <input
            type="hidden"
            name="_template"
            value="table"
          />

          {/* Si querés una página de gracias: */}
          {/* <input type="hidden" name="_next" value="https://foar.vercel.app/gracias" /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-[family-name:var(--font-inter)] text-sm font-medium text-black">
                Nombre *
              </label>
              <Input
                name="name"
                required
                placeholder="Tu nombre"
                className="border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000]"
              />
            </div>

            <div className="space-y-2">
              <label className="font-[family-name:var(--font-inter)] text-sm font-medium text-black">
                Email *
              </label>
              <Input
                name="email"
                type="email"
                required
                placeholder="tu@email.com"
                className="border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-[family-name:var(--font-inter)] text-sm font-medium text-black">
              Empresa
            </label>
            <Input
              name="company"
              placeholder="Tu empresa"
              className="border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000]"
            />
          </div>

          <div className="space-y-2">
            <label className="font-[family-name:var(--font-inter)] text-sm font-medium text-black">
              Mensaje *
            </label>
            <Textarea
              name="message"
              required
              placeholder="Contanos sobre tu proyecto..."
              rows={6}
              className="border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000] resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#FF0000] hover:bg-[#DD0000] text-white py-6 text-base md:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Enviar mensaje
          </Button>
        </form>
      </div>
    </section>
  )
}
