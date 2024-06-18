import { NextRequest, NextResponse } from 'next/server';

const posts = [
	{slug: "home"},
	{slug: "produtos"},
	{slug: "contato"}
];

export async function GET(
	request: NextRequest,
	context: any
) {
	return NextResponse.json({ posts })
}