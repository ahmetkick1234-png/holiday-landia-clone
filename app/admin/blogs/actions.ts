"use server"

import { createServerClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function uploadBlogImage(file: File): Promise<string | null> {
  const supabase = await createServerClient()

  const fileExt = file.name.split(".").pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
  const filePath = `${fileName}`

  const { error: uploadError } = await supabase.storage.from("tour-images").upload(filePath, file)

  if (uploadError) {
    console.error("Error uploading image:", uploadError)
    return null
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("tour-images").getPublicUrl(filePath)

  return publicUrl
}

export async function createBlog(formData: FormData) {
  const supabase = await createServerClient()

  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const excerpt = formData.get("excerpt") as string
  const content = formData.get("content") as string
  const author = formData.get("author") as string
  const category = formData.get("category") as string

  const imageFiles = formData.getAll("images") as File[]
  const uploadedImages: string[] = []

  for (const file of imageFiles) {
    if (file && file.size > 0) {
      const imageUrl = await uploadBlogImage(file)
      if (imageUrl) {
        uploadedImages.push(imageUrl)
      }
    }
  }

  const image_url = uploadedImages.length > 0 ? uploadedImages[0] : null

  const { error } = await supabase.from("blogs").insert({
    title,
    slug,
    excerpt,
    content,
    image_url,
    images: uploadedImages,
    author,
    category,
  })

  if (error) {
    console.error("Error creating blog:", error)
    return { error: "Failed to create blog" }
  }

  revalidatePath("/admin/blogs")
  revalidatePath("/destinations")
  redirect("/admin/blogs")
}

export async function updateBlog(id: string, formData: FormData) {
  const supabase = await createServerClient()

  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const excerpt = formData.get("excerpt") as string
  const content = formData.get("content") as string
  const author = formData.get("author") as string
  const category = formData.get("category") as string

  const existingImagesStr = formData.get("existingImages") as string
  let existingImages: string[] = []
  try {
    existingImages = existingImagesStr ? JSON.parse(existingImagesStr) : []
  } catch (e) {
    existingImages = []
  }

  const imageFiles = formData.getAll("images") as File[]
  const newUploadedImages: string[] = []

  for (const file of imageFiles) {
    if (file && file.size > 0) {
      const imageUrl = await uploadBlogImage(file)
      if (imageUrl) {
        newUploadedImages.push(imageUrl)
      }
    }
  }

  const allImages = [...existingImages, ...newUploadedImages]
  const image_url = allImages.length > 0 ? allImages[0] : null

  const { error } = await supabase
    .from("blogs")
    .update({
      title,
      slug,
      excerpt,
      content,
      image_url,
      images: allImages,
      author,
      category,
    })
    .eq("id", id)

  if (error) {
    console.error("Error updating blog:", error)
    return { error: "Failed to update blog" }
  }

  revalidatePath("/admin/blogs")
  revalidatePath("/destinations")
  revalidatePath(`/blogs/${slug}`)
  redirect("/admin/blogs")
}

export async function deleteBlog(id: string, imageUrl: string | null) {
  const supabase = await createServerClient()

  if (imageUrl) {
    const imagePath = imageUrl.split("/").pop()
    if (imagePath) {
      await supabase.storage.from("tour-images").remove([imagePath])
    }
  }

  const { error } = await supabase.from("blogs").delete().eq("id", id)

  if (error) {
    console.error("Error deleting blog:", error)
    return { error: "Failed to delete blog" }
  }

  revalidatePath("/admin/blogs")
  revalidatePath("/destinations")
  return { success: true }
}
