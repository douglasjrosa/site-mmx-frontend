import FeatureRowsGroup from "@/components/featured-rows-group";
import ImageHeader from "@/components/image-header";
import type { Metadata } from "next";
import { getPost } from "@/lib/utils";
import { baseUrl } from "@/data/global";
/*
export const metadata: Metadata = {
  keywords: ["Madeira entalhada", "Produtos de madeira"],
  authors: [{ name: "Douglas José Rosa", url: "https://github.com/douglasjrosa" }],
  creator: "Grupo Max Brasil",
  publisher: "TI - Max Brasil",
};
*/
export default async function Page() {
	const res = await fetch(`${baseUrl}/api/home`, {
		method: "GET",
		headers: {
			'Accept': 'application/json'
		}
	}).then((data) => data.json());
	if (res.post === undefined) return undefined;
	const { post } = res;
	return (
		<>
			<p className="mt-10">{post.title}</p>
			<p>{post.metadata.title}</p>
		</>
	);
	/*
	const post = await getPost("home");
	return (
		<div>
			<ImageHeader image={post.imageHeader} title={post.title} />
			<FeatureRowsGroup excerpts={post.excerpts} />
		</div>
	)
	*/
}
