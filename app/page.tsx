"use client"

import Link from "next/link"
import { ArrowRight, Code, Smartphone, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import LayoutWrapper, { useLanguage } from "@/components/layout-wrapper"

const translations = {
  en: {
    hero: {
      title: "Building Tomorrow's",
      titleAccent: "Digital Solutions",
      subtitle:
        "Specialized in web & mobile development, API creation, and AI integration. We transform your ideas into powerful, scalable technology solutions.",
      cta: "Get a Quote",
      ctaSecondary: "Schedule Call",
    },
    services: {
      title: "Our Expertise",
      subtitle: "Comprehensive technology solutions tailored to your business needs",
      web: {
        title: "Web Development",
        description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      },
      mobile: {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
      },
      api: {
        title: "API Creation",
        description: "Robust, scalable APIs that power your applications and integrate seamlessly.",
      },
      ai: {
        title: "AI Integration",
        description: "Intelligent solutions that leverage machine learning and artificial intelligence.",
      },
    },
    stats: {
      title: "Trusted by Forward-Thinking Companies",
      projects: "Projects Completed",
      clients: "Happy Clients",
      experience: "Years Experience",
      satisfaction: "Client Satisfaction",
    },
    cta: {
      title: "Ready to Start Your Project?",
      subtitle: "Let's discuss how we can help bring your vision to life with cutting-edge technology solutions.",
      button: "Get Started Today",
    },
  },
  fr: {
    hero: {
      title: "Construire les",
      titleAccent: "Solutions Numériques de Demain",
      subtitle:
        "Spécialisés dans le développement web et mobile, la création d'API et l'intégration IA. Nous transformons vos idées en solutions technologiques puissantes et évolutives.",
      cta: "Obtenir un devis",
      ctaSecondary: "Planifier Appel",
    },
    services: {
      title: "Notre Expertise",
      subtitle: "Solutions technologiques complètes adaptées aux besoins de votre entreprise",
      web: {
        title: "Développement Web",
        description:
          "Sites web et applications web modernes et responsives construits avec des technologies de pointe.",
      },
      mobile: {
        title: "Développement Mobile",
        description: "Applications mobiles natives et multiplateformes pour iOS et Android.",
      },
      api: {
        title: "Création d'API",
        description: "APIs robustes et évolutives qui alimentent vos applications et s'intègrent parfaitement.",
      },
      ai: {
        title: "Intégration IA",
        description:
          "Solutions intelligentes qui exploitent l'apprentissage automatique et l'intelligence artificielle.",
      },
    },
    stats: {
      title: "Approuvé par des Entreprises Visionnaires",
      projects: "Projets Réalisés",
      clients: "Clients Satisfaits",
      experience: "Années d'Expérience",
      satisfaction: "Satisfaction Client",
    },
    cta: {
      title: "Prêt à Démarrer Votre Projet ?",
      subtitle:
        "Discutons de la façon dont nous pouvons vous aider à concrétiser votre vision avec des solutions technologiques de pointe.",
      button: "Commencer Aujourd'hui",
    },
  },
}

function HomePage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t.hero.title} <span className="text-orange-400">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">{t.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-8 py-4 font-semibold shadow-lg"
              >
                <Link href="/contact" className="flex items-center">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg px-8 py-4 font-semibold bg-transparent"
              >
                <Link href="/schedule">{t.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.services.web.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.services.web.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.services.mobile.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.services.mobile.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.services.api.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.services.api.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.services.ai.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.services.ai.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.stats.title}</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">{t.stats.projects}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">30+</div>
              <div className="text-gray-600 font-medium">{t.stats.clients}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">{t.stats.experience}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">{t.stats.satisfaction}</div>
            </div>
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

export default function Home() {
  return (
    <LayoutWrapper>
      <HomePage />
    </LayoutWrapper>
  )
}
