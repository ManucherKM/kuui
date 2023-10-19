// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './TextError.module.scss'

/** Enumeration of possible TextError dimension. */
export enum ETextErrorDimension {
	/** Large size */
	large = 'large',

	/** Medium size */
	medium = 'medium',

	/** Small size */
	small = 'small',
}

/** Enumeration of possible TextError positions. */
export enum ETextErrorAlign {
	/** Align left */
	left = 'left',

	/** Align center */
	center = 'center',

	/** Align right */
	right = 'right',
}

/** Allowable TextError types. */
export type TTextError = HTMLAttributes<HTMLParagraphElement>

/** TextError component interface. */
export interface ITextError extends TTextError {
	/** TextError size */
	dimension?: `${ETextErrorDimension}`

	/** TextError align */
	align?: `${ETextErrorAlign}`
}

/**
 * The TextError component is a classic HTML "h2" tag with some styles added.
 * Below you can see an example of its use.
 *
 * @example
 * 	;<TextError align="center" dimension="small">
 * 		TextError
 * 	</TextError>
 */
export const TextError: FC<ITextError> = ({
	children,
	dimension = ETextErrorDimension.medium,
	align = ETextErrorAlign.left,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.root,
		classes[dimension],
		classes[align],
		className,
	])

	return (
		<p className={styles} {...props}>
			{children}
		</p>
	)
}
