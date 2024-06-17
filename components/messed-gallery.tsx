import Image from "next/image"
import path from 'path'
import fs from 'fs'
import sizeOf from 'image-size'

export interface MessedGalleryProps {
	gallery: {
		title: string
		path: string
	}
}

const MessedGallery: React.FC<MessedGalleryProps> = ( { gallery } ) => {

	const imageDirectory = `./public/images/${ gallery.path }`
	const imageFiles = fs.readdirSync( imageDirectory ).map( ( fileName ) => {
		const imagePath = path.join( imageDirectory, fileName )
		const dimensions = sizeOf( imagePath )
		return {
			fileName,
			width: dimensions.width,
			height: dimensions.height
		}
	} )

	return (
		<div className="bg-white">
			<h2 className="text-center py-20 text-5xl md:text-8xl">{ gallery.title }</h2>
			<div className="flex flex-row flex-wrap py-28 px-10 gap-10 justify-center">
				{ imageFiles.map( ( imageFile, index ) => (
					<div key={ index } className="w-90 md:w-1/3 lg:w-1/4">
						<div>
							<Image
								src={ `/images/${ gallery.path }/${ imageFile.fileName }` }
								alt={ `Image ${ index }` }
								width={ imageFile.width }
								height={ imageFile.height }
							/>
						</div>
					</div>
				) ) }
			</div>
		</div>
	)
}
export default MessedGallery