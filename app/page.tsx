import type { Metadata } from "next";

export const metadata: Metadata = {
  keywords: ["Madeira entalhada", "Produtos de madeira"],
  authors: [{ name: "Douglas José Rosa", url: "https://github.com/douglasjrosa" }],
  creator: "Grupo Max Brasil",
  publisher: "TI - Max Brasil",
};

export default function Home() {
  return (
    <main>
      <div>CONTEÚDO AQUI</div>
    </main>
  );
}
