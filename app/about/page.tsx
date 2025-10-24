"use client"

import {
  Phone,
  Mail,
  BookOpen,
  Target,
  Eye,
  Palmtree,
  Mountain,
  Building2,
  TargetIcon,
  Lock,
  Zap,
  Diamond,
  Globe,
  DollarSign,
  Star,
  Menu,
  X,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [servicesVisible, setServicesVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const [whyChooseVisible, setWhyChooseVisible] = useState(false)
  const [testimonialsVisible, setTestimonialsVisible] = useState(false)
  const [finalCtaVisible, setFinalCtaVisible] = useState(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const whyChooseRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const finalCtaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ctaRef.current) {
      observer.observe(ctaRef.current)
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyChooseVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (whyChooseRef.current) {
      observer.observe(whyChooseRef.current)
    }

    return () => {
      if (whyChooseRef.current) {
        observer.unobserve(whyChooseRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTestimonialsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current)
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFinalCtaVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (finalCtaRef.current) {
      observer.observe(finalCtaRef.current)
    }

    return () => {
      if (finalCtaRef.current) {
        observer.unobserve(finalCtaRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a href="tel:+34637926988" className="flex items-center gap-2 hover:text-gray-200">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
              <span>+34 637 926 988</span>
            </a>
            <a href="mailto:contact@holidaylandia.com" className="flex items-center gap-2 hover:text-gray-200">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>contact@holidaylandia.com</span>
            </a>
          </div>
          <div className="text-center">Special Offer: 20% off pre-winter packages!</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl sm:text-2xl ">
            <span className="text-orange-500 font-light">HOLIDAY</span>
            <span className="text-blue-600 font-bold">LANDIA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="/destinations" className="text-gray-700 hover:text-blue-600">
              Destinations
            </a>
            <a href="/tours" className="text-gray-700 hover:text-blue-600">
              Tours
            </a>
            <a href="/about" className="text-blue-600 font-semibold">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
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
              <a
                href="/"
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/destinations"
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Destinations
              </a>
              <a
                href="/tours"
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tours
              </a>
              <a
                href="/about"
                className="px-4 py-3 text-blue-600 bg-blue-50 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            'url("dest.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Welcome to <span className="text-orange-500">Holidaylandia</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Your gateway to extraordinary adventures and unforgettable memories around the world
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl sm:text-3xl">
                🌍
              </div>
              <span className="text-white text-sm sm:text-base md:text-lg font-semibold">50+ Countries</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl sm:text-3xl">
                🚀
              </div>
              <span className="text-white text-sm sm:text-base md:text-lg font-semibold">1000+ Destinations</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-2xl sm:text-3xl">
                ⭐
              </div>
              <span className="text-white text-sm sm:text-base md:text-lg font-semibold">15 Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section ref={sectionRef} className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Column - Content */}
            <div
              className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Our Story Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                <BookOpen className="w-4 h-4" />
                <span className="font-semibold">Our Story</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a8a] leading-tight">
                Crafting Dreams Into Reality Since 2008
              </h2>

              {/* Story Paragraphs */}
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  What started as a small travel agency in a cozy corner office has grown into one of the most trusted
                  names in luxury travel. Our founders, passionate travelers themselves, saw the need for personalized,
                  authentic travel experiences that go beyond the ordinary.
                </p>
                <p>
                  Today, we've helped over 50,000 travelers discover the world's hidden gems, from secluded tropical
                  islands to bustling metropolitan cities, always with the same commitment to excellence and attention
                  to detail.
                </p>
              </div>

              {/* Mission */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To create transformative travel experiences that inspire, educate, and connect people with the
                    world's diverse cultures and natural wonders.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the world's leading platform for authentic, sustainable, and life-changing travel experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image with Stats */}
            <div
              className={`relative transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <img
                src="/contact.png"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />

              <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-[#1e3a8a] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">98%</div>
                <div className="text-xs sm:text-sm">Satisfaction Rate</div>
              </div>

              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-[#1e3a8a] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">50K+</div>
                <div className="text-xs sm:text-sm">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section ref={servicesRef} className="bg-gradient-to-b from-orange-50 to-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* What We Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
              <span className="text-xl">☀️</span>
              <span className="font-semibold">What We Offer</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-6 leading-tight">
              Exceptional Services for Every Type
              <br />
              of Traveler
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From luxury getaways to adventure expeditions, we curate experiences that match your dreams and exceed
              your expectations.
            </p>
          </div>

          {/* Service Cards */}
          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-1000 delay-200 ${
              servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Luxury Beach Resorts */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                <Palmtree className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Luxury Beach Resorts</h3>
              <p className="text-gray-600 mb-6 text-center">
                Exclusive access to pristine beaches and world-class resorts in tropical paradises.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Private villas</li>
                <li>Personal concierge</li>
                <li>Spa treatments</li>
                <li>Water sports</li>
              </ul>
            </div>

            {/* Adventure Expeditions */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 mx-auto">
                <Mountain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Adventure Expeditions</h3>
              <p className="text-gray-600 mb-6 text-center">
                Thrilling adventures from mountain climbing to jungle trekking with expert guides.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Expert guides</li>
                <li>Safety equipment</li>
                <li>Group expeditions</li>
                <li>Solo adventures</li>
              </ul>
            </div>

            {/* Cultural Immersion */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Cultural Immersion</h3>
              <p className="text-gray-600 mb-6 text-center">
                Deep dive into local cultures with authentic experiences and local connections.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Local homestays</li>
                <li>Cultural workshops</li>
                <li>Traditional cuisine</li>
                <li>Art & history tours</li>
              </ul>
            </div>

            {/* Custom Itineraries */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6 mx-auto">
                <TargetIcon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Custom Itineraries</h3>
              <p className="text-gray-600 mb-6 text-center">
                Personalized travel plans crafted specifically for your interests and preferences.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Personal consultation</li>
                <li>Flexible scheduling</li>
                <li>24/7 support</li>
                <li>Local insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              whyChooseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <span className="text-xl">👑</span>
              <span className="font-semibold">Why Choose Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              Your Journey, Our Commitment
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              With over 15 years of excellence, we've built our reputation on delivering extraordinary travel
              experiences that create lasting memories.
            </p>
          </div>

          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-200 ${
              whyChooseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Trusted & Secure */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-1">Trusted & Secure</h3>
                  <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-semibold">
                    100% Secure Booking
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">24/7 emergency support worldwide.</p>
            </div>

            {/* Instant Booking */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-1">Instant Booking</h3>
                  <span className="inline-block bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded font-semibold">
                    Live Availability
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Real-time availability and instant confirmation for flights, hotels, and experiences.
              </p>
            </div>

            {/* Exclusive Access */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Diamond className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-1">Exclusive Access</h3>
                  <span className="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded font-semibold">
                    Members Only
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                VIP access to private resorts, sold-out events, and experiences money can't usually buy.
              </p>
            </div>

            {/* Personalized Service */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-1">Personalized Service</h3>
                  <span className="inline-block bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded font-semibold">
                    Personal Touch
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Dedicated travel consultants who understand your preferences and craft perfect itineraries.
              </p>
            </div>

            {/* Global Network */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-1">Global Network</h3>
                  <span className="inline-block bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded font-semibold">
                    Worldwide Coverage
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Local partners in Turkey and Spain ensuring authentic experiences and local expertise.
              </p>
            </div>

            {/* Best Value Guarantee */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-1">Best Value Guarantee</h3>
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded font-semibold">
                    Value Promise
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Price matching and exclusive group discounts. Quality experiences at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Travelers Say Section */}
      <section ref={testimonialsRef} className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              testimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-6">What Our Travelers Say</h2>
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center transition-all duration-1000 delay-200 ${
              testimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Left - Map Image */}
            <div className="relative order-2 lg:order-1">
              <img
                src="/dort.png"
                alt="Antalya map with award"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl text-center">
                <div className="text-2xl sm:text-3xl mb-2">🏆</div>
                <div className="font-bold text-orange-500 text-xs sm:text-sm">Best Travel Agency</div>
                <div className="text-xs text-gray-600">Spain to Antalya Awards</div>
              </div>
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl sm:text-2xl font-bold">4.9/5</span>
                </div>
                <div className="text-xs sm:text-sm text-orange-500 font-semibold">Rating</div>
                <div className="text-xs text-gray-600">2500+ Reviews</div>
              </div>
            </div>

            {/* Right - Testimonials */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Holidaylandia turned our dream honeymoon into reality. Every detail was perfect!"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-orange-500">Emma & James</div>
                    <div className="text-sm text-gray-600">Antalya/Alanya</div>
                  </div>
                  <div className="text-blue-500">✈️</div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The team's expertise made our family adventure safe and unforgettable."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-orange-500">The Martinez Family</div>
                    <div className="text-sm text-gray-600">Antalya/Centre</div>
                  </div>
                  <div className="text-blue-500">✈️</div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Professional, reliable, and absolutely exceeded our expectations."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-orange-500">Corporate Client</div>
                    <div className="text-sm text-gray-600">Executive Retreat</div>
                  </div>
                  <div className="text-blue-500">✈️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section ref={finalCtaRef} className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`bg-orange-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 shadow-2xl transition-all duration-1000 ${
              finalCtaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl flex-shrink-0">🎉</div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ready to Join Thousands of Happy Travelers?
              </h2>
              <p className="text-white text-sm sm:text-base mb-4 sm:mb-6">Start planning your dream vacation today!</p>
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-[#1e3a8a] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-800 transition-colors">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - No animation */}
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
