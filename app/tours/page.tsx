"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import {
  Phone,
  Mail,
  Check,
  Building2,
  Mountain,
  UtensilsCrossed,
  Cloud,
  Calendar,
  Heart,
  Package,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Clock,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

interface Tour {
  id: string
  title: string
  description: string
  price: number
  duration: string
  location: string
  image_url: string
  highlights: string[]
  images: string[]
}

export default function ToursPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [tours, setTours] = useState<Tour[]>([])
  const [error, setError] = useState<string | null>(null)
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  // Fetch tours on mount
  useState(() => {
    async function fetchTours() {
      try {
        const response = await fetch("/api/tours")
        if (!response.ok) throw new Error("Failed to fetch tours")
        const data = await response.json()
        setTours(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load tours")
      }
    }
    fetchTours()
  })

  const handleBookNow = (tour: Tour) => {
    setSelectedTour(tour)
    setIsBookingModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsBookingModalOpen(false)
    setSelectedTour(null)
  }

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a href="tel:+34637926988" className="flex items-center gap-2 hover:text-gray-200">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
              <span>+34 637 926 988</span>
            </a>
            <a href="mailto:contact@holidaylandia.com" className="flex items-center gap-2 hover:text-gray-200">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>contact@holidaylandia.com</span>
            </a>
          </div>
          <div className="text-center">
            <span>Special Offer: 20% off pre-winter packages!</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="text-xl sm:text-2xl ">
              <span className="text-orange-500 font-light">HOLIDAY</span>
              <span className="text-blue-600 font-bold">LANDIA</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/destinations" className="text-gray-700 hover:text-blue-600 transition-colors">
                Destinations
              </Link>
              <Link href="/tours" className="text-blue-600 font-medium">
                Tours
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="flex flex-col py-4">
                <Link
                  href="/"
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/destinations"
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Destinations
                </Link>
                <Link
                  href="/tours"
                  className="px-4 py-3 text-blue-600 bg-blue-50 font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tours
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/tours.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
            Your Dream Antalya Adventure
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100">
            Exclusive tours, handpicked experiences, and hidden gems — discover Antalya with Holidaylandia.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <a href="#tours">
              <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8">
                Popular Tours
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 bg-transparent"
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Category Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm">
              <Check className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Beach</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm">
              <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Culture</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm">
              <Mountain className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Adventure</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm">
              <UtensilsCrossed className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Food</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tours Section */}
      <section id="tours" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">Our Tours</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Embark on unforgettable adventures with Holidaylandia. From romantic getaways to family fun, we have the
              perfect tour for every traveler.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg mb-8">
              Error loading tours: {error}
            </div>
          )}

          {/* Tour Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tours?.map((tour, index) => (
              <FadeIn key={tour.id} delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                  <div className="relative h-64">
                    <img
                      src={tour.image_url || "/placeholder.svg?height=400&width=600"}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      €{tour.price}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                    <p className="text-orange-500 font-medium mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {tour.location}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>

                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>

                    {tour.highlights && tour.highlights.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tour.highlights.slice(0, 3).map((highlight: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {highlight}
                            </span>
                          ))}
                          {tour.highlights.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              +{tour.highlights.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="mt-auto space-y-2">
                      <Link href={`/tours/${tour.id}`} className="block">
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {tours?.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">No tours available at the moment. Please check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Experience CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
              Can't Find Your Perfect Choice?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Let our travel experts create a custom experience just for you. Tell us your dreams, and we'll make them
              reality.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg"
              >
                Let Us Help You
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Before You Go - Quick Tips */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Before You Go – Quick Tips
            </h2>
            <p className="text-base sm:text-lg text-gray-600">Essential info for your unforgettable trip</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Weather Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Weather</h3>
              <p className="text-gray-600 mb-4">Check forecast and pack accordingly</p>
              
            </div>

            {/* Festivals Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-3">Festivals</h3>
              <p className="text-gray-600 mb-4">Discover local events and celebrations</p>
          
            </div>

            {/* Etiquette Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-3">Etiquette</h3>
              <p className="text-gray-600 mb-4">Learn customs and cultural norms</p>
              
            </div>

            {/* Packing List Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Packing List</h3>
              <p className="text-gray-600 mb-4">Essential items for your destination</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a202c] text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Footer Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-orange-500">HOLIDAY</span>
                <span className="text-2xl font-bold text-blue-500">LANDIA</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Spain's premier travel company offering unforgettable journeys from the Mediterranean to Turkey's
                stunning coast. Navigate your next adventure with our expert guides and personalized experiences.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225 1.664 4.771-4.919 4.919-1.266.057-1.644.069-4.849-.069-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.403 2.759-6.162 6.162-6.162zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="text-gray-400 hover:text-white transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="text-gray-400 hover:text-white transition-colors">
                    Tours
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tour Categories Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Tour Categories</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/tours" className="text-gray-400 hover:text-white transition-colors">
                    Cultural Tours
                  </a>
                </li>
                <li>
                  <a href="/tours" className="text-gray-400 hover:text-white transition-colors">
                    Beach Holidays
                  </a>
                </li>
                <li>
                  <a href="/tours" className="text-gray-400 hover:text-white transition-colors">
                    Adventure Packages
                  </a>
                </li>
                <li>
                  <a href="/tours" className="text-gray-400 hover:text-white transition-colors">
                    Custom Itineraries
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    24/7 Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:+34637926988" className="text-gray-400 hover:text-white transition-colors block">
                      +34 637 926 988 (Spain)
                    </a>
                    <a href="tel:+905355973207" className="text-gray-400 hover:text-white transition-colors block">
                      +90 535 597 3207 (Turkey)
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="mailto:contact@holidaylandia.com"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      contact@holidaylandia.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="text-gray-400">
                    <p>Avda Pino Montano No : 45</p>
                    <p>41015 Sevilla, Spain</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 Holidaylandia. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/kvkk" className="text-gray-400 hover:text-white transition-colors">
                KVKK
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
