"use client"

import Link from "next/link"
import { Code, Smartphone, Shield, Zap, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/layout-wrapper"

interface ServicesPageClientProps {
  translations: {
    en: any
    fr: any
  }
}

export default function ServicesPageClient({ translations }: ServicesPageClientProps) {
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  const services = [
    {
      icon: Code,
      ...t.services.web,
    },
    {
      icon: Smartphone,
      ...t.services.mobile,
    },
    {
      icon: Shield,
      ...t.services.api,
    },
    {
      icon: Zap,
      ...t.services.ai,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-xl overflow-hidden">
                <CardHeader className="bg-gray-50 p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.process.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.process.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t.cta.subtitle}</p>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-8 py-4 font-semibold shadow-lg"
          >
            <Link href="/contact" className="flex items-center">
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}