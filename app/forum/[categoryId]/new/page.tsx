import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { getForumCategory } from "@/lib/queries"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { NewThreadForm } from "./new-thread-form"

interface NewThreadPageProps {
  params: Promise<{ categoryId: string }>
}

export default async function NewThreadPage({ params }: NewThreadPageProps) {
  const { categoryId } = await params
  const category = await getForumCategory(categoryId)

  if (!category) {
    notFound()
  }

  return (
    <SiteLayout>
      <div className="p-4 lg:p-8 max-w-3xl mx-auto">
        <Link
          href={`/forum/${categoryId}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-[family-name:var(--font-pixel)]">{"<< back to"} {category.name}</span>
        </Link>

        <RetroWindow title="new_thread.txt" variant="ornate">
          <NewThreadForm categorySlug={categoryId} categoryName={category.name} />
        </RetroWindow>
      </div>
    </SiteLayout>
  )
}
