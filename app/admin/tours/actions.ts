"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function uploadTourImage(file: File): Promise<string | null> {
  const supabase = await createClient()

  const fileExt = file.name.split(".").pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
  const filePath = `${fileName}`

  const { data, error } = await supabase.storage.from("tour-images").upload(filePath, file, {
    cacheControl: "3600",
    upsert: false,
  })

  if (error) {
    console.error("Error uploading image:", error)
    return null
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("tour-images").getPublicUrl(data.path)

  return publicUrl
}

export async function createTour(formData: FormData) {
  console.log("[v0] createTour called")

  const supabase = await createClient()

  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const price = Number.parseFloat(formData.get("price") as string)
  const duration = formData.get("duration") as string
  const location = formData.get("location") as string
  const highlights = (formData.get("highlights") as string).split("\n").filter((h) => h.trim())
  const included = (formData.get("included") as string).split("\n").filter((i) => i.trim())

  const imageFiles = formData.getAll("images") as File[]
  console.log("[v0] Image files count:", imageFiles.length)

  const uploadedImages: string[] = []

  for (const file of imageFiles) {
    if (file && file.size > 0) {
      console.log("[v0] Uploading image:", file.name)
      const imageUrl = await uploadTourImage(file)
      if (imageUrl) {
        uploadedImages.push(imageUrl)
        console.log("[v0] Image uploaded successfully:", imageUrl)
      }
    }
  }

  const image_url = uploadedImages.length > 0 ? uploadedImages[0] : null

  console.log("[v0] Inserting tour with", uploadedImages.length, "images")

  const { error } = await supabase.from("tours").insert({
    title,
    description,
    price,
    duration,
    location,
    image_url,
    images: uploadedImages,
    highlights,
    included,
  })

  if (error) {
    console.log("[v0] Error creating tour:", error.message)
    return { error: error.message }
  }

  console.log("[v0] Tour created successfully")
  revalidatePath("/admin/tours")
  redirect("/admin/tours")
}

export async function updateTour(id: string, formData: FormData) {
  console.log("[v0] updateTour called for id:", id)

  const supabase = await createClient()

  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const price = Number.parseFloat(formData.get("price") as string)
  const duration = formData.get("duration") as string
  const location = formData.get("location") as string
  const highlights = (formData.get("highlights") as string).split("\n").filter((h) => h.trim())
  const included = (formData.get("included") as string).split("\n").filter((i) => i.trim())

  const existingImagesStr = formData.get("existingImages") as string
  let existingImages: string[] = []
  try {
    existingImages = existingImagesStr ? JSON.parse(existingImagesStr) : []
    console.log("[v0] Existing images count:", existingImages.length)
  } catch (e) {
    console.log("[v0] Error parsing existing images:", e)
    existingImages = []
  }

  const imageFiles = formData.getAll("images") as File[]
  console.log("[v0] New image files count:", imageFiles.length)

  const newUploadedImages: string[] = []

  for (const file of imageFiles) {
    if (file && file.size > 0) {
      console.log("[v0] Uploading new image:", file.name)
      const imageUrl = await uploadTourImage(file)
      if (imageUrl) {
        newUploadedImages.push(imageUrl)
        console.log("[v0] New image uploaded successfully:", imageUrl)
      }
    }
  }

  const allImages = [...existingImages, ...newUploadedImages]
  const image_url = allImages.length > 0 ? allImages[0] : null

  console.log("[v0] Total images after update:", allImages.length)

  const updateData: any = {
    title,
    description,
    price,
    duration,
    location,
    highlights,
    included,
    images: allImages,
    image_url,
    updated_at: new Date().toISOString(),
  }

  const { error } = await supabase.from("tours").update(updateData).eq("id", id)

  if (error) {
    console.log("[v0] Error updating tour:", error.message)
    return { error: error.message }
  }

  console.log("[v0] Tour updated successfully")
  revalidatePath("/admin/tours")
  redirect("/admin/tours")
}

export async function deleteTour(id: string) {
  const supabase = await createClient()

  const { data: tour } = await supabase.from("tours").select("image_url").eq("id", id).single()
  if (tour?.image_url) {
    const fileName = tour.image_url.split("/").pop()
    if (fileName) {
      await supabase.storage.from("tour-images").remove([fileName])
    }
  }

  const { error } = await supabase.from("tours").delete().eq("id", id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath("/admin/tours")
  return { success: true }
}
