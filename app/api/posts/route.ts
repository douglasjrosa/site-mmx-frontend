import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/db";
import { NewPage, Page, pages } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
	const posts: Page[] = await db.select().from(pages);
	return NextResponse.json(posts);
}

export async function POST(
	request: NextRequest
) {
	try {
		const newPost: NewPage = await request.json();
		const post = await db.insert(pages).values(newPost).returning(
			{
				id: pages.id,
				isPage: pages.isPage,
				slug: pages.slug,
				title: pages.title,
				imageHeader: pages.imageHeader,
				metadata: pages.metadata,
				excerpts: pages.excerpts,
				createdAt: pages.createdAt
			}
		);
		return NextResponse.json(post[0]);
	} catch (error: any) {
		console.error('Erro ao fazer a solicitação:', error);
		return NextResponse.json({error}, {status: 500});
	}
}

export async function PUT(
	request: NextRequest,
) {
	const postToUpdate: Page = await request.json();
	const post = await db.select().from(pages).where(eq(pages.id, postToUpdate.id))

	const updatePost = await db.update(pages).set({
		...post[0],
		...postToUpdate
	}).where(eq(pages.id, postToUpdate.id)).returning({
		id: pages.id,
		isPage: pages.isPage,
		slug: pages.slug,
		title: pages.title,
		imageHeader: pages.imageHeader,
		metadata: pages.metadata,
		excerpts: pages.excerpts,
		createdAt: pages.createdAt
	});
	return NextResponse.json(updatePost[0]);
}

export async function DELETE(
	request: NextRequest
) {
	const postToDelete: Page = await request.json()
	const deletedPost = await db.delete(pages).where(eq(pages.id, postToDelete.id)).returning({
		id: pages.id,
		isPage: pages.isPage,
		slug: pages.slug,
		title: pages.title,
		imageHeader: pages.imageHeader,
		metadata: pages.metadata,
		excerpts: pages.excerpts,
		createdAt: pages.createdAt
	});
	return NextResponse.json(deletedPost[0]);
}