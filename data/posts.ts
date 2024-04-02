interface Author {
	name: string;
	url: string;
}

interface Image {
	url: string;
	alt: string;
	width: number;
	height: number;
}

interface PostMetadata {
	title: string;
	keywords: string[];
	authors: Author[];
	creator: string;
	publisher: string;
}

interface PostExcerpt {
	title: string;
	image: Image;
	text: string[];
}

export interface Post {
	title: string;
	metadata: PostMetadata;
	excerpts: PostExcerpt[];
}

interface PostCollection {
	[key: string]: Post;
}

export const posts: PostCollection = {
	"madeira-entalhada-com-serenidade-e-elegancia": {
		title: "Madeira entalhada com serenidade e elegância",
		metadata: {
			title: "Madeira entalhada com serenidade e elegância",
			keywords: ["Madeira entalhada", "Produtos de madeira"],
			authors: [{ name: "Douglas José Rosa", url: "https://github.com/douglasjrosa" }],
			creator: "Grupo Max Brasil",
			publisher: "TI - Max Brasil",
		},
		excerpts: [
			{
				title: "Madeira entalhada com serenidade e elegância",
				image: {
					url: "/images/produtos/produtos-gallery/64.jpg",
					alt: "Tábua de frios e petiscos",
					width: 433,
					height: 433
				},
				text: [
					"Nosso foco é trazer para os lares, as boas energias e a beleza natural que a madeira oferece. A gente entende que toda peça de madeira, um dia já respirou como um ser vivo e teve uma história. Por isso cuidamos de cada detalhe com carinho em cada peça que fazemos."
				]
			},
			{
				title: "Madeira entalhada com serenidade e elegância",
				image: {
					url: "/images/produtos/produtos-gallery/51.jpg",
					alt: "Tábua de frios e petiscos",
					width: 433,
					height: 433
				},
				text: [
					"Nosso foco é trazer para os lares, as boas energias e a beleza natural que a madeira oferece. A gente entende que toda peça de madeira, um dia já respirou como um ser vivo e teve uma história. Por isso cuidamos de cada detalhe com carinho em cada peça que fazemos."
				]
			},
			{
				title: "Madeira entalhada com serenidade e elegância",
				image: {
					url: "/images/produtos/produtos-gallery/48.jpg",
					alt: "Tábua de frios e petiscos",
					width: 433,
					height: 433
				},
				text: [
					"Nosso foco é trazer para os lares, as boas energias e a beleza natural que a madeira oferece. A gente entende que toda peça de madeira, um dia já respirou como um ser vivo e teve uma história. Por isso cuidamos de cada detalhe com carinho em cada peça que fazemos."
				]
			}
		]
	}
};
