"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center font-bold text-primary">
            AK
          </div>
          <span className="hidden sm:inline text-lg font-semibold text-primary">AKW</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors">
            {t("nav.home")}
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  )
}
