"use client"

import { useParams, useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { ArrowLeft, CheckCircle } from "lucide-react"
import industriesData from "@/data/industries.json"
import QuoteForm from "@/components/QuoteForm"

export default function IndustryDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useTranslation()
  const slug = params.slug as string

  const industry = industriesData.find((ind) => ind.slug === slug)

  if (!industry) {
    return (
      <div className="min-h-screen bg-offwhite">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-deepgreen mb-4">{t("Industry Not Found")}</h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-kraft text-deepgreen rounded-lg font-semibold hover:bg-kraft/90 transition-all duration-300"
          >
            {t("Go Back")}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-offwhite via-kraft/5 to-offwhite">
      <Navbar />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-deepgreen font-semibold hover:text-kraft transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          {t("Back to Industries")}
        </button>
      </div>

      {/* Industry Header */}
      <section className="py-16 px-4 bg-gradient-to-br from-deepgreen/90 to-deepgreen/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-6xl mb-4">{industry.icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold text-kraft mb-4">{industry.name}</h1>
          <p className="text-xl text-offwhite max-w-3xl">{industry.description}</p>
        </div>
      </section>

      {/* Industry Details */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative h-96 bg-gradient-to-br from-deepgreen/20 to-kraft/20 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.backgroundColor = "#e8dcc8"
                }}
              />
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-3xl font-bold text-deepgreen mb-8">{t("Key Use Cases")}</h2>
              <div className="space-y-4">
                {industry.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-kraft flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-steel leading-relaxed">{useCase}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => router.push("/#quote")}
                className="mt-8 px-8 py-4 bg-deepgreen text-kraft rounded-lg font-bold hover:bg-deepgreen/90 transition-all duration-300"
              >
                {t("Get Custom Solution")}
              </button>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-kraft/10 to-deepgreen/10 rounded-2xl p-12 mb-16 border border-kraft/30">
            <h2 className="text-3xl font-bold text-deepgreen mb-8 text-center">
              {t("Why Choose Our Solutions?")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-lg font-bold text-deepgreen mb-2">
                  {t("Industry Expertise")}
                </h3>
                <p className="text-steel">
                  {t(
                    "Deep understanding of your industry's specific packaging requirements"
                  )}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-lg font-bold text-deepgreen mb-2">{t("Quality Assurance")}</h3>
                <p className="text-steel">
                  {t("Certified quality standards and compliance with industry regulations")}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-lg font-bold text-deepgreen mb-2">
                  {t("Custom Solutions")}
                </h3>
                <p className="text-steel">
                  {t("Tailored packaging designs optimized for your unique needs")}
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deepgreen mb-4">{t("Ready to Get Started?")}</h2>
              <p className="text-steel">
                {t("Request a customized quote for your industry's packaging needs")}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-kraft/20">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
