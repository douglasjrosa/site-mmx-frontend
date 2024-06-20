"use client"
import { baseUrl } from "@/data/global"
import { ChangeEvent, FormEvent, useState } from "react"
import { Bounce, toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const cleanPhone = ( phone: string ) => phone.replace( /\D/g, '' )

const formatPhone = ( phone: string ) => {
	const cleaned = cleanPhone( phone )

	const areaCode = cleaned.substring( 0, 2 )
	const part1 = cleaned.substring( 2, 3 )
	const part2 = cleaned.substring( 3, 7 )
	const part3 = cleaned.substring( 7 )

	return `(${ areaCode }) ${ part1 } ${ part2 }-${ part3 }`
}

export default function LeadsForm () {

	const [ formData, setFormData ] = useState( {
		name: '',
		email: '',
		phone: '',
	} )



	const handleInputChange = ( event: ChangeEvent<HTMLInputElement> ) => {
		const name = event.target.name
		let value = event.target.value

		if ( name == "phone" ) value = formatPhone( value )

		setFormData( ( prevData ) => ( { ...prevData, [ name ]: value } ) )
	}

	async function handleSubmit ( event: FormEvent<HTMLFormElement> ) {
		event.preventDefault()
		const eventData = new FormData( event.currentTarget )
		const name = eventData.get( "name" )
		const email = eventData.get( "email" )
		const phone = cleanPhone( eventData.get( "phone" ) as string )



		const response = await fetch( `${ baseUrl }/api/leads`, {
			method: 'POST',
			body: JSON.stringify( { name, email, phone } )
		} )

		const saveLead = await response.json()
		console.log( { saveLead } )

		if ( !response.ok ) console.error( "Erro ao salvar os dados.", { response, saveLead } )

		toast.success( 'Tudo certo! Obrigado pelo carinho.', {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		} )

		setFormData( {
			name: '',
			email: '',
			phone: '',
		} )
	}

	return (
		<section className="bg-white bg-mmx-leafs bg-contain bg-no-repeat w-full">
			<div className="py-10 bg-white lg:bg-transparent bg-opacity-70">
				<h2 className="text-3xl font-bold text-center mb-10">Receba nossas novidades e descontos de fábrica!</h2>
				<form className="max-w-lg mx-auto p-7 md:px-20" onSubmit={ handleSubmit } >
					<div className="mb-4">
						<label htmlFor="name" className="block text-gray-700 font-medium">Nome</label>
						<input
							type="text"
							value={ formData.name }
							onChange={ handleInputChange }
							name="name"
							aria-label="Nome"
							className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-lime-500"
							placeholder="Maria Bonita"
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
							aria-label="E-mail"
							placeholder="maria.bonita@gmail.com"
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
							aria-label="Telefone"
							placeholder="11 99966-9966"
							className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-lime-500"
						/>
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="bg-lime-700 text-white text-xl mt-5 w-full py-3 rounded-md font-medium hover:bg-lime-800 transition-colors duration-300">
							Enviar
						</button>
					</div>
				</form>
				<ToastContainer />
			</div>
		</section>
	)
};
