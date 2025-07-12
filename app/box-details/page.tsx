"use client"

import { ArrowLeft, Package, Zap, Award, Star, CheckCircle, Ruler, Weight, Layers } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function BoxDetailsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("specs")
  const [selectedSize, setSelectedSize] = useState("medium")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const boxSizes = {
    small: {
      name: "Small Box",
      dimensions: "20cm × 15cm × 10cm",
      weight: "Up to 5kg",
      price: "$1.99",
      volume: "3L",
      applications: ["Electronics", "Jewelry", "Small Items"],
    },
    medium: {
      name: "Medium Box",
      dimensions: "30cm × 20cm × 15cm",
      weight: "Up to 15kg",
      price: "$2.99",
      volume: "9L",
      applications: ["Books", "Clothing", "Home Goods"],
    },
    large: {
      name: "Large Box",
      dimensions: "40cm × 30cm × 25cm",
      weight: "Up to 25kg",
      price: "$4.99",
      volume: "30L",
      applications: ["Appliances", "Bulk Items", "Industrial"],
    },
    xlarge: {
      name: "Extra Large Box",
      dimensions: "50cm × 40cm × 35cm",
      weight: "Up to 40kg",
      price: "$7.99",
      volume: "70L",
      applications: ["Furniture", "Large Equipment", "Wholesale"],
    },
  }

  const currentBox = boxSizes[selectedSize as keyof typeof boxSizes]

  const boxSpecs = [
    { label: "Material", value: "Premium Corrugated Cardboard", icon: Package },
    { label: "Thickness", value: "5mm Triple Wall Construction", icon: Layers },
    { label: "Dimensions", value: currentBox.dimensions, icon: Ruler },
    { label: "Weight Capacity", value: currentBox.weight, icon: Weight },
    { label: "Volume", value: currentBox.volume, icon: Package },
    { label: "Color", value: "Natural Brown with UV Protection", icon: Star },
    { label: "Closure Type", value: "Interlocking Security Flaps", icon: CheckCircle },
    { label: "Price", value: currentBox.price, icon: Award },
  ]

  const features = [
    "🌱 100% Recyclable and biodegradable materials",
    "🔒 Tamper-evident security features",
    "💧 Water-resistant coating technology",
    "📏 Precision-cut for perfect assembly",
    "🏆 ISO 9001 certified manufacturing",
    "⚡ Quick 30-second assembly time",
    "🎯 Stackable design for efficient storage",
    "🛡️ Crush-resistant up to 200kg pressure",
    "🌍 Carbon-neutral production process",
    "📦 Custom printing options available",
  ]

  const certifications = [
    { name: "ISO 9001", desc: "Quality Management System", color: "blue" },
    { name: "FSC Certified", desc: "Sustainable Forestry Council", color: "green" },
    { name: "ISTA Approved", desc: "International Safe Transit", color: "purple" },
    { name: "FDA Compliant", desc: "Food & Drug Administration", color: "orange" },
    { name: "ROHS Compliant", desc: "Restriction of Hazardous Substances", color: "red" },
    { name: "CE Marking", desc: "European Conformity", color: "cyan" },
  ]

  const applications = [
    { category: "E-commerce", items: ["Online retail shipping", "Return packaging", "Subscription boxes"] },
    { category: "Industrial", items: ["Manufacturing components", "Automotive parts", "Heavy machinery"] },
    { category: "Food & Beverage", items: ["Dry goods packaging", "Bottle protection", "Bulk food items"] },
    { category: "Healthcare", items: ["Medical supplies", "Pharmaceutical products", "Laboratory equipment"] },
  ]

  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <Navbar />
      <div className="pt-28 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <Button
              variant="outline"
              className={`mb-8 bg-offwhite border-steel text-deepgreen hover:bg-kraft hover:border-deepgreen transition-all duration-300 ${isVisible ? "animate-fade-slide-up" : "opacity-0"}`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Size Selector */}
          <div
            className={`mb-12 transition-all duration-1000 ${isVisible ? "animate-fade-slide-up" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-offwhite border border-steel rounded-2xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Select Box Size</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(boxSizes).map(([key, size]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedSize(key)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedSize === key
                        ? "border-deepgreen bg-deepgreen/20 text-deepgreen"
                        : "border-steel bg-steel/10 text-dark/70 hover:border-steel/40 hover:bg-steel/20"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">📦</div>
                      <div className="font-semibold text-sm">{size.name}</div>
                      <div className="text-xs opacity-70">{size.dimensions}</div>
                      <div className="text-lg font-bold mt-2">{size.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Box Visualization */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "animate-fade-slide-up" : "opacity-0 translate-y-10"}`}
            >
              <div className="bg-offwhite border border-steel rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-amber-50/20 to-amber-200/20 rounded-2xl flex items-center justify-center relative overflow-hidden mb-6">
                  {/* 3D Box Visualization */}
                  <div className="relative transform-gpu perspective-1000">
                    <div className="w-64 h-64 relative animate-box-rotate-3d">
                      {/* Front Face */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 border-4 border-amber-500 rounded-2xl shadow-2xl transform translateZ-32">
                        <div className="absolute inset-4 border-2 border-amber-600 border-dashed rounded-xl" />
                        <div className="absolute top-4 right-4 text-sm font-bold text-amber-800">HULOOL</div>
                        <div className="absolute bottom-4 left-4 text-xs font-bold text-amber-800">THIS SIDE UP</div>
                        <div className="absolute top-4 left-4 w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                          <span className="text-xs text-white font-bold">⚠</span>
                        </div>
                        <div className="absolute center text-lg font-bold text-amber-900">{currentBox.name}</div>
                      </div>

                      {/* Top Face */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-500 border-4 border-amber-600 rounded-2xl shadow-xl transform rotateX-90 translateZ-32 origin-top" />

                      {/* Right Face */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-250 to-amber-450 border-4 border-amber-550 rounded-2xl shadow-xl transform rotateY-90 translateZ-32 origin-right" />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-8 left-8 w-4 h-4 bg-blue-400 rounded-full animate-float-slow opacity-60" />
                  <div className="absolute bottom-12 right-12 w-6 h-6 bg-purple-400 rounded-full animate-float-reverse opacity-60" />
                  <div className="absolute top-1/2 right-8 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-60" />
                </div>

                {/* Box Info Card */}
                <div className="bg-offwhite border border-steel rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-dark mb-4">{currentBox.name}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-dark/70">Dimensions:</span>
                      <div className="text-dark font-semibold">{currentBox.dimensions}</div>
                    </div>
                    <div>
                      <span className="text-dark/70">Capacity:</span>
                      <div className="text-dark font-semibold">{currentBox.weight}</div>
                    </div>
                    <div>
                      <span className="text-dark/70">Volume:</span>
                      <div className="text-dark font-semibold">{currentBox.volume}</div>
                    </div>
                    <div>
                      <span className="text-dark/70">Price:</span>
                      <div className="text-deepgreen font-bold text-lg">{currentBox.price}</div>
                    </div>
                  </div>
                </div>

                {/* Interactive Tabs */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    { id: "specs", label: "Specifications", icon: Package },
                    { id: "features", label: "Features", icon: Star },
                    { id: "certs", label: "Certifications", icon: Award },
                    { id: "apps", label: "Applications", icon: Zap },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-deepgreen/20 text-deepgreen border border-deepgreen/30"
                          : "bg-offwhite text-dark/70 hover:bg-offwhite/50"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Details Section */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-slide-up" : "opacity-0 translate-y-10"}`}
            >
              <div>
                <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-dark via-blue-200 to-purple-200 mb-6">
                  Premium Cardboard Box
                </h1>
                <p className="text-xl text-dark/80 leading-relaxed">
                  Our flagship premium cardboard box represents the pinnacle of packaging engineering. Designed for
                  maximum durability, sustainability, and protection using cutting-edge materials and manufacturing
                  processes.
                </p>
              </div>

              {/* Dynamic Content Based on Active Tab */}
              <div className="bg-offwhite border border-steel rounded-3xl p-8 shadow-2xl min-h-[500px]">
                {activeTab === "specs" && (
                  <div>
                    <h2 className="text-3xl font-bold text-dark mb-8 flex items-center gap-3">
                      <Package className="w-8 h-8 text-deepgreen" />
                      Technical Specifications
                    </h2>
                    <div className="space-y-6">
                      {boxSpecs.map((spec, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-4 border-b border-steel/10 last:border-b-0 group hover:bg-offwhite/5 rounded-xl px-4 transition-all duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex items-center gap-4">
                            <spec.icon className="w-6 h-6 text-deepgreen group-hover:scale-110 transition-transform" />
                            <span className="font-semibold text-dark/90">{spec.label}:</span>
                          </div>
                          <span className="text-dark/70 text-right max-w-xs font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "features" && (
                  <div>
                    <h2 className="text-3xl font-bold text-dark mb-8 flex items-center gap-3">
                      <Star className="w-8 h-8 text-yellow-400" />
                      Key Features
                    </h2>
                    <div className="grid gap-4">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-offwhite rounded-xl hover:bg-offwhite/5 transition-all duration-300 transform hover:scale-105"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="text-2xl">{feature.split(" ")[0]}</div>
                          <span className="text-dark/80 leading-relaxed">
                            {feature.substring(feature.indexOf(" ") + 1)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "certs" && (
                  <div>
                    <h2 className="text-3xl font-bold text-dark mb-8 flex items-center gap-3">
                      <Award className="w-8 h-8 text-green-400" />
                      Certifications & Standards
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {certifications.map((cert, index) => (
                        <div
                          key={index}
                          className={`p-6 bg-gradient-to-br from-${cert.color}-500/10 to-${cert.color}-600/10 border border-${cert.color}-400/20 rounded-2xl hover:border-${cert.color}-400/40 transition-all duration-300 transform hover:scale-105`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className={`text-2xl font-bold text-${cert.color}-300 mb-2`}>{cert.name}</div>
                          <div className="text-dark/70">{cert.desc}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl">
                      <h3 className="text-xl font-bold text-dark mb-4">Quality Guarantee</h3>
                      <p className="text-dark/80 leading-relaxed">
                        Every box undergoes rigorous testing including drop tests, compression tests, and environmental
                        stress testing. We guarantee 99.9% quality standards with full traceability and batch tracking.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "apps" && (
                  <div>
                    <h2 className="text-3xl font-bold text-dark mb-8 flex items-center gap-3">
                      <Zap className="w-8 h-8 text-purple-400" />
                      Applications & Use Cases
                    </h2>
                    <div className="space-y-6">
                      {applications.map((app, index) => (
                        <div
                          key={index}
                          className="p-6 bg-offwhite rounded-2xl hover:bg-offwhite/5 transition-all duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <h3 className="text-xl font-bold text-dark mb-4">{app.category}</h3>
                          <div className="grid gap-2">
                            {app.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center gap-3 text-dark/80">
                                <div className="w-2 h-2 bg-deepgreen rounded-full" />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/20 rounded-2xl">
                      <h3 className="text-xl font-bold text-dark mb-4">Perfect For Your Business</h3>
                      <p className="text-dark/80 leading-relaxed mb-4">
                        Our {currentBox.name.toLowerCase()} is ideal for{" "}
                        {currentBox.applications.join(", ").toLowerCase()}. With its {currentBox.dimensions} dimensions
                        and {currentBox.weight} capacity, it provides the perfect balance of protection and efficiency.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentBox.applications.map((app, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-deepgreen/20 text-deepgreen text-sm rounded-full border border-deepgreen/30"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-dark mb-4">Ready to Order?</h3>
                <p className="text-dark/80 mb-6">
                  Get your premium {currentBox.name.toLowerCase()} starting at {currentBox.price} each. Contact our
                  packaging experts for bulk pricing and custom solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-deepgreen to-purple-600 hover:from-deepgreen/80 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                      Get Custom Quote
                    </Button>
                  </Link>
                  <Link href="/packaging-products">
                    <Button
                      variant="outline"
                      className="border-steel text-dark hover:bg-offwhite/5 px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
                    >
                      View All Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
