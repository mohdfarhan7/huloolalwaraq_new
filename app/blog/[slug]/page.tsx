"use client"

import { useParams, useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { Calendar, ArrowLeft, Share2 } from "lucide-react"
import blogData from "@/data/blog.json"

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useTranslation()
  const slug = params.slug as string

  const post = blogData.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-offwhite">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-deepgreen mb-4">{t("Post Not Found")}</h1>
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
      <div className="max-w-4xl mx-auto px-4 py-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-deepgreen font-semibold hover:text-kraft transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          {t("Back to Blog")}
        </button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-deepgreen/20 to-kraft/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.backgroundColor = "#1a4d2e"
            }}
          />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-steel">
          <span className="px-4 py-2 bg-kraft/20 text-kraft font-semibold rounded-full text-sm">
            {post.category}
          </span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <span>·</span>
          <span className="font-medium">{t("By")} {post.author}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-deepgreen mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Share Buttons */}
        <div className="flex items-center gap-3 mb-12 pb-8 border-b border-kraft/30">
          <span className="text-steel font-semibold">{t("Share")}:</span>
          <button className="p-3 bg-kraft/20 rounded-lg hover:bg-kraft/40 transition-all duration-300">
            <Share2 className="w-5 h-5 text-deepgreen" />
          </button>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="space-y-6 text-steel leading-relaxed">
            <p>{post.content}</p>
            <p>
              {t(
                "For more information about our packaging solutions and services, please visit our website or contact our team directly. We are committed to providing the best solutions for your packaging needs."
              )}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-deepgreen/10 to-kraft/10 rounded-2xl p-8 text-center border border-kraft/30">
          <h3 className="text-2xl font-bold text-deepgreen mb-3">
            {t("Interested in Our Services?")}
          </h3>
          <p className="text-steel mb-6">
            {t("Contact us to learn more about how we can help with your packaging needs.")}
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 bg-deepgreen text-kraft rounded-lg font-bold hover:bg-deepgreen/90 transition-all duration-300"
          >
            {t("Get in Touch")}
          </button>
        </div>
      </article>
    </div>
  )
}
