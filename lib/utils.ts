"use server"
import { Lead, Post, Global } from '@/data/schema'
import fs from 'fs/promises'
import path from "path"

const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL as string


export const getPosts = async (): Promise<Post[]> => {
	const postsPath = path.join( process.cwd(), 'data', 'pages', 'blog' )
	const fileNames = await fs.readdir( postsPath )
	const posts = await Promise.all( fileNames.map( async ( fileName ) => {
		const postPath = path.join( postsPath, fileName )
		const fileContents = await fs.readFile( postPath, 'utf8' )
		return JSON.parse( fileContents )
	} ) )

	return posts
}

export const getPost = async ( slug: string ): Promise<Post> => {
	const postDir = path.join( process.cwd(), 'data', 'pages', 'blog' )
	const postPath = path.join( postDir, `${ slug }.json` )
	const fileContents = await fs.readFile( postPath, 'utf8' )
	return JSON.parse( fileContents )
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