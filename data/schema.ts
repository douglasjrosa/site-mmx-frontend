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

export interface Post {
	isPage: boolean
	slug: string
	title: string
	imageHeader: {
		title: string
		image: ImageProps
	}
	metadata: Metadata
	excerpts: Excerpt[]
	gallery: Gallery
	createdAt: string
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

export type Global = {
	id: string
	prop: string
	value: any
}

export type Lead = {
	id: string
	name: string
	email: string
	phone?: string
	createdAt?: string
}