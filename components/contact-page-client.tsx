"use client"

import { useLanguage } from "@/components/layout-wrapper"
import ContactForm from "@/components/contact-form"
import { Calendar, Clock, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface ContactPageClientProps {
  translations: {
    en: any
    fr: any
  }
}

export default function ContactPageClient({ translations }: ContactPageClientProps) {
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

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm t={t} />
            </div>

            {/* Scheduling Section */}
            <div>
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.schedule.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t.schedule.subtitle}</p>
                  
                  <div className="flex justify-center items-center space-x-8 mb-8 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <span>{t.schedule.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>{t.schedule.price}</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-12 py-4 font-semibold text-lg shadow-lg"
                  >
                    <Link
                      href="https://cal.com/mizael-anthony/30min"
                      target="_blank"
                      className="flex items-center"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      {t.schedule.bookNow}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}