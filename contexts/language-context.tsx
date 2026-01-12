"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "hero.title": "Building Tomorrow's Infrastructure",
    "hero.subtitle": "Premier General Contracting & MEP Solutions",
    "hero.cta": "Get in Touch",
    "overview.title": "Who We Are",
    "overview.text":
      "AKW is a leading force in construction and MEP with decades of excellence. We deliver premium projects with unwavering commitment to quality and execution.",
    "services.title": "Our Services",
    "services.general": "General Contracting",
    "services.construction": "Construction Management",
    "services.mep": "MEP Systems",
    "why.title": "Why Choose AKW",
    "why.expertise": "Proven Expertise",
    "why.expertise.text": "Two decades of delivering complex projects",
    "why.quality": "Uncompromising Quality",
    "why.quality.text": "Rigorous standards on every project",
    "why.execution": "Flawless Execution",
    "why.execution.text": "On-time, on-budget delivery",
    "about.title": "About AKW",
    "about.background": "Company Background",
    "about.background.text":
      "AKW General Contracting & MEP was founded on principles of excellence, integrity, and innovation. For over 20 years, we have been the trusted partner for enterprise-scale construction and MEP projects across the region.",
    "about.vision": "Our Vision",
    "about.vision.text":
      "To be the most trusted contractor for complex, high-performance construction and MEP solutions.",
    "about.mission": "Our Mission",
    "about.mission.text":
      "Deliver exceptional results through innovative approaches, dedicated teams, and uncompromising quality standards.",
    "about.expertise": "Fields of Expertise",
    "about.expertise.text": "Comprehensive construction and electromechanical systems",
    "about.commitment": "Our Commitment",
    "about.commitment.text":
      "Every project is treated as a partnership. We invest in understanding your vision and delivering solutions that exceed expectations.",
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to start your next project?",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Project Details",
    "contact.submit": "Send Message",
    "footer.company": "AKW General Contracting & MEP",
    "footer.rights": "All rights reserved.",
    "footer.quick": "Quick Links",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "عن الشركة",
    "nav.contact": "اتصل بنا",
    "hero.title": "بناء البنية التحتية للغد",
    "hero.subtitle": "حلول المقاولات العامة والإلكتروميكانيكال الممتازة",
    "hero.cta": "اتصل بنا",
    "overview.title": "من نحن",
    "overview.text":
      "مؤسسة أى كى دبليو هي القوة الرائدة في المقاولات والإلكتروميكانيكال بتاريخ عقود من التميز. نحن نقدم مشاريع عالية الجودة مع التزام لا يتزعزع بالجودة والتنفيذ.",
    "services.title": "خدماتنا",
    "services.general": "المقاولات العامة",
    "services.construction": "إدارة المشاريع",
    "services.mep": "أنظمة الإلكتروميكانيكال",
    "why.title": "لماذا اختيار AKW",
    "why.expertise": "خبرة مثبتة",
    "why.expertise.text": "عقان من تسليم المشاريع المعقدة",
    "why.quality": "جودة لا تتنازل",
    "why.quality.text": "معايير صارمة في كل مشروع",
    "why.execution": "تنفيذ بدون أخطاء",
    "why.execution.text": "التسليم في الموعد والميزانية المحددة",
    "about.title": "عن AKW",
    "about.background": "خلفية الشركة",
    "about.background.text":
      "تأسست مؤسسة أى كى دبليو للمقاولات العامة والإلكتروميكانيكال على مبادئ التميز والنزاهة والابتكار. لأكثر من 20 عاماً، كنا الشريك الموثوق به لمشاريع المقاولات والإلكتروميكانيكال بحجم المؤسسات في جميع أنحاء المنطقة.",
    "about.vision": "رؤيتنا",
    "about.vision.text":
      "أن نكون المقاول الأكثر ثقة للحصول على حلول المقاولات والإلكتروميكانيكال المعقدة وعالية الأداء.",
    "about.mission": "مهمتنا",
    "about.mission.text": "تقديم نتائج استثنائية من خلال أساليب مبتكرة وفرق مكرسة ومعايير جودة لا تتنازل.",
    "about.expertise": "مجالات الخبرة",
    "about.expertise.text": "حلول شاملة للمقاولات وأنظمة الإلكتروميكانيكال",
    "about.commitment": "التزامنا",
    "about.commitment.text": "كل مشروع يتم التعامل معه كشراكة. نستثمر في فهم رؤيتك وتقديم حلول تتجاوز التوقعات.",
    "contact.title": "اتصل بنا",
    "contact.subtitle": "هل أنت مستعد لبدء مشروعك التالي؟",
    "contact.name": "الاسم الكامل",
    "contact.email": "عنوان البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.message": "تفاصيل المشروع",
    "contact.submit": "إرسال الرسالة",
    "footer.company": "مؤسسة أى كى دبليو للمقاولات العامة والإلكتروميكانيكال",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.quick": "روابط سريعة",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const stored = localStorage.getItem("language") as Language | null
      if (stored && (stored === "en" || stored === "ar")) {
        setLanguageState(stored)
        document.documentElement.lang = stored
        document.documentElement.dir = stored === "ar" ? "rtl" : "ltr"
        document.documentElement.classList.toggle("ar", stored === "ar")
        document.documentElement.classList.toggle("en", stored === "en")
      }
      setMounted(true)
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.classList.toggle("ar", lang === "ar")
    document.documentElement.classList.toggle("en", lang === "en")
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t, mounted }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
