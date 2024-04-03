import FeatureRowsGroup from "@/components/featured-rows-group";
import ImageHeader from "@/components/image-header";
import type { Metadata } from "next";
import { apiUrl } from "@/data/global";

export const metadata: Metadata = {
  keywords: ["Madeira entalhada", "Produtos de madeira"],
  authors: [{ name: "Douglas José Rosa", url: "https://github.com/douglasjrosa" }],
  creator: "Grupo Max Brasil",
  publisher: "TI - Max Brasil",
};

const getPost = async (slug: string) => {
	let res = await fetch(`${apiUrl}/api/${slug}`, { method: "GET" }).then((r) => r.json());
	if (res.posts === undefined) return undefined;
	const { posts } = res;
	return posts;
}

export default async function Page() {
	const response = await getPost("home");
	const { post } = response;
	return (
		<div>
			<ImageHeader image={post.imageHeader} title={post.title} />
			<FeatureRowsGroup excerpts={post.excerpts} />
		</div>
	)
}
