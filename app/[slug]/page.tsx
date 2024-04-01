import FeatureRowsGroup from "@/components/featured-rows-group";
import type { Metadata } from 'next'


export async function generateStaticParams() {
	const { posts } = await (await fetch('http://localhost:3000/api/posts')).json();
	return posts.map((post: any) => { slug: post.slug })
}


type Props = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props,): Promise<Metadata> {
	const { slug } = params;
	const { post } = await (await fetch(`http://localhost:3000/api/${slug}`, { method: "GET" })).json();
	return post.metadata;
}


/*
export const metadata: Metadata = post.metadata;
*/
export default async function ({ params }: { params: { slug: string } }) {

	const { slug } = params;
	const response = await (await fetch(`http://localhost:3000/api/${slug}`, { method: "GET" })).json();
	const { post } = response;
	return (
		<div className="mt-10">{post.title}</div>
	)
}