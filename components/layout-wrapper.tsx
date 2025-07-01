"use client"

import type React from "react"

import { useState, createContext, useContext } from "react"
import Navigation from "./navigation"
import Footer from "./footer"

type Language = "en" | "fr"

interface LanguageContextType {
  currentLang: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: "en",
  setLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [currentLang, setCurrentLang] = useState<Language>("en")

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage: setCurrentLang }}>
      <div className="min-h-screen flex flex-col">
        <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />
        <main className="flex-1">{children}</main>
        <Footer currentLang={currentLang} />
      </div>
    </LanguageContext.Provider>
  )
}
