"use client"

import Image from "next/image"

interface CertificationCardProps {
  id: number
  name: string
  category: string
  logo: string
  description: string
  year: number
}

export default function CertificationCard({
  name,
  category,
  logo,
  description,
  year,
}: CertificationCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white/95 rounded-2xl border border-kraft/20 hover:border-kraft/50 transition-all duration-300 hover:shadow-lg">
      <div className="w-24 h-24 relative mb-4 bg-gradient-to-br from-deepgreen/10 to-kraft/10 rounded-lg flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={80}
          height={80}
          className="object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.backgroundColor = "#f5f1eb"
          }}
        />
      </div>
      <h4 className="text-lg font-bold text-deepgreen mb-1">{name}</h4>
      <p className="text-xs text-kraft font-semibold mb-2">{category}</p>
      <p className="text-sm text-steel leading-relaxed mb-3">{description}</p>
      <span className="text-xs text-steel font-medium">Certified {year}</span>
    </div>
  )
}
