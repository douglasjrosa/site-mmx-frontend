"use client"
import { baseUrl } from "@/data/global"
import { NextResponse } from "next/server"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export default function LeadsForm () {

	const [ formData, setFormData ] = useState( {
		name: '',
		email: '',
		phone: '',
	} )

	const handleInputChange = ( event: ChangeEvent<HTMLInputElement> ) => {
		const name = event.target.name
		const value = event.target.value

		setFormData( ( prevData ) => ( { ...prevData, [ name ]: value } ) )
	}

	async function handleSubmit ( event: FormEvent<HTMLFormElement> ) {
		event.preventDefault()
		const eventData = new FormData( event.currentTarget )
		const name = eventData.get( "name" )
		const email = eventData.get( "email" )
		const phone = eventData.get( "phone" )

		const saveLead: Promise<unknown> = fetch( `${ baseUrl }/api/leads`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify( { name, email, phone } )
		} )


		toast.promise(
		saveLead,
			{
				pending: "Enviando dados...",
				success: "Que legal! Logo logo você receberá novidades.",
				error: "Oooops... Algo não deu certo.",
			}, { className: "text-xl p-10 shadow-xl border border-gray-600 mt-20" }
		)
		setFormData( {
			name: '',
			email: '',
			phone: '',
		} )
	}

	return (
		<section className="bg-white bg-mmx-leafs bg-contain bg-no-repeat">
			<div className="py-10 bg-white lg:bg-transparent bg-opacity-70">
			<h2 className="text-3xl font-bold text-center mb-10">Receba nossas novidades e descontos de fábrica!</h2>
			<form className="max-w-lg mx-auto px-20" onSubmit={ handleSubmit } >
				<div className="mb-4">
					<label htmlFor="name" className="block text-gray-700 font-medium">Nome</label>
					<input
						type="text"
						value={ formData.name }
						onChange={ handleInputChange }
						name="name"
						className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-lime-500"
						required
						/>
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 font-medium">E-mail</label>
					<input
						type="email"
						value={ formData.email }
						onChange={ handleInputChange }
						name="email"
						className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-lime-500"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="phone" className="block text-gray-700 font-medium">Fone/Whatsapp (opcional)</label>
					<input
						type="text"
						value={ formData.phone }
						onChange={ handleInputChange }
						name="phone"
						className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-lime-500"
						/>
				</div>
				<div className="text-center">
					<button
						type="submit"
						className="bg-lime-600 text-white mt-5 px-20 py-3 rounded-md font-medium hover:bg-lime-700 transition-colors duration-300">
						Enviar
					</button>
				</div>
			</form>
			<ToastContainer />
							</div>
		</section>
	)
};
