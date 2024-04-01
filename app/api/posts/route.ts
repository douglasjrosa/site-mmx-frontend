import { NextRequest, NextResponse } from 'next/server';

const posts = [{slug: "madeira-entalhada-com-serenidade-e-elegancia"}];

export async function GET(
	request: NextRequest,
	context: any
) {
	return NextResponse.json({ posts })
}