"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

interface BlogCardProps {
  id: number
  slug: string
  title: string
  date: string
  category: string
  image: string
  excerpt: string
}

export default function BlogCard({
  slug,
  title,
  date,
  category,
  image,
  excerpt,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20 transform hover:scale-105 cursor-pointer flex flex-col h-full">
        <div className="relative w-full h-56 bg-gradient-to-br from-deepgreen/20 to-kraft/10">
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.backgroundColor = "#1a4d2e"
            }}
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-sm mb-3">
            <span className="px-3 py-1 bg-kraft/20 text-kraft font-semibold rounded-full text-xs">
              {category}
            </span>
            <div className="flex items-center gap-1 text-steel text-xs">
              <Calendar className="w-4 h-4" />
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          </div>
          <h3 className="text-lg font-bold text-deepgreen mb-3 line-clamp-2">
            {title}
          </h3>
          <p className="text-steel text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
            {excerpt}
          </p>
          <div className="flex items-center gap-2 text-kraft font-semibold text-sm">
            Read Article
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
