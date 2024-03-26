import { NavbarProps } from "@/components/navbar";
import { CustomHeadTagsProps } from "@/components/custom-head-tags";

export const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL as string;

export const siteInfo = {
  title: "Maramax",
  slogan: "Madeira Entalhada com Serenidade e Elegância",
  description: "Produtos e projetos especiais em madeira",
  themeColor: "#ffe371",
  canonical: baseUrl,
};

export const customHeadTags: CustomHeadTagsProps = {
  baseUrl,
  geoPlacename: "Ribeirão Preto-SP",
  geoPosition: "-21.137191167625403; -47.78776210888562",
  geoRegion: "SP-BR",
  icbm: "-21.137191167625403, -47.78776210888562",
};

export const twitter = {
  card: "summary_large_image",
  creator: "@maramaxbrasil",
};

export const robots = {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
  },
};

export const icons = {
  icon: [{ url: "/favicon.ico" }],
  shortcut: ["/favicon.ico"],
  apple: [{ url: "/pwa/ios/180.png", sizes: "180x180", type: "image/png" }],
};

export const openGraph = {
  title: "Maramax",
  description: "Produtos e projetos especiais em madeira",
  url: baseUrl,
  siteName: "Maramax",
  locale: "pt_BR",
  type: "website",
  images: [
    {
      name: "thumbnail",
      width: 213,
      height: 156,
      url: `${baseUrl}/images/site/logotipo.png`,
    },
    {
      name: "large",
      width: 1000,
      height: 731,
      url: `${baseUrl}/images/site/logotipo.png`,
    },
    {
      name: "medium",
      width: 750,
      height: 549,
      url: `${baseUrl}/images/site/logotipo.png`,
    },
    {
      name: "small",
      width: 500,
      height: 366,
      url: `${baseUrl}/images/site/logotipo.png`,
    },
  ],
};

export const navbar: NavbarProps = {
  bgColor: "bg-yellow-300",
  height: "50px",
  logo: {
    uri: "/images/site/logotipo.png",
    alt: "Logomarca Maramax",
    width: 80,
    height: 80,
  },
  links: [
    {
      newTab: false,
      uri: "/",
      text: "Home",
    },
    {
      newTab: false,
      uri: "/produtos",
      text: "Produtos",
    },
    {
      newTab: false,
      uri: "/contato",
      text: "Contato",
    },
  ],
  loginUrl: "https://crm.ribermax.com.br",
  loginButtonCollor: "bg-lime-500"
};

export const footer = {
  logo: {
    name: "logomarca.png",
    path: "site",
    alternativeText: "Logomarca Maramax.",
    width: 1000,
    height: 750,
  },
  smallText: "© Copyright Maramax™ (Lei 9610 de 19/02/1998)",
  notificationBannerText:
    "Este site usa Cookies para melhorar a sua experiência de navegação .",
  showInitModal: true,
  columns: [
    {
      title: "Páginas",
      links: [
        {
          newTab: false,
          url: "/",
          text: "Home",
        },
        {
          newTab: false,
          url: "/produtos",
          text: "Produtos",
        },
        {
          newTab: false,
          url: "/contato",
          text: "Contato",
        },
      ],
    },
    {
      title: "Contatos",
      links: [
        {
          newTab: false,
          url: "tel:+5516988029535",
          text: "(16) 98802-9535 Daniela (Comercial)",
        },
        {
          newTab: false,
          url: "tel:+5516997968788",
          text: "(16) 99796-8788 Lucas (Fábrica)",
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
      descriptions: [
        "Rua Dr. Francisco Gugliano, 347",
        "Parque Industrial Tanquinho",
        "Ribeirão Preto SP",
      ],
    },
  ],
};

export const whatsapp = {
  contacts: [
    {
      nome: "Daniela - Comercial",
      fone: "+5516988029535",
    },
  ],

  messsage: "Olá, visitei o site da Maramax e gostaria de mais informações...",
  image: {
    name: "logotipo_whatsapp_512x512.png",
    path: "site",
    alternativeText: "",
    width: 512,
    height: 512,
    formats: {
      thumbnail: {
        name: "thumbnail_logotipo_whatsapp_512x512.png",
        ext: ".png",
        mime: "image/webp",
        width: 156,
        height: 156,
        size: 22.49,
        url: `${baseUrl}/images/site/thumbnail_logotipo_whatsapp_512x512.png`,
      },
      small: {
        name: "small_logotipo_whatsapp_512x512.png",
        ext: ".png",
        mime: "image/png",
        width: 500,
        height: 500,
        size: 133.73,
        url: `${baseUrl}/images/site/small_logotipo_whatsapp_512x512.png`,
      },
    },
  },
};
