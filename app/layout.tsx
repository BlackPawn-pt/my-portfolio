import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Dmitry Zhidkov — информационные системы и Python",
  description:
    "Портфолио Dmitry Zhidkov: специалист по информационным системам (09.02.07), Python (aiogram), SQL, Chrome Extension API. Техническая поддержка ИС и 1С.",
  keywords: ["Python", "aiogram", "SQL", "Git", "1С", "техническая поддержка", "Dmitry Zhidkov"],
  authors: [{ name: "Dmitry Zhidkov" }],
  creator: "Dmitry Zhidkov",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://v0-ogt-7woziqaw081-f2mscgee2-blackpawn-pts-projects.vercel.app",
    title: "Dmitry Zhidkov — информационные системы и Python",
    description: "Портфолио специалиста по информационным системам",
    siteName: "Dmitry Zhidkov Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dmitry Zhidkov — информационные системы и Python",
    description: "Портфолио специалиста по информационным системам",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} dark`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
