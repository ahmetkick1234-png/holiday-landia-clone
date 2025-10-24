"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  images: string[]
  alt: string
  className?: string
}

export function ImageCarousel({ images, alt, className = "" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // If no images or empty array, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className={`relative ${className}`}>
        <img src="/placeholder.svg?height=500&width=1200" alt={alt} className="w-full h-full object-cover" />
      </div>
    )
  }

  // If only one image, show it without navigation
  if (images.length === 1) {
    return (
      <div className={`relative ${className}`}>
        <img src={images[0] || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
      </div>
    )
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Main Image */}
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`${alt} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white transition-all z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white transition-all z-10"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
