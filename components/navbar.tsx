"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Package, Menu, X, ChevronDown, Home, GalleryHorizontal, Languages, Lock, MessageCircle, Box, Building2, FileText } from "lucide-react"
import { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { t, i18n } = useTranslation()

  // Set dir attribute on html for RTL/LTR
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    }
  }, [i18n.language])

  const navItems = [
    { href: "/", label: t('Home'), icon: <Home className="w-5 h-5 mr-1" /> },
    {
      href: "/services",
      label: t('Services'),
      icon: <Building2 className="w-5 h-5 mr-1" />,
      hasDropdown: true,
      dropdownItems: [
        { href: "/packaging-products#packaging", label: t('Packaging') },
        { href: "/packaging-products#industry-solutions", label: t('Industry-Specific Solutions') },
        { href: "/packaging-products#custom-solutions", label: t('Consulting') },
      ],
    },
    { href: "/packaging-products", label: t('Products'), icon: <Box className="w-5 h-5 mr-1" /> },
    { href: "/gallery", label: t('Gallery'), icon: <GalleryHorizontal className="w-5 h-5 mr-1" /> },
    { href: "/contact", label: t('Contact Us'), icon: <MessageCircle className="w-5 h-5 mr-1" /> },
    { href: "/portal", label: t('Client Portal'), icon: <Lock className="w-5 h-5 mr-1" /> },
  ]

  const whatsappNumber = "+966537447999"
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-kraft/20 sticky top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-12 w-12 bg-kraft/20 rounded-full flex items-center justify-center border border-kraft/30">
              <Package className="h-6 w-6 text-deepgreen" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-deepgreen tracking-tight">HuloolAlWaraq</span>
              <span className="text-xs text-steel font-medium">Premium Packaging Solutions</span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-steel hover:text-deepgreen transition-all duration-200 font-medium flex items-center gap-1 ${
                    pathname === item.href || (item.hasDropdown && pathname.startsWith("/services"))
                      ? "text-deepgreen border-b-2 border-kraft"
                      : ""
                  }`}
                  onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                >
                  {item.icon}
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-sm border border-kraft/20 rounded-2xl shadow-xl transition-all duration-200 ${
                      isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="p-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-steel hover:text-deepgreen hover:bg-kraft/20 rounded-xl transition-all duration-200"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Language Toggle */}
            <button
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
              className="ml-2 px-4 py-2 rounded-lg bg-kraft/20 text-deepgreen font-bold flex items-center gap-2 hover:bg-kraft/40 transition-all duration-200"
              title="Toggle Language"
            >
              <Languages className="w-5 h-5" />
              {i18n.language === 'en' ? t('EN') : t('AR')}
            </button>
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-lg bg-green-500 text-white font-bold flex items-center gap-2 hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" /> {t('WhatsApp')}
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-steel hover:text-deepgreen transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-kraft/20 animate-fade-slide-down bg-white/95 backdrop-blur-sm">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-steel hover:text-deepgreen hover:bg-kraft/20 rounded-lg transition-all duration-200 ${
                      pathname === item.href ? "text-deepgreen bg-kraft/10" : ""
                    } flex items-center gap-2`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 text-steel hover:text-deepgreen hover:bg-kraft/20 rounded-lg transition-all duration-200 text-sm"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Language Toggle */}
              <button
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
                className="w-full px-4 py-3 rounded-lg bg-kraft/20 text-deepgreen font-bold flex items-center gap-2 hover:bg-kraft/40 transition-all duration-200"
                title="Toggle Language"
              >
                <Languages className="w-5 h-5" />
                {i18n.language === 'en' ? t('EN') : t('AR')}
              </button>
              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 rounded-lg bg-green-500 text-white font-bold flex items-center gap-2 hover:bg-green-600 transition-all duration-200 shadow-lg"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" /> {t('WhatsApp')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
