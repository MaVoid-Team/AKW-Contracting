"use client"

import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-1 bg-muted p-1 rounded-lg">
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 text-xs font-semibold transition-all duration-200 ${
          language === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-transparent text-foreground/60 hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ar")}
        className={`px-4 py-2 text-xs font-semibold transition-all duration-200 ${
          language === "ar"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-transparent text-foreground/60 hover:text-foreground"
        }`}
      >
        AR
      </button>
    </div>
  )
}
