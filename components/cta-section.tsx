"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/layout-wrapper"

interface CTATranslations {
  title: string
  subtitle: string
  button: string
}

interface CTASectionProps {
  translations: {
    en: CTATranslations
    fr: CTATranslations
  }
}

export default function CTASection({ translations }: CTASectionProps) {
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.title}</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t.subtitle}</p>
        <Button
          asChild
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-8 py-4 font-semibold shadow-lg"
        >
          <Link href="/contact" className="flex items-center">
            {t.button}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}