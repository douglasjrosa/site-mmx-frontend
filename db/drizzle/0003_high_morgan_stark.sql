ALTER TABLE "pages" ALTER COLUMN "slug" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "pages" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;