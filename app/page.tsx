import FeatureRowsGroup from "@/components/featured-rows-group"
import type { Metadata } from "next"
import { Suspense } from "react"
import ImageHeader from "@/components/image-header"
import { home } from "@/data/pages/home"

export const metadata: Metadata = {
	keywords: [ "Madeira entalhada", "Produtos de madeira" ],
	authors: [ { name: "Douglas José Rosa", url: "https://github.com/douglasjrosa" } ],
	creator: "Grupo Max Brasil",
	publisher: "TI - Max Brasil",
}

export default async function Page () {
	const { imageHeader, excerpts } = home
	return (
		<div>
			<Suspense fallback={ <h1>Carregando...</h1> } >
				{ !!imageHeader?.title && <ImageHeader image={ imageHeader.image } title={ imageHeader.title } /> }
				{ !!excerpts.length && <FeatureRowsGroup excerpts={ excerpts } /> }
			</Suspense>
		</div>
	)
}
