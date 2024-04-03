import FeatureRowsGroup from "@/components/featured-rows-group";
import ImageHeader from "@/components/image-header";
import type { Metadata } from 'next';
import { notFound } from 'next/navigation'
import { getPost } from "@/lib/utils";
import { apiUrl } from "@/data/global";



/*
export async function generateStaticParams(): Promise<any> {
	const posts = await getPosts();
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
/*
	const { slug } = params;
	const post = await getPost(slug);
	if (post === undefined) notFound();

	return (
		<div>
			<ImageHeader image={post.imageHeader} title={post.title} />
			<FeatureRowsGroup excerpts={post.excerpts} />
		</div>
	)
	*/ return <>{apiUrl}</>
}