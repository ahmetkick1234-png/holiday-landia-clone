"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { X } from "lucide-react"

interface TourFormProps {
  tour?: {
    id: string
    title: string
    description: string
    price: number
    duration: string
    location: string
    image_url: string | null
    images: string[] | null
    highlights: string[]
    included: string[]
  }
  action: (formData: FormData) => Promise<{ error?: string }>
  submitLabel: string
}

export function TourFormClient({ tour, action, submitLabel }: TourFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [existingImages, setExistingImages] = useState<string[]>(
    tour?.images || (tour?.image_url ? [tour.image_url] : []),
  )
  const [newFiles, setNewFiles] = useState<File[]>([])
  const [newFilePreviews, setNewFilePreviews] = useState<string[]>([])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    setNewFiles((prev) => [...prev, ...files])

    files.forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewFilePreviews((prev) => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeExistingImage = (index: number) => {
    setExistingImages((prev) => prev.filter((_, i) => i !== index))
  }

  const removeNewFile = (index: number) => {
    setNewFiles((prev) => prev.filter((_, i) => i !== index))
    setNewFilePreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    formData.delete("image")
    formData.delete("images")

    newFiles.forEach((file) => {
      formData.append("images", file)
    })

    if (existingImages.length > 0) {
      formData.append("existingImages", JSON.stringify(existingImages))
    }

    console.log("[v0] Submitting form with data:", {
      title: formData.get("title"),
      newImageCount: newFiles.length,
      existingImageCount: existingImages.length,
    })

    const result = await action(formData)

    if (result?.error) {
      setError(result.error)
      setIsSubmitting(false)
      console.log("[v0] Form submission error:", result.error)
    } else {
      console.log("[v0] Form submitted successfully")
      router.push("/admin/tours")
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

      <div className="space-y-2">
        <Label htmlFor="title">Tour Title</Label>
        <Input id="title" name="title" defaultValue={tour?.title} placeholder="e.g., Mediterranean Paradise" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={tour?.description}
          placeholder="Describe the tour..."
          rows={4}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price (€)</Label>
          <Input
            id="price"
            name="price"
            type="number"
            step="0.01"
            defaultValue={tour?.price}
            placeholder="1299.99"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration</Label>
          <Input id="duration" name="duration" defaultValue={tour?.duration} placeholder="e.g., 7 Days" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            defaultValue={tour?.location}
            placeholder="e.g., Mediterranean Coast"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="images">Tour Images</Label>
        {(existingImages.length > 0 || newFilePreviews.length > 0) && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">
              Images ({existingImages.length + newFilePreviews.length} total)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {existingImages.map((imageUrl, index) => (
                <div key={`existing-${index}`} className="relative group">
                  <div className="relative w-full h-32 rounded-lg overflow-hidden">
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={`Existing image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeExistingImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <span className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    Existing
                  </span>
                </div>
              ))}
              {newFilePreviews.map((preview, index) => (
                <div key={`new-${index}`} className="relative group">
                  <div className="relative w-full h-32 rounded-lg overflow-hidden">
                    <Image
                      src={preview || "/placeholder.svg"}
                      alt={`New image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeNewFile(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        <Input
          id="images"
          name="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="cursor-pointer"
        />
        <p className="text-xs text-gray-500">
          Upload multiple images for the tour (JPG, PNG, WebP). You can select multiple files at once.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="highlights">Highlights (one per line)</Label>
        <Textarea
          id="highlights"
          name="highlights"
          defaultValue={tour?.highlights?.join("\n")}
          placeholder="Visit ancient ruins&#10;Beach relaxation&#10;Local cuisine tasting"
          rows={5}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="included">What's Included (one per line)</Label>
        <Textarea
          id="included"
          name="included"
          defaultValue={tour?.included?.join("\n")}
          placeholder="Accommodation&#10;Daily breakfast&#10;Tour guide&#10;Transportation"
          rows={5}
        />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : submitLabel}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin/tours")} disabled={isSubmitting}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
