import Link from "next/link";
import DisallowCookiesButton from "./disallow-cookies-button";
import AllowCookiesButton from "./allow-cookies-button";


export async function CookiesPolicyWarning() {
	return (
		<section>
			<div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-90 z-50">
				<div className="container mx-auto py-4 flex justify-between items-center">
					<p className="text-center px-2">
						<span className="text-white text-lg">
							Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você
							concorda com a nossa política de cookies. Clique para conhecer nossas
							<Link href="/nossas-politicas" className="text-blue-400"> <u>políticas de segurança e privacidade</u></Link>
							.</span>
					</p>
					<div className="flex space-x-5 items-center justify-end md:w-1/2 lg:w-2/5">
						<DisallowCookiesButton />
						<AllowCookiesButton />
					</div>
				</div>
			</div>

		</section>
	)
}