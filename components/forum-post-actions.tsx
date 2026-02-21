"use client"

import { useState, useTransition } from "react"
import { useUser } from "@clerk/nextjs"
import { Heart, Quote, Flag } from "lucide-react"
import { likeForumPost } from "@/app/forum/actions"

interface ForumPostActionsProps {
  postId: string
  initialLikes: number
}

export function ForumPostActions({ postId, initialLikes }: ForumPostActionsProps) {
  const { isSignedIn } = useUser()
  const [likes, setLikes] = useState(initialLikes)
  const [isPending, startTransition] = useTransition()

  function handleLike() {
    if (!isSignedIn) return
    startTransition(async () => {
      const result = await likeForumPost(postId)
      if (result.success) {
        setLikes(result.newLikeCount)
      }
    })
  }

  return (
    <div className="flex items-center justify-between pt-3 border-t border-border">
      <div className="flex items-center gap-4">
        <button
          onClick={handleLike}
          disabled={isPending || !isSignedIn}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Heart className="w-4 h-4" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors opacity-50 cursor-not-allowed">
          <Quote className="w-4 h-4" />
          <span>Quote</span>
        </button>
      </div>
      <button className="text-xs text-muted-foreground opacity-50 cursor-not-allowed">
        <Flag className="w-4 h-4" />
      </button>
    </div>
  )
}
