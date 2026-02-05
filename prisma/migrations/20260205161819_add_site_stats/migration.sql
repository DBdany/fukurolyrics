-- CreateTable
CREATE TABLE "site_stats" (
    "id" TEXT NOT NULL DEFAULT 'visitor_count',
    "count" INTEGER NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "site_stats_pkey" PRIMARY KEY ("id")
);
