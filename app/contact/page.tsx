"use client"

import type React from "react"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { sendContactMessage } from "./actions"

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  })

  const [formVisible, setFormVisible] = useState(false)
  const [infoVisible, setInfoVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const infoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInfoVisible(true), 200)
        }
      },
      { threshold: 0.1 },
    )

    if (formRef.current) formObserver.observe(formRef.current)
    if (infoRef.current) infoObserver.observe(infoRef.current)

    return () => {
      if (formRef.current) formObserver.unobserve(formRef.current)
      if (infoRef.current) infoObserver.unobserve(infoRef.current)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const formData = new FormData(e.currentTarget)

    try {
      const result = await sendContactMessage(formData)
      if (result.success) {
        setSubmitMessage(result.message)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          destination: "",
          message: "",
        })
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
              <span>+34 637 926 988</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>contact@holidaylandia.com</span>
            </div>
          </div>
          <div className="text-center">Special Offer: 20% off pre-winter packages!</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl ">
            <span className="text-orange-500 font-light">HOLIDAY</span>
            <span className="text-blue-600 font-bold">LANDIA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-orange-500 transition-colors">
              Destinations
            </Link>
            <Link href="/tours" className="text-gray-700 hover:text-orange-500 transition-colors">
              Tours
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-orange-500 font-semibold">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-500"
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
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/tours"
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tours
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-orange-500 bg-orange-50 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px]  flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <img
            src="/contact.png"
            alt="Holidaylandia Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-blue-900 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Contact Holidaylandia</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Ready to plan your dream vacation? Get in touch with our travel experts
          </p>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`transition-all duration-1000 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-orange-500 text-2xl">✈️</div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a8a]">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Interested Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Where would you like to go?"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dream vacation..."
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                  />
                </div>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg text-sm sm:text-base ${
                      submitMessage.includes("error") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`transition-all duration-1000 ${
              infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-4">Get in Touch</h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our experienced travel consultants are here to help you plan the perfect getaway. Whether you're
                  looking for adventure, relaxation, or cultural experiences, we've got you covered.
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-1">Phone</h3>
                  <p className="text-gray-800 font-medium">+34 637 926 988 (Spain)</p>
                  <p className="text-gray-800 font-medium">+90 535 597 3207 (Turkey)</p>
                  <p className="text-gray-800 font-medium">+90 541 790 3207 (Turkey)</p>
                  <p className="text-gray-600 text-sm sm:text-base">Available 24/7 for emergencies</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-1">Email</h3>
                  <p className="text-gray-800 font-medium">contact@holidaylandia.com</p>
                  <p className="text-gray-600 text-sm sm:text-base">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Office */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-1">Office</h3>
                  <p className="text-gray-800 font-medium">Avda Pino Montano No : 45</p>
                  <p className="text-gray-600">41015 Sevilla, Spain</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-1">Business Hours</h3>
                  <p className="text-gray-800">Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-800">Saturday: 10:00 AM - 5:00 PM</p>
                  <p className="text-gray-800">Sunday: 12:00 PM - 4:00 PM</p>
                </div>
              </div>

              {/* Why Choose Holidaylandia */}
              <div className="bg-gray-50 rounded-2xl p-6 mt-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-4">Why Choose Holidaylandia?</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Expert travel consultants with 15+ years of experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Personalized itineraries tailored to your preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">24/7 customer support during your travels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Best price guarantee on all bookings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Partnerships with top hotels and airlines worldwide</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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
