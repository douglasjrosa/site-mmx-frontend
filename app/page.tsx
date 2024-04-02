import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  keywords: ["Madeira entalhada", "Produtos de madeira"],
  authors: [{ name: "Douglas José Rosa", url: "https://github.com/douglasjrosa" }],
  creator: "Grupo Max Brasil",
  publisher: "TI - Max Brasil",
};

export default function Home() {
  return (
    <div>
      <div style={{height: "1000px"}} className="bg-lime-400 py-10 my-10" >
		<Link href={"/madeira-entalhada-com-serenidade-e-elegancia"} >Madeira entalhada</Link>
	  </div>
    </div>
  );
}
