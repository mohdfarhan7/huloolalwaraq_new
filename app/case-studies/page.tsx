"use client"

import Navbar from "@/components/navbar"
import { useTranslation } from "react-i18next"
import CaseStudyCard from "@/components/CaseStudyCard"
import caseStudiesData from "@/data/case-studies.json"

export default function CaseStudiesPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-offwhite via-kraft/5 to-offwhite">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-deepgreen/90 to-deepgreen/70">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-kraft mb-6">
            {t("Success Stories")}
          </h1>
          <p className="text-xl text-offwhite max-w-3xl mx-auto">
            {t(
              "Real-world packaging solutions that transformed businesses across industries"
            )}
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudiesData.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                id={caseStudy.id}
                slug={caseStudy.slug}
                title={caseStudy.title}
                industry={caseStudy.industry}
                image={caseStudy.image}
                challenge={caseStudy.challenge}
                results={caseStudy.results}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/90 to-deepgreen/70">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-8">
            {t("Ready for Your Success Story?")}
          </h2>
          <p className="text-xl text-offwhite mb-8">
            {t(
              "Let's create a custom packaging solution that drives your business growth"
            )}
          </p>
          <button className="px-8 py-4 bg-kraft text-deepgreen rounded-xl font-bold text-lg hover:bg-kraft/90 transition-all duration-300">
            {t("Start Your Project")}
          </button>
        </div>
      </section>
    </div>
  )
}
