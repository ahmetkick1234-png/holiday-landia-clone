import { createServerClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = await createServerClient()
    const { data: tours, error } = await supabase.from("tours").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching tours:", error)
      return NextResponse.json({ error: "Failed to fetch tours" }, { status: 500 })
    }

    return NextResponse.json(tours)
  } catch (error) {
    console.error("[v0] Error in tours API route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
