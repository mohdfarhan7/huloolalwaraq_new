"use client"

import { useEffect, useState } from "react"
import { LucideIcon } from "lucide-react"

interface CounterCardProps {
  number: string
  label: string
  icon: LucideIcon
}

export default function CounterCard({ number, label, icon: Icon }: CounterCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="text-center group">
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-kraft/20 rounded-full group-hover:bg-kraft/40 transition-all duration-300">
          <Icon className="w-8 h-8 text-kraft" />
        </div>
      </div>
      <div className={`text-4xl md:text-5xl font-bold text-kraft mb-2 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {number}
      </div>
      <div className="text-offwhite font-medium">{label}</div>
    </div>
  )
}
