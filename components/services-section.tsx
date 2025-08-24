"use client"

import { Code, Smartphone, Zap, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/layout-wrapper"

interface ServiceItem {
  title: string
  description: string
}

interface ServicesTranslations {
  title: string
  subtitle: string
  web: ServiceItem
  mobile: ServiceItem
  api: ServiceItem
  ai: ServiceItem
}

interface ServicesSectionProps {
  translations: {
    en: ServicesTranslations
    fr: ServicesTranslations
  }
}

export default function ServicesSection({ translations }: ServicesSectionProps) {
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.web.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.web.description}</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.mobile.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.mobile.description}</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.api.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.api.description}</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.ai.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.ai.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}