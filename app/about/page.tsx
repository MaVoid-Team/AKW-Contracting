"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6 leading-tight">{t("about.title")}</h1>
          <p className="text-xl opacity-80 max-w-3xl leading-relaxed">{t("about.background.text")}</p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-primary mb-8 leading-tight">{t("about.background")}</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">{t("about.background.text")}</p>
            </div>
            <div className="bg-gradient-to-br from-muted to-muted/50 aspect-square rounded-sm overflow-hidden">
              <img src="/placeholder.svg?height=500&width=500" alt="AKW Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="w-1 h-12 bg-secondary rounded-full"></div>
              <h3 className="text-4xl font-bold text-primary leading-tight">{t("about.vision")}</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">{t("about.vision.text")}</p>
            </div>
            <div className="space-y-6">
              <div className="w-1 h-12 bg-secondary rounded-full"></div>
              <h3 className="text-4xl font-bold text-primary leading-tight">{t("about.mission")}</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">{t("about.mission.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-primary mb-16 leading-tight">{t("about.expertise")}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">{t("about.expertise")}</h3>
              <p className="text-foreground/70 leading-relaxed">{t("about.expertise.text")}</p>
              <div className="w-1 h-12 bg-secondary rounded-full"></div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">{t("about.commitment")}</h3>
              <p className="text-foreground/70 leading-relaxed">{t("about.commitment.text")}</p>
              <div className="w-1 h-12 bg-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
