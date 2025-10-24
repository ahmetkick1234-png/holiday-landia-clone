"use client"

import { Phone, Mail, Moon, Fish, Mountain, Home as Horse, Anchor, Waves, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BeachCarousel } from "@/components/beach-carousel"
import { BlogCardsClient } from "@/components/blog-cards-client"
import { useEffect, useState } from "react"
import { FadeIn } from "@/components/fade-in"

interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string
  image_url: string
  author: string
  category: string
  published_date: string
}

export default function DestinationsPage() {
  // Fetch blogs data on the client
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blogs")
        const data = await response.json()
        setBlogs(data.blogs || [])
      } catch (error) {
        console.error("[v0] Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a href="tel:+34637926988" className="flex items-center gap-2 hover:opacity-80">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
              <span>+34 637 926 988</span>
            </a>
            <a href="mailto:contact@holidaylandia.com" className="flex items-center gap-2 hover:opacity-80">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>contact@holidaylandia.com</span>
            </a>
          </div>
          <div className="text-center">
            <span>Special Offer: 20% off pre-winter packages!</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl ">
            <span className="text-orange-500 font-light">HOLIDAY</span>
            <span className="text-blue-600 font-bold">LANDIA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/destinations" className="text-blue-600 font-semibold">
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
                className="px-4 py-3 text-blue-600 bg-blue-50 font-semibold"
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
      <section className="relative h-[calc(100vh-120px)] min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('nevsehir.jpg')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore Breathtaking <span className="text-orange-500">Destinations</span>
          </h1>

          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            From golden beaches to ancient ruins – discover Antalya's wonders with Holidaylandia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                Plan My Trip
              </Button>
            </Link>
            <Link href="/tours">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-blue-500 px-8 py-6 text-lg bg-transparent"
              >
                View Experiences
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Discover More in Antalya Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">Discover More in Antalya</h2>
            <p className="text-gray-600 text-lg">
              Dive deeper into Antalya's iconic attractions and vibrant experiences.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Nightlife in Antalya */}
            <FadeIn delay={0}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="/nightlife-concert-crowd-silhouette-with-stage-ligh.jpg"
                    alt="Nightlife in Antalya"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md">
                    <Moon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-2">Nightlife in Antalya</h3>
                  <p className="text-gray-600">
                    Explore lively bars, beach clubs, and night events that light up Antalya after sunset.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Visit Antalya Aquarium */}
            <FadeIn delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="/underwater-tunnel-aquarium-with-fish.jpg"
                    alt="Visit Antalya Aquarium"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md">
                    <Fish className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Visit Antalya Aquarium</h3>
                  <p className="text-gray-600">
                    Discover one of the world's largest tunnel aquariums with immersive marine experiences.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Tahtali Mountain */}
            <FadeIn delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="/mountain-coastline-view-with-blue-ocean-and-sailbo.jpg"
                    alt="Tahtali Mountain"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md">
                    <Mountain className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-2">Tahtali Mountain</h3>
                  <p className="text-gray-600">
                    Take a cable car to the summit for panoramic views of Antalya and the surrounding coast.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Go Horseback Riding */}
            <FadeIn delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="/horseback-riding-on-beach-at-sunset.jpg"
                    alt="Go Horseback Riding"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md">
                    <Horse className="w-6 h-6 text-amber-700" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-2">Go Horseback Riding</h3>
                  <p className="text-gray-600">
                    Ride through forests, beaches, or ancient ruins, perfect for nature and adventure lovers.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Boat Tours */}
            <FadeIn delay={400}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="/boat-bow-on-blue-mediterranean-sea-with-mountains.jpg"
                    alt="Boat Tours"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md">
                    <Anchor className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Boat Tours</h3>
                  <p className="text-gray-600">
                    Explore hidden coves and crystal-clear waters on a relaxing Mediterranean cruise.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Turkish Baths */}
            <FadeIn delay={500}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="/traditional-turkish-spa-bath-with-pool-and-columns.jpg"
                    alt="Turkish Baths"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md">
                    <Waves className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-2">Turkish Baths</h3>
                  <p className="text-gray-600">
                    Indulge in traditional Turkish spa treatments and ancient wellness rituals.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Uncover History Section */}
      <section className="py-16 px-4 bg-[#f5f1e8]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">Uncover History</h2>
            <p className="text-gray-600 text-lg">
              Step back in time and explore the remarkable ancient civilizations that shaped this magical region.
            </p>
          </div>

          {/* Auto-scrolling Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {/* Card 1 - Termessos */}
              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/ancient-ruins-of-termessos-mountain-city.jpg"
                  alt="Termessos"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Termessos</h3>
                  <p className="text-gray-600">Nestled in the Taurus Mountains, Termessos is one of
 Turkey’s best-preserved ancient cities. Due to its
 mountainous location, it was never conquered by
 Alexander the Great. Visitors can explore its ancient
 theatre, city walls, and rock tombs while enjoying
 breathtaking views.
