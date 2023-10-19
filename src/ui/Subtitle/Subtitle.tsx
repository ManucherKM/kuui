// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Subtitle.module.scss'

/** Enumeration of possible Subtitle dimension. */
export enum ESubtitleDimension {
	/** Large size */
	large = 'large',

	/** Medium size */
	medium = 'medium',

	/** Small size */
	small = 'small',
}

/** Enumeration of possible Subtitle positions. */
export enum ESubtitleAlign {
	/** Align left */
	left = 'left',

	/** Align center */
	center = 'center',

	/** Align right */
	right = 'right',
}

/** Allowable Subtitle types. */
export type TSubtitle = HTMLAttributes<HTMLHeadingElement>

/** Subtitle component interface. */
export interface ISubtitle extends TSubtitle {
	/** Subtitle size */
	dimension?: `${ESubtitleDimension}`

	/** Subtitle align */
	align?: `${ESubtitleAlign}`
}

/**
 * The Subtitle component is a classic HTML "h2" tag with some styles added.
 * Below you can see an example of its use.
 *
 * @example
 * 	;<Subtitle align="center" dimension="small">
 * 		Subtitle
 * 	</Subtitle>
 */
export const Subtitle: FC<ISubtitle> = ({
	children,
	dimension = ESubtitleDimension.medium,
	align = ESubtitleAlign.left,
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
		<h2 className={styles} {...props}>
			{children}
		</h2>
	)
}
