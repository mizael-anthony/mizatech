"use client"

import Link from "next/link"
import { ArrowRight, Target, Eye, Award, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/layout-wrapper"

interface AboutPageClientProps {
  translations: {
    en: any
    fr: any
  }
}

export default function AboutPageClient({ translations }: AboutPageClientProps) {
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.founder.title}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                  <div className="w-48 h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-6xl font-bold flex-shrink-0">
                    M
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.founder.name}</h3>
                    <p className="text-orange-600 font-semibold mb-6">{t.founder.role}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{t.founder.bio}</p>
                    <blockquote className="text-lg italic text-gray-700 border-l-4 border-orange-600 pl-6">
                      {t.founder.quote}
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg rounded-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.mission.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{t.mission.description}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.vision.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{t.vision.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.values.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.values.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.values.innovation.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.values.innovation.description}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.values.quality.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.values.quality.description}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-xl text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.values.collaboration.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.values.collaboration.description}</p>
              </CardContent>
            </Card>
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