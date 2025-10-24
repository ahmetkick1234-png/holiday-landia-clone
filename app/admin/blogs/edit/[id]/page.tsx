import { createServerClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { BlogFormClient } from "@/components/blog-form-client"

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const supabase = await createServerClient()

  const { data: blog, error } = await supabase.from("blogs").select("*").eq("id", params.id).single()

  if (error || !blog) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/admin/blogs">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <BlogFormClient mode="edit" blog={blog} />
        </div>
      </div>
    </div>
  )
}
