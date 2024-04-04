import FeatureRowsGroup from "@/components/featured-rows-group";
import ImageHeader from "@/components/image-header";
import type { Metadata } from "next";
import { getPost } from "@/lib/utils";
import { baseUrl } from "@/data/global";
import { Suspense } from "react";

export const metadata: Metadata = {
	keywords: ["Madeira entalhada", "Produtos de madeira"],
	authors: [{ name: "Douglas José Rosa", url: "https://github.com/douglasjrosa" }],
	creator: "Grupo Max Brasil",
	publisher: "TI - Max Brasil",
};

export default async function Page() {
	const post = await getPost("home");
	return (
		<div>
			<Suspense fallback={<h1>Carregando...</h1>} >
				<ImageHeader image={post.imageHeader} title={post.title} />
				<FeatureRowsGroup excerpts={post.excerpts} />
			</Suspense>
		</div>
	)
}
