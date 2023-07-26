// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Subtitle.module.scss'

/**
 * Enumeration of possible Subtitle dimension.
 */
export enum ESubtitleDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/**
 * Enumeration of possible Subtitle positions.
 */
export enum ESubtitleAlign {
	left = 'left',
	center = 'center',
	right = 'right',
}

/**
 * Subtitle component interface.
 */
export interface ISubtitle extends HTMLAttributes<HTMLHeadingElement> {
	dimension?: `${ESubtitleDimension}`
	align?: `${ESubtitleAlign}`
}

/**
 * The Subtitle component is a classic HTML "h2" tag with some styles added. Below you can see an example of its use.
 * @example
 * <Subtitle align="center" dimension="small">Subtitle</Subtitle>
 */
export const Subtitle: FC<ISubtitle> = ({
	children,
	dimension = ESubtitleDimension.medium,
	align,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([
		classes.subtitle,
		classes[dimension],
		align && classes[align],
	])

	return (
		<h2 className={styles} {...props}>
			{children}
		</h2>
	)
}
