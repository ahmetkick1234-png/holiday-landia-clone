"use client"

import Link from "next/link"
import { Phone, Mail, Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <a href="tel:+34637926988" className="flex items-center gap-2 hover:underline">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              +34 637 926 988
            </a>
            <a href="mailto:contact@holidaylandia.com" className="flex items-center gap-2 hover:underline">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              contact@holidaylandia.com
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"
            >
              Holidaylandia
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/destinations" className="text-gray-700 hover:text-blue-600 transition-colors">
                Destinations
              </Link>
              <Link href="/tours" className="text-gray-700 hover:text-blue-600 transition-colors">
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
            <div className="md:hidden bg-white border-t mt-4">
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
        </div>
      </nav>
    </>
  )
}
