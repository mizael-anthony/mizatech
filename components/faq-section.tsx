"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/components/layout-wrapper"

interface FAQItem {
  question: string
  answer: string
}

interface FAQTranslations {
  title: string
  subtitle: string
  items: FAQItem[]
}

interface FAQSectionProps {
  translations: {
    en: FAQTranslations
    fr: FAQTranslations
  }
}

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex w-full items-center justify-between py-6 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors duration-200"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-orange-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-orange-600 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 px-2">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection({ translations }: FAQSectionProps) {
  const { currentLang } = useLanguage()
  const t = translations[currentLang]
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  if (!t || !t.title || !t.items) {
    return null
  }

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200">
            <div className="divide-y divide-gray-200 px-8">
              {t.items.map((item: FAQItem, index: number) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItems.includes(index)}
                  onToggle={() => toggleItem(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}