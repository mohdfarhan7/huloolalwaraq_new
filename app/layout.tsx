import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import "./globals.css"
import I18nProvider from "@/components/i18n-provider"
import FloatingQuoteButton from "@/components/FloatingQuoteButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HuloolAlWaraq - Premium Packaging Solutions",
  description:
    "Leading packaging company providing innovative solutions for businesses worldwide. Quality boxes, protective materials, and custom packaging.",
  keywords: "packaging, boxes, shipping, corrugated, bubble wrap, packaging materials, HuloolAlWaraq",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          {children}
          <Footer />
          <FloatingQuoteButton />
        </I18nProvider>
      </body>
    </html>
  )
}
