import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { NextRequest, NextResponse } from 'next/server';
import { globals } from '@/db/schema';


export async function GET( request: NextRequest){
	
	const db = drizzle(sql);
	const result = await db.select().from(globals);
	return NextResponse.json(result);
}