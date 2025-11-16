"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Toggle theme">
        <Sun size={20} />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-black dark:text-white" />
      ) : (
        <Moon size={20} className="text-black dark:text-white" />
      )}
    </button>
  )
}
