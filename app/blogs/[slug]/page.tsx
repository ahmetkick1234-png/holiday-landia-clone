import { createServerClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/image-carousel"

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const supabase = await createServerClient()

  const { data: blog, error } = await supabase.from("blogs").select("*").eq("slug", params.slug).single()

  if (error || !blog) {
    notFound()
  }

  const formattedDate = new Date(blog.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const blogImages = blog.images && blog.images.length > 0 ? blog.images : blog.image_url ? [blog.image_url] : []

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/destinations">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Destinations
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <ImageCarousel images={blogImages} alt={blog.title} className="h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full mb-4">
              {blog.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{blog.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Excerpt */}
          <div className="text-xl text-gray-600 mb-8 pb-8 border-b">{blog.excerpt}</div>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-li:my-2
              prose-img:rounded-lg prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Enjoyed this article?</h3>
                <p className="text-gray-600">Share it with your friends!</p>
              </div>
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600">Plan Your Trip</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">More Articles</h2>
            <div className="text-center">
              <Link href="/destinations">
                <Button variant="outline" size="lg">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
