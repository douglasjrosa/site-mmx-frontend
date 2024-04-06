import Image, { ImageProps } from "next/image";


export interface ImageHeaderProps {
	title: string;
	image: ImageProps
}

const ImageHeader: React.FC<ImageHeaderProps> = ({ title, image }) => (
	<div className="w-screen relative">
		<div className="absolute bottom-0 py-20 px-10 text-center md:text-right bg-gradient-to-t from-[#00000099] from-60% w-full">
			<div className="text-4xl text-white mr-10" >{title}</div>
		</div>
		<Image
			className="w-full"
			src={image.src}
			alt={image.alt}
			height={image.height}
			width={image.width}
		/>
	</div>
)
export default ImageHeader;