"use server"

import { Resend } from "resend"

const resend = new Resend("re_TrDHzni7_McYNjCm96zntZSPi7QsLPczL")

export async function sendContactMessage(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const destination = formData.get("destination") as string
    const message = formData.get("message") as string

    console.log("[v0] Sending contact email with data:", {
      firstName,
      lastName,
      email,
      phone,
      destination,
    })

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Holidaylandia Contact <onboarding@resend.dev>",
      to: ["contact@holidaylandia.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interested Destination:</strong> ${destination}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { success: false, error: error.message }
    }

    console.log("[v0] Email sent successfully:", data)
    return { success: true }
  } catch (error) {
    console.error("[v0] Error in sendContactMessage:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
