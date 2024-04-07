import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/db";
import { Global, globals } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
	request: NextRequest,
	{params}: any
) {
	const { prop } = params;
	const data: Global[] = await db.select().from(globals).where(eq(globals.prop, prop));
	return NextResponse.json( data[0] )
}