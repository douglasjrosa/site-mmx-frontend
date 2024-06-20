import { ImageHeader as ImageHeaderProps } from "@/data/schema"
import Image from "next/image"

const ImageHeader: React.FC<ImageHeaderProps> = ( { title, image } ) => (
	<div className="w-screen relative mt-12 mb-12 sm:mt-0">
		<div className="absolute bottom-0 py-5 md:py-20 px-10 text-center md:text-right bg-gradient-to-t from-[#00000099] from-60% w-full">
			<div className="sm:text-xl md:text-2xl lg:text-4xl text-white" >{ title }</div>
		</div>
		<Image
			className="w-full"
			src={ image.src }
			alt={ image.alt }
			height={ image.height }
			width={ image.width }
			priority={ true }
		/>
	</div>
)
export default ImageHeader