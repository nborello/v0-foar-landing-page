"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Work", href: "#work" },
    { label: "Recursos", href: "#partners" },
    { label: "Sobre FOAR", href: "#how-we-work" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo con <img> nativo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label="Inicio">
            <img
              src="/images/design-mode/LOGO%20Principal%20Negro.png"
              alt="FOAR logo"
              className="h-8 w-auto object-contain transition-transform duration-300 ease-out hover:scale-105 dark:invert"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex justify-center gap-14 w-4/5 max-w-5xl">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium tracking-wide text-black dark:text-white hover:text-[#FF0000] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild className="bg-[#FF0000] text-white hover:bg-[#DD0000] transition-colors">
              <Link href="#contacto">Agendar demo</Link>
            </Button>
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-black dark:text-white hover:text-[#FF0000] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base text-black dark:text-white hover:text-[#FF0000] transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-[#FF0000] text-white hover:bg-[#DD0000] transition-colors mt-4">
                <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  Agendar demo
                </Link>
              </Button>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
