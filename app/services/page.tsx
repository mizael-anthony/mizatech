"use client"

import Link from "next/link"
import { Code, Smartphone, Shield, Zap, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LayoutWrapper, { useLanguage } from "@/components/layout-wrapper"

const translations = {
  en: {
    hero: {
      title: "Our Services",
      subtitle:
        "Comprehensive technology solutions designed to accelerate your business growth and digital transformation.",
    },
    services: {
      web: {
        title: "Web Development",
        description:
          "Create powerful, responsive web applications that deliver exceptional user experiences and drive business results.",
        features: [
          "Custom Web Applications",
          "E-commerce Solutions",
          "Progressive Web Apps (PWA)",
          "Content Management Systems",
          "Performance Optimization",
          "SEO Implementation",
        ],
      },
      mobile: {
        title: "Mobile Development",
        description:
          "Build native and cross-platform mobile applications that engage users and expand your reach across all devices.",
        features: [
          "iOS & Android Development",
          "Cross-platform Solutions",
          "UI/UX Design",
          "App Store Optimization",
          "Push Notifications",
          "Offline Functionality",
        ],
      },
      api: {
        title: "API Development",
        description:
          "Design and develop robust, scalable APIs that power your applications and enable seamless integrations.",
        features: [
          "RESTful API Design",
          "GraphQL Implementation",
          "API Documentation",
          "Authentication & Security",
          "Rate Limiting & Monitoring",
          "Third-party Integrations",
        ],
      },
      ai: {
        title: "AI Integration",
        description:
          "Leverage artificial intelligence and machine learning to automate processes and gain competitive advantages.",
        features: [
          "Machine Learning Models",
          "Natural Language Processing",
          "Computer Vision",
          "Chatbots & Virtual Assistants",
          "Predictive Analytics",
          "AI-powered Automation",
        ],
      },
    },
    process: {
      title: "Our Development Process",
      subtitle: "A proven methodology that ensures quality, transparency, and timely delivery.",
      steps: [
        {
          title: "Discovery & Planning",
          description: "We analyze your requirements and create a detailed project roadmap.",
        },
        {
          title: "Design & Prototyping",
          description: "Create wireframes and prototypes to visualize the final solution.",
        },
        {
          title: "Development & Testing",
          description: "Build your solution using best practices and rigorous testing.",
        },
        {
          title: "Deployment & Support",
          description: "Launch your project and provide ongoing maintenance and support.",
        },
      ],
    },
    cta: {
      title: "Ready to Get Started?",
      subtitle: "Let's discuss your project requirements and create a solution that exceeds your expectations.",
      button: "Start Your Project",
    },
  },
  fr: {
    hero: {
      title: "Nos Services",
      subtitle:
        "Solutions technologiques complètes conçues pour accélérer la croissance de votre entreprise et votre transformation numérique.",
    },
    services: {
      web: {
        title: "Développement Web",
        description:
          "Créez des applications web puissantes et responsives qui offrent des expériences utilisateur exceptionnelles et génèrent des résultats commerciaux.",
        features: [
          "Applications Web Personnalisées",
          "Solutions E-commerce",
          "Applications Web Progressives (PWA)",
          "Systèmes de Gestion de Contenu",
          "Optimisation des Performances",
          "Implémentation SEO",
        ],
      },
      mobile: {
        title: "Développement Mobile",
        description:
          "Construisez des applications mobiles natives et multiplateformes qui engagent les utilisateurs et étendent votre portée sur tous les appareils.",
        features: [
          "Développement iOS & Android",
          "Solutions Multiplateformes",
          "Design UI/UX",
          "Optimisation App Store",
          "Notifications Push",
          "Fonctionnalité Hors Ligne",
        ],
      },
      api: {
        title: "Développement d'API",
        description:
          "Concevez et développez des API robustes et évolutives qui alimentent vos applications et permettent des intégrations transparentes.",
        features: [
          "Conception d'API RESTful",
          "Implémentation GraphQL",
          "Documentation API",
          "Authentification & Sécurité",
          "Limitation de Débit & Surveillance",
          "Intégrations Tierces",
        ],
      },
      ai: {
        title: "Intégration IA",
        description:
          "Exploitez l'intelligence artificielle et l'apprentissage automatique pour automatiser les processus et obtenir des avantages concurrentiels.",
        features: [
          "Modèles d'Apprentissage Automatique",
          "Traitement du Langage Naturel",
          "Vision par Ordinateur",
          "Chatbots & Assistants Virtuels",
          "Analyses Prédictives",
          "Automatisation Alimentée par l'IA",
        ],
      },
    },
    process: {
      title: "Notre Processus de Développement",
      subtitle: "Une méthodologie éprouvée qui garantit la qualité, la transparence et la livraison dans les délais.",
      steps: [
        {
          title: "Découverte & Planification",
          description: "Nous analysons vos exigences et créons une feuille de route détaillée du projet.",
        },
        {
          title: "Design & Prototypage",
          description: "Créer des wireframes et des prototypes pour visualiser la solution finale.",
        },
        {
          title: "Développement & Tests",
          description: "Construire votre solution en utilisant les meilleures pratiques et des tests rigoureux.",
        },
        {
          title: "Déploiement & Support",
          description: "Lancer votre projet et fournir une maintenance et un support continus.",
        },
      ],
    },
    cta: {
      title: "Prêt à Commencer ?",
      subtitle: "Discutons de vos exigences de projet et créons une solution qui dépasse vos attentes.",
      button: "Démarrer Votre Projet",
    },
  },
}

function ServicesPage() {
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
                    {service.features.map((feature, featureIndex) => (
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
            {t.process.steps.map((step, index) => (
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

export default function Services() {
  return (
    <LayoutWrapper>
      <ServicesPage />
    </LayoutWrapper>
  )
}
