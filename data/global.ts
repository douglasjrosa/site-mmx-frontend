import { NavbarProps } from "@/components/navbar";
import { CustomHeadTagsProps } from "@/components/custom-head-tags";
import { FooterProps } from "@/components/footer";

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
  bgColor: "rgb(253 224 71)",
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
  loginButtonCollor: "rgb(132 204 22)",
};

export const footer: FooterProps = {
  logo: {
    uri: "/images/site/logomarca.png",
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
    },
    {
      title: "Contatos",
      links: [
        {
          newTab: false,
          uri: "tel:+5516988027089",
          text: "(16) 98802-7089 Douglas (Comercial)",
        },
        {
          newTab: false,
          uri: "mailto:contato.maramax@gmail.com",
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
    contacts: [
      {
        nome: "Douglas (Comercial)",
        fone: "+5516988027089",
      },
    ],
    message:
      "Olá, visitei o site da Maramax e gostaria de mais informações...",
    image: {
      uri: "/images/site/logotipo_whatsapp_90x90.webp",
      alt: "Botão menu Whatsapp",
      width: 90,
      height: 90,
    },
  },
};
