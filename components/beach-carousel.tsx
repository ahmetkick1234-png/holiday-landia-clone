"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const beaches = [
  {
    name: "Kaputaş Beach",
    description:
      "Kaputaş Beach is one of the most picturesque beaches in Turkey, located between Kaş and Kalkan on the Antalya coastline. Nestled between steep cliffs, this small yet stunning beach is known for its vibrant turquoise waters and golden sand. Access to the beach requires descending a 187 step staircase, but the view and the experience are well worth the effort. It is a perfect spot for those seeking a more natural and peaceful beach escape.",
    image: "/kaputas-beach-turquoise-water-between-cliffs.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a2hMRXu75UfDuYQveQrjMa8onFlbwU.png",
  },
  {
    name: "Konyaaltı Beach",
    description:
      "Konyaaltı Beach is one of Antalya's most popular beaches, stretching for miles along the Mediterranean coast. With its pebble shore and crystal-clear waters, it offers stunning views of the Taurus Mountains. The beach is well-equipped with facilities including cafes, restaurants, and water sports activities, making it perfect for families and adventure seekers alike.",
    image: "/konyaalti-beach-pebble-shore-mountain-views.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a2hMRXu75UfDuYQveQrjMa8onFlbwU.png",
  },
  {
    name: "Lara Beach",
    description:
      "Lara Beach is famous for its golden sand and luxury resorts. Located on the eastern side of Antalya, this beach offers a more upscale experience with its pristine waters and well-maintained facilities. The beach is perfect for sunbathing, swimming, and enjoying various water sports. The nearby Lara district is known for its impressive sand sculpture festival held annually.",
    image: "/lara-beach-golden-sand-luxury-resorts.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a2hMRXu75UfDuYQveQrjMa8onFlbwU.png",
  },
  {
    name: "Olympos Beach",
    description:
      "Olympos Beach combines natural beauty with historical significance. Surrounded by ancient ruins and lush forests, this secluded beach offers a unique experience. The beach is popular among backpackers and nature lovers who appreciate its unspoiled beauty and the nearby Chimaera flames, a natural eternal flame that has been burning for thousands of years.",
    image: "/olympos-beach-ancient-ruins-forest.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a2hMRXu75UfDuYQveQrjMa8onFlbwU.png",
  },
  {
    name: "Phaselis Beach",
    description:
      "Phaselis Beach is located within the ancient city of Phaselis, offering three beautiful bays surrounded by pine forests. The combination of historical ruins and pristine beaches makes it a unique destination. Visitors can explore ancient Roman aqueducts and theaters before relaxing on the peaceful shores. The clear waters are perfect for snorkeling and swimming.",
    image: "/phaselis-beach-three-bays-pine-forest.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a2hMRXu75UfDuYQveQrjMa8onFlbwU.png",
  },
  {
    name: "Cirali Beach",
    description:
      "Cirali Beach is a protected nesting site for endangered Caretta Caretta sea turtles. This 3.5 km long pebble beach offers a tranquil atmosphere with its unspoiled natural beauty. The beach is backed by orange groves and mountains, providing a stunning backdrop. It's an ideal destination for eco-conscious travelers seeking peace and natural beauty.",
    image: "/cirali-beach-sea-turtle-nesting-site.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a2hMRXu75UfDuYQveQrjMa8onFlbwU.png",
  },
]

export function BeachCarousel() {
  const [currentBeach, setCurrentBeach] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentBeach((prev) => (prev + 1) % beaches.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextBeach = () => {
    setCurrentBeach((prev) => (prev + 1) % beaches.length)
    setIsAutoPlaying(false)
  }

  const prevBeach = () => {
    setCurrentBeach((prev) => (prev - 1 + beaches.length) % beaches.length)
    setIsAutoPlaying(false)
  }

  const goToBeach = (index: number) => {
    setCurrentBeach(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 px-4 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">Discover Antalya Beaches</h2>
          <p className="text-gray-600 text-lg">
            Explore the stunning coastline of Antalya with our curated collection of the most beautiful beaches
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Video/Image Carousel */}
          <div className="relative">
            {/* Main Image/Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-[4/3]">
              <img
                src={beaches[currentBeach].image || "/placeholder.svg"}
                alt={beaches[currentBeach].name}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevBeach}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                aria-label="Previous beach"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              <button
                onClick={nextBeach}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                aria-label="Next beach"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {beaches.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToBeach(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentBeach ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to beach ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Beach Name */}
            <h3 className="text-4xl font-bold text-[#1e3a8a]">{beaches[currentBeach].name}</h3>

            {/* Beach Description */}
            <p className="text-gray-600 text-lg leading-relaxed">{beaches[currentBeach].description}</p>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">Book Now</Button>
              </Link>
              <Link href="/tours">
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Progress Indicator */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>
                  Beach {currentBeach + 1} of {beaches.length}
                </span>
                {isAutoPlaying && (
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Auto-playing
                  </span>
                )}
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentBeach + 1) / beaches.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
