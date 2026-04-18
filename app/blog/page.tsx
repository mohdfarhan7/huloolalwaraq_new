"use client"

import Navbar from "@/components/navbar"
import { useTranslation } from "react-i18next"
import BlogCard from "@/components/BlogCard"
import blogData from "@/data/blog.json"

export default function BlogPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-offwhite via-kraft/5 to-offwhite">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-deepgreen/90 to-deepgreen/70">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-kraft mb-6">
            {t("Blog & News")}
          </h1>
          <p className="text-xl text-offwhite max-w-3xl mx-auto">
            {t(
              "Stay updated with the latest trends, insights, and innovations in packaging industry"
            )}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                slug={post.slug}
                title={post.title}
                date={post.date}
                category={post.category}
                image={post.image}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/90 to-deepgreen/70">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-kraft mb-4">{t("Subscribe to Our Newsletter")}</h2>
          <p className="text-offwhite mb-8">
            {t("Get the latest packaging news and insights delivered to your inbox")}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              placeholder={t("Enter your email")}
              required
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-kraft text-deepgreen rounded-lg font-bold hover:bg-kraft/90 transition-all duration-300"
            >
              {t("Subscribe")}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
