"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  currentLang: "en" | "fr"
  onLanguageChange: (lang: "en" | "fr") => void
}

const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    legal: "Legal",
    schedule: "Schedule Call",
    getQuote: "Get a Quote",
  },
  fr: {
    home: "Accueil",
    services: "Services",
    about: "À propos",
    blog: "Blog",
    contact: "Contact",
    legal: "Légal",
    schedule: "Planifier Appel",
    getQuote: "Obtenir un devis",
  },
}

export default function Navigation({ currentLang, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations[currentLang]

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/mizatech-logo.png"
              alt="Mizatech Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-900">Mizatech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              {t.home}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              {t.services}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              {t.about}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              {t.contact}
            </Link>
          </div>

          {/* Language Switcher & CTAs */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(currentLang === "en" ? "fr" : "en")}
              className="flex items-center space-x-1 text-gray-600 hover:text-orange-600"
              aria-label={`Switch to ${currentLang === "en" ? "French" : "English"}`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{currentLang === "en" ? "FR" : "EN"}</span>
            </Button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 rounded-lg px-4 py-2 font-medium"
            >
              <Link href="/schedule">{t.schedule}</Link>
            </Button>

            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-6 py-2 font-medium shadow-sm"
            >
              <Link href="/contact">{t.getQuote}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(currentLang === "en" ? "fr" : "en")}
              className="flex items-center space-x-1 text-gray-600"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{currentLang === "en" ? "FR" : "EN"}</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
                {t.home}
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-600 font-medium">
                {t.services}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">
                {t.about}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium">
                {t.contact}
              </Link>
              <Button
                asChild
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 rounded-lg w-fit px-6 py-2 font-medium"
              >
                <Link href="/schedule">{t.schedule}</Link>
              </Button>
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg w-fit px-6 py-2 font-medium"
              >
                <Link href="/contact">{t.getQuote}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
