// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Title.module.scss'

/**
 * Enumeration of possible Title dimension.
 */
export enum ETitleDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/**
 * Enumeration of possible Title positions.
 */
export enum ETitleAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

/**
 * Title component interface.
 */
export interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
	dimension?: `${ETitleDimension}`
	align?: `${ETitleAlign}`
}

/**
 * The Title component is a classic HTML "h1" tag with some styles added. Below you can see an example of its use.
 * @example
 * <Title align="center" dimension="small">Title</Title>
 */
export const Title: FC<ITitle> = ({
	children,
	dimension = ETitleDimension.medium,
	align,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.title,
		classes[dimension],
		align && classes[align],
	])

	return (
		<h1 className={styles} {...props}>
			{children}
		</h1>
	)
}

export default Title
