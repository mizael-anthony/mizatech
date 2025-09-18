"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LegalNavigationProps {
  navigationTitle: string
  sections: {
    company: string
    terms: string
    privacy: string
  }
}

export default function LegalNavigation({ navigationTitle, sections }: LegalNavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 120
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <Card className="border-0 shadow-lg rounded-xl sticky top-24">
      <CardHeader className="p-6">
        <CardTitle className="text-lg font-bold text-gray-900">{navigationTitle}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <nav className="space-y-3">
          <button
            onClick={() => scrollToSection("company-info")}
            className="block w-full text-left text-gray-600 hover:text-orange-600 transition-colors text-sm py-2 px-3 rounded-lg hover:bg-orange-50"
          >
            {sections.company}
          </button>
          <button
            onClick={() => scrollToSection("terms")}
            className="block w-full text-left text-gray-600 hover:text-orange-600 transition-colors text-sm py-2 px-3 rounded-lg hover:bg-orange-50"
          >
            {sections.terms}
          </button>
          <button
            onClick={() => scrollToSection("privacy")}
            className="block w-full text-left text-gray-600 hover:text-orange-600 transition-colors text-sm py-2 px-3 rounded-lg hover:bg-orange-50"
          >
            {sections.privacy}
          </button>
        </nav>
      </CardContent>
    </Card>
  )
}