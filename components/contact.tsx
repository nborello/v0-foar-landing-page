"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Instagram } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", company: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-[#F7F7F7]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 animate-on-scroll opacity-0 text-balance">
          ¿Querés optimizar tu negocio?
        </h2>

        <p className="font-[family-name:var(--font-inter)] text-lg md:text-xl text-gray-600 text-center mb-12 animate-on-scroll opacity-0 animate-delay-100 text-pretty">
          Hablemos sobre cómo podemos ayudarte a automatizar y escalar.
        </p>

        {isSubmitted ? (
          <div className="bg-white p-12 rounded-lg shadow-sm text-center animate-fade-up">
            <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-black mb-2">
              ¡Mensaje enviado!
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-gray-600">
              Nos pondremos en contacto contigo pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 animate-on-scroll opacity-0 animate-delay-200">
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="font-[family-name:var(--font-inter)] text-lg py-6 border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000]"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="font-[family-name:var(--font-inter)] text-lg py-6 border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000]"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="font-[family-name:var(--font-inter)] text-lg py-6 border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000]"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="font-[family-name:var(--font-inter)] text-lg border-gray-300 focus:border-[#FF0000] focus:ring-[#FF0000] resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#FF0000] hover:bg-[#CC0000] text-white py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enviar mensaje
              </Button>
            </div>
          </form>
        )}

        <div className="flex justify-center gap-6 mt-12 animate-on-scroll opacity-0 animate-delay-300">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-black group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 group"
          >
            <Instagram className="w-5 h-5 text-black group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  )
}
