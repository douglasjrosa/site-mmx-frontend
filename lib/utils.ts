"use server"
import { Lead, Page, Global } from "@/db/schema"

const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL as string

export const getPost = async ( slug: string ): Promise<Page | any> => {
	try {
		const response = await fetch( `${ baseUrl }/api/posts/${ slug }` )
		if ( !response.ok ) {
			throw new Error( 'Erro ao obter o post' )
		}
		const post = await response.json()
		return post
	} catch ( error ) {
		console.error( 'Erro ao fazer a solicitação do Post:', error )
		return undefined
	}
}

export const getPosts = async (): Promise<Page[]> => {
	try {
		const response = await fetch( `${ baseUrl }/api/posts` )

		if ( !response.ok ) {
			throw new Error( 'Erro ao obter os posts' )
		}
		const posts = await response.json()
		return posts
	} catch ( error ) {
		console.error( 'Erro ao fazer a solicitação:', error )
		return []
	}
}

export const getGlobal = async ( prop: string ): Promise<Global | any> => {
	try {
		const response = await fetch( `${ baseUrl }/api/globals/${ prop }` )
		if ( !response.ok ) {
			throw new Error( 'Erro ao obter os dados' )
		}
		const data = await response.json()
		return data
	} catch ( error ) {
		console.error( 'Erro ao fazer a solicitação:', error )
		return {}
	}
}

export const saveLead = async ( prop: string ): Promise<Lead | any> => {
	try {
		const response = await fetch( `${ baseUrl }/api/leads/${ prop }` )
		if ( !response.ok ) {
			throw new Error( 'Erro ao obter os dados' )
		}
		const data = await response.json()
		return data
	} catch ( error ) {
		console.error( 'Erro ao fazer a solicitação:', error )
		return {}
	}
}