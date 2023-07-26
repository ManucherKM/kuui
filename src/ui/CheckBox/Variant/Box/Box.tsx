// Types
import type { FC, InputHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'

// Styles
import classes from './Box.module.scss'

/**
 * Enumeration of possible Box dimension.
 */
export enum EBoxDimension {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

/**
 * Box component interface.
 */
export interface IBox extends InputHTMLAttributes<HTMLInputElement> {
	dimension?: `${EBoxDimension}`
}

/**
 * The Box component is a customized version of the classic HTML input with attributes type="checkbox". Below is an example of its use.
 * @example
 * <Box dimension="medium"/>
 */
export const Box: FC<IBox> = ({
	dimension = EBoxDimension.small,
	...props
}) => {
	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.box, classes[dimension]])

	return (
		<label className={styles}>
			<input type="checkbox" {...props} />
			<span />
		</label>
	)
}
