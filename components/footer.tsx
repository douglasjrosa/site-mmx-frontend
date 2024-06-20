import Link from "next/link"
import Image from "next/image"
import WhatsappButton, { WhatsappButtonProps } from "./whatsapp-button"

interface FooterLink {
	newTab: boolean
	url: string
	text: string
}

interface FooterColumn {
	title: string
	links?: FooterLink[]
	descriptions?: string[]
}


interface FooterImage {
	url: string
	alt: string
	width: number
	height: number
}

export interface FooterProps {
	logo: FooterImage
	smallText: string
	notificationBannerText: string
	showInitModal: boolean
	columns: FooterColumn[]
	whatsapp: WhatsappButtonProps
}

const Footer: React.FC<FooterProps> = ( {
	logo,
	smallText,
	columns,
	whatsapp,
} ) => {
	return (
		<footer className="border-t-2 border-yellow-900 relative">
			{/* <LeadsForm />*/ }
			<div
				id="main-footer"
				className="flex flex-wrap py-12"
			>
				{ columns.map( ( footerColumn, index ) => (
					<div
						key={ `footerKey${ index }` }
						className="w-full md:w-1/2 lg:w-1/4 p-3 sm:p-10 md:p-5"
					>
						<div
							className="mt-10 lg:mt-0 bg-white rounded p-4 shadow-lg border-2 border-yellow-600"
						>
							<p className="uppercase tracking-wide font-bold  text-gray-600">
								{ footerColumn.title }
							</p>
							<ul className="mt-2 px-5">
								{ footerColumn.links &&
									footerColumn.links.map( ( link, linkIndex ) => (
										<li
											key={ `footerLinkKey${ linkIndex }` }
											className="py-3 lg:py-2 text-xl md:text-lg lg:text-base mx-1 my-4 font-medium text-lime-700 hover:text-lime-800"
										>
											<Link href={ link.url }>{ link.text }</Link>
										</li>
									) ) }
								{ footerColumn.descriptions &&
									footerColumn.descriptions.map( ( desc, descIndex ) => (
										<li
											key={ `footerLinkKey${ descIndex }` }
											className="py-3 lg:py-2 text-xl md:text-lg lg:text-base mx-1 my-4 font-medium text-lime-700 hover:text-lime-800"
										>
											{ desc }
										</li>
									) ) }
							</ul>
						</div>
					</div>
				) ) }
				<div key="ht" className="w-full md:w-1/2 lg:w-1/4 p-3 sm:p-10 md:p-5" >
					<div className="rounded p-6 bg-white h-auto w-auto text-center border-2 border-yellow-600">
						{ logo && (
							<Link href="/" title="home">
								<Image
									src={ logo.url }
									alt={ logo.alt }
									width={ logo.width }
									height={ logo.height }
								/>
							</Link>
						) }
					</div>
				</div>
			</div>
			<div
				id="small-text"
				className="text-sm bg-black bg-opacity-75 pl-3 py-6 text-yellow-200"
			>
				<div className="container">{ smallText }</div>
			</div>
			<WhatsappButton contacts={ whatsapp.contacts } message={ whatsapp.message } image={ whatsapp.image } />
		</footer>
	)
}
export default Footer
