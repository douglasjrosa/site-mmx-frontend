import { baseUrl } from "@/data/global";

export const getPost = async (slug: string) => {
	let res = await fetch(`${baseUrl}/api/${slug}`, { method: "GET" }).then((r) => r.json());
	if (res.post === undefined) return undefined;
	const { post } = res;
	return post;
}

export const getPosts = async () => {
	let res = await fetch(`${baseUrl}/api/posts`, { method: "GET" }).then((r) => r.json());
	if (res.posts === undefined) return undefined;
	const { posts } = res;
	return posts;
}
