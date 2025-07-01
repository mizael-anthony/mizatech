"use client"

import Link from "next/link"
import { ArrowRight, Target, Eye, Award, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import LayoutWrapper, { useLanguage } from "@/components/layout-wrapper"

const translations = {
  en: {
    hero: {
      title: "About Mizatech",
      subtitle:
        "We are passionate technologists dedicated to transforming businesses through innovative digital solutions.",
    },
    founder: {
      title: "Meet Our Founder",
      name: "Mizael",
      role: "Founder & Lead Developer",
      bio: "With over 5 years of experience in software development, Mizael founded Mizatech with a vision to help businesses leverage cutting-edge technology to achieve their goals. His expertise spans full-stack development, AI integration, and scalable system architecture.",
      quote:
        '"Technology should empower businesses, not complicate them. That\'s why we focus on creating solutions that are both powerful and intuitive."',
    },
    values: {
      title: "Our Values",
      subtitle: "The principles that guide everything we do",
      innovation: {
        title: "Innovation",
        description: "We stay at the forefront of technology, constantly exploring new solutions and methodologies.",
      },
      quality: {
        title: "Quality",
        description:
          "We deliver exceptional results through rigorous testing, best practices, and attention to detail.",
      },
      collaboration: {
        title: "Collaboration",
        description: "We work closely with our clients as partners, ensuring transparent communication throughout.",
      },
    },
    mission: {
      title: "Our Mission",
      description:
        "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To be the trusted technology partner for businesses worldwide, known for delivering transformative digital solutions that exceed expectations.",
    },
    timeline: {
      title: "Our Journey",
      subtitle: "Key milestones in our growth and evolution",
      events: [
        {
          year: "2019",
          title: "Company Founded",
          description: "Mizatech was established with a focus on web development and digital solutions.",
        },
        {
          year: "2020",
          title: "Mobile Expansion",
          description: "Expanded services to include native and cross-platform mobile development.",
        },
        {
          year: "2022",
          title: "AI Integration",
          description: "Added artificial intelligence and machine learning capabilities to our service portfolio.",
        },
        {
          year: "2023",
          title: "API Specialization",
          description: "Became specialists in API development and system integrations.",
        },
        {
          year: "2024",
          title: "Global Reach",
          description: "Serving clients worldwide with a focus on scalable, enterprise-grade solutions.",
        },
      ],
    },
    cta: {
      title: "Let's Work Together",
      subtitle: "Ready to transform your business with innovative technology solutions?",
      button: "Start Your Project",
    },
  },
  fr: {
    hero: {
      title: "À Propos de Mizatech",
      subtitle:
        "Nous sommes des technologues passionnés dédiés à transformer les entreprises grâce à des solutions numériques innovantes.",
    },
    founder: {
      title: "Rencontrez Notre Fondateur",
      name: "Mizael",
      role: "Fondateur & Développeur Principal",
      bio: "Avec plus de 5 ans d'expérience en développement logiciel, Mizael a fondé Mizatech avec la vision d'aider les entreprises à exploiter la technologie de pointe pour atteindre leurs objectifs. Son expertise couvre le développement full-stack, l'intégration IA et l'architecture de systèmes évolutifs.",
      quote:
        '"La technologie devrait autonomiser les entreprises, pas les compliquer. C\'est pourquoi nous nous concentrons sur la création de solutions à la fois puissantes et intuitives."',
    },
    values: {
      title: "Nos Valeurs",
      subtitle: "Les principes qui guident tout ce que nous faisons",
      innovation: {
        title: "Innovation",
        description:
          "Nous restons à la pointe de la technologie, explorant constamment de nouvelles solutions et méthodologies.",
      },
      quality: {
        title: "Qualité",
        description:
          "Nous livrons des résultats exceptionnels grâce à des tests rigoureux, aux meilleures pratiques et à l'attention aux détails.",
      },
      collaboration: {
        title: "Collaboration",
        description:
          "Nous travaillons étroitement avec nos clients en tant que partenaires, assurant une communication transparente.",
      },
    },
    mission: {
      title: "Notre Mission",
      description:
        "Autonomiser les entreprises avec des solutions technologiques innovantes qui stimulent la croissance, l'efficacité et l'avantage concurrentiel à l'ère numérique.",
    },
    vision: {
      title: "Notre Vision",
      description:
        "Être le partenaire technologique de confiance pour les entreprises du monde entier, reconnu pour livrer des solutions numériques transformatrices qui dépassent les attentes.",
    },
    timeline: {
      title: "Notre Parcours",
      subtitle: "Étapes clés de notre croissance et évolution",
      events: [
        {
          year: "2019",
          title: "Fondation de l'Entreprise",
          description: "Mizatech a été établie avec un focus sur le développement web et les solutions numériques.",
        },
        {
          year: "2020",
          title: "Expansion Mobile",
          description: "Expansion des services pour inclure le développement mobile natif et multiplateforme.",
        },
        {
          year: "2022",
          title: "Intégration IA",
          description:
            "Ajout des capacités d'intelligence artificielle et d'apprentissage automatique à notre portefeuille de services.",
        },
        {
          year: "2023",
          title: "Spécialisation API",
          description: "Devenus spécialistes du développement d'API et des intégrations de systèmes.",
        },
        {
          year: "2024",
          title: "Portée Mondiale",
          description:
            "Service aux clients du monde entier avec un focus sur les solutions évolutives de niveau entreprise.",
        },
      ],
    },
    cta: {
      title: "Travaillons Ensemble",
      subtitle: "Prêt à transformer votre entreprise avec des solutions technologiques innovantes ?",
      button: "Démarrer Votre Projet",
    },
  },
}

function AboutPage() {
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

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.timeline.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.timeline.subtitle}</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            <div className="space-y-12">
              {t.timeline.events.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-lg rounded-xl">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-orange-600 mb-2">{event.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
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

export default function About() {
  return (
    <LayoutWrapper>
      <AboutPage />
    </LayoutWrapper>
  )
}
