"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center font-bold text-primary">
                AK
              </div>
              <span className="text-lg font-semibold">AKW</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">{t("footer.company")}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-6">{t("footer.quick")}</h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors block"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/about"
                className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors block"
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/contact"
                className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors block"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-6">Services</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>{t("services.general")}</p>
              <p>{t("services.construction")}</p>
              <p>{t("services.mep")}</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>+966 XX XXX XXXX</p>
              <p>info@akw.sa</p>
              <p>Riyadh, Saudi Arabia</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2026 AKW General Contracting. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
