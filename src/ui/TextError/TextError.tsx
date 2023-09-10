// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './TextError.module.scss'

/** Enumeration of possible TextError dimension. */
export enum ETextErrorDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/** Enumeration of possible TextError positions. */
export enum ETextErrorAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

/** Allowable TextError types. */
export type TTextError = HTMLAttributes<HTMLParagraphElement>

/** TextError component interface. */
export interface ITextError extends TTextError {
	dimension?: `${ETextErrorDimension}`
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
	align,
	className,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.textError,
		classes[dimension],
		align && classes[align],
		className,
	])

	return (
		<p className={styles} {...props}>
			{children}
		</p>
	)
}
