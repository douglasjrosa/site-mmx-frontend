import FeatureRowsGroup from "@/components/featured-rows-group";

export default function NotFound() {
	const excerpts = [
		{
			title: "Ooops!",
			image: {
				src: "/images/site/404.jpg",
				alt: "Caixa de madeira indicando 404 - Página não existe.",
				width: 1024,
				height: 1024
			},
			text: [
				"Esta página não existe. Verifique o endereço digitado e tente novamente."
			]
		}];

	return (
		<>
			<FeatureRowsGroup excerpts={excerpts} />
		</>
	)
}