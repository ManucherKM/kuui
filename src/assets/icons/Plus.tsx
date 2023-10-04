// Types
import type { FC, SVGProps } from 'react'

/** Allowable Plus icon types. */
export type TPlus = Omit<SVGProps<SVGSVGElement>, 'viewBox'>

/** Plus icon component interface. */
export interface IPlus extends TPlus {}

/** The Plus component is a plus icon in SVG format. */
export const Plus: FC<IPlus> = props => {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<path d="M4 12H20M12 4V20" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}
