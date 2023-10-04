// Types
import type { FC, SVGProps } from 'react'

/** Allowable Arrow icon types. */
export type TArrow = Omit<SVGProps<SVGSVGElement>, 'viewBox'>

/** Arrow component interface. */
export interface IArrow extends TArrow {}

/** The Arrow component is an arrow icon in svg format. */
export const Arrow: FC<IArrow> = props => {
	return (
		<svg viewBox="0 0 12 8" {...props}>
			<path d="M10.9 1.1999C10.5 0.799902 9.89999 0.799902 9.49999 1.1999L5.99999 4.6999L2.49999 1.1999C2.09999 0.799902 1.49999 0.799902 1.09999 1.1999C0.699988 1.5999 0.699988 2.1999 1.09999 2.5999L5.29999 6.7999C5.49999 6.9999 5.69999 7.0999 5.99999 7.0999C6.29999 7.0999 6.49999 6.9999 6.69999 6.7999L10.9 2.5999C11.3 2.1999 11.3 1.5999 10.9 1.1999Z" />
		</svg>
	)
}
