interface Image {
	url: string;
	alt: string;
	width: number;
	height: number;
}

interface Link {
	newTab: boolean;
	url: string;
	text: string;
}

interface Column {
	title: string;
	links?: Link[];
	descriptions?: string[];
}

interface WhatsappContact {
	nome: string;
	fone: string;
}

interface Whatsapp {
	contacts: WhatsappContact[];
	message: string;
	image: Image;
}

export interface NavbarProps {
	bgColor: string;
	height: string;
	logo: Image;
	links: Link[];
	loginUrl: string;
	mobileButtonColor: string;
}

export interface FooterProps {
	logo: Image;
	smallText: string;
	notificationBannerText: string;
	showInitModal: boolean;
	columns: Column[];
	whatsapp: Whatsapp;
}

export interface CustomHeadTags {
	baseUrl: string;
	geoPlacename: string;
	geoPosition: string;
	geoRegion: string;
	icbm: string;
}

export interface Twitter {
	card: string;
	creator: string;
}

export interface Robots {
	index: boolean;
	follow: boolean;
	nocache: boolean;
	googleBot: {
		index: boolean;
		follow: boolean;
	};
}

interface Icons {
	icon: string;
	shortcut: string;
	apple: string;
}

export interface OpenGraph {
	title: string;
	description: string;
	url: string;
	siteName: string;
	locale: string;
	type: string;
	images: Image[];
}

const isVercel = process.env.VERCEL_ENV === "production";
const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
export const baseUrl: string = isVercel && vercelUrl
	? `https://www.${vercelUrl}` : process.env.NEXT_PUBLIC_BASE_URL as string;

export const siteInfo = {
	title: "Maramax",
	slogan: "Madeira Entalhada com Serenidade e Elegância",
	description: "Produtos e projetos especiais em madeira",
	themeColor: "#ffe371",
	canonical: baseUrl,
};

export const customHeadTags: CustomHeadTags = {
	baseUrl,
	geoPlacename: "Ribeirão Preto-SP",
	geoPosition: "-21.137191167625403; -47.78776210888562",
	geoRegion: "SP-BR",
	icbm: "-21.137191167625403, -47.78776210888562",
};

export const twitter: Twitter = {
	card: "summary_large_image",
	creator: "@maramaxbrasil",
};

export const robots: Robots = {
	index: true,
	follow: true,
	nocache: false,
	googleBot: {
		index: true,
		follow: true,
	},
};

export const icons: Icons = {
	icon: "/favicon.ico",
	shortcut: "/favicon.ico",
	apple: "/pwa/ios/180.png"
};

export const openGraph: OpenGraph = {
	title: "Maramax",
	description: "Produtos e projetos especiais em madeira",
	url: baseUrl,
	siteName: "Maramax",
	locale: "pt_BR",
	type: "website",
	images: [
		{
			url: `${baseUrl}/images/site/logotipo.png`,
			alt: "thumbnail",
			width: 213,
			height: 156,
		},
		{
			url: `${baseUrl}/images/site/logotipo.png`,
			alt: "large",
			width: 1000,
			height: 731,
		},
		{
			url: `${baseUrl}/images/site/logotipo.png`,
			alt: "medium",
			width: 750,
			height: 549,
		},
		{
			url: `${baseUrl}/images/site/logotipo.png`,
			alt: "small",
			width: 500,
			height: 366,
		},
	],
};

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
	mobileButtonColor: "rgb(132 204 22)",
};

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
			descriptions: ["Rua Santos, 1624", "Vila Elisa", "Ribeirão Preto SP"],
		},
	],
	whatsapp: {
		contacts: [{ nome: "Douglas (Comercial)", fone: "+5516988027089" }],
		message: "Olá, visitei o site da Maramax e gostaria de mais informações...",
		image: {
			url: "/images/site/logotipo_whatsapp_90x90.webp",
			alt: "Botão menu Whatsapp",
			width: 90,
			height: 90,
		},
	},
};
