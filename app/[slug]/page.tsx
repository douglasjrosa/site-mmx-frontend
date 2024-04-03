import FeatureRowsGroup from "@/components/featured-rows-group";
import ImageHeader from "@/components/image-header";
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation'
 

const getPost = async (slug: string) => {
	let res = await fetch(`http://localhost:3000/api/${slug}`, { method: "GET" }).then((r) => r.json());
	if(res.posts === undefined) return undefined;
	const { posts } = res;
	return posts;
}

export async function generateStaticParams() {
	const posts = await getPost("posts");
	return posts.map((post: any) => { slug: post.slug })
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const { slug } = params;
	const post: any | undefined = await getPost( slug );
	console.log(post)
	if(post === undefined) notFound();
	return post.metadata;
}

export default async function ({ params }: { params: { slug: string } }) {
	
	const { slug } = params;
	const post = await getPost( slug );
	if(post === undefined) notFound();
	
	return (
		<div>
			<ImageHeader image={post.imageHeader} title={post.title} />
			<FeatureRowsGroup excerpts={post.excerpts} />
		</div>
	)
}