"use client"

import Navbar from "@/components/navbar"
import { Globe, Heart, Target, Eye, Zap, Shield, Award, Users, Package, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("story")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const { t } = useTranslation()

  const teamMembers = [
    {
      name: t("John Smith"),
      role: t("CEO & Founder"),
      image: "👨‍💼",
      bio: t("20+ years in packaging industry, former VP at Global Packaging Solutions"),
      expertise: [t("Strategic Leadership"), t("Industry Innovation"), t("Sustainable Practices")],
      linkedin: "#",
    },
    {
      name: t("Sarah Johnson"),
      role: t("Head of Operations"),
      image: "👩‍💼",
      bio: t("Expert in supply chain management and operational excellence"),
      expertise: [t("Supply Chain"), t("Quality Control"), t("Process Optimization")],
      linkedin: "#",
    },
    {
      name: t("Mike Chen"),
      role: t("Quality Control Manager"),
      image: "👨‍🔬",
      bio: t("PhD in Materials Science, ensures highest quality standards"),
      expertise: [t("Materials Science"), t("Quality Assurance"), t("Testing Protocols")],
      linkedin: "#",
    },
    {
      name: t("Lisa Brown"),
      role: t("Customer Relations Director"),
      image: "👩‍💻",
      bio: t("Dedicated to customer satisfaction and relationship building"),
      expertise: [t("Customer Success"), t("Account Management"), t("Support Systems")],
      linkedin: "#",
    },
    {
      name: t("David Wilson"),
      role: t("Innovation Lead"),
      image: "👨‍🎨",
      bio: t("Leading R&D initiatives and sustainable packaging solutions"),
      expertise: [t("Product Development"), t("Sustainability"), t("Innovation")],
      linkedin: "#",
    },
    {
      name: t("Emma Davis"),
      role: t("Marketing Director"),
      image: "👩‍🎨",
      bio: t("Brand strategist with focus on digital transformation"),
      expertise: [t("Brand Strategy"), t("Digital Marketing"), t("Market Analysis")],
      linkedin: "#",
    },
  ]

  const milestones = [
    {
      year: "2005",
      title: "Company Founded",
      description: "Started as a small family business with a vision for better packaging",
    },
    {
      year: "2008",
      title: "First Major Contract",
      description: "Secured partnership with leading e-commerce platform",
    },
    { year: "2012", title: "International Expansion", description: "Opened facilities in Europe and Asia" },
    { year: "2016", title: "Sustainability Initiative", description: "Launched 100% recyclable product line" },
    { year: "2019", title: "Technology Integration", description: "Implemented AI-driven quality control systems" },
    { year: "2022", title: "Carbon Neutral", description: "Achieved carbon-neutral manufacturing processes" },
    { year: "2024", title: "Industry Leader", description: "Recognized as top packaging innovation company" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is guided by what's best for our customers and their success.",
      color: "from-red-500/20 to-pink-500/20",
    },
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "Uncompromising standards in every product we manufacture and deliver.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to environmental responsibility and sustainable business practices.",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge technology and creative solutions.",
      color: "from-purple-500/20 to-violet-500/20",
    },
  ]

  const stats = [
    { number: "50M+", label: "Packages Delivered", icon: Package },
    { number: "10K+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Quality Rate", icon: Award },
    { number: "15", label: "Countries Served", icon: Globe },
    { number: "500+", label: "Team Members", icon: Users },
    { number: "0%", label: "Carbon Footprint", icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-offwhite via-kraft/5 to-offwhite text-dark font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-deepgreen/95 to-deepgreen/90 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-kraft mb-6">{t('About HuloolAlWaraq')}</h1>
          <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-offwhite leading-relaxed">{t('Pioneering the future of packaging with innovation, sustainability, and excellence since 2005.')}</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-kraft/10 to-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-deepgreen/10 rounded-full group-hover:bg-deepgreen/20 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-deepgreen" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-deepgreen mb-2">{stat.number}</div>
                <div className="text-steel font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">{t('Our Mission')}</h2>
          <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          <p className="text-xl text-steel leading-relaxed max-w-4xl mx-auto">{t('To provide innovative, sustainable packaging solutions that protect products, enhance brand value, and contribute to a better environment for future generations.')}</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/95 to-deepgreen/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-6">{t('Our Values')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white/95 backdrop-blur-sm border border-kraft/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-deepgreen/10 rounded-full">
                    <value.icon className="w-8 h-8 text-deepgreen" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-deepgreen mb-4">{value.title}</h3>
                <p className="text-steel leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">{t('Leadership Team')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20 transform hover:scale-105">
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-xl font-bold text-deepgreen mb-2">{member.name}</h3>
                <p className="text-kraft font-semibold mb-4">{member.role}</p>
                <p className="text-steel text-sm mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIdx) => (
                    <span key={skillIdx} className="px-3 py-1 bg-deepgreen/10 text-deepgreen text-xs rounded-full border border-deepgreen/20">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/95 to-deepgreen/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-6">{t('Our Journey')}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="bg-white/95 backdrop-blur-sm border border-kraft/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold text-deepgreen mb-3">{milestone.year}</h3>
                <p className="text-kraft font-semibold mb-3">{milestone.title}</p>
                <p className="text-steel text-sm leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
