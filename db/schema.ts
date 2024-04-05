import { boolean, json, jsonb, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

// npx drizzle-kit generate:pg --config=./drizzle.config.ts
// npx tsx ./db/migrate.ts

export const globals = pgTable("globals", {
	id: serial("id").primaryKey(),
	index: varchar("index", { length: 256 }),
	prop: varchar("prop", { length: 256 }),
	value: jsonb("value")
});

export const pages = pgTable("pages", {
	id: serial("id").primaryKey(),
	isPage: boolean("isPage").default(false),
	slug: varchar("slug", { length: 256 }),
	title: varchar("title", { length: 256 }),
	image: json("image"),
	metadata: jsonb("metadata"),
	excerpts: jsonb("excerpts"),
});
