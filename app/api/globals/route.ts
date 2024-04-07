import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/db";
import { NewGlobal, Global, globals } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
	const data: Global[] = await db.select().from(globals);
	return NextResponse.json(data);
}

export async function POST(
	request: NextRequest
) {
	try {
		const newData: NewGlobal = await request.json();
		const data = await db.insert(globals).values(newData).returning(
			{
				id: globals.id,
				prop: globals.prop,
				value: globals.value
			}
		);
		return NextResponse.json(data[0]);
	} catch (error: any) {
		console.error('Erro ao fazer a solicitação:', error);
		return NextResponse.json({error}, {status: 500});
	}
}

export async function PUT(
	request: NextRequest,
) {
	const dataToUpdate: Global = await request.json();
	const data = await db.select().from(globals).where(eq(globals.id, dataToUpdate.id))

	const updateData = await db.update(globals).set({
		...data[0],
		...dataToUpdate
	}).where(eq(globals.id, dataToUpdate.id)).returning({
		id: globals.id,
		prop: globals.prop,
		value: globals.value
	});
	return NextResponse.json(updateData[0]);
}

export async function DELETE(
	request: NextRequest
) {
	const dataToDelete: Global = await request.json()
	const deletedData = await db.delete(globals).where(eq(globals.id, dataToDelete.id)).returning({
		id: globals.id,
		prop: globals.prop,
		value: globals.value
	});
	return NextResponse.json(deletedData[0]);
}