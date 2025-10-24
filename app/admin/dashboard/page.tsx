import { getAdminSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { logoutAdmin } from "../actions"
import { Package, DollarSign, TrendingUp, FileText } from "lucide-react"

export default async function AdminDashboard() {
  const admin = await getAdminSession()

  if (!admin) {
    redirect("/admin/login")
  }

  const supabase = await createServerClient()

  // Get tour statistics
  const { data: tours } = await supabase.from("tours").select("*")

  const { data: blogs } = await supabase.from("blogs").select("*")

  const totalTours = tours?.length || 0
  const totalRevenue = tours?.reduce((sum, tour) => sum + Number.parseFloat(tour.price.toString()), 0) || 0
  const avgPrice = totalTours > 0 ? totalRevenue / totalTours : 0
  const totalBlogs = blogs?.length || 0

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
              <p className="text-sm text-gray-600 mt-1">Welcome back, {admin.username}</p>
            </div>
            <form action={logoutAdmin}>
              <Button type="submit" variant="outline">
                Logout
              </Button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Tours</CardTitle>
              <Package className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTours}</div>
              <p className="text-xs text-gray-500 mt-1">Active tour packages</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Value</CardTitle>
              <DollarSign className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€{totalRevenue.toFixed(2)}</div>
              <p className="text-xs text-gray-500 mt-1">Combined tour value</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Average Price</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€{avgPrice.toFixed(2)}</div>
              <p className="text-xs text-gray-500 mt-1">Per tour package</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalBlogs}</div>
              <p className="text-xs text-gray-500 mt-1">Published articles</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your tours and content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/admin/tours">
                <Button className="w-full" size="lg">
                  Manage Tours
                </Button>
              </Link>
              <Link href="/admin/blogs">
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  Manage Blogs
                </Button>
              </Link>
              <Link href="/">
                <Button className="w-full bg-transparent" size="lg" variant="outline">
                  View Public Site
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
