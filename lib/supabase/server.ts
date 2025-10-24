import { createServerClient as createSupabaseServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function createServerClient() {
  const cookieStore = await cookies()

  const supabaseUrl = process.env.SUPABASE_SUPABASE_URL
  const supabaseAnonKey = process.env.SUPABASE_SUPABASE_ANON_KEY

  console.log("[v0] Supabase URL exists:", !!supabaseUrl)
  console.log("[v0] Supabase Anon Key exists:", !!supabaseAnonKey)

  if (!supabaseUrl || !supabaseAnonKey) {
    console.log("[v0] Missing Supabase credentials!")
    throw new Error("Supabase URL and Anon Key are required")
  }

  return createSupabaseServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The "setAll" method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}

export const createClient = createServerClient
