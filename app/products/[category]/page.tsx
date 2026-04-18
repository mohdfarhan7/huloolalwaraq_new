"use client"

import { useParams, useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import { useTranslation } from "react-i18next"
import { Download, ArrowLeft } from "lucide-react"
import productsData from "@/data/products.json"
import QuoteForm from "@/components/QuoteForm"

export default function ProductCategoryPage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useTranslation()
  const category = params.category as string

  const product = productsData.find((p) => p.slug === category)

  if (!product) {
    return (
      <div className="min-h-screen bg-offwhite">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-deepgreen mb-4">{t("Product Not Found")}</h1>
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
          {t("Back to Products")}
        </button>
      </div>

      {/* Product Header */}
      <section className="py-16 px-4 bg-gradient-to-br from-deepgreen/90 to-deepgreen/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl mb-4">{product.icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold text-kraft mb-4">{product.name}</h1>
          <p className="text-xl text-offwhite max-w-3xl">{product.details}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-deepgreen/20 to-kraft/20 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-7xl">{product.icon}</div>
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-3xl font-bold text-deepgreen mb-6">{t("Product Specifications")}</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-deepgreen mb-3">{t("Materials")}</h3>
                  <ul className="space-y-2">
                    {product.specifications.materials.map((material, index) => (
                      <li key={index} className="flex items-center gap-3 text-steel">
                        <div className="w-2 h-2 bg-kraft rounded-full"></div>
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-deepgreen mb-3">{t("Available Sizes")}</h3>
                  <ul className="space-y-2">
                    {product.specifications.sizes.map((size, index) => (
                      <li key={index} className="flex items-center gap-3 text-steel">
                        <div className="w-2 h-2 bg-kraft rounded-full"></div>
                        {size}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-deepgreen mb-3">{t("Key Features")}</h3>
                  <ul className="space-y-2">
                    {product.specifications.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-steel">
                        <div className="w-2 h-2 bg-kraft rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="mt-8 flex items-center gap-2 px-6 py-3 bg-kraft text-deepgreen rounded-lg font-semibold hover:bg-kraft/90 transition-all duration-300">
                <Download className="w-5 h-5" />
                {t("Download Brochure")}
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-deepgreen/10 to-kraft/10 rounded-2xl p-12 text-center border border-kraft/30">
            <h2 className="text-3xl font-bold text-deepgreen mb-4">{t("Interested in This Product?")}</h2>
            <p className="text-steel mb-6 max-w-2xl mx-auto">
              {t("Get detailed information, samples, or a custom quote from our experts.")}
            </p>
            <button
              onClick={() => router.push("/#quote")}
              className="px-8 py-4 bg-deepgreen text-kraft rounded-lg font-bold text-lg hover:bg-deepgreen/90 transition-all duration-300"
            >
              {t("Request a Quote")}
            </button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deepgreen mb-4">{t("Get Your Quote")}</h2>
            <p className="text-steel">{t("Fill the form below to receive a personalized quote for this product")}</p>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-kraft/20">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  )
}
