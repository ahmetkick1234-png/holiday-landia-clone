"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Users,
  Check,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ImageCarousel } from "@/components/image-carousel"
import { BookingModal } from "@/components/booking-modal"
import { createBooking } from "@/app/bookings/actions"

interface Tour {
  id: string
  title: string
  description: string
  price: number
  duration: string
  location: string
  image_url: string
  highlights: string[]
  included: string[]
  images: string[]
}

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const [tour, setTour] = useState<Tour | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    async function fetchTour() {
      try {
        const response = await fetch(`/api/tours?id=${params.id}`)
        if (!response.ok) {
          notFound()
        }
        const data = await response.json()
        const tourData = Array.isArray(data) ? data.find((t: Tour) => t.id === params.id) : data
        if (!tourData) {
          notFound()
        }
        setTour(tourData)
      } catch (error) {
        console.error("[v0] Error fetching tour:", error)
        notFound()
      } finally {
        setLoading(false)
      }
    }
    fetchTour()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tour details...</p>
        </div>
      </div>
    )
  }

  if (!tour) {
    notFound()
  }

  const tourImages = tour.images && tour.images.length > 0 ? tour.images : tour.image_url ? [tour.image_url] : []

  const handleBookNow = () => {
    setIsBookingModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsBookingModalOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
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
            <span>Special Offer: 20% off summer packages!</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="text-xl sm:text-2xl font-bold">
              <span className="text-orange-500">HOLIDAY</span>
              <span className="text-blue-600">LANDIA</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/destinations" className="text-gray-700 hover:text-blue-600 transition-colors">
                Destinations
              </Link>
              <Link href="/tours" className="text-blue-600 font-semibold">
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

          {/* Mobile Navigation Dropdown */}
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

      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Tours</span>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[500px]">
        <ImageCarousel images={tourImages} alt={tour.title} className="h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-orange-500" />
              <span className="text-white text-lg">{tour.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{tour.title}</h1>
            <div className="flex items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Small Group</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2">4.9 (127 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Tour Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tour Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{tour.description}</p>
              </div>

              {/* Highlights */}
              {tour.highlights && tour.highlights.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Highlights</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tour.highlights.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What's Included */}
              {tour.included && tour.included.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included</h2>
                  <div className="bg-blue-50 rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {tour.included.map((item: string, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Important Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Information</h2>
                <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Booking</h3>
                      <p className="text-gray-600 text-sm">Book at least 2 weeks in advance for best availability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Group Size</h3>
                      <p className="text-gray-600 text-sm">Maximum 12 travelers for personalized experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Cancellation</h3>
                      <p className="text-gray-600 text-sm">Free cancellation up to 30 days before departure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">From</div>
                  <div className="text-4xl font-bold text-blue-600">€{tour.price}</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Group Size</span>
                    <span className="font-semibold text-gray-900">Max 12 people</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Language</span>
                    <span className="font-semibold text-gray-900">English, Spanish</span>
                  </div>
                </div>

                <Button
                  onClick={handleBookNow}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
                >
                  Book This Tour
                </Button>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Need help planning?</p>
                  <a href="tel:+34637926988" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Call us: +34 637 926 988
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Free cancellation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Best price guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Holidaylandia</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Spain's premier travel company offering unforgettable journeys from the Mediterranean to Turkey's
                stunning coast.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="hover:text-white transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="hover:text-white transition-colors">
                    Tours
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Tour Categories</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/tours" className="hover:text-white transition-colors">
                    Cultural Tours
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="hover:text-white transition-colors">
                    Beach Holidays
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="hover:text-white transition-colors">
                    Adventure Packages
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="hover:text-white transition-colors">
                    Custom Itineraries
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    24/7 Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>+34 91 123 4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span>contact@holidaylandia.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>
                    Avda Pino Montano No : 45
                    <br />
                    41015 Sevilla, Spain
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 Holidaylandia. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
        tourId={tour.id}
        tourTitle={tour.title}
        tourPrice={tour.price}
        onSubmit={createBooking}
      />
    </div>
  )
}
