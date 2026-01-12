"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t, mounted } = useLanguage()

  if (!mounted) {
    return <main className="min-h-screen" />
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-8 leading-tight tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-foreground/70 mb-10 leading-relaxed max-w-2xl">{t("hero.subtitle")}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              {t("hero.cta")}
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-primary mb-8 leading-tight">{t("overview.title")}</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-10">{t("overview.text")}</p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:opacity-80 transition-opacity"
              >
                {t("nav.about")}
                <span>→</span>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-muted to-muted/50 aspect-square rounded-sm overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Construction project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 leading-tight">{t("services.title")}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-5 group">
              <div className="w-12 h-12 bg-secondary/20 group-hover:bg-secondary/30 transition-colors rounded-sm flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">01</span>
              </div>
              <h3 className="text-2xl font-bold">{t("services.general")}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Comprehensive contracting solutions for projects of all scales and complexities.
              </p>
            </div>
            <div className="space-y-5 group">
              <div className="w-12 h-12 bg-secondary/20 group-hover:bg-secondary/30 transition-colors rounded-sm flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">02</span>
              </div>
              <h3 className="text-2xl font-bold">{t("services.construction")}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                End-to-end project oversight ensuring quality, timeline, and budget adherence.
              </p>
            </div>
            <div className="space-y-5 group">
              <div className="w-12 h-12 bg-secondary/20 group-hover:bg-secondary/30 transition-colors rounded-sm flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">03</span>
              </div>
              <h3 className="text-2xl font-bold">{t("services.mep")}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Advanced electromechanical systems designed and installed to perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-primary mb-16 leading-tight">{t("why.title")}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 p-8 bg-muted/50 rounded-sm hover:bg-muted transition-colors duration-200">
              <div className="w-1 h-12 bg-secondary rounded-full"></div>
              <h3 className="text-2xl font-bold text-primary">{t("why.expertise")}</h3>
              <p className="text-foreground/70 leading-relaxed">{t("why.expertise.text")}</p>
            </div>
            <div className="space-y-4 p-8 bg-muted/50 rounded-sm hover:bg-muted transition-colors duration-200">
              <div className="w-1 h-12 bg-secondary rounded-full"></div>
              <h3 className="text-2xl font-bold text-primary">{t("why.quality")}</h3>
              <p className="text-foreground/70 leading-relaxed">{t("why.quality.text")}</p>
            </div>
            <div className="space-y-4 p-8 bg-muted/50 rounded-sm hover:bg-muted transition-colors duration-200">
              <div className="w-1 h-12 bg-secondary rounded-full"></div>
              <h3 className="text-2xl font-bold text-primary">{t("why.execution")}</h3>
              <p className="text-foreground/70 leading-relaxed">{t("why.execution.text")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
