"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Package,
  Truck,
  Settings,
  Palette,
  Shield,
  Recycle,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
} from "lucide-react"
import Link from "next/link"
import { useTranslation } from 'react-i18next'

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState("design")
  const { t } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      id: "design",
      title: t("Custom Design & Engineering"),
      icon: Palette,
      description: t("Complete packaging design from concept to production"),
      features: [
        t("3D CAD design and prototyping"),
        t("Structural engineering analysis"),
        t("Graphic design and branding"),
        t("Material selection optimization"),
        t("Cost-effective design solutions"),
        t("Regulatory compliance consulting"),
      ],
      benefits: [
        t("Reduce packaging costs by up to 30%"),
        t("Improve product protection"),
        t("Enhance brand visibility"),
        t("Faster time to market"),
      ],
      process: [
        t("Initial consultation and requirements analysis"),
        t("Concept development and 3D modeling"),
        t("Prototype creation and testing"),
        t("Design refinement and optimization"),
        t("Production tooling and setup"),
        t("Quality assurance and delivery"),
      ],
    },
    {
      id: "manufacturing",
      title: t("Manufacturing & Production"),
      icon: Settings,
      description: t("State-of-the-art manufacturing facilities and processes"),
      features: [
        t("Automated production lines"),
        t("Quality control systems"),
        t("Flexible manufacturing capabilities"),
        t("High-volume production"),
        t("Just-in-time delivery"),
        t("ISO 9001 certified processes"),
      ],
      benefits: [
        t("Consistent quality standards"),
        t("Scalable production capacity"),
        t("Reduced lead times"),
        t("Cost-effective manufacturing"),
      ],
      process: [
        t("Production planning and scheduling"),
        t("Material procurement and inspection"),
        t("Manufacturing execution"),
        t("In-line quality control"),
        t("Packaging and labeling"),
        t("Shipping and logistics"),
      ],
    },
    {
      id: "logistics",
      title: t("Logistics & Distribution"),
      icon: Truck,
      description: t("Complete supply chain and distribution solutions"),
      features: [
        t("Warehousing and inventory management"),
        t("Order fulfillment services"),
        t("Transportation management"),
        t("Real-time tracking systems"),
        t("International shipping"),
        t("Returns processing"),
      ],
      benefits: [
        t("Reduced shipping costs"),
        t("Faster delivery times"),
        t("Improved inventory turnover"),
        t("Enhanced customer satisfaction"),
      ],
      process: [
        t("Inventory planning and forecasting"),
        t("Order processing and picking"),
        t("Packaging and labeling"),
        t("Carrier selection and booking"),
        t("Shipment tracking and monitoring"),
        t("Delivery confirmation and reporting"),
      ],
    },
    {
      id: "consulting",
      title: t("Packaging Consulting"),
      icon: Users,
      description: t("Expert guidance for packaging optimization"),
      features: [
        t("Packaging audits and assessments"),
        t("Cost reduction strategies"),
        t("Sustainability consulting"),
        t("Regulatory compliance guidance"),
        t("Supply chain optimization"),
        t("Training and education"),
      ],
      benefits: [
        t("Identify cost savings opportunities"),
        t("Improve packaging efficiency"),
        t("Ensure regulatory compliance"),
        t("Reduce environmental impact"),
      ],
      process: [
        t("Current state assessment"),
        t("Gap analysis and recommendations"),
        t("Implementation planning"),
        t("Pilot testing and validation"),
        t("Full-scale rollout"),
        t("Ongoing monitoring and optimization"),
      ],
    },
    {
      id: "sustainability",
      title: t("Sustainability Solutions"),
      icon: Recycle,
      description: t("Eco-friendly packaging and environmental initiatives"),
      features: [
        t("Recyclable material selection"),
        t("Biodegradable packaging options"),
        t("Carbon footprint reduction"),
        t("Waste minimization strategies"),
        t("Life cycle assessments"),
        t("Circular economy solutions"),
      ],
      benefits: [
        t("Reduce environmental impact"),
        t("Meet sustainability goals"),
        t("Improve brand reputation"),
        t("Comply with regulations"),
      ],
      process: [
        t("Sustainability assessment"),
        t("Material and design optimization"),
        t("Environmental impact analysis"),
        t("Implementation and testing"),
        t("Certification and validation"),
        t("Continuous improvement"),
      ],
    },
    {
      id: "testing",
      title: t("Testing & Quality Assurance"),
      icon: Shield,
      description: t("Comprehensive testing and quality control services"),
      features: [
        t("ISTA package testing"),
        t("Drop and vibration testing"),
        t("Compression testing"),
        t("Environmental testing"),
        t("Material testing"),
        t("Performance validation"),
      ],
      benefits: [
        t("Ensure product protection"),
        t("Reduce damage claims"),
        t("Validate packaging performance"),
        t("Meet industry standards"),
      ],
      process: [
        t("Test planning and protocol development"),
        t("Sample preparation and conditioning"),
        t("Test execution and data collection"),
        t("Analysis and reporting"),
        t("Recommendations and improvements"),
        t("Certification and documentation"),
      ],
    },
  ]

  const currentService = services.find((s) => s.id === activeService) || services[0]

  const stats = [
    { number: "500+", label: t("Projects Completed"), icon: Package },
    { number: "99.8%", label: t("Quality Rate"), icon: Star },
    { number: "24/7", label: t("Support Available"), icon: Clock },
    { number: "50+", label: t("Industries Served"), icon: Award },
  ]

  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <Navbar />
      <section className="pt-32 pb-16 px-4 bg-offwhite text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-deepgreen mb-6">{t('Our Services')}</h1>
          <p className="text-xl md:text-2xl text-steel mb-8">{t('From custom design to fast delivery, we offer end-to-end packaging solutions for every business.')}</p>
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-br from-green-100 via-green-50 to-green-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, idx) => {
              // Assign a unique color for each service card's top border and icon background
              const borderColors = [
                'border-t-green-400', // design
                'border-t-yellow-400', // manufacturing
                'border-t-blue-400', // logistics
                'border-t-purple-400', // consulting
                'border-t-emerald-400', // sustainability
                'border-t-pink-400', // testing
              ];
              const iconBgColors = [
                'bg-green-100',
                'bg-yellow-100',
                'bg-blue-100',
                'bg-purple-100',
                'bg-emerald-100',
                'bg-pink-100',
              ];
              return (
                <div
                  key={idx}
                  className={`relative bg-white border border-steel rounded-3xl pt-6 pb-8 px-6 text-center shadow-md hover:shadow-2xl transition-all duration-200 flex flex-col items-center ${borderColors[idx % borderColors.length]} border-t-8`}
                  style={{ minHeight: 370 }}
                >
                  <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full shadow ${iconBgColors[idx % iconBgColors.length]}`}> 
                    <service.icon className="w-8 h-8 text-deepgreen" />
                  </div>
                  <div className="mt-10">
                    <h3 className="text-xl font-bold text-deepgreen mb-2">{service.title}</h3>
                    <p className="text-steel mb-4">{service.description}</p>
                    <ul className="text-steel text-sm mb-4 list-disc list-inside text-left w-full max-w-xs mx-auto">
                      {service.features.slice(0, 3).map((feature, fidx) => (
                        <li key={fidx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 justify-center mb-2">
                      {service.benefits.slice(0, 2).map((benefit, bidx) => (
                        <span key={bidx} className="px-3 py-1 bg-kraft/20 text-steel text-xs rounded-full border border-kraft/40">{benefit}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
