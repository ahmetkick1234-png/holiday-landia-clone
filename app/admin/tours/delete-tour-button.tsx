"use client"

import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { deleteTour } from "./actions"
import { useState } from "react"

export function DeleteTourButton({ tourId, tourTitle }: { tourId: string; tourTitle: string }) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${tourTitle}"?`)) {
      return
    }

    setIsDeleting(true)
    await deleteTour(tourId)
    setIsDeleting(false)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-red-600 hover:text-red-700 bg-transparent"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  )
}
