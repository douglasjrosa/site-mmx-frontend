
import FeatureRowsGroup from "@/components/featured-rows-group"
import ImageHeader from "@/components/image-header"
import type { Metadata as NextMetadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from "react"
import Gallery from "@/components/gallery"
import { Post } from '@/data/schema'
import { getPost, getPosts } from "@/lib/utils"

export async function generateStaticParams (): Promise<{ slug: string }[]> {
	const posts: Post[] = await getPosts()
	return posts.map( post => ( { slug: post.slug === "home" ? "/" : post.slug } ) )
}

export async function generateMetadata ( { params }: { params: { slug: string } } ): Promise<NextMetadata> {
	const { slug } = params
	const post: Post | undefined = await getPost( slug )
	if ( !post?.metadata ) notFound()

	return post.metadata
}

const Page: React.FC<{ params: { slug: string } }> = async ( { params } ) => {
	const { slug } = params
	const post: Post | undefined = await getPost( slug )

	if ( !post ) notFound()

	const { imageHeader, excerpts, gallery } = post

	return (
		<div>
			<Suspense fallback={ <h1>Carregando...</h1> }>
				{ imageHeader?.title && (
					<ImageHeader image={ imageHeader.image } title={ imageHeader.title } />
				) }
				{ excerpts?.length && <FeatureRowsGroup excerpts={ excerpts } /> }
				{ gallery?.title && <Gallery gallery={ gallery } /> }
			</Suspense>
		</div>
	)
}

export default Page
