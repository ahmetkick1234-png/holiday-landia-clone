"use client"

import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { deleteBlog } from "./actions"
import { useState } from "react"

export function DeleteBlogButton({ blogId, imageUrl }: { blogId: string; imageUrl: string | null }) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      return
    }

    setIsDeleting(true)
    await deleteBlog(blogId, imageUrl)
    setIsDeleting(false)
  }

  return (
    <Button variant="destructive" size="sm" onClick={handleDelete} disabled={isDeleting}>
      <Trash2 className="w-4 h-4 mr-1" />
      {isDeleting ? "Deleting..." : "Delete"}
    </Button>
  )
}
