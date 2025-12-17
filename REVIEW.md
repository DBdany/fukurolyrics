# Architecture Review & Future Considerations

> Initial review of PLAN.md before v1 implementation.
> Goal: Get lyrics live on fukurolyrics.com ASAP.
> Revisit this doc post-launch for Phase 2+ planning.

---

## What's Solid (Keep As-Is)

### Schema Design
- Many-to-many `TrackOnRelease` junction table handles songs appearing on multiple releases correctly
- Dual unique constraints `[releaseId, songId]` and `[releaseId, trackNumber]` prevent data integrity issues
- Slugs for SEO-friendly URLs
- `@map` for snake_case DB columns while keeping camelCase in TypeScript

### Stack
- Next.js App Router + PostgreSQL + Prisma + Tailwind is boring and proven
- Server components handle DB queries without client-side fetching complexity
- Appropriate for SEO-critical content site

### URL Structure
- `/lyrics/[slug]` and `/releases/[slug]` are clean and shareable
- Good separation of concerns

---

## Gaps to Address Post-V1

### 1. Missing Band Members Model
Current plan mentions displaying members but no schema for them.

```prisma
// Future consideration
model Member {
  id        String   @id @default(cuid())
  slug      String   @unique
  nameJp    String   @map("name_jp")
  nameRomaji String  @map("name_romaji")
  role      String   // "Vocals", "Guitar", etc.
  isActive  Boolean  @default(true) @map("is_active")
  joinDate  DateTime? @map("join_date")
  leaveDate DateTime? @map("leave_date")

  credits   SongCredit[]

  @@map("members")
}

model SongCredit {
  id       String @id @default(cuid())
  songId   String @map("song_id")
  memberId String @map("member_id")
  role     CreditRole

  song     Song   @relation(fields: [songId], references: [id])
  member   Member @relation(fields: [memberId], references: [id])

  @@unique([songId, memberId, role])
  @@map("song_credits")
}

enum CreditRole {
  LYRICS
  MUSIC
  ARRANGEMENT
}
```

### 2. Content Management
No admin panel in any phase. Options to consider:

- **Quick & dirty**: Protected `/admin` route with env var password
- **Medium effort**: Next.js API routes + simple form UI
- **Full solution**: Integrate with existing CMS (Sanity, Payload, etc.)

For now: Prisma Studio and seed scripts are fine for v1.

### 3. Image Storage
`coverArt` field exists but no storage solution specified.

**Recommended options (per your preferences):**
- Cloudflare R2 (cheap, S3-compatible)
- Uploadthing (easy Next.js integration)

**Do not**: Commit images to the repo.

### 4. Search Functionality
Listed as "future enhancement" but should be Phase 2 priority.

PostgreSQL full-text search is sufficient:

```sql
-- Example: Add tsvector column to songs table
ALTER TABLE songs ADD COLUMN search_vector tsvector;

CREATE INDEX songs_search_idx ON songs USING GIN(search_vector);

-- Update trigger to populate on insert/update
CREATE TRIGGER songs_search_update
BEFORE INSERT OR UPDATE ON songs
FOR EACH ROW EXECUTE FUNCTION
tsvector_update_trigger(search_vector, 'pg_catalog.english', lyrics_jp, lyrics_romaji, lyrics_en);
```

Or handle in Prisma with raw queries initially.

### 5. Deployment Target
PLAN.md mentions Vercel, but Fly.io is preferred per global config.

**Decision needed:**
| Option | Pros | Cons |
|--------|------|------|
| Vercel | Zero-config Next.js | Need external Postgres (Neon/Supabase) |
| Fly.io | Full control, Postgres on same infra | More configuration |

**Recommendation**: Vercel for v1 speed, migrate to Fly.io if needed later.

### 6. LyricsDisplay Component Spec
Most complex UI piece needs more detail:

**Questions to answer post-v1:**
- View preference persistence (localStorage vs URL param vs neither)
- Line alignment strategy when JP/Romaji/EN line counts differ
- UI pattern: tabs vs toggle buttons vs dropdown
- Mobile breakpoint behavior (when does side-by-side become stacked?)
- Keyboard navigation for accessibility

**For v1**: Ship simple tabs, iterate based on usage.

---

## Future Fandom Features (Post-Launch Backlog)

When evolving into full fandom site, consider:

- [ ] Member profiles with photos and bios
- [ ] Song credits (who wrote lyrics/music)
- [ ] Discography timeline visualization
- [ ] Live show history / tour dates
- [ ] News/announcements section
- [ ] User accounts (favorites, reading history)
- [ ] Community translation corrections
- [ ] Furigana toggle for kanji
- [ ] Dark mode
- [ ] Audio previews (if licensing allows)

---

## V1 Scope Reminder

**In scope:**
- Homepage with discography list
- Release pages with tracklists
- Lyrics pages with JP/Romaji/EN views
- Basic SEO (meta tags, OG images)
- Mobile responsive
- Deploy to production

**Out of scope for v1:**
- Admin panel
- Search
- User accounts
- Member profiles
- Dark mode

---

## Notes

- Prioritize getting Utopia EP lyrics live first (user already has this content)
- Keep the LyricsDisplay component simple initially
- Don't over-engineer — this is a lyrics site, not a social network
