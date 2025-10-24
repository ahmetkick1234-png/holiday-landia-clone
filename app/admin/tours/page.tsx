import { getAdminSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { logoutAdmin } from "../actions"
import { Plus, Edit } from "lucide-react"
import { DeleteTourButton } from "./delete-tour-button"

export default async function ToursManagementPage() {
  const admin = await getAdminSession()

  if (!admin) {
    redirect("/admin/login")
  }

  const supabase = await createClient()
  const { data: tours, error } = await supabase.from("tours").select("*").order("created_at", { ascending: false })

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
              <p className="text-sm text-gray-600 mt-1">Tour Management</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard">
                <Button variant="outline">Dashboard</Button>
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Tours</h2>
            <p className="text-gray-600 mt-1">Manage your tour packages</p>
          </div>
          <Link href="/admin/tours/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Tour
            </Button>
          </Link>
        </div>

        {error && (
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <p className="text-red-600">Error loading tours: {error.message}</p>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 gap-6">
          {tours?.map((tour) => (
            <Card key={tour.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{tour.title}</CardTitle>
                    <CardDescription className="mt-2">{tour.description}</CardDescription>
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                      <span className="font-semibold text-orange-600">${tour.price}</span>
                      <span>•</span>
                      <span>{tour.duration}</span>
                      <span>•</span>
                      <span>{tour.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Link href={`/admin/tours/edit/${tour.id}`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <DeleteTourButton tourId={tour.id} tourTitle={tour.title} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Highlights</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {tour.highlights?.map((highlight: string, index: number) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Included</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {tour.included?.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {tours?.length === 0 && (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-gray-600">No tours found. Create your first tour to get started.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
