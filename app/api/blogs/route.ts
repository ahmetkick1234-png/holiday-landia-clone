import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createServerClient()

    const { data: blogs, error } = await supabase
      .from("blogs")
      .select("*")
      .order("published_date", { ascending: false })
      .limit(3)

    if (error) {
      console.error("[v0] Error fetching blogs:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ blogs: blogs || [] })
  } catch (error) {
    console.error("[v0] Error in blogs API route:", error)
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}
