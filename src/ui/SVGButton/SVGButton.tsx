// Types
import type { FC, HTMLAttributes } from 'react'

// Styles
import classes from './SVGButton.module.scss'
import clsx from 'clsx'

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
	const styles = clsx([classes.svgButton, className])

	return (
		<div className={styles} {...props}>
			{children}
		</div>
	)
}
