import { cookies } from "next/headers";

export default async function AllowCookiesButton() {

	async function setCookiesAllowed() {
		"use server"
		cookies().set("cookiesAllowed", "true");
	}
	
	return (
		<form action={setCookiesAllowed} >
			<button
				type="submit"
				className="px-6 py-4 bg-green-700 text-white hover:bg-green-900 transition duration-300"
			>
				Aceito
			</button>
		</form>
	)
}