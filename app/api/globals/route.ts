import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/db";
import { NewGlobal, Global, globalsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
	const data: Global[] = await db.select().from(globalsTable);
	return NextResponse.json(data);
}

export async function POST(
	request: NextRequest
) {
	try {
		const newData: NewGlobal = await request.json();
		const data = await db.insert(globalsTable).values(newData).returning(
			{
				id: globalsTable.id,
				prop: globalsTable.prop,
				value: globalsTable.value
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
	const data = await db.select().from(globalsTable).where(eq(globalsTable.id, dataToUpdate.id))

	const updateData = await db.update(globalsTable).set({
		...data[0],
		...dataToUpdate
	}).where(eq(globalsTable.id, dataToUpdate.id)).returning({
		id: globalsTable.id,
		prop: globalsTable.prop,
		value: globalsTable.value
	});
	return NextResponse.json(updateData[0]);
}

export async function DELETE(
	request: NextRequest
) {
	const dataToDelete: Global = await request.json()
	const deletedData = await db.delete(globalsTable).where(eq(globalsTable.id, dataToDelete.id)).returning({
		id: globalsTable.id,
		prop: globalsTable.prop,
		value: globalsTable.value
	});
	return NextResponse.json(deletedData[0]);
}