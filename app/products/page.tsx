"use client"

import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import { useTranslation } from "react-i18next"
import ProductCategoryCard from "@/components/ProductCategoryCard"
import productsData from "@/data/products.json"

export default function ProductsPage() {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-offwhite via-kraft/5 to-offwhite">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-deepgreen/90 to-deepgreen/70">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-kraft mb-6">
            {t("Our Product Categories")}
          </h1>
          <p className="text-xl text-offwhite max-w-3xl mx-auto">
            {t(
              "Explore our comprehensive range of packaging solutions designed for various industries and applications"
            )}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCategoryCard
                key={product.id}
                id={product.id}
                name={product.name}
                slug={product.slug}
                description={product.description}
                icon={product.icon}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/90 to-deepgreen/70">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-8">
            {t("Need a Custom Solution?")}
          </h2>
          <p className="text-xl text-offwhite mb-8">
            {t(
              "Contact us to discuss your specific packaging requirements and get a personalized quote"
            )}
          </p>
          <button
            onClick={() => router.push("/#quote")}
            className="px-8 py-4 bg-kraft text-deepgreen rounded-xl font-bold text-lg shadow-lg hover:bg-kraft/90 transition-all duration-300 transform hover:scale-105"
          >
            {t("Request a Quote")}
          </button>
        </div>
      </section>
    </div>
  )
}
