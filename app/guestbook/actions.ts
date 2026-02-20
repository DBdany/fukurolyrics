"use server"

import { revalidatePath } from "next/cache"
import { headers } from "next/headers"
import { z } from "zod"
import { createGuestbookEntry } from "@/lib/queries"

const signGuestbookSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(50, "Name is too long"),
  message: z.string().trim().min(1, "Message is required").max(500, "Message is too long"),
  signature: z.string().trim().max(100, "Signature is too long").optional(),
})

// Simple in-memory rate limiter: IP → timestamp of last submission
const rateLimitMap = new Map<string, number>()
const RATE_LIMIT_MS = 60_000 // 1 minute

// Clean up stale entries every 5 minutes to avoid unbounded growth
setInterval(() => {
  const now = Date.now()
  for (const [ip, timestamp] of rateLimitMap) {
    if (now - timestamp > RATE_LIMIT_MS * 5) {
      rateLimitMap.delete(ip)
    }
  }
}, 5 * 60_000)

function getClientIp(headersList: Headers): string {
  return (
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown"
  )
}

export type SignGuestbookResult =
  | { success: true; entry: { id: string; name: string; message: string; timestamp: string; signature: string | null } }
  | { success: false; error: string }

export async function signGuestbook(formData: FormData): Promise<SignGuestbookResult> {
  const raw = {
    name: formData.get("name"),
    message: formData.get("message"),
    signature: formData.get("signature") || undefined,
  }

  const parsed = signGuestbookSchema.safeParse(raw)
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? "Invalid input"
    return { success: false, error: firstError }
  }

  // Rate limiting
  const headersList = await headers()
  const ip = getClientIp(headersList)
  const lastSubmission = rateLimitMap.get(ip)
  if (lastSubmission && Date.now() - lastSubmission < RATE_LIMIT_MS) {
    const secondsLeft = Math.ceil((RATE_LIMIT_MS - (Date.now() - lastSubmission)) / 1000)
    return { success: false, error: `Please wait ${secondsLeft}s before signing again` }
  }

  const entry = await createGuestbookEntry({
    name: parsed.data.name,
    message: parsed.data.message,
    signature: parsed.data.signature,
  })

  rateLimitMap.set(ip, Date.now())
  revalidatePath("/guestbook")

  return { success: true, entry }
}
