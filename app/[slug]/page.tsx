import FeatureRowsGroup from "@/components/featured-rows-group";
import ImageHeader from "@/components/image-header";
import type { Metadata } from 'next';
import { notFound } from 'next/navigation'
import { getPost, getPosts } from "@/lib/utils";
import { Suspense } from "react";

export async function generateStaticParams(): Promise<any> {
	const posts = await getPosts();
	return posts.map((post: any) => (post.slug == "home" ? { slug: "/" } : { slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {

	const { slug } = params;
	const post: any | undefined = await getPost(slug);
	if (post === undefined) notFound();
	return post.metadata;
}

export default async function Page({ params }: { params: { slug: string } }) {

	const { slug } = params;
	const post = await getPost(slug);
	if (post === undefined) notFound();

	const { imageHeader, excerpts } = post;
	return (
		<div>
			<Suspense fallback={<h1>Carregando...</h1>} >
				{imageHeader && <ImageHeader image={ imageHeader.image } title={ imageHeader.title } />}
				{excerpts && <FeatureRowsGroup excerpts={ excerpts } />}
			</Suspense>
		</div>
	);
}