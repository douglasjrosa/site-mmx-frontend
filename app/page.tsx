import FeatureRowsGroup from "@/components/featured-rows-group";
import type { Metadata } from "next";
import { getPost } from "@/lib/utils";
import { Suspense } from "react";
import ImageHeader from "@/components/image-header";

export const metadata: Metadata = {
	keywords: ["Madeira entalhada", "Produtos de madeira"],
	authors: [{ name: "Douglas José Rosa", url: "https://github.com/douglasjrosa" }],
	creator: "Grupo Max Brasil",
	publisher: "TI - Max Brasil",
};

export default async function Page() {
	const post = await getPost("home");
	const { imageHeader, excerpts } = post;
	return (
		<div>
			<Suspense fallback={<h1>Carregando...</h1>} >
				<ImageHeader image={imageHeader.image} title={imageHeader.title} />
				<FeatureRowsGroup excerpts={excerpts} />
			</Suspense>
		</div>
	)
}
