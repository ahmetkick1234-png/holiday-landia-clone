import { createServerClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Calendar, Clock } from "lucide-react"

export async function BlogSection() {
  const supabase = createServerClient()

  const { data: blogs } = await supabase
    .from("blogs")
    .select("*")
    .order("published_date", { ascending: false })
    .limit(3)

  if (!blogs || blogs.length === 0) {
    return null
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Food: "bg-orange-50 text-orange-700",
      Culture: "bg-blue-50 text-blue-700",
      "Local Tips": "bg-green-50 text-green-700",
      Adventure: "bg-purple-50 text-purple-700",
      Sports: "bg-red-50 text-red-700",
      Outdoor: "bg-teal-50 text-teal-700",
      Destinations: "bg-indigo-50 text-indigo-700",
      "Travel Tips": "bg-pink-50 text-pink-700",
    }
    return colors[category] || "bg-gray-50 text-gray-700"
  }

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    return `${minutes} min read`
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">Antalya Travel Blog</h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            const formattedDate = new Date(blog.published_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })

            return (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <img
                  src={blog.image_url || "/placeholder.svg?height=400&width=600"}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  {/* Category Tag */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 text-sm rounded-full ${getCategoryColor(blog.category)}`}>
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 flex-1">{blog.excerpt}</p>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{getReadingTime(blog.content)}</span>
                    </div>
                  </div>

                  <Link href={`/blogs/${blog.slug}`} className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
