import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { loginAdmin } from "./actions"
import { getAdminSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function AdminLoginPage() {
  // Check if already logged in
  const admin = await getAdminSession()
  if (admin) {
    redirect("/admin/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            <span className="text-orange-500">HOLIDAY</span>
            <span className="text-blue-600">LANDIA</span> Admin
          </CardTitle>
          <CardDescription className="text-center">Enter your credentials to access the admin panel</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={loginAdmin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" type="text" placeholder="Enter username" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Enter password" required />
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
