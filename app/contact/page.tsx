"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import LayoutWrapper, { useLanguage } from "@/components/layout-wrapper"

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
    contact: {
      title: "Contact Information",
      email: "hello@mizatech.com",
      phone: "+1 (555) 123-4567",
      address: "Tech District, Innovation City",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
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
    contact: {
      title: "Informations de Contact",
      email: "hello@mizatech.com",
      phone: "+1 (555) 123-4567",
      address: "Quartier Tech, Ville Innovation",
      hours: "Lundi - Vendredi : 9h00 - 18h00",
    },
  },
}

function ContactPage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">{t.form.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{t.form.subtitle}</p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  {submitStatus === "success" ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">{t.form.success}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                            {t.form.name} *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder={t.form.namePlaceholder}
                            className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            {t.form.email} *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder={t.form.emailPlaceholder}
                            className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                          {t.form.company}
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder={t.form.companyPlaceholder}
                          className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="projectType" className="text-sm font-medium text-gray-700">
                            {t.form.projectType} *
                          </Label>
                          <Select
                            value={formData.projectType}
                            onValueChange={(value) => handleInputChange("projectType", value)}
                            required
                          >
                            <SelectTrigger className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                              <SelectValue placeholder={t.form.projectTypePlaceholder} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="web">{t.form.projectTypes.web}</SelectItem>
                              <SelectItem value="mobile">{t.form.projectTypes.mobile}</SelectItem>
                              <SelectItem value="api">{t.form.projectTypes.api}</SelectItem>
                              <SelectItem value="ai">{t.form.projectTypes.ai}</SelectItem>
                              <SelectItem value="other">{t.form.projectTypes.other}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                          {t.form.message} *
                        </Label>
                        <Textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder={t.form.messagePlaceholder}
                          className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                        />
                      </div>

                      {submitStatus === "error" && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-600 text-sm">{t.form.error}</p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-8 py-4 font-semibold shadow-lg disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            {t.form.submitting}
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="w-4 h-4 mr-2" />
                            {t.form.submit}
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold text-gray-900">{t.contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">{t.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">{t.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">{t.contact.address}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      <strong>Business Hours:</strong>
                      <br />
                      {t.contact.hours}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Contact() {
  return (
    <LayoutWrapper>
      <ContactPage />
    </LayoutWrapper>
  )
}
