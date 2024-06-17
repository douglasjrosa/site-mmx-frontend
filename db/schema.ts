import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm"
import { text, integer, sqliteTable, uniqueIndex } from 'drizzle-orm/sqlite-core'
import { createId } from '@paralleldrive/cuid2'
import { ImageProps } from "next/image"

export interface Author {
	name: string
	url: string
}

export interface Metadata {
	keywords: string[]
	authors: Author[]
	creator: string
	publisher: string
}

export interface Image {
	url: string
	alt: string
	width: number
	height: number
}

export interface Excerpt {
	title: string
	image: ImageProps
	text: string[]
}

export interface Gallery {
	title: string
	path: string
}

export interface ImageHeader {
	title: string
	image: ImageProps
}

export interface Link {
	newTab: boolean
	url: string
	text: string
}

export interface Column {
	title: string
	links?: Link[]
	descriptions?: string[]
}

export interface WhatsappContact {
	nome: string
	fone: string
}

export interface Whatsapp {
	contacts: WhatsappContact[]
	message: string
	image: Image
}

export interface NavbarProps {
	bgColor: string
	height: string
	logo: Image
	links: Link[]
	loginUrl: string
	mobileButtonColor: string
}

export interface FooterProps {
	logo: Image
	smallText: string
	notificationBannerText: string
	showInitModal: boolean
	columns: Column[]
	whatsapp: Whatsapp
}

export interface CustomHeadTags {
	baseUrl: string
	geoPlacename: string
	geoPosition: string
	geoRegion: string
	icbm: string
}

export interface Twitter {
	card: string
	creator: string
}

export interface Robots {
	index: boolean
	follow: boolean
	nocache: boolean
	googleBot: {
		index: boolean
		follow: boolean
	}
}

export interface Icons {
	icon: string
	shortcut: string
	apple: string
}

export interface OpenGraph {
	title: string
	description: string
	url: string
	siteName: string
	locale: string
	type: string
	images: Image[]
}


export const globalsTable = sqliteTable( "globalsTable", {
	id: text( "id" ).$default( () => createId() ).primaryKey(),
	prop: text( "prop" ).notNull(),
	value: text( "value", { mode: "json" } )
},
	( globalsTable ) => ( { uniqueIdx: uniqueIndex( "unique_prop" ).on( globalsTable.prop ) } )
)

export type Global = InferSelectModel<typeof globalsTable>
export type NewGlobal = InferInsertModel<typeof globalsTable>

export const pagesTable = sqliteTable( "pagesTable", {
	id: text( "id" ).$default( () => createId() ).primaryKey(),
	isPage: integer( "isPage", { mode: "boolean" } ).default( false ).notNull(),
	slug: text( "slug" ).notNull(),
	title: text( "title" ).notNull(),
	imageHeader: text( 'imageHeader', { mode: "json" } ).$type<ImageHeader>() as any,
	metadata: text( 'metadata', { mode: "json" } ).$type<Metadata>() as any,
	excerpts: text( 'excerpts', { mode: "json" } ).$type<Excerpt[]>() as any,
	gallery: text( 'gallery', { mode: "json" } ).$type<{ title: string, path: string}>() as any,
	createdAt: text( 'createdAt' ).default( sql`(CURRENT_TIMESTAMP)` ),
},
	( pagesTable ) => ( { uniqueIdx: uniqueIndex( "unique_slug" ).on( pagesTable.slug ) } )
)

export type Page = InferSelectModel<typeof pagesTable>
export type NewPage = InferInsertModel<typeof pagesTable>

export const leadsTable = sqliteTable( "leadsTable", {
	id: text( "id" ).$default( () => createId() ).primaryKey(),
	name: text( "name" ).notNull(),
	email: text( "email" ).notNull(),
	phone: text( "phone" ),
	createdAt: text( 'createdAt' ).default( sql`(CURRENT_TIMESTAMP)` ),
},
	( leadsTable ) => ( { uniqueIdx: uniqueIndex( "unique_lead_email" ).on( leadsTable.email ) } )
)

export type Lead = InferSelectModel<typeof leadsTable>
export type NewLead = InferInsertModel<typeof leadsTable>