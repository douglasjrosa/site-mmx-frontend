import { baseUrl } from "@/data/global";

export const getPost = async (slug: string) => {
	try {
		let res = await fetch(`${baseUrl}/api/${slug}`, {
			method: "GET",
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((data) => data.json());
		if (res.post === undefined) return undefined;
		const { post } = res;
		return post;
	} catch (error) {
		console.error('Erro ao fazer a solicitação:', error);
	}
}

export const getPosts = async () => {
	try {
		let res = await fetch(`${baseUrl}/api/posts`, {
			method: "GET",
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((data) => data.json());
		if (res.posts === undefined) return undefined;
		const { posts } = res;
		return posts;
	} catch (error) {
		console.error('Erro ao fazer a solicitação:', error);
	}
}
