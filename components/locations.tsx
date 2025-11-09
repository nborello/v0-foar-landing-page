"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Locations() {
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

  const locations = [
    {
      name: "Buenos Aires",
      description: "HQ remoto",
      image: "/buenos-aires-skyline.jpg",
    },
    {
      name: "Madrid",
      description: "Partner",
      image: "/madrid-skyline.png",
    },
    {
      name: "Online",
      description: "Disponible globalmente",
      image: "/digital-world-network.jpg",
    },
  ]

  return (
    null
  )
}
