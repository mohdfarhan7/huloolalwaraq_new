"use client"

import Image from "next/image"
import { Factory, Zap, Cog, TrendingUp } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ManufacturingSection() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Factory,
      title: t("State-of-the-Art Facilities"),
      description: t("Advanced manufacturing equipment with precision engineering for consistent quality"),
    },
    {
      icon: Zap,
      title: t("High Production Capacity"),
      description: t("150,000+ MT annual production capacity to meet large-scale demands"),
    },
    {
      icon: Cog,
      title: t("Quality Control"),
      description: t("Rigorous testing and inspection at every stage of production"),
    },
    {
      icon: TrendingUp,
      title: t("Continuous Innovation"),
      description: t("Investment in R&D to stay ahead of industry standards"),
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">
            {t("Our Manufacturing Excellence")}
          </h2>
          <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed">
            {t(
              "We operate world-class manufacturing facilities equipped with the latest technology and staffed by industry experts"
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-96 bg-gradient-to-br from-deepgreen/20 to-kraft/20 rounded-2xl overflow-hidden">
            <Image
              src="/manufacturing/facility.jpg"
              alt="Manufacturing Facility"
              fill
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.backgroundColor = "#e8dcc8"
              }}
            />
          </div>
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-kraft/20">
                      <Icon className="h-6 w-6 text-deepgreen" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-deepgreen mb-2">{feature.title}</h3>
                    <p className="text-steel leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center border border-kraft/20 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl font-bold text-deepgreen mb-2">150K+</div>
            <p className="text-steel font-semibold">{t("MT Annual Capacity")}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border border-kraft/20 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl font-bold text-deepgreen mb-2">50+</div>
            <p className="text-steel font-semibold">{t("Expert Staff Members")}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border border-kraft/20 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl font-bold text-deepgreen mb-2">99.9%</div>
            <p className="text-steel font-semibold">{t("Quality Compliance Rate")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
