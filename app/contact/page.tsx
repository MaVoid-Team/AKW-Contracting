"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
    alert("Thank you for your message. We will be in touch soon.")
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6 leading-tight">{t("contact.title")}</h1>
          <p className="text-xl opacity-80 max-w-2xl">{t("contact.subtitle")}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-10">{t("contact.form")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">{t("contact.name")}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">{t("contact.email")}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">{t("contact.phone")}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                    placeholder="+966 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">{t("contact.message")}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-primary px-8 py-4 font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  {t("contact.submit")}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-6">Get in Touch</h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Whether you have a new project in mind or wish to discuss collaboration opportunities, our team is
                  ready to help. Reach out to us directly.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-bold text-primary">Phone</h4>
                <p className="text-foreground/70">+966 XX XXX XXXX</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-bold text-primary">Email</h4>
                <p className="text-foreground/70">info@akw.sa</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-bold text-primary">Address</h4>
                <p className="text-foreground/70">Riyadh, Saudi Arabia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
