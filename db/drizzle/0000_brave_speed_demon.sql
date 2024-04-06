CREATE TABLE IF NOT EXISTS "globals" (
	"id" serial PRIMARY KEY NOT NULL,
	"index" varchar(256),
	"prop" varchar(256),
	"value" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"isPage" boolean DEFAULT false,
	"slug" varchar(256) NOT NULL,
	"title" varchar(256),
	"imageHeader" jsonb,
	"metadata" jsonb,
	"excerpts" jsonb,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_idx" ON "pages" ("slug");