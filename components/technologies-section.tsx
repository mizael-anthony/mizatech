"use client"

import Image from "next/image"
import { useLanguage } from "@/components/layout-wrapper"

interface TechnologiesTranslations {
  title: string
  subtitle: string
}

interface TechnologiesSectionProps {
  translations: {
    en: TechnologiesTranslations
    fr: TechnologiesTranslations
  }
}

const technologiesByCategory = {
  Web: [
    { 
      name: "NextJS", 
      icon: "https://go-skill-icons.vercel.app/api/icons?i=nextjs",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      docsUrl: "https://nextjs.org"
    },
    { 
      name: "Django", 
      icon: "https://go-skill-icons.vercel.app/api/icons?i=django",
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      docsUrl: "https://www.djangoproject.com"
    },
        { 
      name: "Ruby on Rails", 
      icon: "https://go-skill-icons.vercel.app/api/icons?i=rails",
      color: "bg-red-50 border-red-200 hover:bg-red-100",
      docsUrl: "https://rubyonrails.org"
    },
  ],
  Mobile: [
    { 
      name: "React Native", 
      icon: "https://go-skill-icons.vercel.app/api/icons?i=react",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      docsUrl: "https://reactnative.dev"
    },
    {
      name: "Expo",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=expo",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      docsUrl: "https://expo.dev"
    }
  ],
  API: [
    { 
      name: "FastAPI", 
      icon: "https://go-skill-icons.vercel.app/api/icons?i=fastapi",
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      docsUrl: "https://fastapi.tiangolo.com"
    },
    { 
      name: "GraphQL", 
      icon: "https://go-skill-icons.vercel.app/api/icons?i=graphql",
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      docsUrl: "https://graphql.org"
    },
  ],
  Database: [
    { 
      name: "PostgreSQL", 
      icon: "https://go-skill-icons.vercel.app/api/icons?i=postgresql",
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
      docsUrl: "https://www.postgresql.org"
    },
    { 
      name: "Supabase", 
      icon: "https://go-skill-icons.vercel.app/api/icons?i=supabase",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      docsUrl: "https://supabase.com"
    },
  ],
  Cloud: [
    { 
      name: "Vercel",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=vercel",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      docsUrl: "https://vercel.com"
    },
    {
      name: "Cloudflare",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=cloudflare",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      docsUrl: "https://www.cloudflare.com"
    }
  ],
  Collaboration: [
    { 
      name: "Notion", 
      icon: "https://go-skill-icons.vercel.app/api/icons?i=notion",
      color: "bg-pink-50 border-pink-200 hover:bg-pink-100",
      docsUrl: "https://www.notion.so"
    },
    {
      name: "Figma",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=figma",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      docsUrl: "https://www.figma.com"
    },
    {
      name: "Discord",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=discord",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      docsUrl: "https://discord.com"
    },
  ],
}

export default function TechnologiesSection({ translations }: TechnologiesSectionProps) {
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologiesByCategory).map(([category, techs]) => (
            <div key={category} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category}</h3>
                <div className="w-12 h-1 bg-orange-600 mx-auto rounded-full"></div>
              </div>
              <div className="space-y-4">
                {techs.map((tech, index) => (
                  <a
                    key={index}
                    href={tech.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-4 flex items-center space-x-4 hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-300"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={tech.icon}
                        alt={`${tech.name} logo`}
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                    </div>
                    <div className="flex-shrink-0 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}