import { boolean, json, jsonb, pgTable, serial, timestamp, uniqueIndex, varchar } from 'drizzle-orm/pg-core'
import { InferInsertModel, InferSelectModel, } from "drizzle-orm"

// npx drizzle-kit generate:pg --config=./drizzle.config.ts
// npx tsx ./db/migrate.ts

export const globals = pgTable( "globals", {
	id: serial( "id" ).primaryKey(),
	prop: varchar( "prop", { length: 256 } ).notNull(),
	value: jsonb( "value" )
},
	( globals ) => ( { uniqueIdx: uniqueIndex( "unique_prop" ).on( globals.prop ) } )
)

export type Global = InferSelectModel<typeof globals>
export type NewGlobal = InferInsertModel<typeof globals>

export const pages = pgTable( "pages", {
	id: serial( "id" ).primaryKey(),
	isPage: boolean( "isPage" ).default( false ),
	slug: varchar( "slug", { length: 256 } ).notNull(),
	title: varchar( "title", { length: 256 } ),
	imageHeader: json( "imageHeader" ),
	metadata: jsonb( "metadata" ),
	excerpts: jsonb( "excerpts" ),
	gallery: jsonb( "gallery" ),
	createdAt: timestamp( 'createdAt' ).defaultNow().notNull(),
},
	( pages ) => ( { uniqueIdx: uniqueIndex( "unique_slug" ).on( pages.slug ) } )
)

export type Page = InferSelectModel<typeof pages>
export type NewPage = InferInsertModel<typeof pages>

export const leads = pgTable( "leads", {
	id: serial( "id" ).primaryKey(),
	name: varchar( "name", { length: 256 } ).notNull(),
	email: varchar( "email", { length: 256 } ).notNull(),
	phone: varchar( "phone", { length: 256 } ),
},
	( leads ) => ( { uniqueIdx: uniqueIndex( "unique_lead_email" ).on( leads.email ) } )
)

export type Lead = InferSelectModel<typeof leads>
export type NewLead = InferInsertModel<typeof leads>