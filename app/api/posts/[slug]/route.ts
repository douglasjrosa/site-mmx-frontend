import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/db";
import { pages } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
	request: NextRequest,
	context: any
) {
	const { slug } = context.params;
	const post = await db.select().from(pages).where(eq(slug, pages.slug));
	return NextResponse.json({ post })
}

export async function POST(
	request: NextRequest,
	context: any
) {
	const { slug } = context.params;
	const post = await db.select().from(pages).where(eq(slug, pages.slug));
	return NextResponse.json({ post })
}

export async function PUT(
	request: NextRequest,
	context: any
) {
	const { slug } = context.params;
	const post = await db.select().from(pages).where(eq(slug, pages.slug));
	return NextResponse.json({ post })
}

export async function DELETE(
	request: NextRequest,
	context: any
) {
	const { slug } = context.params;
	const post = await db.select().from(pages).where(eq(slug, pages.slug));
	return NextResponse.json({ post })
}