"use client"

import React, { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContactFormProps {
  t: {
    form: {
      title: string
      subtitle: string
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      company: string
      companyPlaceholder: string
      projectType: string
      projectTypePlaceholder: string
      projectTypes: {
        web: string
        mobile: string
        api: string
        ai: string
        other: string
      }
      message: string
      messagePlaceholder: string
      submit: string
      submitting: string
      success: string
      error: string
    }
  }
}

export default function ContactForm({ t }: ContactFormProps) {
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

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
  )
}