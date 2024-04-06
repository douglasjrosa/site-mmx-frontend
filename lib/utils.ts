import { baseUrl } from "@/data/global";
import { Page } from "@/db/schema";

export const getPost = async (slug: string): Promise<Page | any> => {
	try {
		const response = await fetch(`${baseUrl}/api/posts/${slug}`);
		if (!response.ok) {
			throw new Error('Erro ao obter o post');
		}
		const post = await response.json();
		return post;
	} catch (error) {
		console.error('Erro ao fazer a solicitação:', error);
		return {};
	}
}

export const getPosts = async (): Promise<Page[]> => {
	try {
		const response = await fetch(`${baseUrl}/api/posts`);
		if (!response.ok) {
			throw new Error('Erro ao obter os posts');
		}
		const posts = await response.json();
		return posts;
	} catch (error) {
		console.error('Erro ao fazer a solicitação:', error);
		return [];
	}
}
