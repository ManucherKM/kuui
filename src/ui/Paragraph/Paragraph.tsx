// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Paragraph.module.scss'

/** Enumeration of possible Paragraph dimension. */

export enum EParagraphDimension {
	/** Large size */
	large = 'large',

	/** Medium size */
	medium = 'medium',

	/** Small size */
	small = 'small',
}

/** Enumeration of possible Paragraph positions. */
export enum EParagraphAlign {
	/** Align left */
	left = 'left',

	/** Align center */
	center = 'center',

	/** Align right */
	right = 'right',

	/** Align justify */
	justify = 'justify',
}

/** Enumeration of possible Paragraph variants. */
export enum EParagraphVariant {
	/** Default Paragraph */
	default = 'default',

	/** Passive Paragraph */
	passive = 'passive',
}

/** Allowable Paragraph types. */
export type TParagraph = HTMLAttributes<HTMLParagraphElement>

/** Paragraph component interface. */
export interface IParagraph extends TParagraph {
	/** Paragraph size */
	dimension?: `${EParagraphDimension}`

	/** Paragraph align */
	align?: `${EParagraphAlign}`

	/** Paragraph variant */
	variant?: `${EParagraphVariant}`
}

/**
 * The Paragraph component is a classic HTML "p" tag with some styles added.
 * Below you can see an example of its use.
 *
 * @example
 * 	;<Paragraph align="center" dimension="small">
 * 		Paragraph
 * 	</Paragraph>
 */
export const Paragraph: FC<IParagraph> = ({
	children,
	dimension = EParagraphDimension.small,
	align = EParagraphAlign.left,
	className,
	variant = EParagraphVariant.default,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.root,
		classes[dimension],
		classes[align],
		classes[variant],
		className,
	])

	return (
		<p className={styles} {...props}>
			{children}
		</p>
	)
}
