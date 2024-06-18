import { NextRequest, NextResponse } from 'next/server'

export async function GET (
	request: NextRequest
	) {
		/*
	try {
		const leads: Lead[] = await db.select().from( leadsTable )
		return NextResponse.json( leads )
	} catch ( error: any ) {
		console.error( 'Erro ao fazer a solicitação:', error )
		return NextResponse.json( { error }, { status: 500 } )
	}
}

export async function POST (
	request: NextRequest
) {
	try {
		const newLead: NewLead = await request.json()
		const lead: Lead[] = await db.insert( leadsTable ).values( newLead ).returning(
			{
				id: leadsTable.id,
				name: leadsTable.name,
				email: leadsTable.email,
				phone: leadsTable.phone,
				createdAt: leadsTable.createdAt
			}
		)
		return NextResponse.json( lead[ 0 ] )
	} catch ( error: any ) {
		console.error( 'Erro ao fazer a solicitação:', error )
		return NextResponse.json( { error }, { status: 500 } )
	}
	*/
	return NextResponse.json({})
} 