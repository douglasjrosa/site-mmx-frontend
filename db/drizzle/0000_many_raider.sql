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
	"title" varchar(256),
	"image" json,
	"metadata" jsonb,
	"excerpts" jsonb
);
