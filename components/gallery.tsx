import Image from "next/image"
import path from 'path'
import fs from 'fs/promises'
import sizeOf from 'image-size'

export const dynamic = 'force-dynamic' // Para garantir renderização no lado do servidor

export interface GalleryProps {
	gallery: {
		title: string
		path: string
	}
}

interface ImageFile {
	fileName: string
	width: number
	height: number
}

const Gallery = async ( { gallery }: GalleryProps ) => {
	const imageDirectory = path.join( process.cwd(), 'public', 'images', gallery.path )
	const fileNames = await fs.readdir( imageDirectory )
	const imageFiles: ImageFile[] = await Promise.all( fileNames.map( async ( fileName ) => {
		const imagePath = path.join( imageDirectory, fileName )
		const dimensions = sizeOf( imagePath )
		return {
			fileName,
			width: dimensions.width!,
			height: dimensions.height!
		}
	} ) )

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

export default Gallery
