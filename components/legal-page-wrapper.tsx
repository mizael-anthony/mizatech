"use client"

import { useLanguage } from "@/components/layout-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LegalNavigation from "@/components/legal-navigation"
import { Shield, Eye, FileText, Scale } from "lucide-react"
import { COMPANY_INFO } from "@/lib/company-constants"

const translations = {
  en: {
    hero: {
      title: "Legal Notice",
      subtitle: "Important legal information, terms of service, and privacy policies for Mizatech services.",
    },
    navigation: {
      title: "Quick Navigation",
      company: "Company Information",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
    },
    companyInfo: {
      title: "Company Information",
      content: {
        name: `Company Name : ${COMPANY_INFO.fullName}`,
        registration: `Company Number : ${COMPANY_INFO.registration}`,
        address: `Registered Address : ${COMPANY_INFO.address}`,
        email: `Email : ${COMPANY_INFO.email}`,
        director: `Managing Director : ${COMPANY_INFO.director}`,
      },
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated: December 2024",
      sections: {
        acceptance: {
          title: "1. Acceptance of Terms",
          content:
            "By accessing and using Mizatech's services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use our services.",
        },
        services: {
          title: "2. Description of Services",
          content:
            "Mizatech provides web development, mobile development, API creation, and AI integration services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.",
        },
        responsibilities: {
          title: "3. User Responsibilities",
          content:
            "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to notify us immediately of any unauthorized use of your account.",
        },
        intellectual: {
          title: "4. Intellectual Property",
          content:
            `All content, features, and functionality of our services are owned by ${COMPANY_INFO.name} and are protected by international copyright, trademark, and other intellectual property laws.`,
        },
        limitation: {
          title: "5. Limitation of Liability",
          content:
            `${COMPANY_INFO.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.`,
        },
        termination: {
          title: "6. Termination",
          content:
            "We may terminate or suspend your account and access to our services immediately, without prior notice, for conduct that we believe violates these terms or is harmful to other users.",
        },
      },
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: December 2024",
      sections: {
        collection: {
          title: "1. Information We Collect",
          content:
            "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, and project details.",
        },
        usage: {
          title: "2. How We Use Your Information",
          content:
            "We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.",
        },
        sharing: {
          title: "3. Information Sharing",
          content:
            "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.",
        },
        security: {
          title: "4. Data Security",
          content:
            "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        retention: {
          title: "5. Data Retention",
          content:
            "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.",
        },
        rights: {
          title: "6. Your Rights",
          content:
            "You have the right to access, update, or delete your personal information. You may also object to or restrict certain processing of your data.",
        },
      },
    },
    cookies: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: December 2024",
      content:
        "We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.",
    },
    disclaimer: {
      title: "Disclaimer",
      content:
        `The information on this website is provided on an 'as is' basis. ${COMPANY_INFO.name} makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information contained on this website.`,
    },
    legalContact: {
      title: "Legal Contact",
      content: "For any legal inquiries or concerns regarding these terms, please contact us at:",
      email: COMPANY_INFO.email,
      address: `Legal Department, ${COMPANY_INFO.name}, ${COMPANY_INFO.address}`,
    },
  },
  fr: {
    hero: {
      title: "Mentions Légales",
      subtitle:
        "Informations légales importantes, conditions d'utilisation et politiques de confidentialité pour les services Mizatech.",
    },
    navigation: {
      title: "Navigation Rapide",
      company: "Informations sur l'Entreprise",
      terms: "Conditions d'Utilisation",
      privacy: "Politique de Confidentialité",
      cookies: "Politique des Cookies",
    },
    companyInfo: {
      title: "Informations sur l'Entreprise",
      content: {
        name: `Nom de l'entreprise : ${COMPANY_INFO.fullName}`,
        registration: `Numéro d'identification : ${COMPANY_INFO.registration}`,
        address: `Adresse du siège : ${COMPANY_INFO.address}`,
        email: `Email : ${COMPANY_INFO.email}`,
        director: `Directeur général : ${COMPANY_INFO.director}`,
      },
    },
    terms: {
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour : Décembre 2024",
      sections: {
        acceptance: {
          title: "1. Acceptation des Conditions",
          content:
            "En accédant et en utilisant les services de Mizatech, vous acceptez et convenez d'être lié par les termes et dispositions de cet accord. Ces conditions s'appliquent à tous les visiteurs, utilisateurs et autres qui accèdent ou utilisent nos services.",
        },
        services: {
          title: "2. Description des Services",
          content:
            "Mizatech fournit des services de développement web, développement mobile, création d'API et intégration IA. Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect de nos services à tout moment.",
        },
        responsibilities: {
          title: "3. Responsabilités de l'Utilisateur",
          content:
            "Les utilisateurs sont responsables du maintien de la confidentialité de leurs informations de compte et de toutes les activités qui se produisent sous leur compte. Vous acceptez de nous notifier immédiatement de toute utilisation non autorisée de votre compte.",
        },
        intellectual: {
          title: "4. Propriété Intellectuelle",
          content:
            `Tout le contenu, les fonctionnalités et la fonctionnalité de nos services appartiennent à ${COMPANY_INFO.name} et sont protégés par les lois internationales sur le droit d'auteur, les marques de commerce et autres propriétés intellectuelles.`,
        },
        limitation: {
          title: "5. Limitation de Responsabilité",
          content:
            `${COMPANY_INFO.name} ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs résultant de votre utilisation de nos services.`,
        },
        termination: {
          title: "6. Résiliation",
          content:
            "Nous pouvons résilier ou suspendre votre compte et l'accès à nos services immédiatement, sans préavis, pour une conduite que nous croyons violer ces conditions ou nuire à d'autres utilisateurs.",
        },
      },
    },
    privacy: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : Décembre 2024",
      sections: {
        collection: {
          title: "1. Informations que Nous Collectons",
          content:
            "Nous collectons les informations que vous nous fournissez directement, comme lorsque vous créez un compte, nous contactez ou utilisez nos services. Cela peut inclure votre nom, adresse e-mail, numéro de téléphone et détails du projet.",
        },
        usage: {
          title: "2. Comment Nous Utilisons Vos Informations",
          content:
            "Nous utilisons les informations que nous collectons pour fournir, maintenir et améliorer nos services, communiquer avec vous et respecter les obligations légales.",
        },
        sharing: {
          title: "3. Partage d'Informations",
          content:
            "Nous ne vendons, n'échangeons ou ne transférons pas vos informations personnelles à des tiers sans votre consentement, sauf comme décrit dans cette politique ou comme requis par la loi.",
        },
        security: {
          title: "4. Sécurité des Données",
          content:
            "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction.",
        },
        retention: {
          title: "5. Conservation des Données",
          content:
            "Nous conservons vos informations personnelles seulement aussi longtemps que nécessaire pour remplir les objectifs décrits dans cette politique de confidentialité, sauf si une période de conservation plus longue est requise par la loi.",
        },
        rights: {
          title: "6. Vos Droits",
          content:
            "Vous avez le droit d'accéder, de mettre à jour ou de supprimer vos informations personnelles. Vous pouvez également vous opposer ou restreindre certains traitements de vos données.",
        },
      },
    },
    cookies: {
      title: "Politique des Cookies",
      lastUpdated: "Dernière mise à jour : Décembre 2024",
      content:
        "Nous utilisons des cookies et des technologies de suivi similaires pour améliorer votre expérience de navigation, analyser le trafic du site et comprendre d'où viennent nos visiteurs. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.",
    },
    disclaimer: {
      title: "Avertissement",
      content:
        `Les informations sur ce site web sont fournies 'en l'état'. ${COMPANY_INFO.name} ne fait aucune déclaration ou garantie de quelque nature que ce soit, expresse ou implicite, concernant l'exhaustivité, l'exactitude, la fiabilité ou la disponibilité des informations contenues sur ce site web.`,
    },
    legalContact: {
      title: "Contact Légal",
      content: "Pour toute demande légale ou préoccupation concernant ces conditions, veuillez nous contacter à :",
      email: COMPANY_INFO.email,
      address: `Département Juridique, ${COMPANY_INFO.name}, ${COMPANY_INFO.address}`,
    },
  },
}

export default function LegalPageWrapper() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <LegalNavigation navigationTitle={t.navigation.title} sections={t.navigation} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Company Information */}
            <section id="company-info">
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{t.companyInfo.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4">
                    <p className="text-gray-700">{t.companyInfo.content.name}</p>
                    <p className="text-gray-700">{t.companyInfo.content.director}</p>
                    <p className="text-gray-700">{t.companyInfo.content.registration}</p>
                    <p className="text-gray-700">{t.companyInfo.content.email}</p>
                    <p className="text-gray-700">{t.companyInfo.content.address}</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Terms of Service */}
            <section id="terms">
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Scale className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">{t.terms.title}</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">{t.terms.lastUpdated}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-8">
                  {Object.entries(t.terms.sections).map(([key, section]) => (
                    <div key={key}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* Privacy Policy */}
            <section id="privacy">
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">{t.privacy.title}</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">{t.privacy.lastUpdated}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-8">
                  {Object.entries(t.privacy.sections).map(([key, section]) => (
                    <div key={key}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* Cookie Policy */}
            <section id="cookies">
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">{t.cookies.title}</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">{t.cookies.lastUpdated}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-gray-700 leading-relaxed">{t.cookies.content}</p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}