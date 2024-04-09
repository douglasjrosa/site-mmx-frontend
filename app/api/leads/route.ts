import { NextRequest, NextResponse } from 'next/server'
import { db } from "@/db"
import { NewLead, NewPage, Page, leads, pages } from '@/db/schema'

export async function POST (
	request: NextRequest
) {
	try {
		const newLead: NewLead = await request.json()
		const lead = await db.insert( leads ).values( newLead ).returning(
			{
				name: leads.name,
				email: leads.email,
				phone: leads.phone
			}
		)
		return NextResponse.json( lead[ 0 ] )
	} catch ( error: any ) {
		console.error( 'Erro ao fazer a solicitação:', error )
		return NextResponse.json( { error }, { status: 500 } )
	}
}