import { createServerClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Calendar } from "lucide-react"
import { DeleteBlogButton } from "./delete-blog-button"

export default async function AdminBlogsPage() {
  const supabase = await createServerClient()

  const { data: blogs } = await supabase.from("blogs").select("*").order("published_date", { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
              <p className="text-gray-600 mt-1">Manage your blog posts</p>
            </div>
            <div className="flex gap-3">
              <Link href="/admin/dashboard">
                <Button variant="outline">Back to Dashboard</Button>
              </Link>
              <Link href="/admin/blogs/new">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Blog Post
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs List */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Published
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blogs?.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {blog.image_url && (
                          <img
                            src={blog.image_url || "/placeholder.svg"}
                            alt={blog.title}
                            className="w-16 h-16 object-cover rounded mr-4"
                          />
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                          <div className="text-sm text-gray-500">{blog.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {blog.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{blog.author}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(blog.published_date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/blogs/${blog.slug}`} target="_blank">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </Link>
                        <Link href={`/admin/blogs/edit/${blog.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                        </Link>
                        <DeleteBlogButton blogId={blog.id} imageUrl={blog.image_url} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
