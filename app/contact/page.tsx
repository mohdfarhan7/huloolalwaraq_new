"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Calendar, MapPin, Clock, Send } from "lucide-react"
import { useTranslation } from 'react-i18next'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your message! We'll get back to you within 24 hours.")
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: t("Call Us"),
      description: t("Speak directly with our experts"),
      details: [t("+966 53 541 4997"), t("Available 24/7")],
      action: t("Call Now"),
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Mail,
      title: t("Email Us"),
      description: t("Send us a detailed message"),
      details: [t("info@huloolalwaraq.com"), t("sales@huloolalwaraq.com")],
      action: t("Send Email"),
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: MessageCircle,
      title: t("WhatsApp"),
      description: t("Get instant support"),
      details: [t("Available 24/7"), t("Average response: 2 min")],
      action: t("Start Chat"),
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Calendar,
      title: t("Schedule Meeting"),
      description: t("Book a consultation"),
      details: [t("30-min free consultation"), t("Custom solutions")],
      action: t("Book Now"),
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  const offices = [
    {
      city: t("Riyadh (HQ)"),
      address: t("Industrial District, Riyadh, Saudi Arabia"),
      phone: t("+966 53 541 4997"),
      email: t("info@huloolalwaraq.com"),
      hours: t("Sun-Thu: 8AM-6PM AST"),
    },
    {
      city: t("Jeddah"),
      address: t("Business District, Jeddah, Saudi Arabia"),
      phone: t("+966 53 541 4998"),
      email: t("jeddah@huloolalwaraq.com"),
      hours: t("Sun-Thu: 8AM-6PM AST"),
    },
    {
      city: t("Dammam"),
      address: t("Industrial Area, Dammam, Saudi Arabia"),
      phone: t("+966 53 541 4999"),
      email: t("dammam@huloolalwaraq.com"),
      hours: t("Sun-Thu: 8AM-6PM AST"),
    },
  ]

  const inquiryTypes = [
    { value: "general", label: t("General Inquiry") },
    { value: "quote", label: t("Request Quote") },
    { value: "support", label: t("Technical Support") },
    { value: "partnership", label: t("Partnership") },
    { value: "careers", label: t("Careers") },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-offwhite via-kraft/5 to-offwhite text-dark font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-deepgreen/95 to-deepgreen/90 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-kraft mb-6">{t("Contact Us")}</h1>
          <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-offwhite leading-relaxed">{t("Ready to elevate your packaging? Reach out to our team for a custom quote or more information.")}</p>
      </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">{t("Get in Touch")}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, idx) => {
              let href = undefined;
              let target = undefined;
              if (method.title === t("Call Us")) {
                href = "tel:+966535414997";
              } else if (method.title === t("Email Us")) {
                href = "mailto:info@huloolalwaraq.com?cc=sales@huloolalwaraq.com";
              } else if (method.title === t("WhatsApp")) {
                href = "https://wa.me/966535414997";
                target = "_blank";
              } else if (method.title === t("Schedule Meeting")) {
                const msg = encodeURIComponent("Hello, I would like to schedule a 30-min free consultation meeting with HuloolAlWaraq.");
                href = `https://wa.me/966535414997?text=${msg}`;
                target = "_blank";
              }
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20 transform hover:scale-105">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-deepgreen/10 rounded-full">
                      <method.icon className="w-8 h-8 text-deepgreen" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-deepgreen mb-4">{method.title}</h3>
                  <p className="text-steel mb-6 leading-relaxed">{method.description}</p>
                  <div className="space-y-2 mb-6">
                    {method.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-steel text-sm">{detail}</p>
                    ))}
                  </div>
                  {href ? (
                    <a href={href} target={target} rel={target ? "noopener noreferrer" : undefined}>
                      <Button className="w-full bg-deepgreen hover:bg-kraft text-kraft hover:text-deepgreen border border-deepgreen hover:border-kraft rounded-xl transition-all duration-300 font-semibold">
                        {method.action}
                      </Button>
                    </a>
                  ) : (
                    <Button className="w-full bg-deepgreen hover:bg-kraft text-kraft hover:text-deepgreen border border-deepgreen hover:border-kraft rounded-xl transition-all duration-300 font-semibold">
                      {method.action}
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-deepgreen/95 to-deepgreen/90">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kraft mb-6">{t("Send us a Message")}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
            <p className="text-xl text-offwhite leading-relaxed">{t("Fill out the form below and we'll get back to you within 24 hours.")}</p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-kraft/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-deepgreen font-semibold mb-2">{t("Full Name")} *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 transition-all duration-200"
                    placeholder={t("Enter your full name")}
                  />
                </div>
                <div>
                  <label className="block text-deepgreen font-semibold mb-2">{t("Email")} *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 transition-all duration-200"
                    placeholder={t("Enter your email")}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-deepgreen font-semibold mb-2">{t("Company")}</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 transition-all duration-200"
                    placeholder={t("Enter your company name")}
                  />
                </div>
                <div>
                  <label className="block text-deepgreen font-semibold mb-2">{t("Phone")}</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 transition-all duration-200"
                    placeholder={t("Enter your phone number")}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-deepgreen font-semibold mb-2">{t("Inquiry Type")}</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 transition-all duration-200"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-deepgreen font-semibold mb-2">{t("Subject")} *</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 transition-all duration-200"
                  placeholder={t("Enter subject")}
                />
              </div>
              
              <div>
                <label className="block text-deepgreen font-semibold mb-2">{t("Message")} *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-kraft/30 rounded-lg focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 transition-all duration-200 resize-none"
                  placeholder={t("Enter your message")}
                />
              </div>
              
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-kraft text-deepgreen rounded-xl font-bold text-lg shadow-lg hover:bg-deepgreen hover:text-kraft transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? t("Sending...") : t("Send Message")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-kraft/10 via-offwhite to-kraft/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deepgreen mb-6">{t("Our Offices")}</h2>
            <div className="w-24 h-1 bg-kraft mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-kraft/20 transform hover:scale-105">
                <h3 className="text-xl font-bold text-deepgreen mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-deepgreen mt-1" />
                    <p className="text-dark text-sm leading-relaxed font-medium">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-deepgreen" />
                    <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="text-dark text-sm font-medium underline hover:text-kraft transition-colors duration-200">{office.phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-deepgreen" />
                    <a href={`mailto:${office.email}`} className="text-dark text-sm font-medium underline hover:text-kraft transition-colors duration-200">{office.email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-deepgreen" />
                    <p className="text-dark text-sm font-medium">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
      </section>
    </div>
  )
}
