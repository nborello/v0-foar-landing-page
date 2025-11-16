"use client"

import { useState } from "react"

export function LanguageToggle() {
  const [language, setLanguage] = useState<"es" | "en">("es")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"))
    // Here you would implement actual i18n logic
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 text-sm font-medium text-black dark:text-white hover:text-[#FF0000] dark:hover:text-[#FF0000] transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle language"
    >
      {language.toUpperCase()}
    </button>
  )
}
