"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createBlog, updateBlog } from "@/app/admin/blogs/actions"
import { X } from "lucide-react"

type Blog = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image_url: string | null
  images: string[] | null
  author: string
  category: string
}

type BlogFormClientProps = {
  mode: "create" | "edit"
  blog?: Blog
}

export function BlogFormClient({ mode, blog }: BlogFormClientProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imagePreviews, setImagePreviews] = useState<string[]>(
    blog?.images || (blog?.image_url ? [blog.image_url] : []),
  )
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    setSelectedFiles((prev) => [...prev, ...files])

    files.forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index))
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    // Remove old image field and add new images
    formData.delete("image")
    selectedFiles.forEach((file) => {
      formData.append("images", file)
    })

    if (blog?.images) {
      formData.append("existingImages", JSON.stringify(blog.images))
    }

    if (mode === "edit" && blog) {
      await updateBlog(blog.id, formData)
    } else {
      await createBlog(formData)
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
      {/* Title */}
      <div>
        <Label htmlFor="title">Title *</Label>
        <Input id="title" name="title" required defaultValue={blog?.title} placeholder="Enter blog title" />
      </div>

      {/* Slug */}
      <div>
        <Label htmlFor="slug">Slug (URL) *</Label>
        <Input
          id="slug"
          name="slug"
          required
          defaultValue={blog?.slug}
          placeholder="blog-post-url"
          pattern="[a-z0-9-]+"
        />
        <p className="text-sm text-gray-500 mt-1">Use lowercase letters, numbers, and hyphens only</p>
      </div>

      {/* Excerpt */}
      <div>
        <Label htmlFor="excerpt">Excerpt *</Label>
        <Textarea
          id="excerpt"
          name="excerpt"
          required
          defaultValue={blog?.excerpt}
          placeholder="Short description of the blog post"
          rows={3}
        />
      </div>

      {/* Content */}
      <div>
        <Label htmlFor="content">Content *</Label>
        <Textarea
          id="content"
          name="content"
          required
          defaultValue={blog?.content}
          placeholder="Write your blog content here..."
          rows={15}
        />
        <p className="text-sm text-gray-500 mt-1">Write your blog content in plain text</p>
      </div>

      {/* Image Upload */}
      <div>
        <Label htmlFor="images">Blog Images</Label>
        {imagePreviews.length > 0 && (
          <div className="mt-2 mb-4">
            <p className="text-sm text-gray-600 mb-2">Current images ({imagePreviews.length}):</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative group">
                  <div className="relative w-full h-32 rounded-lg overflow-hidden">
                    <img
                      src={preview || "/placeholder.svg"}
                      alt={`Blog image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <Input
          id="images"
          name="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="flex-1"
        />
        <p className="text-xs text-gray-500 mt-1">
          Upload multiple images for the blog post (JPG, PNG, WebP). You can select multiple files at once.
        </p>
      </div>

      {/* Author */}
      <div>
        <Label htmlFor="author">Author *</Label>
        <Input id="author" name="author" required defaultValue={blog?.author} placeholder="Author name" />
      </div>

      {/* Category */}
      <div>
        <Label htmlFor="category">Category *</Label>
        <select
          id="category"
          name="category"
          required
          defaultValue={blog?.category}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a category</option>
          <option value="Travel Tips">Travel Tips</option>
          <option value="Destinations">Destinations</option>
          <option value="Culture">Culture</option>
          <option value="Food">Food</option>
          <option value="Adventure">Adventure</option>
          <option value="Local Tips">Local Tips</option>
          <option value="Sports">Sports</option>
          <option value="Outdoor">Outdoor</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex gap-4">
        <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
          {isSubmitting ? "Saving..." : mode === "edit" ? "Update Blog Post" : "Create Blog Post"}
        </Button>
      </div>
    </form>
  )
}
