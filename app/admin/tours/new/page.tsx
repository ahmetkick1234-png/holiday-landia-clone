import { getAdminSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { logoutAdmin } from "../../actions"
import { createTour } from "../actions"
import { TourFormClient } from "@/components/tour-form-client"

export default async function NewTourPage() {
  const admin = await getAdminSession()

  if (!admin) {
    redirect("/admin/login")
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
              <p className="text-sm text-gray-600 mt-1">Add New Tour</p>
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
            <CardTitle>Create New Tour</CardTitle>
            <CardDescription>Fill in the details to create a new tour package</CardDescription>
          </CardHeader>
          <CardContent>
            <TourFormClient action={createTour} submitLabel="Create Tour" />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
