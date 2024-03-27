import Image from "next/image";
import Link from "next/link";
import MobileMenuButton from "./mobile-menu";
import LoginButton from "./login-button";
import classNames from "classnames";

export interface NavbarProps {
  bgColor: string;
  height: string;
  logo: {
    uri: string;
    alt: string;
    width: number;
    height: number;
  };
  links: {
    newTab: boolean;
    uri: string;
    text: string;
  }[];
  loginUrl: string;
  loginButtonCollor: string;
}

const Navbar: React.FC<NavbarProps> = ({
  bgColor,
  height,
  logo,
  links,
  loginUrl,
  loginButtonCollor,
}) => {
  return (
    <nav style={{ paddingBottom: height }}>
      <div
        className="fixed flex flex-row w-full p-2 shadow-lg"
        style={{ height: height, zIndex: "999999", backgroundColor: bgColor }}
      >
        <Link href="/" title="home" className="shadow-lg rounded-full">
          <Image
            src={logo.uri}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
          />
        </Link>
        <MobileMenuButton
          links={links}
          loginUrl={loginUrl}
          loginButtonCollor={loginButtonCollor}
        />
        <div className="grow hidden sm:flex flex-row justify-end">
          <ul className="flex flex-row">
            {links.map((link) => (
              <li key={link.uri} className="py-1 px-3">
                <Link href={link.uri} target={link.newTab ? "_blank" : "_self"}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-3">
            <LoginButton
              loginUrl={loginUrl}
              loginButtonCollor={loginButtonCollor}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
