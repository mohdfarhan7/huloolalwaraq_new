"use client"

import Link from "next/link"
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  const footerSections = [
    {
      title: t("Products"),
      links: [
        { label: t("Corrugated Boxes"), href: "/packaging-products" },
        { label: t("Bubble Wrap"), href: "/packaging-products" },
        { label: t("Packing Tape"), href: "/packaging-products" },
        { label: t("Custom Solutions"), href: "/contact" },
      ],
    },
    {
      title: t("Company"),
      links: [
        { label: t("About Us"), href: "/about" },
        { label: t("Our Story"), href: "/about" },
        { label: t("Careers"), href: "/contact" },
        { label: t("News & Updates"), href: "/about" },
      ],
    },
    {
      title: t("Support"),
      links: [
        { label: t("Contact Us"), href: "/contact" },
        { label: t("Help Center"), href: "/contact" },
        { label: t("Shipping Info"), href: "/contact" },
        { label: t("Returns"), href: "/contact" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: t("Facebook") },
    { icon: Twitter, href: "#", label: t("Twitter") },
    { icon: Instagram, href: "#", label: t("Instagram") },
    { icon: Linkedin, href: "#", label: t("LinkedIn") },
  ]

  return (
    <footer className="bg-gradient-to-br from-deepgreen/95 to-deepgreen/90 border-t border-kraft/30 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-kraft/20 rounded-full flex items-center justify-center mr-3">
                <Package className="h-6 w-6 text-kraft" />
              </div>
              <span className="text-2xl font-black text-kraft tracking-tight">HuloolAlWaraq</span>
            </div>
            <p className="text-offwhite mb-6 leading-relaxed">{t('Premium Packaging Solutions')}</p>
            <div className="flex flex-col gap-3 text-offwhite text-sm">
              <div className="flex items-center gap-3 hover:text-kraft transition-colors duration-200">
                <div className="p-2 bg-kraft/40 rounded-full">
                  <Mail className="w-4 h-4 text-offwhite" />
                </div>
                <a href="mailto:info@huloolalwaraq.com" className="text-white/90 font-medium underline hover:text-kraft transition-colors duration-200">info@huloolalwaraq.com</a>
              </div>
              <div className="flex items-center gap-3 hover:text-kraft transition-colors duration-200">
                <div className="p-2 bg-kraft/40 rounded-full">
                  <Phone className="w-4 h-4 text-offwhite" />
                </div>
                <a href="tel:+966535414997" className="text-white/90 font-medium underline hover:text-kraft transition-colors duration-200">+966 53 541 4997</a>
              </div>
              <div className="flex items-center gap-3 hover:text-kraft transition-colors duration-200">
                <div className="p-2 bg-kraft/40 rounded-full">
                  <MapPin className="w-4 h-4 text-offwhite" />
                </div>
                <span className="text-white/90 font-medium">{t('Riyadh, Saudi Arabia')}</span>
              </div>
            </div>
          </div>
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold text-kraft mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, lidx) => (
                  <li key={lidx}>
                    <Link 
                      href={link.href} 
                      className="text-offwhite hover:text-kraft transition-all duration-200 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-kraft/50 rounded-full group-hover:bg-kraft transition-all duration-200"></div>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-lg font-bold text-kraft mb-6">{t('Follow Us')}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="p-3 bg-kraft/20 rounded-full hover:bg-kraft/40 transition-all duration-200 group" 
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 text-kraft group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
            <div className="mt-8">
              <h5 className="text-kraft font-semibold mb-3">{t('Newsletter')}</h5>
              <p className="text-offwhite text-sm mb-4">{t('Stay updated with our latest products and offers.')}</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder={t("Enter your email")}
                  className="flex-1 px-3 py-2 bg-white/10 border border-kraft/30 rounded-lg text-offwhite placeholder-offwhite/60 focus:outline-none focus:border-kraft transition-all duration-200"
                />
                <button className="px-4 py-2 bg-kraft text-deepgreen rounded-lg font-semibold hover:bg-kraft/80 transition-all duration-200">
                  {t('Subscribe')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-kraft/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left text-offwhite text-sm">
              &copy; {currentYear} HuloolAlWaraq. {t('All rights reserved.')}
            </div>
            <div className="flex gap-6 text-offwhite text-sm">
              <Link href="/privacy" className="hover:text-kraft transition-colors duration-200">
                {t('Privacy Policy')}
              </Link>
              <Link href="/terms" className="hover:text-kraft transition-colors duration-200">
                {t('Terms of Service')}
              </Link>
              <Link href="/sitemap" className="hover:text-kraft transition-colors duration-200">
                {t('Sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
