// Types
import type { FC, SVGProps } from 'react'

/** Allowable File icon types. */
export type TFile = Omit<SVGProps<SVGSVGElement>, 'viewBox'>

/** File icon component interface. */
export interface IFile extends SVGProps<SVGSVGElement> {}

/** The File component is a file icon in SVG format. */
export const File: FC<IFile> = props => {
	return (
		<svg viewBox="0,0,256,256" {...props}>
			<g
				fillRule="nonzero"
				stroke="none"
				strokeWidth="1"
				strokeLinecap="butt"
				strokeLinejoin="miter"
				strokeMiterlimit="10"
			>
				<g transform="scale(5.12,5.12)">
					<path d="M30.39844,2h-23.39844v46h36v-33.39844zM30,15v-10.60156l10.60156,10.60156z"></path>
				</g>
			</g>
		</svg>
	)
}
