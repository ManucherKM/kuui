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

export enum ESubtitleImportance {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6',
}

/** Allowable Subtitle types. */
export type TSubtitle = HTMLAttributes<HTMLHeadingElement>

/** Subtitle component interface. */
export interface ISubtitle extends TSubtitle {
	/** Subtitle size */
	dimension?: `${ESubtitleDimension}`

	/** Subtitle align */
	align?: `${ESubtitleAlign}`

	importance?: `${ESubtitleImportance}`
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
	importance = ESubtitleImportance.h2,
	className,
	...props
}) => {
	const Tag = importance

	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.root,
		classes[dimension],
		classes[align],
		className,
	])

	return (
		<Tag className={styles} {...props}>
			{children}
		</Tag>
	)
}