</p>
                </div>
              </div>

              {/* Card 2 - Perge */}
              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/ancient-city-of-perge-roman-ruins.jpg" alt="Perge" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Perge</h3>
                  <p className="text-gray-600"> Located 18 km east of Antalya, Perge was one of
 the most important cities of ancient Pamphylia. The
 ruins include a well-preserved stadium, a Roman
 theatre, baths, and impressive colonnaded streets.
</p>
                </div>
              </div>

              {/* Card 3 - Aspendos */}
              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/aspendos-ancient-roman-theater.jpg" alt="Aspendos" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Aspendos</h3>
                  <p className="text-gray-600">
                   Built in the 2nd century AD, the Aspendos Theatre is
 world-famous for its exceptional acoustics and well
preserved structure. Even today, it hosts various
 cultural and artistic events.

                  </p>
                </div>
              </div>

              {/* Card 4 - Side */}
              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/ancient-city-of-side-temple-ruins-by-the-sea.jpg"
                  alt="Side"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Side</h3>
                  <p className="text-gray-600">Side is an ancient coastal city famous for its Roman
 ruins, including the Temple of Apollo, the grand
 theatre, and a well-preserved agora. It is a perfect
 blend of history and seaside charm.
</p>
                </div>
              </div>

              {/* Card 5 - Phaselis */}
              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/phaselis-ancient-harbor-ruins-in-forest.jpg"
                  alt="Phaselis"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phaselis</h3>
                  <p className="text-gray-600"> Phaselis is an ancient Lycian city surrounded by
 beautiful beaches and forests. It was a major
 trading center in antiquity, and visitors can explore
 its well-preserved aqueducts, streets, and ancient
 harbor.
</p>
                </div>
              </div>

              {/* Card 6 - Olympos */}
              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/olympos-ancient-ruins-in-nature.jpg" alt="Olympos" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Olympos</h3>
                  <p className="text-gray-600"> Founded in the 4th century BC, Olympos was an
 important city of the Lycian civilization. It is an ideal
 destination for history and nature lovers, featuring
 ancient ruins and a scenic natural beach.</p>
                </div>
              </div>

              {/* Card 7 - Alanya Castle */}
              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/castle.png" alt="Alanya Castle" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Alanya Castle</h3>
                  <p className="text-gray-600">Situated on a rocky peninsula in Alanya, this
 medieval fortress offers panoramic views of the
 coastline. The castle dates back to the Seljuk era
 and features well-preserved walls, towers, and
 historical buildings.
</p>
                </div>
              </div>

              {/* Card 8 - Hadrian’s Gate */}
              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/hadrian.png"
                  alt="hadrian"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hadrian’s Gate</h3>
                  <p className="text-gray-600">This monumental gate was built in 130 AD in honor
 of the Roman Emperor Hadrian’s visit to Antalya. It is
 one of the city’s most significant historical
 landmarks, known for its marble carvings and three
