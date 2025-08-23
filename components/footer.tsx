"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

interface FooterProps {
  currentLang: "en" | "fr"
}

const translations = {
  en: {
    company: "Company",
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    legal: "Legal Notice",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    getInTouch: "Get in Touch",
    email: "hello@mizatech.com",
    phone: "+1 (555) 123-4567",
    address: "Tech District, Innovation City",
    rights: "All rights reserved.",
    tagline: "Building the future, one line of code at a time.",
  },
  fr: {
    company: "Entreprise",
    home: "Accueil",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    legal: "Mentions Légales",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'Utilisation",
    getInTouch: "Nous contacter",
    email: "hello@mizatech.com",
    phone: "+1 (555) 123-4567",
    address: "Quartier Tech, Ville Innovation",
    rights: "Tous droits réservés.",
    tagline: "Construire l'avenir, une ligne de code à la fois.",
  },
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/mizatech-logo.png"
                alt="Mizatech Logo"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="text-lg font-bold">Mizatech</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{t.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold">{t.company}</h3>
            <div className="flex flex-col space-y-1">
              <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                {t.home}
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                {t.services}
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                {t.about}
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                {t.contact}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold">{t.getInTouch}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm">{t.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm">{t.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm">{t.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <Link href="/legal" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              {t.legal}
            </Link>
            <Link href="/legal#privacy" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              {t.privacy}
            </Link>
            <Link href="/legal#terms" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              {t.terms}
            </Link>
          </div>
          <p className="text-gray-400 text-sm text-center">© {new Date().getFullYear()} Mizatech. {t.rights}</p>
        </div>
      </div>
    </footer>
  )
}
