import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AKW General Contracting & MEP | المقاولات العامة والإلكتروميكانيكال",
  description:
    "Premium construction and MEP solutions for enterprise projects | حلول المقاولات والإلكتروميكانيكال للمشاريع العملاقة",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