arched structure.
</p>
                </div>
              </div>

              {/* Card 9 - Patara */}
              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/patara-ancient-city-beach-ruins.jpg" alt="Patara" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Patara</h3>
                  <p className="text-gray-600">Ancient Lycian city with stunning beach and parliament building.</p>
                </div>
              </div>

              {/* Card 10 - magra */}
              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/magra.png"
                  alt="Arycanda"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Damlataş Cave</h3>
                  <p className="text-gray-600">Located in Alanya, Damlataş Cave was discovered
 in 1948 and is famous for its high humidity and
 healing air, especially for asthma patients. The cave
 features stunning stalactites and stalagmites,
 formed over thousands of years. It is one of the most
 visited caves in Turkey, offering a mystical
 atmosphere with its colorful rock formations.</p>
                </div>
              </div>

              {/* Duplicate cards for seamless loop */}
              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/thermesos.jpg"
                  alt="Termessos"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Termessos</h3>
                  <p className="text-gray-600">Mountain-top city with stunning views and ancient ruins.</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/ancient-city-of-perge-roman-ruins.jpg" alt="Perge" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Perge</h3>
                  <p className="text-gray-600">Ancient Roman city with impressive colonnaded streets and stadium.</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/aspendos-ancient-roman-theater.jpg" alt="Aspendos" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Aspendos</h3>
                  <p className="text-gray-600">
                    Best-preserved Roman theater in the world, still hosting performances.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/ancient-city-of-side-temple-ruins-by-the-sea.jpg"
                  alt="Side"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Side</h3>
                  <p className="text-gray-600">Coastal ancient city with temples, amphitheater, and harbor ruins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antalya Travel Blog Section */}
      <BlogCardsClient blogs={blogs} />

      {/* Discover Antalya Beaches Section */}
      <BeachCarousel />

      {/* Daily Trips Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">Daily Trips</h2>
            <p className="text-gray-600 text-lg">
              Discover your perfect Turkish adventure with our smart journey builder
            </p>
          </div>

          {/* Route Builder Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Starting Point */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-red-500 text-xl">📍</span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Starting Point: <span className="text-orange-500">Antalya</span>
                  </h3>
                </div>
                <p className="text-gray-600">Your Turkish adventure begins here</p>
              </div>
            </div>

            {/* Vertical Line and Destinations */}
            <div className="ml-4 border-l-2 border-gray-200 pl-8 space-y-6">
              {/* Destination 1 - Saglassos */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 -ml-[42px] w-4 h-4 bg-orange-500 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-500">🎫</span>
                    <h4 className="font-semibold text-gray-900">Saglassos Ancient City</h4>
                  </div>
                  <p className="text-sm text-gray-500">(overnight return)</p>
                </div>
              </div>

              {/* Destination 2 - Cappadocia */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 -ml-[42px] w-4 h-4 bg-orange-500 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-500">🎫</span>
                    <h4 className="font-semibold text-gray-900">Cappadocia</h4>
                  </div>
                  <p className="text-sm text-gray-500">(1-day flight)</p>
                </div>
              </div>

              {/* Destination 3 - Pamukkale */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 -ml-[42px] w-4 h-4 bg-orange-500 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-500">🎫</span>
                    <h4 className="font-semibold text-gray-900">Pamukkale</h4>
                  </div>
                  <p className="text-sm text-gray-500">(bus – morning to evening)</p>
                </div>
              </div>

              {/* Destination 4 - Fethiye */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 -ml-[42px] w-4 h-4 bg-orange-500 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-500">🎫</span>
                    <h4 className="font-semibold text-gray-900">Fethiye</h4>
                  </div>
                  <p className="text-sm text-gray-500">(overnight return)</p>
                </div>
              </div>

              {/* Destination 5 - Izmir/Ephesus */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 -ml-[42px] w-4 h-4 bg-orange-500 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-500">🎫</span>
                    <h4 className="font-semibold text-gray-900">Izmir/Ephesus Ancient City</h4>
                  </div>
                  <p className="text-sm text-gray-500">(bus – morning to evening)</p>
                </div>
              </div>

              {/* Destination 6 - Northern Cyprus */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 -ml-[42px] w-4 h-4 bg-orange-500 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-500">🎫</span>
                    <h4 className="font-semibold text-gray-900">Northern Cyprus – TRNC</h4>
                  </div>
                  <p className="text-sm text-gray-500">(1-day flight)</p>
                </div>
              </div>

              {/* Destination 7 - Konya/Mevlana */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 -ml-[42px] w-4 h-4 bg-orange-500 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-500">🎫</span>
                    <h4 className="font-semibold text-gray-900">Konya/Mevlana Museum</h4>
                  </div>
                  <p className="text-sm text-gray-500">(overnight return)</p>
                </div>
              </div>
            </div>

            {/* Build Route Button */}
            <div className="mt-8 text-center">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg rounded-full">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Features List */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>✨</span>
                <span>Personalized itineraries</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🚗</span>
                <span>Transport included</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🏨</span>
                <span>Accommodation included</span>
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

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-288px * 10 - 24px * 10));
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
