import React from "react"
import Navbar from "@/components/navbar"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <Navbar />
      <div className="pt-32 max-w-7xl mx-auto px-4 pb-12">
        <h1 className="text-4xl font-extrabold text-deepgreen mb-8 text-center">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg bg-white border border-kraft/20">
              <img src={`/public/images/placeholder.jpg`} alt={`Gallery ${i}`} className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 