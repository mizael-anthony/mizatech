"use client"

import { useEffect } from "react"
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import LayoutWrapper, { useLanguage } from "@/components/layout-wrapper"

const translations = {
  en: {
    hero: {
      title: "Schedule a Consultation",
      subtitle:
        "Ready to discuss your project? Book a free consultation call to explore how we can help bring your vision to life.",
    },
    benefits: {
      title: "What to Expect in Our Call",
      items: [
        {
          title: "Project Discovery",
          description: "We'll discuss your goals, requirements, and vision in detail.",
        },
        {
          title: "Technical Consultation",
          description: "Get expert advice on the best technologies and approaches for your project.",
        },
        {
          title: "Timeline & Budget",
          description: "Receive a realistic timeline and budget estimate for your project.",
        },
        {
          title: "Next Steps",
          description: "Clear action items and next steps to move your project forward.",
        },
      ],
    },
    scheduling: {
      title: "Book Your Free Consultation",
      subtitle: "Choose a time that works best for you. All consultations are completely free with no obligations.",
      redirecting: "Redirecting to scheduling system...",
      bookNow: "Schedule Now",
      duration: "30 minutes",
      price: "Free consultation",
    },
    fallback: {
      title: "Alternative Contact Methods",
      subtitle: "If you're having trouble with scheduling, you can reach out directly:",
      email: "Email us at hello@mizatech.com",
      phone: "Call us at +1 (555) 123-4567",
    },
  },
  fr: {
    hero: {
      title: "Planifier une Consultation",
      subtitle:
        "Prêt à discuter de votre projet ? Réservez un appel de consultation gratuit pour explorer comment nous pouvons vous aider à concrétiser votre vision.",
    },
    benefits: {
      title: "À Quoi S'Attendre Lors de Notre Appel",
      items: [
        {
          title: "Découverte du Projet",
          description: "Nous discuterons en détail de vos objectifs, exigences et vision.",
        },
        {
          title: "Consultation Technique",
          description: "Obtenez des conseils d'experts sur les meilleures technologies et approches pour votre projet.",
        },
        {
          title: "Délais et Budget",
          description: "Recevez une estimation réaliste des délais et du budget pour votre projet.",
        },
        {
          title: "Prochaines Étapes",
          description: "Éléments d'action clairs et prochaines étapes pour faire avancer votre projet.",
        },
      ],
    },
    scheduling: {
      title: "Réservez Votre Consultation Gratuite",
      subtitle: "Choisissez un moment qui vous convient le mieux. Toutes les consultations sont entièrement gratuites sans obligations.",
      redirecting: "Redirection vers le système de planification...",
      bookNow: "Planifier Maintenant",
      duration: "30 minutes",
      price: "Consultation gratuite",
    },
    fallback: {
      title: "Méthodes de Contact Alternatives",
      subtitle: "Si vous rencontrez des difficultés avec la planification, vous pouvez nous contacter directement :",
      email: "Envoyez-nous un email à hello@mizatech.com",
      phone: "Appelez-nous au +1 (555) 123-4567",
    },
  },
}

function SchedulePage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  // Replace with your actual cal.com link
  const calComLink = "https://cal.com/your-username"

  const handleScheduleClick = () => {
    window.open(calComLink, "_blank")
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 text-orange-400 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.benefits.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.benefits.items.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.scheduling.title}</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t.scheduling.subtitle}</p>
              
              <div className="flex justify-center items-center space-x-8 mb-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span>{t.scheduling.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{t.scheduling.price}</span>
                </div>
              </div>

              <Button
                onClick={handleScheduleClick}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-12 py-4 font-semibold text-lg shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t.scheduling.bookNow}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fallback Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.fallback.title}</h2>
          <p className="text-lg text-gray-600 mb-8">{t.fallback.subtitle}</p>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>{t.fallback.email}</strong>
            </p>
            <p className="text-gray-700">
              <strong>{t.fallback.phone}</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Schedule() {
  return (
    <LayoutWrapper>
      <SchedulePage />
    </LayoutWrapper>
  )
}