"use client"

import { useLanguage } from "@/components/layout-wrapper"

interface StatsTranslations {
  title: string
  projects: string
  clients: string
  experience: string
  satisfaction: string
}

interface StatsSectionProps {
  translations: {
    en: StatsTranslations
    fr: StatsTranslations
  }
}

export default function StatsSection({ translations }: StatsSectionProps) {
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">{t.projects}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">30+</div>
            <div className="text-gray-600 font-medium">{t.clients}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">5+</div>
            <div className="text-gray-600 font-medium">{t.experience}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">{t.satisfaction}</div>
          </div>
        </div>
      </div>
    </section>
  )
}