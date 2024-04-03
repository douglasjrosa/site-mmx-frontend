import FeatureRowsGroup from "@/components/featured-rows-group";
import ImageHeader from "@/components/image-header";
import type { Metadata } from 'next';
import { notFound } from 'next/navigation'
import { baseUrl } from "@/data/global";


const getPost = async (slug: string) => {
	let res = await fetch(`${baseUrl}/api/${slug}`, { method: "GET" }).then((r) => r.json());
	//if (res.posts === undefined) return undefined;
	const { posts } = res;
	return posts;
}

/*
export async function generateStaticParams(): Promise<any> {
	const posts = await getPost("posts");
	const slugs = posts.map((post: any) => (post.slug == "home" ? { slug: "" } : { slug: post.slug }));
	return slugs;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	
	const { slug } = params;
	const post: any | undefined = await getPost(slug);
	if (post === undefined) notFound();
	return post.metadata;
}
*/

export default async function Page({ params }: { params: { slug: string } }) {

	const { slug } = params;
	//const post = await getPost(slug);
	//if (post === undefined) notFound();

	//<ImageHeader image={post.imageHeader} title={post.title} />
	//<FeatureRowsGroup excerpts={post.excerpts} />
	return (
		<div>{slug}
		</div>
	)
}