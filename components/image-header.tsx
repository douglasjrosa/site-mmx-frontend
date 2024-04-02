import Image from "next/image";

interface ImageHeaderProps {
	title: string;
	image: {
		url: string;
		alt: string;
		height: number;
		width: number
	}
}

const ImageHeader: React.FC<ImageHeaderProps> = ({ title, image }) => (
	<div className="w-screen relative">
		<div className="absolute bottom-0 py-5 px-10 text-center md:text-right bg-gradient-to-t from-[#00000099]  w-full">

		<div className="text-4xl text-white" >{title}</div>
		</div>
		<Image
			className="w-full"
			src={image.url}
			alt={image.alt}
			height={image.height}
			width={image.width}
		/>
	</div>
)
export default ImageHeader;