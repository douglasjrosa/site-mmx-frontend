CREATE UNIQUE INDEX IF NOT EXISTS "unique_prop" ON "globals" ("prop");--> statement-breakpoint
ALTER TABLE "globals" DROP COLUMN IF EXISTS "index";