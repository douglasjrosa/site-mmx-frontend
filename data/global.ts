import { CustomHeadTags, FooterProps, Icons, NavbarProps, OpenGraph, Robots, Twitter } from "@/data/schema"


export const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL as string

export const siteInfo = {
	title: "Maramax",
	slogan: "Madeira Entalhada com Serenidade e Elegância",
	description: "Produtos e projetos especiais em madeira",
	themeColor: "#ffe371",
	canonical: baseUrl,
}

export const customHeadTags: CustomHeadTags = {
	baseUrl,
	geoPlacename: "Ribeirão Preto-SP",
	geoPosition: "-21.137191167625403; -47.78776210888562",
	geoRegion: "SP-BR",
	icbm: "-21.137191167625403, -47.78776210888562",
}

export const twitter: Twitter = {
	card: "summary_large_image",
	creator: "@maramaxbrasil",
}

export const robots: Robots = {
	index: true,
	follow: true,
	nocache: false,
	googleBot: {
		index: true,
		follow: true,
	},
}

export const icons: Icons = {
	icon: "/favicon.ico",
	shortcut: "/favicon.ico",
	apple: "/pwa/ios/180.png"
}

export const openGraph: OpenGraph = {
	title: "Maramax",
	description: "Produtos e projetos especiais em madeira",
	url: baseUrl,
	siteName: "Maramax",
	locale: "pt_BR",
	type: "website",
	images: [
		{
			url: `${ baseUrl }/images/site/logotipo.png`,
			alt: "thumbnail",
			width: 213,
			height: 156,
		},
		{
			url: `${ baseUrl }/images/site/logotipo.png`,
			alt: "large",
			width: 1000,
			height: 731,
		},
		{
			url: `${ baseUrl }/images/site/logotipo.png`,
			alt: "medium",
			width: 750,
			height: 549,
		},
		{
			url: `${ baseUrl }/images/site/logotipo.png`,
			alt: "small",
			width: 500,
			height: 366,
		},
	],
}

export const navbar: NavbarProps = {
	bgColor: "rgb(253 224 71)",
	height: "50px",
	logo: {
		url: "/images/site/logotipo.png",
		alt: "Logomarca Maramax",
		width: 80,
		height: 80,
	},
	links: [
		{ newTab: false, url: "/", text: "Home" },
		{ newTab: false, url: "/produtos", text: "Produtos" },
		{ newTab: false, url: "/contato", text: "Contato" },
	],
	loginUrl: "https://crm.ribermax.com.br",
	mobileButtonColor: "rgb(92 150 22)",
}

export const footer: FooterProps = {
	logo: {
		url: "/images/site/logomarca.png",
		alt: "Logomarca Maramax",
		width: 771,
		height: 324,
	},
	smallText: "© Copyright Maramax™ (Lei 9610 de 19/02/1998)",
	notificationBannerText:
		"Este site usa Cookies para melhorar a sua experiência de navegação .",
	showInitModal: true,
	columns: [
		{
			title: "Páginas",
			links: [
				{ newTab: false, url: "/", text: "Home" },
				{ newTab: false, url: "/produtos", text: "Produtos" },
				{ newTab: false, url: "/contato", text: "Contato" },
			],
		},
		{
			title: "Contatos",
			links: [
				{
					newTab: false,
					url: "tel:+5516988027089",
					text: "(16) 98802-7089 Douglas (Comercial)",
				},
				{
					newTab: false,
					url: "mailto:contato.maramax@gmail.com",
					text: "contato.maramax@...",
				},
			],
		},
		{
			title: "Localização",
			descriptions: [ "Rua Santos, 1624", "Vila Elisa", "Ribeirão Preto SP" ],
		},
	],
	whatsapp: {
		contacts: [ { nome: "Douglas (Comercial)", fone: "+5516988027089" } ],
		message: "Olá, visitei o site da Maramax e gostaria de mais informações...",
		image: {
			url: "/images/site/logotipo_whatsapp_90x90.webp",
			alt: "Botão menu Whatsapp",
			width: 90,
			height: 90,
		},
	},
}

export const cookiesBanner = {
	text: "Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com a nossa política de cookies. Clique para conhecer nossas [políticas de cookies e privacidade](/nossas-politicas)."
}