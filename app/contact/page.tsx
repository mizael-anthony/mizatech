import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import LayoutWrapper from "@/components/layout-wrapper"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

const translations = {
  en: {
    hero: {
      title: "Get in Touch",
      subtitle: "Ready to start your project? Let's discuss how we can help bring your vision to life.",
    },
    form: {
      title: "Request a Quote",
      subtitle: "Fill out the form below and we'll get back to you within 24 hours.",
      name: "Full Name",
      namePlaceholder: "Enter your full name",
      email: "Email Address",
      emailPlaceholder: "Enter your email address",
      company: "Company Name",
      companyPlaceholder: "Enter your company name",
      projectType: "Project Type",
      projectTypePlaceholder: "Select project type",
      projectTypes: {
        web: "Web Development",
        mobile: "Mobile Development",
        api: "API Development",
        ai: "AI Integration",
        other: "Other",
      },
      message: "Project Details",
      messagePlaceholder: "Tell us about your project requirements, goals, and timeline...",
      submit: "Send Message",
      submitting: "Sending...",
      success: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      error: "Sorry, there was an error sending your message. Please try again.",
    },
    schedule: {
      title: "Book Your Free Consultation",
      subtitle: "Choose a time that works best for you. All consultations are completely free with no obligations.",
      bookNow: "Schedule Now",
      duration: "30 minutes",
      price: "Free consultation",
    },
  },
  fr: {
    hero: {
      title: "Contactez-nous",
      subtitle:
        "Prêt à démarrer votre projet ? Discutons de la façon dont nous pouvons vous aider à concrétiser votre vision.",
    },
    form: {
      title: "Demander un Devis",
      subtitle: "Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.",
      name: "Nom Complet",
      namePlaceholder: "Entrez votre nom complet",
      email: "Adresse Email",
      emailPlaceholder: "Entrez votre adresse email",
      company: "Nom de l'Entreprise",
      companyPlaceholder: "Entrez le nom de votre entreprise",
      projectType: "Type de Projet",
      projectTypePlaceholder: "Sélectionnez le type de projet",
      projectTypes: {
        web: "Développement Web",
        mobile: "Développement Mobile",
        api: "Développement d'API",
        ai: "Intégration IA",
        other: "Autre",
      },
      message: "Détails du Projet",
      messagePlaceholder: "Parlez-nous des exigences, objectifs et délais de votre projet...",
      submit: "Envoyer le Message",
      submitting: "Envoi en cours...",
      success: "Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les 24 heures.",
      error: "Désolé, il y a eu une erreur lors de l'envoi de votre message. Veuillez réessayer.",
    },
    schedule: {
      title: "Réservez Votre Consultation Gratuite",
      subtitle: "Choisissez une heure qui vous convient le mieux. Toutes les consultations sont entièrement gratuites et sans obligation.",
      bookNow: "Planifier Maintenant",
      duration: "30 minutes",
      price: "Consultation gratuite",
    },
  },
}

import ContactPageClient from "@/components/contact-page-client"

function ContactPage() {
  return <ContactPageClient translations={translations} />
}

export default function Contact() {
  return (
    <LayoutWrapper>
      <ContactPage />
    </LayoutWrapper>
  )
}
