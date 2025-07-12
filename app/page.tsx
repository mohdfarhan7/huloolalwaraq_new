"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import ConveyorBelt from "@/components/conveyor-belt"
import { ArrowDown, Sparkles, Zap, Shield, Star, Award, Users, Package, Truck, Leaf, Phone, Mail, MapPin } from "lucide-react"
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'
const BoxExperience = dynamic(() => import('@/components/BoxExperience'), { ssr: false })

export default function HomePage() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleBoxClick = () => {
    router.push("/box-details")
  }

  const handleItemClick = () => {
    router.push("/packaging-products")
  }

  const stats = [
    { number: "10K+", label: t("Happy Clients"), icon: Users },
    { number: "50M+", label: t("Packages Delivered"), icon: Award },
    { number: "99.9%", label: t("Quality Rate"), icon: Star },
    { number: "24/7", label: t("Support"), icon: Shield },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-offwhite via-kraft/5 to-offwhite text-dark font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen md:h-[90vh] h-[70vh] flex items-center justify-center overflow-visible p-0 m-0 bg-gradient-to-br from-deepgreen/90 via-deepgreen/70 to-kraft/40">
        <div className="absolute inset-0 bg-gradient-to-r from-deepgreen/20 to-transparent"></div>
        <BoxExperience />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-black text-kraft drop-shadow-2xl mb-4 text-center px-4">
            {t('Premium Packaging, Delivered')}
          </h1>
          <p className="text-xl md:text-2xl text-offwhite font-medium drop-shadow-lg mb-8 text-center px-4 max-w-4xl">
            {t('Cinematic. Sustainable. Unforgettable.')}
          </p>
          <div className="flex gap-4 mt-8 pointer-events-auto">
            <button
              onClick={() => router.push("/packaging-products")}
              className="px-8 py-4 bg-kraft text-deepgreen rounded-xl font-bold text-lg shadow-lg hover:bg-deepgreen hover:text-kraft transition-all duration-300 transform hover:scale-105"
            >
              {t('Explore Products')}
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-transparent border-2 border-kraft text-kraft rounded-xl font-bold text-lg shadow-lg hover:bg-kraft hover:text-deepgreen transition-all duration-300 transform hover:scale-105"
            >
              {t('Get Quote')}
            </button>
          </div>
          <span className="block md:hidden mt-8 text-kraft text-lg animate-bounce pointer-events-auto select-none">
            {t('Swipe up to explore')}
          </span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-deepgreen/95 to-deepgreen/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-kraft/20 rounded-full group-hover:bg-kraft/40 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-kraft" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-kraft mb-2">{stat.number}</div>
                <div className="text-offwhite font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">{t('About HuloolAlWaraq')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
            <p className="text-xl text-steel leading-relaxed max-w-4xl mx-auto">
              {t('We are a leading packaging manufacturer, connecting businesses to premium, sustainable packaging solutions since 2005. Our commitment to quality and innovation has made us the trusted partner for companies worldwide.')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Manufacturing Excellence')}</h3>
              <p className="text-steel leading-relaxed">{t('State-of-the-art facilities producing high-quality packaging solutions with precision and care.')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Sustainable Practices')}</h3>
              <p className="text-steel leading-relaxed">{t('Eco-friendly materials and processes that protect both your products and our planet.')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Custom Solutions')}</h3>
              <p className="text-steel leading-relaxed">{t('Tailored packaging solutions designed specifically for your unique business requirements.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/95 to-deepgreen/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-6">{t('Our Services')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/95 backdrop-blur-sm border border-kraft/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-deepgreen/10 rounded-full">
                  <Package className="w-8 h-8 text-deepgreen" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Custom Packaging')}</h3>
              <p className="text-steel leading-relaxed">{t('Tailored solutions for your unique business needs with premium materials and expert craftsmanship.')}</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm border border-kraft/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-deepgreen/10 rounded-full">
                  <Truck className="w-8 h-8 text-deepgreen" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Fast Delivery')}</h3>
              <p className="text-steel leading-relaxed">{t('On-time, reliable shipping for every order with real-time tracking and premium logistics.')}</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm border border-kraft/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-deepgreen/10 rounded-full">
                  <Leaf className="w-8 h-8 text-deepgreen" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Eco-Friendly')}</h3>
              <p className="text-steel leading-relaxed">{t('Sustainable materials and processes for a greener future with recyclable packaging options.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">{t('Featured Products')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20 transform hover:scale-105">
              <div className="text-6xl mb-6">📦</div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Corrugated Boxes')}</h3>
              <p className="text-steel leading-relaxed mb-6">{t('Durable, customizable, and perfect for shipping with various sizes and strengths available.')}</p>
              <button
                onClick={() => router.push("/packaging-products")}
                className="px-6 py-3 bg-deepgreen text-kraft rounded-lg font-semibold hover:bg-kraft hover:text-deepgreen transition-all duration-300"
              >
                {t('Learn More')}
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20 transform hover:scale-105">
              <div className="text-6xl mb-6">🧧</div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Bubble Wrap')}</h3>
              <p className="text-steel leading-relaxed mb-6">{t('Protect your products with premium cushioning materials designed for maximum protection.')}</p>
              <button
                onClick={() => router.push("/packaging-products")}
                className="px-6 py-3 bg-deepgreen text-kraft rounded-lg font-semibold hover:bg-kraft hover:text-deepgreen transition-all duration-300"
              >
                {t('Learn More')}
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20 transform hover:scale-105">
              <div className="text-6xl mb-6">🏷️</div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Custom Labels')}</h3>
              <p className="text-steel leading-relaxed mb-6">{t('Brand your packaging with high-quality labels and custom printing services.')}</p>
              <button
                onClick={() => router.push("/packaging-products")}
                className="px-6 py-3 bg-deepgreen text-kraft rounded-lg font-semibold hover:bg-kraft hover:text-deepgreen transition-all duration-300"
              >
                {t('Learn More')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/95 to-deepgreen/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-6">{t('Ready to Get Started?')}</h2>
          <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          <p className="text-xl text-offwhite mb-8 leading-relaxed">
            {t('Ready to elevate your packaging? Reach out to our team for a custom quote or more information about our premium solutions.')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-kraft text-deepgreen rounded-xl font-bold text-lg shadow-lg hover:bg-deepgreen hover:text-kraft transition-all duration-300 transform hover:scale-105"
          >
            {t('Get in Touch')}
          </button>
            <button
              onClick={() => router.push("/packaging-products")}
              className="px-8 py-4 bg-transparent border-2 border-kraft text-kraft rounded-xl font-bold text-lg shadow-lg hover:bg-kraft hover:text-deepgreen transition-all duration-300 transform hover:scale-105"
            >
              {t('View Products')}
            </button>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-white/90" />
              <a href="tel:+966535414997" className="text-white/90 font-medium underline hover:text-kraft transition-colors duration-200">+966 53 541 4997</a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6 text-white/90" />
              <a href="mailto:info@huloolalwaraq.com" className="text-white/90 font-medium underline hover:text-kraft transition-colors duration-200">info@huloolalwaraq.com</a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-white/90" />
              <span className="text-white/90 font-medium">{t('Riyadh, Saudi Arabia')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
