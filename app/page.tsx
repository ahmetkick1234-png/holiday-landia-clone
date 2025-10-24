"use client"

import {
  Phone,
  Mail,
  Search,
  Plane,
  Sparkles,
  Utensils,
  Globe,
  User,
  Users,
  MapPin,
  Heart,
  Calendar,
  CreditCard,
  Shield,
  Edit,
  Send,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { FadeIn } from "@/components/fade-in"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a href="tel:+34637926988" className="flex items-center gap-2 hover:opacity-80">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
              <span className="text-xs sm:text-sm">+34 637 926 988</span>
            </a>
            <a href="mailto:contact@holidaylandia.com" className="flex items-center gap-2 hover:opacity-80">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">contact@holidaylandia.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm text-center">
            <span>Special Offer: 20% off pre-winter packages!</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl ">
            <span className="text-orange-500 font-light ">HOLIDAY</span>
            <span className="text-blue-600 font-bold">LANDIA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-blue-600 font-medium">
              Destinations
            </Link>
            <Link href="/tours" className="text-gray-700 hover:text-blue-600 font-medium">
              Tours
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
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
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium"
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
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[calc(100vh-120px)] min-h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(home.png)",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Rating Badge */}
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-xs sm:text-sm font-medium">#1 Spain To Antalya Travel Company</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
              Discover Your Next
              <br />
              <span className="text-orange-500">Adventure</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Explore breathtaking destinations, create unforgettable memories, and experience the world like never
              before with our curated travel experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Link href="/tours" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Explore Tours
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold bg-transparent"
                >
                  Plan My Trip
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f0f9ff] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/second.png" alt="second.png" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/otel.jpg" alt="" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/alanya.png"
                    alt="alanya.png"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/kapilar.png" alt="kapilar.png" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Badge */}
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Why Choose Us
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your <span className="text-orange-500">Perfect Getaway</span> Starts Here
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We go beyond just travel — we design journeys. With passion, precision, and a people-first mindset, our
                mission is to deliver once-in-a-lifetime adventures with unmatched comfort and style.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {/* Seamless Travel */}
                <FadeIn delay={0.1}>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Plane className="w-5 h-5 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Seamless Travel</h3>
                      <p className="text-sm text-gray-600">
                        Stress-free planning, reliable schedules, and door-to-door service.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Relaxation First */}
                <FadeIn delay={0.2}>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Relaxation First</h3>
                      <p className="text-sm text-gray-600">
                        Carefully selected hotels and spa options for total peace of mind.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Local Cuisine */}
                <FadeIn delay={0.3}>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Utensils className="w-5 h-5 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Local Cuisine</h3>
                      <p className="text-sm text-gray-600">Taste the region through curated culinary experiences.</p>
                    </div>
                  </div>
                </FadeIn>

                {/* Global Network */}
                <FadeIn delay={0.4}>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Global Network</h3>
                      <p className="text-sm text-gray-600">Access to trusted partners across multiple continents.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">2+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Adventures Planned</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">4.9/5</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Holidaylandia Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              {/* Badge */}
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                About Holidaylandia
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Creating Unforgettable
                <br />
                <span className="text-blue-600">Travel Experiences</span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                For over 15 years, Holidaylandia has been crafting extraordinary travel experiences that go beyond the
                ordinary. We believe that travel should transform you, connecting you with new cultures, breathtaking
                landscapes, and unforgettable moments that last a lifetime.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {/* Expert Guides */}
                <FadeIn delay={0.1}>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Expert Guides</h3>
                      <p className="text-sm text-gray-600">
                        Local experts who know every hidden gem and story behind each destination.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Small Groups */}
                <FadeIn delay={0.2}>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Small Groups</h3>
                      <p className="text-sm text-gray-600">
                        Intimate group sizes ensure personalized attention and authentic experiences.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Unique Destinations */}
                <FadeIn delay={0.3}>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Unique Destinations</h3>
                      <p className="text-sm text-gray-600">
                        Access to exclusive locations and experiences you won't find elsewhere.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Sustainable Travel */}
                <FadeIn delay={0.4}>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Sustainable Travel</h3>
                      <p className="text-sm text-gray-600">
                        Responsible tourism that benefits local communities and preserves nature.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">50,000+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/pasport.png" alt="pasport.png" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/ac.png" alt="ac.png" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/nevsehir.jpg" alt="nevsehir.jpg" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/par.jpg" alt="par.jpg" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f0f9ff] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our happy travelers have to say about their experiences with
              Holidaylandia.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Testimonial 1 - Sarah Johnson */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Icon */}
                <svg className="w-10 h-10 text-blue-200 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>

                {/* Testimonial Text */}
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "Holidaylandia made our dream trip to Barcelona absolutely perfect! Every detail was thoughtfully
                  planned, and our guide was incredible. The hidden gems we discovered were beyond our expectations."
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image src="/y2.jpg" alt="Sarah Johnson" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Ayse Yilmaz</div>
                    <div className="text-sm text-gray-500">Seville, TR</div>
                    <div className="text-xs text-gray-400 mt-1">Seville Cultural Tour</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Testimonial 2 - Michael Chen */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Icon */}
                <svg className="w-10 h-10 text-blue-200 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>

                {/* Testimonial Text */}
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "Antalya with Holidaylandia was absolutely breathtaking! The beaches were pristine, the accommodations
                  top-notch, and the cultural experiences were authentic. Can't wait to book our next adventure!"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image src="/y1.jpg" alt="Michael Chen" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Carlos Hernandez</div>
                    <div className="text-sm text-gray-500">Antalya, TR</div>
                    <div className="text-xs text-gray-400 mt-1">Antalya Beach Escape</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Testimonial 3 - Emily Rodriguez */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Icon */}
                <svg className="w-10 h-10 text-blue-200 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>

                {/* Testimonial Text */}
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "Madrid exceeded all expectations! The food tours were incredible, the flamenco shows authentic, and
                  our guide's knowledge was impressive. Holidaylandia really knows Spain!"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/y3.jpg"
                      alt="Emily Rodriguez"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Lucia Morales</div>
                    <div className="text-sm text-gray-500">Granada, SP</div>
                    <div className="text-xs text-gray-400 mt-1">Alanya Discovery</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.8/5</span>
            <span className="text-gray-600">based on 3,247 reviews</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Got Questions?
              <br />
              <span className="text-blue-600">We've Got Answers</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Everything you need to know about planning your perfect holiday with Holidaylandia.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input type="text" placeholder="Search questions..." className="pl-12 py-6 text-base border-gray-300" />
            </div>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {/* Question 1 */}
            <FadeIn delay={0.1}>
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Plane className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900">What's included in your tour packages?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-13 pr-4 pb-5 text-gray-600">
                  Our tour packages typically include accommodation, guided tours, transportation between destinations,
                  select meals, and entrance fees to major attractions. Specific inclusions vary by package, so please
                  check the detailed itinerary for your chosen tour.
                </AccordionContent>
              </AccordionItem>
            </FadeIn>

            {/* Question 2 */}
            <FadeIn delay={0.15}>
              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="font-semibold text-gray-900">How far in advance should I book my trip?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-13 pr-4 pb-5 text-gray-600">
                  We recommend booking at least 2-3 months in advance for popular destinations and peak seasons.
                  However, we can often accommodate last-minute bookings depending on availability. Early booking also
                  gives you access to better rates and more accommodation options.
                </AccordionContent>
              </AccordionItem>
            </FadeIn>

            {/* Question 3 */}
            <FadeIn delay={0.2}>
              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-semibold text-gray-900">
                      What are your payment options and cancellation policy?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-13 pr-4 pb-5 text-gray-600">
                  We accept major credit cards, bank transfers, and PayPal. A deposit is required to secure your
                  booking, with the balance due 30 days before departure. Our cancellation policy varies by tour, but
                  generally offers full refunds for cancellations made 60+ days in advance, with sliding scales for
                  later cancellations.
                </AccordionContent>
              </AccordionItem>
            </FadeIn>

            {/* Question 4 */}
            <FadeIn delay={0.25}>
              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="font-semibold text-gray-900">What group sizes do you offer?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-13 pr-4 pb-5 text-gray-600">
                  We specialize in small group tours with a maximum of 12-16 travelers to ensure personalized attention
                  and authentic experiences. We also offer private tours for couples, families, or custom groups who
                  prefer a more exclusive experience.
                </AccordionContent>
              </AccordionItem>
            </FadeIn>

            {/* Question 5 */}
            <FadeIn delay={0.3}>
              <AccordionItem value="item-5" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                        <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-900">Do I need a visa for your destinations?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-13 pr-4 pb-5 text-gray-600">
                  Visa requirements vary by destination and your nationality. We provide detailed visa information for
                  each tour and can assist with the application process. Some destinations offer visa-on-arrival or
                  visa-free entry for certain nationalities. We recommend checking requirements at least 3 months before
                  travel.
                </AccordionContent>
              </AccordionItem>
            </FadeIn>

            {/* Question 6 */}
            <FadeIn delay={0.35}>
              <AccordionItem value="item-6" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Can you accommodate dietary restrictions?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-13 pr-4 pb-5 text-gray-600">
                  We can accommodate vegetarian, vegan, gluten-free, halal, kosher, and other dietary requirements.
                  Please inform us of any restrictions when booking, and we'll work with our local partners to ensure
                  your meals meet your needs throughout the tour.
                </AccordionContent>
              </AccordionItem>
            </FadeIn>

            {/* Question 7 */}
            <FadeIn delay={0.4}>
              <AccordionItem value="item-7" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900">What safety measures do you have in place?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-13 pr-4 pb-5 text-gray-600">
                  Your safety is our top priority. We work with vetted local partners, provide 24/7 emergency support,
                  maintain comprehensive travel insurance options, and follow all local health and safety guidelines.
                  Our guides are trained in first aid, and we continuously monitor travel advisories for all
                  destinations.
                </AccordionContent>
              </AccordionItem>
            </FadeIn>

            {/* Question 8 */}
            <FadeIn delay={0.45}>
              <AccordionItem value="item-8" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <Edit className="w-5 h-5 text-cyan-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Can I customize my tour itinerary?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-13 pr-4 pb-5 text-gray-600">
                  Yes! While we offer carefully crafted standard itineraries, we're happy to customize tours to match
                  your interests, pace, and preferences. Whether you want to add extra days, skip certain activities, or
                  focus on specific themes, our team will work with you to create your perfect journey.
                </AccordionContent>
              </AccordionItem>
            </FadeIn>
          </Accordion>

          {/* Still Have Questions CTA */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Still Have Questions?</h3>
            <p className="text-gray-600 mb-8">Our travel experts are here to help you plan the perfect trip!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+34637926988">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-base font-semibold bg-transparent"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#f0f9ff] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Let us help you plan the perfect trip. Our travel experts are here to create unforgettable experiences
              tailored just for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-2xl p-10 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Plan Your Trip</h3>

              <form className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="w-full h-12 border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="w-full h-12 border-gray-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full h-12 border-gray-300"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+34 612 345 678" className="w-full h-12 border-gray-300" />
                </div>

                {/* Destination and Travel Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="destination" className="block text-sm font-semibold text-gray-900 mb-2">
                      Destination
                    </label>
                    <Input
                      id="destination"
                      type="text"
                      placeholder="Where do you want to go?"
                      className="w-full h-12 border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="travelDate" className="block text-sm font-semibold text-gray-900 mb-2">
                      Travel Date
                    </label>
                    <Input id="travelDate" type="date" className="w-full h-12 border-gray-300" />
                  </div>
                </div>

                {/* Dream Trip Description */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tell us about your dream trip
                  </label>
                  <Textarea
                    id="message"
                    placeholder="What kind of experience are you looking for? Any special requirements or preferences?"
                    rows={5}
                    className="w-full resize-none border-gray-300"
                  />
                </div>

                <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-6 text-base font-semibold rounded-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Inquiry
                </Button>
              </form>
            </div>

            {/* Right Side - Contact Info and Image */}
            <div className="space-y-6">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="contact.png"
                  alt="Travel consultation meeting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Let's Plan Together</h3>
                  <p className="text-base">Free consultation with our travel experts</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Call Us */}
                <div className="bg-white rounded-xl p-6 flex gap-4 shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Call Us</h4>
                    <p className="text-gray-900 font-medium mb-1">Spain: +34 637 926 988</p>
                    <p className="text-gray-900 font-medium mb-1">Turkey: +90 535 597 3207</p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="bg-white rounded-xl p-6 flex gap-4 shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Email Us</h4>
                    <p className="text-gray-900 font-medium mb-1">contact@holidaylandia.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="bg-white rounded-xl p-6 flex gap-4 shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Visit Us</h4>
                    <p className="text-gray-900 font-medium mb-1">Avda Pino Montano No : 45, 41015 Sevilla, Spain</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-xl p-6 flex gap-4 shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Business Hours</h4>
                    <p className="text-gray-700 text-sm mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700 text-sm mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-sm text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>
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
