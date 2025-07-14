"use client"

import { ArrowLeft, Search, Grid, List, Star, ShoppingCart, Eye, Filter, Package } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next'

export default function PackagingProductsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSector, setSelectedSector] = useState("all")

  const { t } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: "all", name: t("All Products"), count: 450, icon: "📦" },
    { id: "corrugated", name: t("Corrugated Boxes"), count: 85, icon: "📦" },
    { id: "protective", name: t("Protective Packaging"), count: 67, icon: "🛡️" },
    { id: "industrial", name: t("Industrial Packaging"), count: 54, icon: "🏭" },
    { id: "food", name: t("Food Packaging"), count: 78, icon: "🍕" },
    { id: "retail", name: t("Retail Packaging"), count: 92, icon: "🏪" },
    { id: "specialty", name: t("Specialty Products"), count: 74, icon: "⚡" },
  ]

  const sectors = [
    { id: "all", name: "All Sectors", count: 450 },
    { id: "agriculture", name: "Agriculture", count: 42 },
    { id: "beverage", name: "Beverage", count: 38 },
    { id: "building", name: "Building & Construction", count: 29 },
    { id: "business", name: "Business Services", count: 25 },
    { id: "chemical", name: "Chemical & Petrochemical", count: 18 },
    { id: "ecommerce", name: "Ecommerce", count: 65 },
    { id: "electrical", name: "Electrical Appliances", count: 28 },
    { id: "food", name: "Food", count: 58 },
    { id: "household", name: "Household Goods", count: 34 },
    { id: "office-printing", name: "Office & Printing Paper", count: 22 },
    { id: "personal", name: "Personal Goods", count: 35 },
    { id: "pharmaceuticals", name: "Pharmaceuticals", count: 24 },
    { id: "takeaway", name: "Takeaway Food & Beverages", count: 32 },
  ]

  const products = [
    // CORRUGATED BOXES (85 products)
    {
      id: 1,
      name: "Single Wall Corrugated Boxes",
      description: "Lightweight yet durable boxes perfect for shipping and storage",
      image: "📦",
      category: "corrugated",
      sector: "ecommerce",
      price: "4.69 SAR",
      rating: 4.8,
      reviews: 2847,
      features: ["3mm thickness", "32 ECT rating", "Recyclable"],
      inStock: true,
      trending: true,
      specifications: "Available in 50+ standard sizes",
    },
    {
      id: 2,
      name: "Double Wall Corrugated Boxes",
      description: "Enhanced strength for heavier items and long-distance shipping",
      image: "📦",
      category: "corrugated",
      sector: "ecommerce",
      price: "8.06 SAR",
      rating: 4.9,
      reviews: 1923,
      features: ["6mm thickness", "48 ECT rating", "Heavy duty"],
      inStock: true,
      trending: false,
      specifications: "Weight capacity up to 65 lbs",
    },
    {
      id: 3,
      name: "Triple Wall Corrugated Boxes",
      description: "Maximum protection for industrial and heavy-duty applications",
      image: "📦",
      category: "corrugated",
      sector: "building",
      price: "18.19 SAR",
      rating: 4.9,
      reviews: 856,
      features: ["15mm thickness", "71 ECT rating", "Industrial grade"],
      inStock: true,
      trending: true,
      specifications: "Weight capacity up to 125 lbs",
    },
    {
      id: 4,
      name: "Wrap Around Boxes",
      description: "Adjustable boxes that wrap around products for perfect fit",
      image: "📦",
      category: "corrugated",
      sector: "ecommerce",
      price: "13.13 SAR",
      rating: 4.8,
      reviews: 1245,
      features: ["Adjustable size", "No void fill needed", "Professional appearance"],
      inStock: true,
      trending: true,
      specifications: "Adjusts to product dimensions automatically",
    },
    {
      id: 5,
      name: "Die Cut Boxes",
      description: "Precision-cut boxes for specific product dimensions",
      image: "✂️",
      category: "corrugated",
      sector: "retail",
      price: "10.31 SAR",
      rating: 4.8,
      reviews: 967,
      features: ["Exact fit", "No tape required", "Professional appearance"],
      inStock: true,
      trending: false,
      specifications: "Custom tooling available",
    },
    {
      id: 6,
      name: "Telescopic Boxes for Fresh Produce",
      description: "Ventilated boxes designed specifically for fresh fruits and vegetables",
      image: "🥬",
      category: "corrugated",
      sector: "agriculture",
      price: "19.31 SAR",
      rating: 4.9,
      reviews: 567,
      features: ["Ventilated design", "Moisture resistant", "Stackable"],
      inStock: true,
      trending: true,
      specifications: "Optimized for produce transport and storage",
    },
    {
      id: 7,
      name: "Archive Storage Boxes",
      description: "Long-term storage boxes for documents and files",
      image: "🗃️",
      category: "corrugated",
      sector: "office-printing",
      price: "33.71 SAR",
      rating: 4.7,
      reviews: 1456,
      features: ["Acid-free", "Reinforced corners", "Easy assembly"],
      inStock: true,
      trending: false,
      specifications: "Letter and legal size options",
    },
    {
      id: 8,
      name: "Moving Boxes",
      description: "Heavy-duty boxes designed for household moving",
      image: "🏠",
      category: "corrugated",
      sector: "household",
      price: "12.19 SAR",
      rating: 4.6,
      reviews: 2134,
      features: ["Extra strength", "Easy grip handles", "Various sizes"],
      inStock: true,
      trending: true,
      specifications: "Small, medium, large, and extra-large sizes",
    },

    // PROTECTIVE PACKAGING (67 products)
    {
      id: 9,
      name: "Bubble Wrap Rolls",
      description: "Premium bubble wrap for cushioning and protection",
      image: "🫧",
      category: "protective",
      sector: "ecommerce",
      price: "3.34 SAR",
      rating: 4.6,
      reviews: 3421,
      features: ["Anti-static", "Perforated", "Multiple sizes"],
      inStock: true,
      trending: true,
      specifications: 'Available in 12", 24", 48" widths',
    },
    {
      id: 10,
      name: "Foam Packaging Inserts",
      description: "Custom-cut foam inserts for fragile item protection",
      image: "🧽",
      category: "protective",
      sector: "electrical",
      price: "48.71 SAR",
      rating: 4.9,
      reviews: 756,
      features: ["Custom cutting", "Anti-static", "Reusable"],
      inStock: true,
      trending: false,
      specifications: "Polyethylene and polyurethane options",
    },
    {
      id: 11,
      name: "Air Pillows",
      description: "Inflatable cushioning for void fill and protection",
      image: "💨",
      category: "protective",
      sector: "ecommerce",
      price: "0.56 SAR",
      rating: 4.5,
      reviews: 2134,
      features: ["Lightweight", "Space efficient", "Biodegradable options"],
      inStock: true,
      trending: true,
      specifications: 'Various sizes from 4"x8" to 8"x4"',
    },
    {
      id: 12,
      name: "Packing Peanuts",
      description: "Loose fill packaging for irregular shaped items",
      image: "🥜",
      category: "protective",
      sector: "ecommerce",
      price: "93.71 SAR",
      rating: 4.3,
      reviews: 1567,
      features: ["Biodegradable", "Anti-static", "Reusable"],
      inStock: true,
      trending: false,
      specifications: "14 cubic feet per bag",
    },
    {
      id: 13,
      name: "Kraft Paper Void Fill",
      description: "Eco-friendly paper cushioning and void fill",
      image: "📄",
      category: "protective",
      sector: "ecommerce",
      price: "69.38 SAR",
      rating: 4.7,
      reviews: 892,
      features: ["100% recyclable", "Crinkle cut", "Natural kraft"],
      inStock: true,
      trending: true,
      specifications: "Available in various densities",
    },
    {
      id: 14,
      name: "Corner Protectors",
      description: "Cardboard corner protectors for shipping and storage",
      image: "📐",
      category: "protective",
      sector: "building",
      price: "4.69 SAR",
      rating: 4.5,
      reviews: 1456,
      features: ["Prevents damage", "Stackable", "Recyclable"],
      inStock: true,
      trending: false,
      specifications: "Various lengths and angles available",
    },

    // INDUSTRIAL PACKAGING (54 products)
    {
      id: 15,
      name: "Stretch Wrap Film",
      description: "Industrial strength film for pallet wrapping and bundling",
      image: "🎞️",
      category: "industrial",
      sector: "building",
      price: "172.46 SAR",
      rating: 4.8,
      reviews: 1234,
      features: ["High puncture resistance", "Superior cling", "UV resistant"],
      inStock: true,
      trending: true,
      specifications: '18" and 20" widths, 1500ft length',
    },
    {
      id: 16,
      name: "Shrink Wrap Film",
      description: "Heat-activated film for product bundling and protection",
      image: "🔥",
      category: "industrial",
      sector: "building",
      price: "145.31 SAR",
      rating: 4.6,
      reviews: 987,
      features: ["Heat activated", "Crystal clear", "Tamper evident"],
      inStock: true,
      trending: false,
      specifications: "Multiple gauges available",
    },
    {
      id: 17,
      name: "Steel Strapping",
      description: "Heavy-duty steel strapping for industrial applications",
      image: "🔗",
      category: "industrial",
      sector: "building",
      price: "468.75 SAR",
      rating: 4.9,
      reviews: 456,
      features: ["High tensile strength", "Corrosion resistant", "Reusable"],
      inStock: true,
      trending: false,
      specifications: "Various widths and thicknesses",
    },
    {
      id: 18,
      name: "Plastic Strapping",
      description: "Lightweight alternative to steel strapping",
      image: "🎗️",
      category: "industrial",
      sector: "building",
      price: "245.63 SAR",
      rating: 4.7,
      reviews: 723,
      features: ["Weather resistant", "Easy to handle", "Cost effective"],
      inStock: true,
      trending: true,
      specifications: "Polypropylene and polyester options",
    },
    {
      id: 19,
      name: "Industrial Tape",
      description: "Heavy-duty tape for industrial packaging applications",
      image: "🏷️",
      category: "industrial",
      sector: "building",
      price: "33.71 SAR",
      rating: 4.6,
      reviews: 1567,
      features: ["High adhesion", "Weather resistant", "Various widths"],
      inStock: true,
      trending: true,
      specifications: "Acrylic and hot melt adhesives",
    },
    {
      id: 20,
      name: "Pallet Covers",
      description: "Protective covers for palletized goods",
      image: "🏗️",
      category: "industrial",
      sector: "building",
      price: "59.06 SAR",
      rating: 4.5,
      reviews: 678,
      features: ["Weather protection", "UV resistant", "Various sizes"],
      inStock: true,
      trending: false,
      specifications: "Standard and custom pallet sizes",
    },

    // FOOD PACKAGING (78 products)
    {
      id: 21,
      name: "Double-Decker Pizza Boxes",
      description: "Innovative two-level pizza delivery boxes",
      image: "🍕",
      category: "food",
      sector: "takeaway",
      price: "10.69 SAR",
      rating: 4.7,
      reviews: 892,
      features: ["Two compartments", "Heat retention", "Grease resistant"],
      inStock: true,
      trending: true,
      specifications: "Fits two large pizzas efficiently",
    },
    {
      id: 22,
      name: "Food Delivery Boxes",
      description: "Insulated boxes for hot food delivery",
      image: "🍱",
      category: "food",
      sector: "takeaway",
      price: "11.81 SAR",
      rating: 4.9,
      reviews: 1834,
      features: ["Insulated", "Leak-proof", "Stackable"],
      inStock: true,
      trending: true,
      specifications: "Temperature retention up to 2 hours",
    },
    {
      id: 23,
      name: "Takeaway Containers",
      description: "Microwave-safe containers for food takeaway",
      image: "🥡",
      category: "food",
      sector: "takeaway",
      price: "3.56 SAR",
      rating: 4.5,
      reviews: 3421,
      features: ["Microwave safe", "Leak resistant", "Stackable"],
      inStock: true,
      trending: true,
      specifications: "Various sizes from 8oz to 32oz",
    },
    {
      id: 24,
      name: "Bakery Boxes",
      description: "Specialized boxes for cakes, pastries, and baked goods",
      image: "🎂",
      category: "food",
      sector: "food",
      price: "6.94 SAR",
      rating: 4.7,
      reviews: 1234,
      features: ["Window options", "Grease resistant", "Easy assembly"],
      inStock: true,
      trending: false,
      specifications: "Square and rectangular options",
    },
    {
      id: 25,
      name: "Produce Boxes",
      description: "Wax-coated boxes for fresh fruits and vegetables",
      image: "🥬",
      category: "food",
      sector: "agriculture",
      price: "11.81 SAR",
      rating: 4.8,
      reviews: 987,
      features: ["Wax coated", "Moisture resistant", "Ventilated"],
      inStock: true,
      trending: false,
      specifications: "Standard produce industry sizes",
    },
    {
      id: 26,
      name: "Beverage Carriers",
      description: "Secure carriers for bottles and cans",
      image: "🍾",
      category: "food",
      sector: "beverage",
      price: "9.19 SAR",
      rating: 4.8,
      reviews: 1247,
      features: ["Secure grip", "Multiple configurations", "Recyclable"],
      inStock: true,
      trending: true,
      specifications: "2, 4, 6, and 12 pack options",
    },
    {
      id: 27,
      name: "Insulated Shipping Boxes",
      description: "Temperature-controlled packaging for perishables",
      image: "🧊",
      category: "food",
      sector: "food",
      price: "33.71 SAR",
      rating: 4.9,
      reviews: 634,
      features: ["Insulated walls", "Temperature control", "Leak proof"],
      inStock: true,
      trending: true,
      specifications: "Maintains temperature for 24-48 hours",
    },

    // RETAIL PACKAGING (92 products)
    {
      id: 28,
      name: "Retail Display Boxes",
      description: "Point-of-purchase displays for retail environments",
      image: "🏪",
      category: "retail",
      sector: "retail",
      price: "58.13 SAR",
      rating: 4.7,
      reviews: 456,
      features: ["Eye-catching design", "Easy setup", "Durable"],
      inStock: true,
      trending: true,
      specifications: "Custom graphics and sizes available",
    },
    {
      id: 29,
      name: "Mailer Boxes",
      description: "E-commerce shipping boxes with easy-open design",
      image: "📮",
      category: "retail",
      sector: "ecommerce",
      price: "9.19 SAR",
      rating: 4.8,
      reviews: 1789,
      features: ["Self-locking", "No tape required", "Branded options"],
      inStock: true,
      trending: true,
      specifications: "Perfect for online retail shipping",
    },
    {
      id: 30,
      name: "Gift Boxes",
      description: "Premium presentation boxes for gifts and retail",
      image: "🎁",
      category: "retail",
      sector: "personal",
      price: "15.94 SAR",
      rating: 4.9,
      reviews: 892,
      features: ["Magnetic closure", "Ribbon included", "Luxury finish"],
      inStock: true,
      trending: false,
      specifications: "Various colors and sizes",
    },
    {
      id: 31,
      name: "Jewelry Boxes",
      description: "Specialized packaging for jewelry and small valuables",
      image: "💍",
      category: "retail",
      sector: "personal",
      price: "7.31 SAR",
      rating: 4.6,
      reviews: 1345,
      features: ["Velvet lining", "Secure closure", "Elegant design"],
      inStock: true,
      trending: false,
      specifications: "Ring, necklace, and bracelet sizes",
    },
    {
      id: 32,
      name: "Cosmetic Packaging",
      description: "Elegant packaging for beauty products",
      image: "💄",
      category: "retail",
      sector: "personal",
      price: "18.56 SAR",
      rating: 4.7,
      reviews: 1234,
      features: ["Luxury finish", "Custom colors", "Magnetic closure"],
      inStock: true,
      trending: true,
      specifications: "Various cosmetic product sizes",
    },
    {
      id: 33,
      name: "Clothing Boxes",
      description: "Premium boxes for apparel and fashion items",
      image: "👕",
      category: "retail",
      sector: "personal",
      price: "14.06 SAR",
      rating: 4.6,
      reviews: 987,
      features: ["Flat pack design", "Easy assembly", "Brand customization"],
      inStock: true,
      trending: true,
      specifications: "Various garment sizes",
    },

    // SPECIALTY PRODUCTS (74 products)
    {
      id: 34,
      name: "Anti-Static Bags",
      description: "ESD protection for electronic components",
      image: "⚡",
      category: "specialty",
      sector: "electrical",
      price: "1.69 SAR",
      rating: 4.9,
      reviews: 567,
      features: ["ESD protection", "Transparent", "Heat sealable"],
      inStock: true,
      trending: true,
      specifications: "Various sizes and thicknesses",
    },
    {
      id: 35,
      name: "Hazmat Packaging",
      description: "UN certified packaging for dangerous goods",
      image: "☢️",
      category: "specialty",
      sector: "chemical",
      price: "97.46 SAR",
      rating: 4.8,
      reviews: 234,
      features: ["UN certified", "DOT approved", "Multiple classes"],
      inStock: true,
      trending: false,
      specifications: "Compliant with international regulations",
    },
    {
      id: 36,
      name: "Pharmaceutical Packaging",
      description: "Tamper-evident packaging for pharmaceutical products",
      image: "💊",
      category: "specialty",
      sector: "pharmaceuticals",
      price: "14.06 SAR",
      rating: 4.9,
      reviews: 445,
      features: ["Tamper evident", "Child resistant", "FDA compliant"],
      inStock: true,
      trending: true,
      specifications: "Various closure mechanisms",
    },
    {
      id: 37,
      name: "Medical Device Packaging",
      description: "Sterile packaging for medical devices",
      image: "🏥",
      category: "specialty",
      sector: "pharmaceuticals",
      price: "$15.25",
      rating: 4.8,
      reviews: 267,
      features: ["Sterile barrier", "Peel-open design", "Traceable"],
      inStock: true,
      trending: false,
      specifications: "ISO 11607 compliant",
    },
    {
      id: 38,
      name: "Temperature Controlled Packaging",
      description: "Advanced thermal packaging for sensitive products",
      image: "🌡️",
      category: "specialty",
      sector: "pharmaceuticals",
      price: "$45.99",
      rating: 4.9,
      reviews: 156,
      features: ["Temperature monitoring", "Insulated design", "Data logging"],
      inStock: true,
      trending: true,
      specifications: "Maintains 2-8°C for 48+ hours",
    },
    {
      id: 39,
      name: "Clean Room Packaging",
      description: "Sterile packaging for clean room environments",
      image: "🧪",
      category: "specialty",
      sector: "pharmaceuticals",
      price: "$12.50",
      rating: 4.8,
      reviews: 234,
      features: ["ISO Class 5", "Particle-free", "Sterile"],
      inStock: true,
      trending: false,
      specifications: "Various clean room classifications",
    },

    // Additional products to reach the full count...
    {
      id: 40,
      name: "Eco-Friendly Packaging",
      description: "100% biodegradable packaging solutions",
      image: "🌱",
      category: "specialty",
      sector: "ecommerce",
      price: "$5.25",
      rating: 4.7,
      reviews: 1456,
      features: ["Biodegradable", "Compostable", "Sustainable"],
      inStock: true,
      trending: true,
      specifications: "Breaks down in 90 days",
    },
  ]

  const categoryColors: Record<string, string> = {
    all: 'bg-gradient-to-r from-kraft/40 to-deepgreen/20 border-kraft',
    corrugated: 'bg-gradient-to-r from-yellow-200 to-yellow-400 border-yellow-500',
    protective: 'bg-gradient-to-r from-blue-100 to-blue-300 border-blue-400',
    industrial: 'bg-gradient-to-r from-gray-200 to-gray-400 border-gray-500',
    food: 'bg-gradient-to-r from-orange-100 to-orange-300 border-orange-400',
    retail: 'bg-gradient-to-r from-pink-100 to-pink-300 border-pink-400',
    specialty: 'bg-gradient-to-r from-purple-100 to-purple-300 border-purple-400',
  }
  const sectorColors: Record<string, string> = {
    all: 'bg-gradient-to-r from-kraft/40 to-deepgreen/20 border-kraft',
    agriculture: 'bg-gradient-to-r from-green-100 to-green-300 border-green-400',
    beverage: 'bg-gradient-to-r from-blue-100 to-blue-300 border-blue-400',
    building: 'bg-gradient-to-r from-gray-200 to-gray-400 border-gray-500',
    business: 'bg-gradient-to-r from-yellow-100 to-yellow-300 border-yellow-400',
    chemical: 'bg-gradient-to-r from-purple-100 to-purple-300 border-purple-400',
    ecommerce: 'bg-gradient-to-r from-pink-100 to-pink-300 border-pink-400',
    electrical: 'bg-gradient-to-r from-indigo-100 to-indigo-300 border-indigo-400',
    food: 'bg-gradient-to-r from-orange-100 to-orange-300 border-orange-400',
    household: 'bg-gradient-to-r from-teal-100 to-teal-300 border-teal-400',
    'office-printing': 'bg-gradient-to-r from-blue-100 to-blue-300 border-blue-400',
    personal: 'bg-gradient-to-r from-red-100 to-red-300 border-red-400',
    pharmaceuticals: 'bg-gradient-to-r from-pink-100 to-pink-300 border-pink-400',
    takeaway: 'bg-gradient-to-r from-yellow-100 to-yellow-300 border-yellow-400',
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.features.some((feature) => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSector = selectedSector === "all" || product.sector === selectedSector
    return matchesSearch && matchesCategory && matchesSector
  })

  const PRODUCTS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedProducts = filteredProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  // Reset to page 1 when filters/search change
  useEffect(() => { setCurrentPage(1); }, [searchTerm, selectedCategory, selectedSector]);

  // Add color maps for industry solutions and category overview
  const industryColors: Record<string, string> = {
    'E-commerce': 'bg-gradient-to-br from-pink-100 to-pink-300 border-pink-400',
    'Food & Beverage': 'bg-gradient-to-br from-orange-100 to-orange-300 border-orange-400',
    'Electronics': 'bg-gradient-to-br from-blue-100 to-blue-300 border-blue-400',
    'Pharmaceutical': 'bg-gradient-to-br from-purple-100 to-purple-300 border-purple-400',
  };
  const categoryCardColors: Record<string, string> = {
    corrugated: 'bg-gradient-to-br from-yellow-100 to-yellow-300 border-yellow-400',
    protective: 'bg-gradient-to-br from-blue-100 to-blue-300 border-blue-400',
    industrial: 'bg-gradient-to-br from-gray-100 to-gray-300 border-gray-400',
    food: 'bg-gradient-to-br from-orange-100 to-orange-300 border-orange-400',
    retail: 'bg-gradient-to-br from-pink-100 to-pink-300 border-pink-400',
    specialty: 'bg-gradient-to-br from-purple-100 to-purple-300 border-purple-400',
  };

  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <Navbar />
      <div className="pt-32 px-4">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-deepgreen text-center mb-6">{t('Our Packaging Products')}</h1>
          <p className="text-xl text-steel max-w-4xl mx-auto mb-12 text-center">{t('We offer a full range of premium packaging solutions for every industry and need.')}</p>
          {/* Category Overview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {categories.slice(1).map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-center font-medium text-deepgreen shadow-md ${categoryCardColors[category.id] || 'bg-white border-steel'} hover:scale-105 hover:shadow-lg hover:border-deepgreen focus:outline-none focus:ring-2 focus:ring-deepgreen/30 ${selectedCategory === category.id ? 'ring-2 ring-deepgreen border-deepgreen scale-105' : ''}`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-bold text-base mb-1">{category.name}</div>
                <div className="text-xs opacity-80">{category.count} products</div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Filters and Search */}
      <div className="mb-12">
        <div className="max-w-7xl mx-auto bg-green-700/80 border border-deepgreen rounded-2xl p-6">
          <div className="space-y-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-offwhite" />
              <Input
                placeholder="Search products, features, specifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-white border border-deepgreen text-dark placeholder:text-steel rounded-xl"
              />
            </div>
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-offwhite mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-offwhite" />
                {t('Product Categories')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-xl transition-all duration-200 text-sm font-medium border-2 shadow-sm bg-white text-deepgreen border-deepgreen hover:bg-kraft/10 hover:text-deepgreen focus:outline-none focus:ring-2 focus:ring-deepgreen/30 ${selectedCategory === category.id ? 'bg-kraft/20 text-deepgreen border-deepgreen ring-2 ring-deepgreen scale-105' : ''}`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
            {/* Sectors */}
            <div>
              <h3 className="text-lg font-semibold text-offwhite mb-3 flex items-center gap-2">
                <Filter className="w-5 h-5 text-offwhite" />
                {t('Industry Sectors')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <button
                    key={sector.id}
                    onClick={() => setSelectedSector(sector.id)}
                    className={`px-4 py-2 rounded-xl transition-all duration-200 text-sm font-medium border-2 shadow-sm bg-white text-deepgreen border-deepgreen hover:bg-kraft/10 hover:text-deepgreen focus:outline-none focus:ring-2 focus:ring-deepgreen/30 ${selectedSector === sector.id ? 'bg-kraft/20 text-deepgreen border-deepgreen ring-2 ring-deepgreen scale-105' : ''}`}
                  >
                    {sector.name} ({sector.count})
                  </button>
                ))}
              </div>
            </div>
            {/* View Toggle and Results Count */}
            <div className="flex justify-between items-center">
              <div className="text-offwhite">
                {t('Showing')} <span className="font-semibold text-kraft">{filteredProducts.length}</span> {t('of')} <span className="font-semibold text-kraft">{products.length}</span> {t('products')}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-kraft/20 text-deepgreen' : 'bg-white text-deepgreen'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-kraft/20 text-deepgreen' : 'bg-white text-deepgreen'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products Grid/List */}
      <div className="max-w-8xl mx-auto transition-all duration-1000 delay-400">
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' : 'space-y-6'}>
          {paginatedProducts.map((product, index) => (
            <div key={product.id} className="group">
              <Card className="h-full bg-white bg-cardboard-texture border border-steel hover:border-deepgreen transition-all duration-200 rounded-2xl overflow-hidden shadow hover:shadow-lg flex flex-col">
                <CardHeader className="text-center relative">
                  {product.trending && (
                    <div className="absolute top-4 right-4 bg-kraft text-deepgreen text-xs px-2 py-1 rounded-full font-bold shadow">🔥 {t('TRENDING')}</div>
                  )}
                  <div className="text-6xl mb-4">{product.image}</div>
                  <CardTitle className="text-lg text-deepgreen font-bold mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-steel text-sm mb-4">{product.description}</CardDescription>
                  <div className="flex justify-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-kraft/20 text-deepgreen text-xs rounded-lg border border-kraft/40">{categories.find((c) => c.id === product.category)?.name}</span>
                    <span className="px-2 py-1 bg-steel/10 text-steel text-xs rounded-lg border border-steel/30">{sectors.find((s) => s.id === product.sector)?.name}</span>
                  </div>
                  <div className="text-xs text-steel mb-4">{product.specifications}</div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                  {/* Rating and Reviews */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-steel/40'}`} />
                        ))}
                      </div>
                      <span className="text-steel text-sm">({product.reviews})</span>
                    </div>
                    <div className="text-xl font-bold text-deepgreen">{product.price}</div>
                  </div>
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-kraft/20 text-steel text-xs rounded-lg border border-kraft/40">{feature}</span>
                    ))}
                  </div>
                  {/* Stock Status */}
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`} />
                    <span className={`text-sm ${product.inStock ? 'text-green-700' : 'text-red-500'}`}>{product.inStock ? t('In Stock') : t('Out of Stock')}</span>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Link href={`/product-details/${product.id}`} className="flex-1">
                      <Button className="w-full bg-deepgreen text-offwhite rounded-xl transition-all duration-200 hover:bg-kraft hover:text-deepgreen text-sm font-bold">{t('View Details')}</Button>
                    </Link>
                    <Button variant="outline" className="border-steel text-deepgreen hover:bg-kraft/10 rounded-xl transition-all duration-200 bg-transparent" disabled={!product.inStock}>
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-deepgreen mb-4">{t('No products found')}</h3>
            <p className="text-steel mb-8">{t('Try adjusting your search or filter criteria')}</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedSector("all")
              }}
              className="bg-deepgreen text-offwhite rounded-xl font-bold"
            >
              {t('Clear All Filters')}
            </Button>
          </div>
        )}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg bg-kraft text-deepgreen font-bold disabled:opacity-50 hover:bg-deepgreen hover:text-kraft transition-all"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-2 rounded-lg font-bold transition-all ${currentPage === i + 1 ? 'bg-deepgreen text-kraft' : 'bg-white text-deepgreen hover:bg-kraft hover:text-deepgreen'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg bg-kraft text-deepgreen font-bold disabled:opacity-50 hover:bg-deepgreen hover:text-kraft transition-all"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Featured Products Section */}
      <div className="mt-20">
        <div className="bg-white border border-steel rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-deepgreen mb-8 text-center">{t('Featured Solutions')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-offwhite border border-kraft/30 rounded-2xl hover:bg-kraft/10 transition-all duration-200">
              <div className="text-6xl mb-4">📦</div>
              <h4 className="text-xl font-bold text-deepgreen mb-3">{t('Wrap Around Boxes')}</h4>
              <p className="text-steel mb-4">{t('Adjustable boxes that perfectly fit your products')}</p>
              <div className="text-sm text-kraft">• {t('No void fill needed')} • {t('Professional appearance')} • {t('Cost effective')}</div>
            </div>
            <div className="text-center p-6 bg-offwhite border border-kraft/30 rounded-2xl hover:bg-kraft/10 transition-all duration-200">
              <div className="text-6xl mb-4">🥬</div>
              <h4 className="text-xl font-bold text-deepgreen mb-3">{t('Telescopic Boxes for Fresh Produce')}</h4>
              <p className="text-steel mb-4">{t('Specialized ventilated boxes for agricultural products')}</p>
              <div className="text-sm text-kraft">• {t('Optimal ventilation')} • {t('Moisture control')} • {t('Stackable design')}</div>
            </div>
            <div className="text-center p-6 bg-offwhite border border-kraft/30 rounded-2xl hover:bg-kraft/10 transition-all duration-200">
              <div className="text-6xl mb-4">🍕</div>
              <h4 className="text-xl font-bold text-deepgreen mb-3">{t('Double-Decker Pizza Boxes')}</h4>
              <p className="text-steel mb-4">{t('Innovative two-level design for multiple pizzas')}</p>
              <div className="text-sm text-kraft">• {t('Space efficient')} • {t('Heat retention')} • {t('Grease resistant')}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Industry Solutions */}
      <div className="mt-20">
        <div className="bg-white border border-steel rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-deepgreen mb-8 text-center">{t('Industry-Specific Solutions')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                industry: "E-commerce",
                icon: <span className="text-4xl">🛒</span>,
                description: "Complete shipping solutions for online retailers",
                products: ["Mailer boxes", "Protective packaging", "Branded solutions"],
                count: filteredProducts.filter((p) => p.sector === "ecommerce").length,
              },
              {
                industry: "Food & Beverage",
                icon: <span className="text-4xl">🍕</span>,
                description: "FDA-approved packaging for food safety",
                products: ["Food grade boxes", "Insulated packaging", "Produce containers"],
                count: filteredProducts.filter((p) => p.sector === "food" || p.sector === "beverage").length,
              },
              {
                industry: "Electronics",
                icon: <span className="text-4xl">📱</span>,
                description: "Anti-static and protective solutions",
                products: ["ESD bags", "Custom foam", "Anti-static bubble wrap"],
                count: filteredProducts.filter((p) => p.sector === "electrical").length,
              },
              {
                industry: "Pharmaceutical",
                icon: <span className="text-4xl">💊</span>,
                description: "Compliant packaging for medical products",
                products: ["Tamper evident", "Child resistant", "Temperature controlled"],
                count: filteredProducts.filter((p) => p.sector === "pharmaceuticals").length,
              },
            ].map((solution, index) => (
              <button
                key={index}
                onClick={() => {
                  if (solution.industry === "E-commerce") setSelectedSector("ecommerce")
                  else if (solution.industry === "Food & Beverage") setSelectedSector("food")
                  else if (solution.industry === "Electronics") setSelectedSector("electrical")
                  else if (solution.industry === "Pharmaceutical") setSelectedSector("pharmaceuticals")
                }}
                className={`text-center p-8 rounded-2xl border-2 font-semibold shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg ${industryColors[solution.industry] || 'bg-white border-steel'} focus:outline-none focus:ring-2 focus:ring-deepgreen/30`}
              >
                <div className="mb-4 flex justify-center">{solution.icon}</div>
                <h4 className="text-xl font-bold text-deepgreen mb-2">{solution.industry}</h4>
                <p className="text-steel mb-4">{solution.description}</p>
                <div className="space-y-1 mb-4">
                  {solution.products.map((product, idx) => (
                    <div key={idx} className="text-sm text-kraft">• {product}</div>
                  ))}
                </div>
                <div className="text-sm font-bold text-deepgreen">{solution.count} products available</div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="mt-20">
        <div className="bg-kraft/10 border border-kraft/30 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-deepgreen mb-6">{t('Need Custom Packaging Solutions?')}</h3>
          <p className="text-xl text-steel mb-8 max-w-3xl mx-auto">
            {t('Our packaging experts can create custom solutions tailored to your specific industry needs and requirements. From design to delivery, we handle everything across all sectors.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-deepgreen text-offwhite font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-kraft hover:text-deepgreen">{t('Get Custom Quote')}</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-deepgreen text-deepgreen hover:bg-kraft/10 px-8 py-4 rounded-xl transition-all duration-200 bg-transparent">{t('View Our Services')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
