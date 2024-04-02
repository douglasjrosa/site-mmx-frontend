import Image from "next/image";




interface FeatureRowsGroupProps {
	excerpts: {
		title: string;
		image: {
			url: string;
			alt: string;
			height: number;
			width: number;
		},
		text: string[];
	}[]
}

const FeatureRowsGroup: React.FC<FeatureRowsGroupProps> = ({ excerpts }) => {
	let reverse: boolean , reverseClass: string;
	return (
		<div>
			{excerpts.map((excerpt, key) => {
				const { image, text } = excerpt;
				reverse = !reverse;
				reverseClass = reverse ? "md:flex-row" : "md:flex-row-reverse";
				return (
					<div key={`feature-row-${key}`} className={`bg-white md:rounded shadow-xl w-full lg:w-5/6 mx-auto my-10 md:flex ${reverseClass} justify-between`}>
						<div className="md:w-1/2 lg:w-2/5 flex justify-center">
							<Image className="w-full md:w-auto lg:rounded-l" src={image.url} alt={image.alt} height={image.height} width={image.width} />
						</div>
						<div className="p-10 md:w-1/2 lg:w-3/5">
							{key === 0 && <h1 className="text-3xl text-bold">{excerpt.title}</h1>}
							{key === 1 && <h2 className="text-3xl text-bold">{excerpt.title}</h2>}
							{key >= 2 && <h3 className="text-3xl text-bold">{excerpt.title}</h3>}
							<div className="text-xl leading-9 text-justify mt-5">{text}</div>
						</div>
					</div>
				);
			})}
		</div>
	)
}
export default FeatureRowsGroup;