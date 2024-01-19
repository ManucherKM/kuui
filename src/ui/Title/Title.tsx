// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Title.module.scss'

/** Enumeration of possible Title dimension. */
export enum ETitleDimension {
	/** Large size */
	large = 'large',

	/** Medium size */
	medium = 'medium',

	/** Small size */
	small = 'small',
}

/** Enumeration of possible Title positions. */
export enum ETitleAlign {
	/** Align left */
	left = 'left',

	/** Align center */
	center = 'center',

	/** Align right */
	right = 'right',
}

export enum ETitleImportance {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6',
}

/** Allowable Title types. */
export type TTitle = HTMLAttributes<HTMLHeadingElement>

/** Title component interface. */
export interface ITitle extends TTitle {
	/** Title size */
	dimension?: `${ETitleDimension}`

	/** Title align */
	align?: `${ETitleAlign}`

	importance?: `${ETitleImportance}`
}

/**
 * The Title component is a classic HTML "h1" tag with some styles added. Below
 * you can see an example of its use.
 *
 * @example
 * 	;<Title align="center" dimension="small">
 * 		Title
 * 	</Title>
 */
export const Title: FC<ITitle> = ({
	children,
	dimension = ETitleDimension.medium,
	align = ETitleAlign.left,
	importance = ETitleImportance.h1,
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

export default Title
