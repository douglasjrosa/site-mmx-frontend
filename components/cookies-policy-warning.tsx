import { cookiesBanner } from "@/data/global"
import { cookies } from "next/headers"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

export async function CookiesPolicyWarning () {

	async function setCookiesDisallowed () {
		"use server"
		cookies().delete( "cookiesAllowed" )
	}

	async function setCookiesAllowed () {
		"use server"
		cookies().set( "cookiesAllowed", "true" )
	}

	const { text } = cookiesBanner

	return (
		<section>
			<div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-90 z-50">
				<div className="container mx-auto py-4 flex justify-between items-center">
					<div className="text-center px-2 text-white text-lg">
						<ReactMarkdown
							components={ {
								a: ( { children, href } ) => (
									<Link href={ String( href ) } className="text-blue-400" >{ children }</Link>
								)
							} }
						>
							{ text }
						</ReactMarkdown>
					</div>
					<div className="flex space-x-5 items-center justify-end md:w-1/2 lg:w-2/5">
						<form action={ setCookiesDisallowed } >
							<button
								type="submit"
								className="px-4 py-1 text-gray-400 hover:bg-red-600 transition duration-300"
								onClick={ setCookiesDisallowed }
							>
								<u>Não aceito</u>
							</button>
						</form>
						<form action={ setCookiesAllowed } >
							<button
								type="submit"
								className="px-6 py-4 bg-green-700 text-white hover:bg-green-900 transition duration-300"
							>
								Aceito
							</button>
						</form>
					</div>
				</div>
			</div>

		</section>
	)
}