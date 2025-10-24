"use server"

import { createServerClient } from "@/lib/supabase/server"
import { Resend } from "resend"

const resend = new Resend("re_TrDHzni7_McYNjCm96zntZSPi7QsLPczL")

export async function createBooking(formData: FormData) {
  try {
    const supabase = await createServerClient()

    const bookingData = {
      tour_id: formData.get("tour_id") as string,
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      passport_number: formData.get("passport_number") as string,
      address: formData.get("address") as string,
    }

    // Get tour details for the email
    const { data: tour } = await supabase
      .from("tours")
      .select("title, price, duration, location")
      .eq("id", bookingData.tour_id)
      .single()

    // Insert booking into database
    const { data, error } = await supabase.from("bookings").insert([bookingData]).select().single()

    if (error) {
      console.error("[v0] Error creating booking:", error)
      return { success: false, error: error.message }
    }

    // Send email notification using Resend
    try {
      await resend.emails.send({
        from: "HolidayLandia <bookings@holidaylandia.com>",
        to: "contact@holidaylandia.com",
        subject: `New Booking Request - ${tour?.title || "Tour"}`,
        html: `
          <h2>New Booking Request</h2>
          <h3>Customer Information:</h3>
          <ul>
            <li><strong>Name:</strong> ${bookingData.first_name} ${bookingData.last_name}</li>
            <li><strong>Email:</strong> ${bookingData.email}</li>
            <li><strong>Phone:</strong> ${bookingData.phone}</li>
            <li><strong>Passport Number:</strong> ${bookingData.passport_number}</li>
            <li><strong>Address:</strong> ${bookingData.address}</li>
          </ul>
          <h3>Tour Information:</h3>
          <ul>
            <li><strong>Tour:</strong> ${tour?.title || "N/A"}</li>
            <li><strong>Price:</strong> €${tour?.price || "N/A"}</li>
            <li><strong>Duration:</strong> ${tour?.duration || "N/A"}</li>
            <li><strong>Location:</strong> ${tour?.location || "N/A"}</li>
          </ul>
          <p><em>Booking ID: ${data.id}</em></p>
        `,
      })
    } catch (emailError) {
      console.error("[v0] Error sending email:", emailError)
      // Don't fail the booking if email fails
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error in createBooking:", error)
    return { success: false, error: "Failed to create booking" }
  }
}
