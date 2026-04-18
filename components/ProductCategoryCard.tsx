"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProductCategoryCardProps {
  id: number
  name: string
  slug: string
  description: string
  icon: string
  image?: string
}

export default function ProductCategoryCard({
  id,
  name,
  slug,
  description,
  icon,
}: ProductCategoryCardProps) {
  return (
    <Link href={`/products/${slug}`}>
      <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20 transform hover:scale-105 cursor-pointer h-full flex flex-col justify-between">
        <div>
          <div className="text-6xl mb-6">{icon}</div>
          <h3 className="text-xl font-bold text-deepgreen mb-4">{name}</h3>
          <p className="text-steel leading-relaxed">{description}</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-kraft font-semibold mt-6">
          Learn More
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  )
}
