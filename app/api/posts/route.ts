import { NextRequest, NextResponse } from 'next/server'
import { db } from "@/db"
import { NewPage, Page, pagesTable } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function GET () {
	const posts: Page[] = await db.select().from( pagesTable )
	return NextResponse.json( posts )
}

export async function POST (
	request: NextRequest
) {
	try {
		const newPost: NewPage = await request.json()
		const post = await db.insert( pagesTable ).values( newPost ).returning(
			{
				id: pagesTable.id,
				isPage: pagesTable.isPage,
				slug: pagesTable.slug,
				title: pagesTable.title,
				imageHeader: pagesTable.imageHeader,
				metadata: pagesTable.metadata,
				excerpts: pagesTable.excerpts,
				gallery: pagesTable.gallery,
				createdAt: pagesTable.createdAt
			}
		)
		return NextResponse.json( post[ 0 ] )
	} catch ( error: any ) {
		console.error( 'Erro ao fazer a solicitação:', error )
		return NextResponse.json( { error }, { status: 500 } )
	}
}

export async function PUT (
	request: NextRequest,
) {
	const postToUpdate: Page = await request.json()
	const post = await db.select().from( pagesTable ).where( eq( pagesTable.id, postToUpdate.id ) )

	const updatePost = await db.update( pagesTable ).set( {
		...post[ 0 ],
		...postToUpdate
	} ).where( eq( pagesTable.id, postToUpdate.id ) ).returning( {
		id: pagesTable.id,
		isPage: pagesTable.isPage,
		slug: pagesTable.slug,
		title: pagesTable.title,
		imageHeader: pagesTable.imageHeader,
		metadata: pagesTable.metadata,
		excerpts: pagesTable.excerpts,
		gallery: pagesTable.gallery,
		createdAt: pagesTable.createdAt
	} )
	return NextResponse.json( updatePost[ 0 ] )
}

export async function DELETE (
	request: NextRequest
) {
	const postToDelete: Page = await request.json()
	const deletedPost = await db.delete( pagesTable ).where( eq( pagesTable.id, postToDelete.id ) ).returning( {
		id: pagesTable.id,
		isPage: pagesTable.isPage,
		slug: pagesTable.slug,
		title: pagesTable.title,
		imageHeader: pagesTable.imageHeader,
		metadata: pagesTable.metadata,
		excerpts: pagesTable.excerpts,
		gallery: pagesTable.gallery,
		createdAt: pagesTable.createdAt
	} )
	return NextResponse.json( deletedPost[ 0 ] )
}