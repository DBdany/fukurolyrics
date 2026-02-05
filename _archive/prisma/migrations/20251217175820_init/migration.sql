-- CreateEnum
CREATE TYPE "ReleaseType" AS ENUM ('ALBUM', 'EP', 'SINGLE');

-- CreateTable
CREATE TABLE "releases" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title_jp" TEXT NOT NULL,
    "title_romaji" TEXT NOT NULL,
    "title_en" TEXT,
    "release_date" TIMESTAMP(3) NOT NULL,
    "type" "ReleaseType" NOT NULL,
    "cover_art" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "releases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "songs" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title_jp" TEXT NOT NULL,
    "title_romaji" TEXT NOT NULL,
    "title_en" TEXT,
    "lyrics_jp" TEXT NOT NULL,
    "lyrics_romaji" TEXT NOT NULL,
    "lyrics_en" TEXT NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "songs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tracks_on_releases" (
    "id" TEXT NOT NULL,
    "release_id" TEXT NOT NULL,
    "song_id" TEXT NOT NULL,
    "track_number" INTEGER NOT NULL,

    CONSTRAINT "tracks_on_releases_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "releases_slug_key" ON "releases"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "songs_slug_key" ON "songs"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "tracks_on_releases_release_id_song_id_key" ON "tracks_on_releases"("release_id", "song_id");

-- CreateIndex
CREATE UNIQUE INDEX "tracks_on_releases_release_id_track_number_key" ON "tracks_on_releases"("release_id", "track_number");

-- AddForeignKey
ALTER TABLE "tracks_on_releases" ADD CONSTRAINT "tracks_on_releases_release_id_fkey" FOREIGN KEY ("release_id") REFERENCES "releases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tracks_on_releases" ADD CONSTRAINT "tracks_on_releases_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "songs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
