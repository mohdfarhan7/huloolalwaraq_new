"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface CaseStudyCardProps {
  id: number
  slug: string
  title: string
  industry: string
  image: string
  challenge: string
  results: string
}

export default function CaseStudyCard({
  slug,
  title,
  industry,
  image,
  challenge,
  results,
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`}>
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
          <span className="text-xs font-semibold text-kraft mb-2">{industry}</span>
          <h3 className="text-lg font-bold text-deepgreen mb-3 line-clamp-2">
            {title}
          </h3>
          <p className="text-steel text-sm leading-relaxed mb-4 line-clamp-2">
            <strong>Challenge:</strong> {challenge}
          </p>
          <p className="text-green-700 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
            <strong>Results:</strong> {results}
          </p>
          <div className="flex items-center gap-2 text-kraft font-semibold text-sm">
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
