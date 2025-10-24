import { getAdminSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { logoutAdmin } from "../../../actions"
import { updateTour } from "../../actions"
import { TourFormClient } from "@/components/tour-form-client"

export default async function EditTourPage({ params }: { params: { id: string } }) {
  const admin = await getAdminSession()

  if (!admin) {
    redirect("/admin/login")
  }

  const supabase = await createClient()
  const { data: tour, error } = await supabase.from("tours").select("*").eq("id", params.id).single()

  if (error || !tour) {
    redirect("/admin/tours")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-orange-500">HOLIDAY</span>
                <span className="text-blue-600">LANDIA</span> Admin
              </h1>
              <p className="text-sm text-gray-600 mt-1">Edit Tour</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/admin/tours">
                <Button variant="outline">Back to Tours</Button>
              </Link>
              <form action={logoutAdmin}>
                <Button type="submit" variant="outline">
                  Logout
                </Button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Edit Tour</CardTitle>
            <CardDescription>Update the tour package details</CardDescription>
          </CardHeader>
          <CardContent>
            <TourFormClient tour={tour} action={updateTour.bind(null, params.id)} submitLabel="Update Tour" />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
