"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  requirement: string
}

export default function QuoteForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirement: "",
      })
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
          {t("Thank you! We will contact you soon.")}
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-deepgreen mb-2">
          {t("Full Name")}
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder={t("Your Full Name")}
          className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:outline-none focus:border-kraft/80 transition-all duration-200"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-deepgreen mb-2">
          {t("Company Name")}
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          placeholder={t("Your Company Name")}
          className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:outline-none focus:border-kraft/80 transition-all duration-200"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-deepgreen mb-2">
            {t("Email Address")}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t("your.email@company.com")}
            className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:outline-none focus:border-kraft/80 transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-deepgreen mb-2">
            {t("Phone Number")}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder={t("+966 53 7447 999")}
            className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:outline-none focus:border-kraft/80 transition-all duration-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-deepgreen mb-2">
          {t("Your Requirement")}
        </label>
        <textarea
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          required
          placeholder={t("Describe your packaging needs...")}
          rows={4}
          className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:outline-none focus:border-kraft/80 transition-all duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-kraft text-deepgreen rounded-lg font-bold text-lg shadow-lg hover:bg-kraft/90 transition-all duration-300 transform hover:scale-105"
      >
        {t("Request a Quote")}
      </button>

      <p className="text-xs text-steel text-center">
        {t(
          "By submitting this form, you agree to our Terms of Service and Privacy Policy."
        )}
      </p>
    </form>
  )
}
