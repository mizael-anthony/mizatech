"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/layout-wrapper"

interface HeroTranslations {
  title: string
  titleAccent: string
  subtitle: string
  cta: string
}

interface HeroSectionProps {
  translations: {
    en: HeroTranslations
    fr: HeroTranslations
  }
}

export default function HeroSection({ translations }: HeroSectionProps) {
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t.title} <span className="text-orange-400">{t.titleAccent}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">{t.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-8 py-4 font-semibold shadow-lg"
            >
              <Link href="/contact" className="flex items-center">
                {t.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}