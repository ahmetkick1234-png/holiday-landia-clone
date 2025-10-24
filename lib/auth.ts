import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  return hashHex
}

async function comparePasswords(password: string, hash: string): Promise<boolean> {
  const passwordHash = await hashPassword(password)
  console.log("[v0] Stored hash in DB:", hash)
  console.log("[v0] Computed hash from password:", passwordHash)
  console.log("[v0] Hashes match:", passwordHash === hash)
  return passwordHash === hash
}

export async function verifyAdminCredentials(username: string, password: string) {
  console.log("[v0] Verifying credentials for username:", username)

  const supabase = await createClient()

  // Fetch admin user from database
  const { data: adminUser, error } = await supabase.from("admin_users").select("*").eq("username", username).single()

  if (error) {
    console.log("[v0] Database error:", error)
    return { success: false, error: "Invalid credentials" }
  }

  if (!adminUser) {
    console.log("[v0] Admin user not found")
    return { success: false, error: "Invalid credentials" }
  }

  console.log("[v0] Admin user found, comparing passwords")

  const isValidPassword = await comparePasswords(password, adminUser.password_hash)

  console.log("[v0] Password valid:", isValidPassword)

  if (!isValidPassword) {
    return { success: false, error: "Invalid credentials" }
  }

  return { success: true, adminId: adminUser.id }
}

export async function setAdminSession(adminId: string) {
  const cookieStore = await cookies()

  // Set HTTP-only cookie for admin session
  cookieStore.set("admin_session", adminId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  })
}

export async function getAdminSession() {
  const cookieStore = await cookies()
  const adminSession = cookieStore.get("admin_session")

  if (!adminSession) {
    return null
  }

  // Verify the session is valid by checking if admin exists
  const supabase = await createClient()
  const { data: adminUser, error } = await supabase
    .from("admin_users")
    .select("id, username")
    .eq("id", adminSession.value)
    .single()

  if (error || !adminUser) {
    return null
  }

  return adminUser
}

export async function clearAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_session")
}
