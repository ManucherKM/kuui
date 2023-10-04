// Types
import type { FC, SVGProps } from 'react'

/** Allowable Vk icon types. */
export type TVk = Omit<SVGProps<SVGSVGElement>, 'viewBox'>

/** Vk icon component interface. */
export interface IVk extends TVk {}

/** The Vk component is an svg icon of the VK company. */
export const Vk: FC<IVk> = props => {
	return (
		<svg viewBox="0 0 20 20" {...props}>
			<rect width="20px" height="20px" rx="4" fill="#0077FF" />
			<path
				d="M10.7839 14.495C4.61225 14.5613 3.22886 8.99835 3.30862 6.20862H5.61885C5.65845 10.2947 7.64305 11.697 8.6304 11.8874V6.20862H10.7839V9.41226C12.632 9.101 13.6497 7.14681 13.9274 6.20862H16.0561C15.6205 8.42054 13.9879 9.85652 13.2261 10.298C15.1799 11.0265 16.2899 13.3996 16.6007 14.495H14.2162C13.5759 12.3295 11.6612 11.5784 10.7839 11.4735V14.495Z"
				fill="white"
			/>
		</svg>
	)
}
