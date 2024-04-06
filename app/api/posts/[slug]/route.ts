import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/db";
import { Page, pages } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
	request: NextRequest,
	{params}: any
) {
	const { slug } = params;
	const post: Page[] = await db.select().from(pages).where(eq(pages.slug, slug));
	return NextResponse.json( post[0] )
}