"use client"

import Navbar from "@/components/navbar"
import { useTranslation } from "react-i18next"
import IndustrySolutionCard from "@/components/IndustrySolutionCard"
import industriesData from "@/data/industries.json"

export default function IndustriesPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-offwhite via-kraft/5 to-offwhite">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-deepgreen/90 to-deepgreen/70">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-kraft mb-6">
            {t("Industry Solutions")}
          </h1>
          <p className="text-xl text-offwhite max-w-3xl mx-auto">
            {t(
              "Specialized packaging solutions tailored for your industry's unique requirements"
            )}
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {industriesData.map((industry) => (
              <IndustrySolutionCard
                key={industry.id}
                id={industry.id}
                name={industry.name}
                slug={industry.slug}
                icon={industry.icon}
                description={industry.description}
                useCases={industry.useCases}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/90 to-deepgreen/70">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-8">
            {t("Looking for Industry-Specific Solutions?")}
          </h2>
          <p className="text-xl text-offwhite mb-8">
            {t(
              "Our experts can design custom packaging solutions tailored to your industry and specific needs."
            )}
          </p>
          <button className="px-8 py-4 bg-kraft text-deepgreen rounded-xl font-bold text-lg hover:bg-kraft/90 transition-all duration-300">
            {t("Request a Consultation")}
          </button>
        </div>
      </section>
    </div>
  )
}
