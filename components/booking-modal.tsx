"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  tourId: string
  tourTitle: string
  tourPrice: number
  onSubmit: (formData: FormData) => Promise<{ success: boolean; message: string }>
}

export function BookingModal({ isOpen, onClose, tourId, tourTitle, tourPrice, onSubmit }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    formData.append("tour_id", tourId)

    try {
      const result = await onSubmit(formData)
      if (result.success) {
        setMessage({ type: "success", text: result.message })
        setTimeout(() => {
          onClose()
          setMessage(null)
        }, 2000)
      } else {
        setMessage({ type: "error", text: result.message })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Book Your Tour</h2>
              <p className="text-blue-100 text-sm md:text-base">{tourTitle}</p>
              <p className="text-white font-bold text-lg mt-2">€{tourPrice}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {message && (
            <div
              className={`p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="first_name" className="text-gray-700 font-medium">
                First Name *
              </Label>
              <Input
                id="first_name"
                name="first_name"
                type="text"
                required
                placeholder="John"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="last_name" className="text-gray-700 font-medium">
                Last Name *
              </Label>
              <Input
                id="last_name"
                name="last_name"
                type="text"
                required
                placeholder="Doe"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john.doe@example.com"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+1 (555) 123-4567"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Passport Number */}
          <div className="space-y-2">
            <Label htmlFor="passport_number" className="text-gray-700 font-medium">
              Passport Number *
            </Label>
            <Input
              id="passport_number"
              name="passport_number"
              type="text"
              required
              placeholder="AB1234567"
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-gray-700 font-medium">
              Address *
            </Label>
            <Textarea
              id="address"
              name="address"
              required
              placeholder="123 Main Street, City, Country"
              rows={3}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gray-300 hover:bg-gray-50 bg-transparent"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Confirm Booking"}
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our terms and conditions. We'll contact you shortly to confirm your
            booking.
          </p>
        </form>
      </div>
    </div>
  )
}
