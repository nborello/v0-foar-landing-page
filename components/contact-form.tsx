"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload: Record<string, any> = {}

    formData.forEach((value, key) => {
      payload[key] = value
    })

    try {
      const res = await fetch("https://formsubmit.co/ajax/foaragency@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error("Request failed")
      }

      const data = await res.json()

      if (data.success === "true" || data.success === true) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error(error)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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

        <form
          onSubmit={handleSubmit}
          className="space-y-6 animate-on-scroll opacity-0 animate-delay-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="font-[family-name:var(--font-inter)] text-sm font-medium text-black"
              >
                Nombre *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Tu nombre"
                className="border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000]"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="font-[family-name:var(--font-inter)] text-sm font-medium text-black"
              >
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tu@email.com"
                className="border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="company"
              className="font-[family-name:var(--font-inter)] text-sm font-medium text-black"
            >
              Empresa
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Tu empresa"
              className="border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="font-[family-name:var(--font-inter)] text-sm font-medium text-black"
            >
              Mensaje *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Contanos sobre tu proyecto..."
              rows={6}
              className="border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000] resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FF0000] hover:bg-[#DD0000] text-white py-6 text-base md:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>

          {status === "success" && (
            <p className="mt-2 text-sm text-green-600 text-center">
              Gracias por tu mensaje. Te vamos a escribir a la brevedad.
            </p>
          )}

          {status === "error" && (
            <p className="mt-2 text-sm text-red-600 text-center">
              Hubo un problema al enviar el formulario. Probá de nuevo en unos
              minutos o escribinos a foaragency@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
