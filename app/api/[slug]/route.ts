import { Post, posts } from "@/data/posts";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	request: NextRequest,
	context: any
) {

	const { slug } = context.params;
	const post: Post = posts[slug];
	return NextResponse.json({ post })
}