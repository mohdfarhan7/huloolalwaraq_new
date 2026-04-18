"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface IndustrySolutionCardProps {
  id: number
  name: string
  slug: string
  icon: string
  description: string
  useCases: string[]
}

export default function IndustrySolutionCard({
  name,
  slug,
  icon,
  description,
  useCases,
}: IndustrySolutionCardProps) {
  return (
    <Link href={`/industries/${slug}`}>
      <div className="bg-white/95 backdrop-blur-sm border border-kraft/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-full flex flex-col">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-deepgreen mb-3">{name}</h3>
        <p className="text-steel text-sm leading-relaxed mb-4 flex-grow">{description}</p>
        <div className="text-xs text-kraft font-semibold flex items-center gap-2 mt-4">
          Explore Solutions
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  )
}
