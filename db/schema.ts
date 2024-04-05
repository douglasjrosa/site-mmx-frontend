import { boolean, json, jsonb, pgTable, serial, timestamp, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
import { InferInsertModel, InferSelectModel, } from "drizzle-orm";

// npx drizzle-kit generate:pg --config=./drizzle.config.ts
// npx tsx ./db/migrate.ts

export const globals = pgTable("globals", {
	id: serial("id").primaryKey(),
	index: varchar("index", { length: 256 }),
	prop: varchar("prop", { length: 256 }),
	value: jsonb("value")
});

export type Global = InferSelectModel<typeof globals>;
export type NewGlobal = InferInsertModel<typeof globals>;

export const pages = pgTable("pages", {
	id: serial("id").primaryKey(),
	isPage: boolean("isPage").default(false),
	slug: varchar("slug", { length: 256 }).notNull(),
	title: varchar("title", { length: 256 }),
	image: json("image"),
	metadata: jsonb("metadata"),
	excerpts: jsonb("excerpts"),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
},
	(pages) => ({ uniqueIdx: uniqueIndex("unique_idx").on(pages.slug) })
);

export type Page = InferSelectModel<typeof pages>;
export type NewPage = InferInsertModel<typeof pages>;