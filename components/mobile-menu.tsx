"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import LoginButton from "./login-button";

interface MobileMenuButtonProps {
  links: {
    newTab: boolean;
    uri: string;
    text: string;
  }[];
  loginUrl: string;
  loginButtonCollor: string;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  links,
  loginUrl,
  loginButtonCollor
}) => {
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuIsShown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sm:hidden flex flex-row justify-end w-full">
      <button
        onClick={() => {
          setMobileMenuIsShown(!mobileMenuIsShown);
        }}
        className="h-full shadow-lg border border-yellow-400 rounded p-1"
      >
        <FiMenu
          style={{
            height: "25px",
            width: "25px",
          }}
        />
      </button>
      {mobileMenuIsShown && (
        <div ref={menuRef} className="fixed p-4 bg-white rounded shadow-lg">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.uri} className="py-2 px-3">
                <Link href={link.uri} target={link.newTab ? "_blank" : "_self"}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <hr className="border-1 border-gray-400 my-2" />
          <div className="mt-4">
            <LoginButton loginUrl={loginUrl} loginButtonCollor={loginButtonCollor} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenuButton;