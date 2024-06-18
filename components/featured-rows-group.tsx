import { Excerpt } from "@/data/schema"
import Image from "next/image"
import React from "react"
import ReactMarkdown from "react-markdown"

interface FeatureRowsGroupProps {
	excerpts: Excerpt[]
}

const FeatureRowsGroup: React.FC<FeatureRowsGroupProps> = ( { excerpts } ) => {
	let reverse: boolean
	let reverseClass: string

	return (
		<section>
			{ excerpts.map( ( excerpt, key ) => {
				const { image, text } = excerpt
				reverse = !reverse
				reverseClass = reverse ? "md:flex-row" : "md:flex-row-reverse"

				return (
					<div key={ `feature-row-${ key }` } className={ `bg-white p-4 md:rounded shadow-xl w-full lg:w-5/6 mx-auto my-10 md:flex ${ reverseClass } justify-between` }>
						<div className="md:w-1/2 md:p-5 lg:w-2/5 flex justify-center items-center">
							<Image className="w-full" src={ image.src } alt={ image.alt } height={ image.height } width={ image.width } priority={ !key } />
						</div>
						<div className="p-10 md:w-1/2 lg:w-3/5">
							{ key === 0 && <h1 className="text-3xl text-bold">{ excerpt.title }</h1> }
							{ key === 1 && <h2 className="text-3xl text-bold">{ excerpt.title }</h2> }
							{ key >= 2 && <h3 className="text-3xl text-bold">{ excerpt.title }</h3> }
							<div className="text-xl leading-9 text-justify mt-5">
								<ReactMarkdown
									components={ {
										a: ( { children, href } ) => {
											const fixedHref = String( href ).replace( "/=/", ":" )
											return (
												<a href={ fixedHref } className="text-blue-800" rel="noopener noreferrer">{ children }</a>
											)
										},
										p: ( { children } ) => (
											<p className="mb-4 text-gray-800" >{ children }</p>
										)
									} }
								>
									{ text.join( '\n\n' ) }
								</ReactMarkdown>
							</div>
						</div>
					</div>
				)
			} ) }
		</section>
	)
}

export default FeatureRowsGroup
