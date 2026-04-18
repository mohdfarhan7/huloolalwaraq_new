"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import { Users, Award, Star, Shield, Phone, Mail, MapPin, ArrowDown } from "lucide-react"
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'
import ProductCategoryCard from "@/components/ProductCategoryCard"
import IndustrySolutionCard from "@/components/IndustrySolutionCard"
import BlogCard from "@/components/BlogCard"
import CaseStudyCard from "@/components/CaseStudyCard"
import CertificationCard from "@/components/CertificationCard"
import CounterCard from "@/components/CounterCard"
import ManufacturingSection from "@/components/ManufacturingSection"
import QuoteForm from "@/components/QuoteForm"

// Import data
import productsData from "@/data/products.json"
import industriesData from "@/data/industries.json"
import blogData from "@/data/blog.json"
import caseStudiesData from "@/data/case-studies.json"
import certificationsData from "@/data/certifications.json"

const BoxExperience = dynamic(() => import('@/components/BoxExperience'), { ssr: false })

export default function HomePage() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "18+", label: t("Years Experience"), icon: Award },
    { number: "500+", label: t("Happy Clients"), icon: Users },
    { number: "150K+", label: t("MT Capacity"), icon: Star },
    { number: "50+", label: t("Expert Team"), icon: Shield },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-offwhite via-kraft/5 to-offwhite text-dark font-sans">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen md:h-[90vh] h-[70vh] flex items-center justify-center overflow-visible p-0 m-0 bg-gradient-to-br from-deepgreen/90 via-deepgreen/70 to-kraft/40">
        <div className="absolute inset-0 bg-gradient-to-r from-deepgreen/20 to-transparent"></div>
        <BoxExperience />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-black text-kraft drop-shadow-2xl mb-4 text-center px-4">
            {t('Premium Packaging Solutions')}
          </h1>
          <p className="text-xl md:text-2xl text-offwhite font-medium drop-shadow-lg mb-8 text-center px-4 max-w-4xl">
            {t('Cinematic. Sustainable. Unforgettable.')}
          </p>
          <div className="flex gap-4 mt-8 pointer-events-auto">
            <button
              onClick={() => router.push("/products")}
              className="px-8 py-4 bg-kraft text-deepgreen rounded-xl font-bold text-lg shadow-lg hover:bg-deepgreen hover:text-kraft transition-all duration-300 transform hover:scale-105"
            >
              {t('View Solutions')}
            </button>
            <button
              onClick={() => router.push("#quote")}
              className="px-8 py-4 bg-transparent border-2 border-kraft text-kraft rounded-xl font-bold text-lg shadow-lg hover:bg-kraft hover:text-deepgreen transition-all duration-300 transform hover:scale-105"
            >
              {t('Request a Quote')}
            </button>
          </div>
          <span className="block md:hidden mt-8 text-kraft text-lg pointer-events-auto select-none">
            {t('Scroll to explore')}
          </span>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-16 px-4 bg-gradient-to-r from-deepgreen/95 to-deepgreen/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <CounterCard key={index} number={stat.number} label={stat.label} icon={stat.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES GRID */}
      <section className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">{t('Our Product Categories')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
            <p className="text-xl text-steel max-w-3xl mx-auto">{t('Comprehensive packaging solutions tailored for every industry and application')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCategoryCard
                key={product.id}
                id={product.id}
                name={product.name}
                slug={product.slug}
                description={product.description}
                icon={product.icon}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY SOLUTIONS */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/95 to-deepgreen/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-6">{t('Industry Solutions')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
            <p className="text-xl text-offwhite max-w-3xl mx-auto">{t('Specialized packaging solutions for diverse industries and markets')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {industriesData.map((industry) => (
              <IndustrySolutionCard
                key={industry.id}
                id={industry.id}
                name={industry.name}
                slug={industry.slug}
                icon={industry.icon}
                description={industry.description}
                useCases={industry.useCases}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES / CAPABILITIES */}
      <section className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">{t('Our Capabilities')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20">
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Design & Innovation')}</h3>
              <p className="text-steel leading-relaxed">{t('Custom design solutions tailored to your brand identity and market requirements.')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20">
              <div className="text-5xl mb-6">🏭</div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Manufacturing Excellence')}</h3>
              <p className="text-steel leading-relaxed">{t('State-of-the-art facilities with precision engineering and quality control.')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20">
              <div className="text-5xl mb-6">🚚</div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Logistics & Delivery')}</h3>
              <p className="text-steel leading-relaxed">{t('Reliable shipping and logistics solutions with real-time tracking.')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20">
              <div className="text-5xl mb-6">⚙️</div>
              <h3 className="text-xl font-bold text-deepgreen mb-4">{t('Custom Solutions')}</h3>
              <p className="text-steel leading-relaxed">{t('Bespoke packaging solutions for unique and complex requirements.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUSTAINABILITY SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50/50 via-offwhite to-green-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">{t('Sustainability Commitment')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
            <p className="text-xl text-steel max-w-3xl mx-auto">{t('We are committed to eco-friendly packaging practices that protect both products and the environment.')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-lg font-bold text-deepgreen mb-3">{t('Recyclable Materials')}</h3>
              <p className="text-steel">{t('100% recyclable and biodegradable packaging options')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-deepgreen mb-3">{t('Eco-Friendly Process')}</h3>
              <p className="text-steel">{t('Carbon-neutral manufacturing and sustainable operations')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-lg font-bold text-deepgreen mb-3">{t('Environmental Impact')}</h3>
              <p className="text-steel">{t('Reducing waste and supporting global sustainability goals')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MANUFACTURING SHOWCASE */}
      <ManufacturingSection />

      {/* 8. CASE STUDIES */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/95 to-deepgreen/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-6">{t('Success Stories')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
            <p className="text-xl text-offwhite max-w-3xl mx-auto">{t('Real-world packaging solutions that transformed businesses across industries')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudiesData.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                id={caseStudy.id}
                slug={caseStudy.slug}
                title={caseStudy.title}
                industry={caseStudy.industry}
                image={caseStudy.image}
                challenge={caseStudy.challenge}
                results={caseStudy.results}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. CERTIFICATIONS */}
      <section className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">{t('Certifications & Standards')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
            <p className="text-xl text-steel max-w-3xl mx-auto">{t('Certified quality and compliance with international standards')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {certificationsData.map((cert) => (
              <CertificationCard
                key={cert.id}
                id={cert.id}
                name={cert.name}
                category={cert.category}
                logo={cert.logo}
                description={cert.description}
                year={cert.year}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10. BLOG/NEWS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/95 to-deepgreen/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-6">{t('Latest News & Insights')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
            <p className="text-xl text-offwhite max-w-3xl mx-auto">{t('Stay updated with industry trends and packaging innovations')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogData.slice(0, 3).map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                slug={post.slug}
                title={post.title}
                date={post.date}
                category={post.category}
                image={post.image}
                excerpt={post.excerpt}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => router.push("/blog")}
              className="px-8 py-4 bg-kraft text-deepgreen rounded-xl font-bold text-lg shadow-lg hover:bg-kraft/90 transition-all duration-300"
            >
              {t('View All Articles')}
            </button>
          </div>
        </div>
      </section>

      {/* 11. QUOTE SECTION */}
      <section id="quote" className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">{t('Request a Quote')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
            <p className="text-xl text-steel">{t('Fill out the form below and our team will get back to you with a custom quote')}</p>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-kraft/20">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* 12. CONTACT SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/95 to-deepgreen/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-6">{t('Ready to Get Started?')}</h2>
          <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          <p className="text-xl text-offwhite mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('Contact our team for consultation, samples, or to discuss your packaging requirements.')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => router.push("#quote")}
              className="px-8 py-4 bg-kraft text-deepgreen rounded-xl font-bold text-lg shadow-lg hover:bg-kraft/90 transition-all duration-300 transform hover:scale-105"
            >
              {t('Request a Quote')}
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-transparent border-2 border-kraft text-kraft rounded-xl font-bold text-lg shadow-lg hover:bg-kraft hover:text-deepgreen transition-all duration-300 transform hover:scale-105"
            >
              {t('Contact Us')}
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-kraft" />
              <a href="tel:+966537447999" className="text-kraft font-medium underline hover:text-offwhite transition-colors duration-200">+966 53 744 7999</a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6 text-kraft" />
              <a href="mailto:info@huloolalwaraq.com" className="text-kraft font-medium underline hover:text-offwhite transition-colors duration-200">info@huloolalwaraq.com</a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-kraft" />
              <span className="text-kraft font-medium">{t('Dammam, Saudi Arabia')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
