"use server"

import { verifyAdminCredentials, setAdminSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function loginAdmin(formData: FormData) {
  const username = formData.get("username") as string
  const password = formData.get("password") as string

  console.log("[v0] Login attempt for username:", username)

  if (!username || !password) {
    console.log("[v0] Missing username or password")
    return { error: "Username and password are required" }
  }

  const result = await verifyAdminCredentials(username, password)

  if (!result.success) {
    console.log("[v0] Login failed:", result.error)
    return { error: result.error }
  }

  console.log("[v0] Login successful for admin ID:", result.adminId)

  // Set admin session cookie
  await setAdminSession(result.adminId!)

  // Redirect to admin dashboard
  redirect("/admin/dashboard")
}
