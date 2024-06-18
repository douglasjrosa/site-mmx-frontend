import Image from "next/image";
import Link from "next/link";
import MobileMenuButton from "./mobile-menu";
import LoginButton from "./login-button";

export interface NavbarProps {
	bgColor: string;
	height: string;
	logo: {
		url: string;
		alt: string;
		width: number;
		height: number;
	};
	links: {
		newTab: boolean;
		url: string;
		text: string;
	}[];
	loginUrl: string;
	mobileButtonColor: string;
}

const Navbar: React.FC<NavbarProps> = ({
	bgColor,
	height,
	logo,
	links,
	loginUrl,
	mobileButtonColor,
}) => {
	return (
		<nav style={{ paddingBottom: height }}>
			<div
				className="fixed flex flex-row w-full p-2 shadow-lg"
				style={{ height: height, zIndex: "999999", backgroundColor: bgColor }}
			>
				<Link href="/" title="home" className="shadow-lg rounded-full">
					<Image
						src={logo.url}
						width={logo.width}
						height={logo.height}
						alt={ logo.alt }
						priority={ true }
					/>
				</Link>
				<MobileMenuButton
					links={links}
					loginUrl={loginUrl}
					mobileButtonColor={mobileButtonColor}
				/>
				<div className="grow hidden sm:flex flex-row justify-end">
					<ul className="flex flex-row">
						{links.map((link) => (
							<li key={link.url} className="py-1 px-3">
								<Link href={link.url} target={link.newTab ? "_blank" : "_self"} className="p-5 rounded hover:bg-lime-800 hover:text-white text-lg text-gray-800" >
									{link.text}
								</Link>
							</li>
						))}
					</ul>
					<div className="ml-3">
						<LoginButton
							loginUrl={loginUrl}
							mobileButtonColor={mobileButtonColor}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
