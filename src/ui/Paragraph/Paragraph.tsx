// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Paragraph.module.scss'

/** Enumeration of possible Paragraph dimension. */
export enum EParagraphDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/** Enumeration of possible Paragraph positions. */
export enum EParagraphAlign {
	left = 'left',
	center = 'center',
	right = 'right',
	justify = 'justify',
}

/** Allowable Paragraph types. */

export type TParagraph = HTMLAttributes<HTMLParagraphElement>

/** Paragraph component interface. */
export interface IParagraph extends TParagraph {
	dimension?: `${EParagraphDimension}`
	align?: `${EParagraphAlign}`
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
