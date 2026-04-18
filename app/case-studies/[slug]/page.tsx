"use client"

import { useParams, useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { ArrowLeft, TrendingUp } from "lucide-react"
import caseStudiesData from "@/data/case-studies.json"
import QuoteForm from "@/components/QuoteForm"

export default function CaseStudyDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useTranslation()
  const slug = params.slug as string

  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug)

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-offwhite">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-deepgreen mb-4">{t("Case Study Not Found")}</h1>
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
          {t("Back to Case Studies")}
        </button>
      </div>

      {/* Case Study Header */}
      <section className="py-16 px-4 bg-gradient-to-br from-deepgreen/90 to-deepgreen/70">
        <div className="max-w-7xl mx-auto">
          <span className="text-kraft font-semibold">{caseStudy.industry}</span>
          <h1 className="text-5xl md:text-6xl font-bold text-kraft mt-4 mb-6">
            {caseStudy.title}
          </h1>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-deepgreen/20 to-kraft/10">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.backgroundColor = "#e8dcc8"
              }}
            />
          </div>

          {/* Challenge and Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-deepgreen mb-4">{t("The Challenge")}</h3>
              <p className="text-steel leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-deepgreen mb-4">{t("Our Solution")}</h3>
              <p className="text-steel leading-relaxed">
                {t(
                  "We designed and implemented a custom packaging solution tailored to address the specific challenges while maintaining cost-effectiveness and sustainability."
                )}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-r from-deepgreen/10 to-kraft/10 rounded-2xl p-12 border border-kraft/30 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <TrendingUp className="w-8 h-8 text-deepgreen flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-deepgreen mb-4">{t("Results & Impact")}</h3>
                <p className="text-steel leading-relaxed text-lg">{caseStudy.results}</p>
              </div>
            </div>
          </div>

          {/* Before/After */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <h4 className="text-xl font-bold text-deepgreen mb-4">{t("Before")}</h4>
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                <Image
                  src={caseStudy.beforeImage}
                  alt="Before"
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.backgroundColor = "#d1d5db"
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-deepgreen mb-4">{t("After")}</h4>
              <div className="relative h-64 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl flex items-center justify-center">
                <Image
                  src={caseStudy.afterImage}
                  alt="After"
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.backgroundColor = "#dcfce7"
                  }}
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-deepgreen/10 to-kraft/10 rounded-2xl p-8 text-center border border-kraft/30 mb-12">
            <h3 className="text-2xl font-bold text-deepgreen mb-3">
              {t("Ready to Start Your Success Story?")}
            </h3>
            <p className="text-steel mb-6">
              {t("Let's create a custom packaging solution for your business")}
            </p>
            <button
              onClick={() => router.push("/#quote")}
              className="px-8 py-3 bg-deepgreen text-kraft rounded-lg font-bold hover:bg-deepgreen/90 transition-all duration-300"
            >
              {t("Get Your Quote")}
            </button>
          </div>

          {/* Quote Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-deepgreen mb-4">{t("Request a Quote")}</h2>
              <p className="text-steel">
                {t(
                  "Tell us about your project and get a customized quote from our experts"
                )}
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
