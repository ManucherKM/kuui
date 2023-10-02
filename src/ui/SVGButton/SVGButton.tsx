// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './SVGButton.module.scss'

/** Allowable SVGButton types. */
export type TSVGButton = HTMLAttributes<HTMLDivElement>

/** SVGButton component interface. */
export interface ISVGButton extends TSVGButton {}

/**
 * SVGButton component is intended for buttons that use svg element as their
 * children. Below you can see an example of its use.
 *
 * @example
 * 	;<SVGButton>
 * 		<svg viewBox="0 0 21 21">
 * 			<path d="..." />
 * 		</svg>
 * 	</SVGButton>
 */
export const SVGButton: FC<ISVGButton> = ({
	children,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, className])

	return (
		<div className={styles} {...props}>
			{children}
		</div>
	)
}
