import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import type { Metadata, Viewport } from "next";
import {
	siteInfo,
	robots,
	icons,
	openGraph,
	twitter,
	baseUrl,
	customHeadTags,
	navbar,
	footer,
} from "@/data/global";
import Footer from "@/components/footer";

export const viewport: Viewport = {
	themeColor: siteInfo.themeColor,
};

export const metadata: Metadata = {
	title: {
		default: `${siteInfo.title} - ${siteInfo.slogan}`,
		template: `%s - ${siteInfo.title}`,
	},
	description: siteInfo.description,
	metadataBase: new URL(baseUrl),
	alternates: {
		canonical: "/produtos",
	},
	other: {
		rating: "General",
		icbm: customHeadTags.icbm,
		"revisit-after": "7 days",
		"geo.placename": customHeadTags.geoPlacename,
		"geo.position": customHeadTags.geoPosition,
		"geo.region": customHeadTags.geoRegion,
	},
	manifest: "/manifest.json",
	robots,
	icons,
	twitter,
	openGraph,
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" >
			<body className={`${inter.className} text-gray-600 bg-mmx-wood bg-fixed bg-repeat relative`}>
				<Navbar
					bgColor={navbar.bgColor}
					height={navbar.height}
					logo={navbar.logo}
					links={navbar.links}
					loginUrl={navbar.loginUrl}
					mobileButtonColor={navbar.mobileButtonColor}
				/>
				<main className="">{children}</main>
				<Footer
					logo={footer.logo}
					smallText={footer.smallText}
					notificationBannerText={footer.notificationBannerText}
					showInitModal={footer.showInitModal}
					columns={footer.columns}
					whatsapp={footer.whatsapp}
				/>
			</body>
		</html>
	);
}
