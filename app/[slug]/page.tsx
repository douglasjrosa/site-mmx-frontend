import FeatureRowsGroup from "@/components/featured-rows-group";
import type { Metadata } from 'next'

export async function generateStaticParams() {
	const { posts } = await (await fetch('http://localhost:3000/api/posts')).json();
	return posts.map((post: any) => { slug: post.slug })
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const { slug } = params;
	const { post } = await (await fetch(`http://localhost:3000/api/${slug}`, { method: "GET" })).json();
	return post.metadata;
}

export default async function ({ params }: { params: { slug: string } }) {

	const { slug } = params;
	const response = await (await fetch(`http://localhost:3000/api/${slug}`, { method: "GET" })).json();
	const { post } = response;
	return (
		<div>
			<div className="mt-10">{post.title}</div>
			<FeatureRowsGroup excerpts={post.excerpts} />
		</div>
	)
}