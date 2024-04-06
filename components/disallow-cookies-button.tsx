import { cookies } from "next/headers";

export default async function DisallowCookiesButton() {

	async function setCookiesDisallowed() {
		"use server"
		cookies().delete("cookiesAllowed");
	}

	return (
		<form action={setCookiesDisallowed} >
			<button
				type="submit"
				className="px-4 py-1 text-gray-400 hover:bg-red-600 transition duration-300"
				onClick={setCookiesDisallowed}
			>
				<u>Não aceito</u>
			</button>
		</form>
	)
}