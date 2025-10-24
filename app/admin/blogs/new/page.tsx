import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { BlogFormClient } from "@/components/blog-form-client"

export default function NewBlogPage() {
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
          <h1 className="text-3xl font-bold text-gray-900">Create New Blog Post</h1>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <BlogFormClient mode="create" />
        </div>
      </div>
    </div>
  )
}
