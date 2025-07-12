"use client"

import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Truck, Shield, Award, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Product3DViewer from '@/components/Product3DViewer'

export default function ProductDetailsPage() {
  const params = useParams()
  const productId = params.id
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Enhanced product data
  const products = {
    "1": {
      name: "Premium Corrugated Boxes",
      image: "📦",
      price: "$2.99",
      originalPrice: "$3.99",
      rating: 4.9,
      reviews: 1247,
      description:
        "Heavy-duty shipping boxes engineered with triple-wall construction for maximum protection and durability.",
      longDescription:
        "Our Premium Corrugated Boxes represent the pinnacle of packaging engineering. Each box is crafted using advanced triple-wall construction technology, providing unmatched strength and protection for your valuable items. The innovative design incorporates water-resistant coating and reinforced corners for superior performance in demanding shipping conditions.",
      features: [
        "Triple Wall Construction",
        "Water Resistant Coating",
        "Stackable Design",
        "Easy Assembly",
        "Eco-Friendly Materials",
      ],
      specs: {
        Material: "Premium Corrugated Cardboard",
        "Wall Type": "Triple Wall (15mm thickness)",
        "Weight Capacity": "Up to 50kg",
        Dimensions: "Multiple sizes available",
        Color: "Natural Brown",
        "Minimum Order": "50 units",
        "Lead Time": "2-3 business days",
        Warranty: "Quality guarantee",
      },
      benefits: [
        "Superior protection for fragile items",
        "Reduces shipping damage by 95%",
        "Stackable design saves storage space",
        "Quick 30-second assembly time",
        "100% recyclable materials",
      ],
      inStock: true,
      stockCount: 2847,
      category: "Boxes",
      sku: "PCB-001",
      tags: ["Premium", "Heavy Duty", "Eco-Friendly", "Fast Assembly"],
    },
    "2": {
      name: "Advanced Bubble Wrap",
      image: "🫧",
      price: "$0.89",
      originalPrice: "$1.19",
      rating: 4.8,
      reviews: 892,
      description:
        "Anti-static bubble wrap with superior cushioning technology for electronic and fragile item protection.",
      longDescription:
        "Our Advanced Bubble Wrap features cutting-edge anti-static technology and superior cushioning properties. The innovative bubble design provides maximum protection while remaining lightweight and cost-effective. Perfect for electronics, glassware, and other sensitive items.",
      features: [
        "Anti-Static Technology",
        "Superior Cushioning",
        "Perforated Sheets",
        "Recyclable Material",
        "Multiple Sizes",
      ],
      specs: {
        Material: "Anti-Static Polyethylene",
        "Bubble Size": "10mm diameter",
        "Roll Width": "500mm, 750mm, 1000mm",
        "Roll Length": "100m",
        Thickness: "80 micron",
        Color: "Clear with pink anti-static",
        "Temperature Range": "-40°C to +80°C",
        Certification: "Anti-static tested",
      },
      benefits: [
        "Prevents static damage to electronics",
        "Lightweight yet protective",
        "Easy to handle and cut",
        "Cost-effective protection solution",
        "Environmentally responsible",
      ],
      inStock: true,
      stockCount: 1456,
      category: "Protection",
      sku: "ABW-002",
      tags: ["Anti-Static", "Electronics", "Lightweight", "Perforated"],
    },
  }

  const product = products[productId as keyof typeof products] || products["1"]

  const relatedProducts = [
    { id: 3, name: "Professional Packing Tape", image: "🏷️", price: "$4.99", rating: 4.7 },
    { id: 4, name: "Custom Foam Inserts", image: "🧽", price: "$12.99", rating: 4.9 },
    { id: 5, name: "Smart Shipping Labels", image: "📋", price: "$0.25", rating: 4.6 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/20 to-pink-600/10 animate-ultra-gradient" />
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl animate-float-orb-1" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-2xl animate-float-orb-2" />
      </div>

      <div className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/packaging-products">
            <Button
              variant="outline"
              className={`mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-500 transform hover:scale-105 ${isVisible ? "animate-fade-slide-up" : "opacity-0"}`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "animate-fade-slide-up" : "opacity-0 translate-y-10"}`}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-amber-50/20 to-amber-200/20 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="text-9xl animate-product-showcase">{product.image}</div>

                  {/* Floating badges */}
                  <div className="absolute top-4 left-4 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-bold border border-green-400/30">
                    ✓ In Stock
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-bold border border-orange-400/30">
                    🔥 Popular
                  </div>

                  {/* Floating elements */}
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-blue-400 rounded-full animate-float-slow opacity-60" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-purple-400 rounded-full animate-float-reverse opacity-60" />
                </div>

                {/* Product Gallery Thumbnails */}
                <div className="flex gap-4 justify-center">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 rounded-xl border-2 transition-all duration-300 ${
                        selectedImage === index
                          ? "border-blue-400 bg-blue-500/20"
                          : "border-white/20 bg-white/5 hover:border-white/40"
                      }`}
                    >
                      <div className="text-2xl">{product.image}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-slide-up" : "opacity-0 translate-y-10"}`}
            >
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-blue-400 font-medium">{product.category}</span>
                  <span className="text-white/50">•</span>
                  <span className="text-white/70">SKU: {product.sku}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-4">
                  {product.name}
                </h1>

                <p className="text-xl text-white/80 leading-relaxed mb-6">{product.description}</p>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white font-semibold">{product.rating}</span>
                    <span className="text-white/70">({product.reviews} reviews)</span>
                  </div>
                  <div className="text-green-400 font-medium">{product.stockCount} in stock</div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold text-white">{product.price}</div>
                  <div className="text-xl text-white/50 line-through">{product.originalPrice}</div>
                  <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-bold">25% OFF</div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-white font-medium">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                    >
                      -
                    </button>
                    <span className="w-16 text-center text-white font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 p-4 rounded-xl transition-all duration-300 bg-transparent"
                  >
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 p-4 rounded-xl transition-all duration-300 bg-transparent"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Info */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center">
                  <Truck className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Free Shipping</div>
                  <div className="text-white/70 text-sm">Orders over $50</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Quality Guarantee</div>
                  <div className="text-white/70 text-sm">30-day return</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center">
                  <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Premium Quality</div>
                  <div className="text-white/70 text-sm">Certified materials</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div
            className={`mt-20 transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-slide-up" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-4 mb-8 border-b border-white/10 pb-4">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "specifications", label: "Specifications" },
                  { id: "benefits", label: "Benefits" },
                  { id: "reviews", label: "Reviews" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === "overview" && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Product Overview</h3>
                    <p className="text-white/80 leading-relaxed text-lg mb-6">{product.longDescription}</p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Perfect For:</h4>
                        <ul className="space-y-2 text-white/80">
                          <li>• E-commerce shipping</li>
                          <li>• Warehouse storage</li>
                          <li>• Moving and relocation</li>
                          <li>• Industrial packaging</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Industries:</h4>
                        <ul className="space-y-2 text-white/80">
                          <li>• Retail & E-commerce</li>
                          <li>• Manufacturing</li>
                          <li>• Logistics & Distribution</li>
                          <li>• Healthcare & Pharmaceuticals</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "specifications" && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
                    <div className="grid gap-4">
                      {Object.entries(product.specs).map(([key, value], index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-4 border-b border-white/10 last:border-b-0"
                        >
                          <span className="font-medium text-white/90">{key}:</span>
                          <span className="text-white/70 text-right max-w-xs">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "benefits" && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                    <div className="grid gap-6">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          </div>
                          <span className="text-white/80 leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Customer Reviews</h3>
                    <div className="space-y-6">
                      {[
                        {
                          name: "Sarah Johnson",
                          rating: 5,
                          date: "2 weeks ago",
                          review:
                            "Excellent quality boxes! Used them for my e-commerce business and they've significantly reduced shipping damage. Highly recommended!",
                        },
                        {
                          name: "Mike Chen",
                          rating: 5,
                          date: "1 month ago",
                          review:
                            "These boxes are incredibly sturdy. We use them for heavy industrial parts and they hold up perfectly. Great value for money.",
                        },
                        {
                          name: "Lisa Brown",
                          rating: 4,
                          date: "3 weeks ago",
                          review:
                            "Good quality packaging. Easy to assemble and the water-resistant coating works well. Will order again.",
                        },
                      ].map((review, index) => (
                        <div key={index} className="bg-white/5 rounded-xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                {review.name.charAt(0)}
                              </div>
                              <div>
                                <div className="text-white font-medium">{review.name}</div>
                                <div className="text-white/50 text-sm">{review.date}</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? "text-yellow-400 fill-current" : "text-gray-400"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-white/80 leading-relaxed">{review.review}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div
            className={`mt-20 transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-slide-up" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Related Products</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <Link key={relatedProduct.id} href={`/product-details/${relatedProduct.id}`}>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                    <div className="text-center">
                      <div className="text-5xl mb-4">{relatedProduct.image}</div>
                      <h4 className="text-lg font-semibold text-white mb-2">{relatedProduct.name}</h4>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(relatedProduct.rating) ? "text-yellow-400 fill-current" : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-white/70 text-sm">({relatedProduct.rating})</span>
                      </div>
                      <div className="text-xl font-bold text-white">{relatedProduct.price}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
