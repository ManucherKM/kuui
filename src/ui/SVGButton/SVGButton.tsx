// Types
import type { FC, HTMLAttributes } from 'react'

// Styles
import classes from './SVGButton.module.scss'

/**
 * Allowable SVGButton types.
 */
export type TSVGButton = Omit<HTMLAttributes<HTMLDivElement>, 'className'>

/**
 * SVGButton component interface.
 */
export interface ISVGButton extends TSVGButton {}

/**
 * SVGButton component is intended for buttons that use svg element as their children. Below you can see an example of its use.
 * @example
 * <SVGButton>
 * 	<svg viewBox="0 0 21 21">
 * 		<path d="..."/>
 * 	</svg>
 * </SVGButton>
 */
export const SVGButton: FC<ISVGButton> = ({ children, ...props }) => {
	return (
		<div className={classes.svgButton} {...props}>
			{children}
		</div>
	)
}
