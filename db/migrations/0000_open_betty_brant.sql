CREATE TABLE `globalsTable` (
	`id` text PRIMARY KEY NOT NULL,
	`prop` text NOT NULL,
	`value` text
);
--> statement-breakpoint
CREATE TABLE `leadsTable` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE TABLE `pagesTable` (
	`id` text PRIMARY KEY NOT NULL,
	`isPage` integer DEFAULT false NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`imageHeader` text,
	`metadata` text,
	`excerpts` text,
	`gallery` text,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `unique_prop` ON `globalsTable` (`prop`);--> statement-breakpoint
CREATE UNIQUE INDEX `unique_lead_email` ON `leadsTable` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `unique_slug` ON `pagesTable` (`slug`);